import { business } from "@/content";
import { Printer } from "@/components/Printer";
import { LocationMap } from "@/components/LocationMap";
import { Phone, MapPin, ArrowUpRight } from "@/components/Icons";

export const metadata = {
  title: "Kopirnica Bezistan | Print documents in Sarajevo · demo",
  description: "Unofficial demo concept. Copying and PDF printing near Sarajevo's old town.",
  robots: { index: false, follow: false },
};

export default function EnglishPage() {
  return <main lang="en" className="english-page">
    <div className="demo-bar"><span>UNOFFICIAL DEMO CONCEPT</span><span>Not affiliated with the shop owner.</span></div>
    <header className="site-header shell"><a className="wordmark" href="/" aria-label="Kopirnica Bezistan home"><span className="wordmark-name">KOPIRNICA<br/><b>BEZISTAN</b></span></a><div className="header-tools"><a className="language-link" href="/" lang="bs">BS</a><a className="header-call" href={`tel:${business.phoneHref}`}><Phone size={17}/> Call</a></div></header>
    <section className="hero"><div className="hero-inner shell"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> COPY SHOP · SARAJEVO</p><h1>Need a print<br/>in <em>Sarajevo?</em></h1><p className="hero-description">Print a PDF, a document or a travel ticket in the city centre. Gazi Husrev-begova 33.</p><div className="hero-actions"><a className="button-primary" href={`tel:${business.phoneHref}`}>Call the shop <Phone size={18}/></a><a className="text-link" href="#visit">Find us <ArrowUpRight size={18}/></a></div></div><div className="hero-visual"><Printer english/></div></div><div className="hero-bottom shell"><span>GAZI HUSREV-BEGOVA 33 · SARAJEVO</span></div></section>
    <section className="section shell en-services"><p className="eyebrow dark"><span className="eyebrow-line"/> SERVICES</p><h2>From screen<br/>to <em>paper.</em></h2><div className="en-service-list"><div><span>01</span><h3>PDF &amp; document printing</h3></div><div><span>02</span><h3>Copies &amp; black-and-white print</h3></div><div><span>03</span><h3>Travel tickets &amp; lamination</h3></div></div><p className="service-source">Services are based on publicly available customer experiences and await owner confirmation. Call to check availability and pricing.</p></section>
    <section className="location-section shell" id="visit"><p className="eyebrow dark"><span className="eyebrow-line"/> VISIT &amp; CONTACT</p><h2>Find us in<br/><em>the city centre.</em></h2><div className="en-location-grid"><LocationMap english/><div className="en-contact"><div><MapPin size={22}/><strong>{business.address}</strong></div><div><Phone size={22}/><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></div>{business.hours.map(row=><div key={row.days}><span>{row.daysEn}</span><strong>{row.timeEn}</strong></div>)}</div></div><p className="service-source">Hours are from a public directory. Please call before visiting.</p><a className="button-primary en-map-button" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Open Google Maps <ArrowUpRight size={19}/></a></section>
    <footer className="footer"><div className="shell footer-bottom"><span>© {new Date().getFullYear()} KOPIRNICA BEZISTAN</span><span>UNOFFICIAL DEMO · NOT THE OFFICIAL WEBSITE</span></div></footer>
    <div className="mobile-actions"><a href={`tel:${business.phoneHref}`}><Phone size={19}/> Call</a><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={19}/> Directions</a></div>
  </main>;
}
