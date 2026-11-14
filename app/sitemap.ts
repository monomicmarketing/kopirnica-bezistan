export default function sitemap() { return [{ url: process.env.NEXT_PUBLIC_SITE_URL || "https://kopirnica-bezistan.vercel.app", lastModified: new Date() }]; }

