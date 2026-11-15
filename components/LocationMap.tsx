import { ArrowUpRight } from "@/components/Icons";
import { business } from "@/content";

export function LocationMap({ english = false }: { english?: boolean }) {
  return <div className="location-map-panel">
    <div className="map-heading"><span>{english ? "SARAJEVO / OLD TOWN" : "SARAJEVO / STARI GRAD"}</span><strong aria-hidden="true">33<span>.</span></strong></div>
    <iframe
      title={english ? "Google Maps search for Kopirnica Bezistan, Gazi Husrev-begova 33" : "Google Maps pretraga Kopirnice Bezistan, Gazi Husrev-begova 33"}
      src={business.mapsEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
    <div className="map-caption">
      <p>{english ? "The exact entrance has not been confirmed with the owner. Check the map or call before visiting." : "Tačan ulaz nije potvrđen s vlasnikom. Provjeri mapu ili nazovi prije dolaska."}</p>
      <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{english ? "Open in Google Maps" : "Otvori u Google Maps"}<ArrowUpRight size={18}/></a>
    </div>
  </div>;
}
