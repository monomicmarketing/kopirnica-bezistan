# Kopirnica Bezistan · nezvanični koncept

Mobile-first Next.js stranica za demonstraciju potencijalnom klijentu. Ovo nije službena stranica kopirnice. Demo ima `noindex, nofollow` metapodatke i `robots.txt` zabranu indeksiranja; ukloniti ih tek nakon vlasnikovog odobrenja.

## Pokretanje

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Izmjene sadržaja

`content.ts` je centralna konfiguracija za naziv, boje, telefon, adresu, radno vrijeme, usluge, cijene i buduće fotografije. `dataStatus` čuva porijeklo i status potvrde. Kada vlasnik dostavi službeni cjenovnik, unos u `business.prices` automatski zamjenjuje upitni prikaz na papiru. Engleska kratka verzija je u `app/en/page.tsx`.

Telefon, adresa i radno vrijeme potiču iz [javnog poslovnog imenika](https://www.sveposao.com/hr-BA/kopirnica-bezistan-064-44-67-072) i nisu potvrđeni od vlasnika. Opis usluga zasniva se na javno dostupnim iskustvima kupaca. Nisu objavljeni cijene, e-mail, logo, fotografije, recenzije ni tvrdnje o dodatnim uslugama. Tipografski znak i CSS printer su dizajnerski koncepti. Lokacijska kartica je adresni poster, a dugme otvara Google Maps pretragu.

Prije službenog objavljivanja potvrditi kontakt i satnicu, spisak usluga, metode slanja dokumenata, cjenovnik, vizuelni identitet i dozvolu za objavu. Tada ukloniti demo oznake, robots zabranu i `noindex` u `app/layout.tsx`, `app/en/page.tsx` i `app/robots.ts`.
