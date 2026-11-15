"use client";
import { useEffect, useRef, useState } from "react";
import { business } from "@/content";
import { Phone, ArrowUpRight } from "@/components/Icons";

const links = [{href:"#usluge",label:"Usluge"},{href:"#cjenovnik",label:"Cijene i upiti"},{href:"#lokacija",label:"Lokacija"}];
export function Header() {
  const [open,setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const reset = () => {
      if (!desktop.matches) return;
      if (menuRef.current?.contains(document.activeElement)) {
        document.querySelector<HTMLElement>(".desktop-nav a")?.focus();
      }
      setOpen(false);
    };
    desktop.addEventListener("change", reset);
    return () => desktop.removeEventListener("change", reset);
  }, []);
  return <>
    <div className="demo-bar"><span>NEZVANIČNI DEMO KONCEPT</span><span>Stranica nije povezana s vlasnikom kopirnice.</span></div>
    <header className="site-header shell">
      <a className="wordmark" href="#pocetna" aria-label="Kopirnica Bezistan, početna" onClick={()=>setOpen(false)}><span className="wordmark-name">KOPIRNICA<br/><b>BEZISTAN</b></span></a>
      <nav className="desktop-nav" aria-label="Glavna navigacija">{links.map(x=><a key={x.href} href={x.href}>{x.label}</a>)}</nav>
      <div className="header-tools"><a className="language-link" href="/en" lang="en" aria-label="English version">EN</a><a className="header-call" href={`tel:${business.phoneHref}`} aria-label={`Pozovi Kopirnicu Bezistan: ${business.phoneDisplay}`}><Phone size={17}/><span>Pozovi</span></a><button ref={toggleRef} className={`menu-toggle${open?" is-open":""}`} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open?"Zatvori meni":"Otvori meni"} onClick={()=>setOpen(x=>!x)}><span/><span/></button></div>
    </header>
    <nav ref={menuRef} className={`mobile-menu${open?" is-open":""}`} id="mobile-menu" aria-label="Mobilna navigacija" inert={!open}>{links.map((x,i)=><a key={x.href} href={x.href} onClick={()=>setOpen(false)}><span>0{i+1}</span>{x.label}<ArrowUpRight size={20}/></a>)}<a href="/en" lang="en" onClick={()=>setOpen(false)}><span>04</span>English<ArrowUpRight size={20}/></a></nav>
  </>;
}
