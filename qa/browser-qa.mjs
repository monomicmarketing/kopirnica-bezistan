import fs from "node:fs/promises";

const endpoint = "http://localhost:9333";
const pages = await (await fetch(`${endpoint}/json`)).json();
const page = pages.find(x => x.type === "page");
if (!page) throw new Error("No Edge page available");
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
let id = 0;
const pending = new Map();
const events = [];
const errors = [];
socket.onmessage = event => {
  const message = JSON.parse(event.data);
  if (message.id) {
    const task = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) task.reject(new Error(message.error.message));
    else task.resolve(message.result);
  } else {
    events.push(message);
    if (message.method === "Runtime.exceptionThrown") errors.push(message.params.exceptionDetails.text);
    if (message.method === "Log.entryAdded" && message.params.entry.level === "error") errors.push(message.params.entry.text);
  }
};
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const key = ++id;
    pending.set(key, {resolve,reject});
    socket.send(JSON.stringify({id:key,method,params}));
  });
}
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function evalPage(expression) {
  const result = await send("Runtime.evaluate", {expression,returnByValue:true,awaitPromise:true});
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function viewport(width, height) {
  await send("Emulation.setDeviceMetricsOverride", {width,height,deviceScaleFactor:1,mobile:width<768});
  await wait(100);
}
async function navigate(path) {
  await send("Page.navigate", {url:`http://localhost:3000${path}`});
  for (let i=0;i<100;i++) {
    if (await evalPage(`document.readyState === "complete" && location.pathname === ${JSON.stringify(path)}`)) break;
    await wait(100);
  }
  await wait(500);
}
async function screenshot(name) {
  const {data} = await send("Page.captureScreenshot", {format:"png",captureBeyondViewport:false});
  await fs.writeFile(new URL(`./${name}.png`,import.meta.url), Buffer.from(data,"base64"));
}
async function screenshotSection(selector, name) {
  await evalPage(`window.scrollTo({top: document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect().top + window.scrollY - 24, behavior:'instant'})`);
  await wait(220);
  await screenshot(name);
}
async function measure() {
  return evalPage(`(() => {
    const rect = sel => { const e=document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); return {left:Math.round(r.left),right:Math.round(r.right),top:Math.round(r.top),bottom:Math.round(r.bottom)}; };
    return {width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,hero:rect('.hero h1'),printer:rect('.printer'),paper:rect('.paper'),menu:rect('.menu-toggle'),map:rect('.location-map-panel'),sticky:rect('.mobile-actions'),groupWidth:Math.round(document.querySelector('.ticker-group')?.getBoundingClientRect().width||0),tickerWidth:Math.round(document.querySelector('.ticker')?.getBoundingClientRect().width||0),robots:document.querySelector('meta[name="robots"]')?.content,lang:document.documentElement.lang,iframe:document.querySelector('iframe')?.src,phones:[...document.querySelectorAll('a[href^="tel:"]')].map(x=>x.getAttribute('href')),maps:[...document.querySelectorAll('a[href*="google.com/maps"]')].map(x=>x.href)};
  })()`);
}
await Promise.all([send("Page.enable"),send("Runtime.enable"),send("Log.enable")]);
const report = {widths:{},replay:[],menu:{},en:{},errors};
await viewport(375,812);
await navigate("/");
await screenshot("printer-start");
await wait(1800);
await screenshot("printer-middle");
await wait(2400);
await screenshot("printer-end");
report.initial = await measure();
for (let cycle=1;cycle<=3;cycle++) {
  await evalPage(`document.querySelector('.replay').click()`);
  report.replay.push({cycle,start:await evalPage(`getComputedStyle(document.querySelector('.paper')).transform`)});
  await wait(4700);
  report.replay.at(-1).end = await evalPage(`getComputedStyle(document.querySelector('.paper')).transform`);
}
await evalPage(`for(let i=0;i<6;i++) document.querySelector('.replay').click()`);
report.rapid = {start:await evalPage(`getComputedStyle(document.querySelector('.paper')).transform`)};
await wait(4700);
report.rapid.end = await evalPage(`getComputedStyle(document.querySelector('.paper')).transform`);
report.rapid.paperText = await evalPage(`document.querySelector('.paper-title').innerText`);

await evalPage(`document.querySelector('.menu-toggle').click()`);
report.menu.open = await evalPage(`({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),inert:document.querySelector('.mobile-menu').inert})`);
await send("Input.dispatchKeyEvent", {type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
await send("Input.dispatchKeyEvent", {type:"keyUp",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
await wait(150);
report.menu.escape = await evalPage(`({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),focus:document.activeElement===document.querySelector('.menu-toggle'),inert:document.querySelector('.mobile-menu').inert})`);
await evalPage(`document.querySelector('.menu-toggle').click()`);
await viewport(1024,800);
report.menu.desktop = await evalPage(`({expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),inert:document.querySelector('.mobile-menu').inert})`);
await viewport(375,812);
await evalPage(`document.querySelector('.menu-toggle').click()`);
await evalPage(`document.querySelector('.mobile-menu a[href="#usluge"]').click()`);
await wait(200);
report.menu.link = await evalPage(`({hash:location.hash,expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded')})`);
await evalPage(`document.querySelector('.menu-toggle').click()`);
await evalPage(`document.querySelector('.wordmark').click()`);
await wait(150);
report.menu.logo = await evalPage(`({hash:location.hash,expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded')})`);

for (const width of [280,320,360,375,390,430,600,768,1024,1440,1920]) {
  await viewport(width,width<500?680:900);
  await evalPage(`window.scrollTo({top:0,behavior:'instant'})`);
  await wait(170);
  report.widths[width] = await measure();
  if ([280,320,375,430,768,1440,1920].includes(width)) await screenshot(`bs-${width}`);
  if ([280,375,1440].includes(width)) {
    for (const [section,selector] of [['services','#usluge'],['prices','#cjenovnik'],['location','#lokacija'],['footer','footer']]) {
      await screenshotSection(selector,`bs-${width}-${section}`);
    }
  }
}
await viewport(375,640);
report.low = await measure();
await send("Emulation.setEmulatedMedia", {features:[{name:"prefers-reduced-motion",value:"reduce"}]});
await navigate("/");
report.reduced = await evalPage(`({paper:getComputedStyle(document.querySelector('.paper')).transform,ink:getComputedStyle(document.querySelector('.paper-content')).opacity,ticker:getComputedStyle(document.querySelector('.ticker-track')).animationName})`);
await screenshot("reduced-motion");
await send("Emulation.setEmulatedMedia", {features:[]});
await viewport(375,812);
await navigate("/en");
report.en.mobile = await measure();
report.en.hours = await evalPage(`[...document.querySelectorAll('.en-contact div')].map(x=>x.innerText)`);
report.en.replay = await evalPage(`document.querySelector('.replay').getAttribute('aria-label')`);
await evalPage(`document.querySelector('.replay').click()`);
await wait(4700);
report.en.replayEnd = await evalPage(`({paper:getComputedStyle(document.querySelector('.paper')).transform,ink:getComputedStyle(document.querySelector('.paper-content')).opacity})`);
await screenshot("en-375");
await send("Emulation.setEmulatedMedia", {features:[{name:"prefers-reduced-motion",value:"reduce"}]});
await navigate("/en");
report.en.reduced = await evalPage(`({paper:getComputedStyle(document.querySelector('.paper')).transform,ink:getComputedStyle(document.querySelector('.paper-content')).opacity})`);
await send("Emulation.setEmulatedMedia", {features:[]});
await viewport(1440,900);
report.en.desktop = await measure();
await screenshot("en-1440");
await screenshotSection('#visit','en-1440-location');
report.en.switch = await evalPage(`document.querySelector('.language-link').getAttribute('href')`);
await fs.writeFile(new URL("./results.json",import.meta.url),JSON.stringify(report,null,2));
socket.close();
console.log(JSON.stringify({widths:Object.fromEntries(Object.entries(report.widths).map(([w,v])=>[w,{scroll:v.scrollWidth,viewport:v.width,group:v.groupWidth,ticker:v.tickerWidth}])),menu:report.menu,replay:report.replay,rapid:report.rapid,reduced:report.reduced,en:{lang:report.en.mobile.lang,robots:report.en.mobile.robots,hours:report.en.hours},errors},null,2));
