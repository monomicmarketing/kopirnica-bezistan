# Kopirnica Bezistan — nezvanični koncept

Postojeća mobile-first Next.js prezentacija za demonstraciju potencijalnom klijentu. Ovo nije službena stranica kopirnice. Obje jezičke verzije imaju `noindex, nofollow`; `robots.txt` zabranjuje indeksiranje.

## Pokretanje i provjera

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Sadržaj i poslovni podaci

`content.ts` je zajednička konfiguracija za naziv, boje, telefon, adresu, radno vrijeme, usluge, buduće cijene i fotografije. `dataStatus` čuva porijeklo i status potvrde podataka. Obje jezičke stranice čitaju satnicu iz iste konfiguracije. Kada vlasnik dostavi službeni cjenovnik, unos u `business.prices` može zamijeniti upitni prikaz. Bosanska stranica je u `app/(bs)/page.tsx`, a engleska u `app/en/page.tsx`.

Telefon, adresa i radno vrijeme potiču iz [javnog poslovnog imenika](https://www.sveposao.com/hr-BA/kopirnica-bezistan-064-44-67-072) i vlasnik ih nije potvrdio. Opisi usluga, uključujući putne karte i plastifikaciju, potiču iz iskustava kupaca i dostupnost treba provjeriti pozivom. Cijene, e-mail, fotografije i recenzije nisu objavljeni. Tipografski znak, favicon i CSS printer su dizajnerski koncepti, a ne službeni logo.

Mapa koristi Google Maps pretragu naziva i adrese, bez izmišljenih koordinata. Tačan ulaz nije potvrđen. Ako embed ne može učitati Google Maps, dugme ispod mape i navigacijski CTA otvaraju Maps pretragu.

Prije službenog predstavljanja kao web kopirnice potvrditi telefon, adresu i tačan ulaz, radno vrijeme, svaku uslugu, način slanja dokumenata, cijene, vizuelni identitet i dozvolu za objavu. Tek nakon odobrenja ukloniti demo oznake i zaštitu u `app/(bs)/layout.tsx`, `app/en/page.tsx` i `app/robots.ts`.

## Browser QA

`node qa/browser-qa.mjs` koristi lokalni Edge DevTools na portu 9333 i dev server na portu 3000. Snimci animacije i izvještaj o širinama, navigaciji, ponavljanju ispisa i EN verziji nalaze se u `qa/`. Vanjski Google Maps embed zahtijeva mrežni pristup browsera.
