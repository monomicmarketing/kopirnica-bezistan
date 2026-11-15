/** Unofficial demo. Public directory and customer-reported details are not owner-confirmed. */
export const business = {
  name: "Kopirnica Bezistan",
  shortName: "BEZISTAN",
  eyebrow: "KOPIRNICA · SARAJEVO",
  address: "Gazi Husrev-begova 33, 71000 Sarajevo",
  phoneDisplay: "+387 64 44 67 072",
  phoneHref: "+387644467072",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kopirnica+Bezistan%2C+Gazi+Husrev-begova+33%2C+Sarajevo",
  mapsEmbedUrl: "https://www.google.com/maps?q=Kopirnica%20Bezistan%2C%20Gazi%20Husrev-begova%2033%2C%2071000%20Sarajevo&output=embed",
  hours: [
    { days: "Ponedjeljak – petak", daysEn: "Monday – Friday", time: "08:00 – 19:00", timeEn: "08:00 – 19:00" },
    { days: "Subota", daysEn: "Saturday", time: "10:00 – 15:00", timeEn: "10:00 – 15:00" },
    { days: "Nedjelja", daysEn: "Sunday", time: "Zatvoreno", timeEn: "Closed" },
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
