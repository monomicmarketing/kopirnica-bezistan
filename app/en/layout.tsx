import { business } from "@/content";
import "../globals.css";

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#eee9df" };

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body style={{ "--ink": business.colors.ink, "--paper": business.colors.paper, "--copper": business.colors.copper } as React.CSSProperties}>{children}</body></html>;
}
