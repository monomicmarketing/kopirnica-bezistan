import { business } from "@/content";
import "../globals.css";

export const metadata = {
  title: `${business.name} | Printanje dokumenata u Sarajevu · demo`,
  description: `Nezvanični demo koncept za Kopirnicu Bezistan. Dokumenti, PDF-ovi i putne karte u Gazi Husrev-begovoj 33, Sarajevo.`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: `${business.name} | Nezvanični demo`, description: `Koncept stranice za kopirnicu na adresi ${business.address}.`, locale: "bs_BA", type: "website" },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#eee9df" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bs"><body style={{"--ink":business.colors.ink,"--paper":business.colors.paper,"--copper":business.colors.copper} as React.CSSProperties}>{children}</body></html>;
}
