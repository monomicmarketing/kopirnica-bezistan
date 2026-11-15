import { ArrowDownRight, ArrowUpRight, MapPin, Phone, Clock3, FileText, Layers3, ScanLine } from "@/components/Icons";
import { business } from "@/content";
import { Printer } from "@/components/Printer";
import { Header } from "@/components/Header";
import { LocationMap } from "@/components/LocationMap";

const tickerItems = Array.from({length:12},(_,i)=><span className="ticker-item" key={i}>BEZISTAN <span aria-hidden="true">✳</span> NA PAPIRU OSTAJE <span aria-hidden="true">✳</span></span>);

export default function Home() {
  return <main>
    <Header />
    <section className="hero" id="pocetna" aria-labelledby="hero-title">
      <div className="hero-inner shell">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> {business.eyebrow}</p><h1 id="hero-title">Svaka ideja<br/>zaslužuje <em>otisak.</em></h1><p className="hero-description">Printanje dokumenata, PDF-ova i putnih karata u centru Sarajeva. Gazi Husrev-begova 33.</p><div className="hero-actions"><a className="button-primary" href={`tel:${business.phoneHref}`}>Pozovi kopirnicu <Phone size={18}/></a><a className="text-link" href="#lokacija">Kako do nas <ArrowDownRight size={17}/></a></div></div>
        <div className="hero-visual"><div className="visual-index">01 / 04 <span>OD IDEJE DO OTISKA</span></div><Printer /></div>
      </div>
      <div className="hero-bottom shell"><span>GAZI HUSREV-BEGOVA 33 · SARAJEVO</span><a href="#usluge" className="hero-bottom-right">POGLEDAJ USLUGE <ArrowDownRight size={17}/></a></div>
    </section>

    <div className="ticker" aria-hidden="true"><div className="ticker-track"><div className="ticker-group">{tickerItems}</div><div className="ticker-group">{tickerItems}</div></div></div>

    <section className="section services shell" id="usluge"><div className="section-head"><p className="eyebrow dark"><span className="eyebrow-line"/> 01 / USLUGE</p><h2>Od PDF-a do<br/><em>papira u ruci.</em></h2><p>Dokumenti za posao, kopije za svaki dan ili karta za put. Za format i način predaje materijala najbolje je nazvati prije dolaska.</p></div><div className="service-grid">{business.services.map(service=><article className="service-feature" key={service.number}><div className="service-number">{service.number} / {service.detail}</div><div className="paper-icon"><FileText strokeWidth={1}/><span className="paper-icon-line"/></div><div className="service-content"><h3>{service.title}</h3><p>{service.description}</p></div></article>)}<div className="service-aside"><div className="aside-top"><Layers3 size={30} strokeWidth={1.3}/><span>IMAŠ KONKRETAN DOKUMENT?</span></div><p>Pitaj za format, količinu i mogućnosti ispisa.</p><a href={`tel:${business.phoneHref}`}>Nazovi {business.phoneDisplay} <ArrowUpRight size={18}/></a></div></div><p className="service-source">Prikazane usluge zasnivaju se na javno dostupnim iskustvima kupaca i čekaju potvrdu kopirnice.</p></section>

    <section className="price-section" id="cjenovnik"><div className="shell price-layout"><div className="price-intro"><p className="eyebrow"><span className="eyebrow-line"/> 02 / CIJENE I UPITI</p><h2>Cijena za<br/><em>tvoj ispis.</em></h2><p>Cijena može zavisiti od formata, broja stranica, količine i dorade. Za tačan iznos najbolje je direktno nazvati.</p><a className="light-link" href={`tel:${business.phoneHref}`}>Pozovi i provjeri cijenu <ArrowUpRight size={18}/></a></div><div className="price-sheet"><div className="sheet-top"><span>BEZISTAN / CIJENE I UPITI</span><span>01 — 01</span></div><div className="sheet-title">Prije poziva pripremi <span>↗</span></div>{business.prices.length ? business.prices.map(item=><div className="sheet-row" key={item.name}><span>{item.name}</span><strong>{item.amount}{item.unit?` / ${item.unit}`:""}</strong></div>) : <><div className="sheet-row"><span>01</span><strong>Format dokumenta</strong></div><div className="sheet-row"><span>02</span><strong>Broj stranica i primjeraka</strong></div><div className="sheet-row"><span>03</span><strong>Željenu doradu, ako je potrebna</strong></div></>}<a className="sheet-cta" href={`tel:${business.phoneHref}`}>Pozovi i provjeri cijenu <Phone size={18}/></a><div className="sheet-foot">Službeni cjenovnik nije javno dostupan.</div></div></div></section>

    <section className="section process shell" id="kako-do-ispisa"><div className="process-head"><p className="eyebrow dark"><span className="eyebrow-line"/> 03 / KAKO DO ISPISA</p><h2>Tri koraka do<br/><em>gotovog papira.</em></h2></div><div className="steps"><div><span>01</span><ScanLine size={28} strokeWidth={1.25}/><h3>Pripremi dokument</h3><p>Provjeri PDF, broj stranica i željeni broj primjeraka.</p></div><div><span>02</span><Phone size={28} strokeWidth={1.25}/><h3>Provjeri detalje</h3><p>Nazovi za cijenu, format i način dostave datoteke.</p></div><div><span>03</span><MapPin size={28} strokeWidth={1.25}/><h3>Dođi do Bezistana</h3><p>Gazi Husrev-begova 33, u centru Sarajeva.</p></div></div></section>

    <section className="about-section" id="o-nama"><div className="shell about-layout"><div className="about-art">{business.photos[0] ? <img className="about-photo" src={business.photos[0]} alt="Kopirnica Bezistan"/> : <div className="about-art-inner"><span>33</span><div>GAZI HUSREV-BEGOVA<br/>SARAJEVO</div></div>}</div><div className="about-copy"><p className="eyebrow dark"><span className="eyebrow-line"/> 04 / U CENTRU SARAJEVA</p><h2>U gradu si.<br/><em>Treba ti print.</em></h2><p>Dokument, rezervacija ili putna karta često zatrebaju dok si već u centru. Kopirnica Bezistan nalazi se na adresi Gazi Husrev-begova 33. Pozovi za detalje, pa otvori navigaciju do lokacije.</p><a href="#lokacija" className="under-link">Adresa i radno vrijeme <ArrowUpRight size={18}/></a></div></div></section>

    <section className="location-section shell" id="lokacija"><div className="location-heading"><p className="eyebrow dark"><span className="eyebrow-line"/> 05 / LOKACIJA I KONTAKT</p><h2>Pronađi nas<br/>u <em>Bezistanu.</em></h2></div><div className="location-grid"><LocationMap/><div className="contact-panel"><div className="contact-row"><MapPin size={20}/><div><span>ADRESA</span><strong>{business.address}</strong></div></div><div className="contact-row"><Phone size={20}/><div><span>TELEFON</span><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></div></div><div className="contact-row hours-row"><Clock3 size={20}/><div><span>RADNO VRIJEME</span><dl>{business.hours.map(row=><div key={row.days}><dt>{row.days}</dt><dd>{row.time}</dd></div>)}</dl><small>Prema javnom imeniku; provjeri prije dolaska.</small></div></div><a className="directions" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Pokreni navigaciju <ArrowUpRight size={20}/></a></div></div></section>

    <footer className="footer"><div className="shell"><div className="footer-main"><div className="footer-brand">KOPIRNICA<br/><strong>BEZISTAN<span>.</span></strong></div><a href="#pocetna" aria-label="Nazad na vrh">NAZAD NA VRH ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} KOPIRNICA BEZISTAN</span><span>NEZVANIČNI DEMO KONCEPT · NIJE SLUŽBENA STRANICA</span></div></div></footer>
    <div className="mobile-actions" aria-label="Brze radnje"><a href={`tel:${business.phoneHref}`}><Phone size={19}/> Pozovi</a><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={19}/> Navigacija</a></div>
  </main>;
}



