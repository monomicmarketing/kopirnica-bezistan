import { business } from "@/content";
import "./globals.css";

export const metadata = {
  title: `${business.name} | Sarajevo`,
  description: `Kopirnica Bezistan u Sarajevu. Adresa: ${business.address}. Kontakt: ${business.phoneDisplay}.`,
  robots: { index: true, follow: true },
  openGraph: { title: `${business.name} | Sarajevo`, description: `Pronađite nas na adresi ${business.address}.`, locale: "bs_BA", type: "website" },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#eee9df" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "LocalBusiness", name: business.name, address: { "@type": "PostalAddress", streetAddress: "Gazi Husrev-begova 33", addressLocality: "Sarajevo", postalCode: "71000", addressCountry: "BA" }, telephone: business.phoneHref };
  return <html lang="bs"><body style={{"--ink":business.colors.ink,"--paper":business.colors.paper,"--copper":business.colors.copper} as React.CSSProperties}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData).replace(/</g,"\\u003c")}}/>{children}</body></html>;
}
