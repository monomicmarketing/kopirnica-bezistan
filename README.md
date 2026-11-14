# Kopirnica Bezistan

Mobile-first Next.js site concept for Kopirnica Bezistan, Sarajevo. The CSS-constructed printer and paper use transform/opacity animation, with a static reduced-motion state and replay control. There are no image or animation downloads.

## Run

```bash
npm install
npm run dev
npm run build
```

## Content to confirm

The central `content.ts` stores name, location, phone, colors, image paths and future service/price entries. The address and phone come from a public business listing and should be confirmed by the owner. The site intentionally labels services, prices and opening hours as pending. No real logo, photos, reviews or price claims have been inserted. The typography and printer are visual concepts, not a claim to be the official brand or equipment.

When information arrives, replace the placeholders in `app/page.tsx` with mapped `business.services` and `business.prices`, and provide approved photography/logo files in `public/`. Confirm delivery methods before describing document submission online. The map is a stylized illustration; the navigation link opens a Google Maps search for the address.
