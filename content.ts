/** Unofficial demo. Public directory and customer-reported details are not owner-confirmed. */
export const business = {
  name: "Kopirnica Bezistan",
  shortName: "BEZISTAN",
  eyebrow: "KOPIRNICA · SARAJEVO",
  address: "Gazi Husrev-begova 33, 71000 Sarajevo",
  phoneDisplay: "+387 64 44 67 072",
  phoneHref: "+387644467072",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kopirnica+Bezistan%2C+Gazi+Husrev-begova+33%2C+Sarajevo",
  hours: [
    { days: "Ponedjeljak – petak", time: "08:00 – 19:00" },
    { days: "Subota", time: "10:00 – 15:00" },
    { days: "Nedjelja", time: "Zatvoreno" },
  ],
  dataStatus: {
    address: "public-directory-unconfirmed",
    phone: "public-directory-unconfirmed",
    hours: "public-directory-unconfirmed",
    services: "customer-reported-unconfirmed",
    prices: "unavailable",
  },
  sourceUrl: "https://www.sveposao.com/hr-BA/kopirnica-bezistan-064-44-67-072",
  email: null as string | null,
  logoUrl: null as string | null,
  photos: [] as string[],
  services: [
    { number: "01", title: "Printanje dokumenata", description: "PDF dokumenti i svakodnevni papiri koje treba prenijeti s ekrana na papir.", detail: "PDF · DOKUMENTI" },
    { number: "02", title: "Kopiranje i crno-bijeli ispis", description: "Kopije i crno-bijeli ispis za praktične dnevne potrebe.", detail: "KOPIJE · C/B ISPIS" },
    { number: "03", title: "Putne karte i plastifikacija", description: "Ispis karata za putovanje i plastifikacija prema iskustvima kupaca.", detail: "KARTE · PLASTIFIKACIJA" },
  ],
  prices: [] as { name: string; amount: string; unit?: string }[],
  colors: { ink: "#202321", paper: "#eee9df", copper: "#ae7759" },
};
