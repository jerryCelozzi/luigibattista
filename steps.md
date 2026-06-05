# Progetto Luigi Battista — Traccia Lavori

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- @react-three/fiber + @react-three/drei (globo 3D)
- Deploy: Vercel

---

## Step completati

### [x] Step 1 — Struttura progetto
- Creata struttura Next.js App Router da zero
- Configurati: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.js`

### [x] Step 2 — UI / Componenti
- `app/layout.tsx` — Root layout con font Google (Inter + Playfair Display)
- `app/globals.css` — Tailwind + utility custom (`.glass`, `.text-gradient-gold`, `.text-gradient-teal`)
- `app/page.tsx` — Pagina principale (Server Component)
- `components/Navbar.tsx` — Fixed navbar glass-morphism, trasparente → blur allo scroll, menu mobile
- `components/HeroSection.tsx` — Hero fullscreen, testo animato con Framer Motion, dynamic import del globo 3D
- `components/three/GlobeScene.tsx` — Globo 3D con anelli orbitali (gold/teal/sky), pin dorati, Stars + Sparkles
- `components/ActivitiesSection.tsx` — 4 card attività con hover glow e scroll-triggered animations
- `components/StatsSection.tsx` — Contatori (15+, 150+, 5K+, 98%) + citazione
- `components/ContactSection.tsx` — Form prenotazione con stato submitted (solo frontend al momento)
- `components/Footer.tsx`

### [x] Step 3 — Fix deploy Vercel
- Rimosso `output: 'export'` da `next.config.js` (Vercel gestisce Next.js nativamente)
- Aggiunto `.gitignore` con `.next/`, `node_modules/`, `out/`
- Aggiunto `vercel.json` con `"framework": "nextjs"` per forzare il rilevamento corretto

### [x] Step 4 — Bug fix form prenotazioni + UX miglioramenti
- Aggiunto pulsante "← Nuova Richiesta" nel messaggio di successo (per chi rimane nella sezione)
- Aggiunto `IntersectionObserver` in `ContactSection.tsx`: se l'utente scrolla via e torna alla sezione tramite "Prenota Ora", il form si resetta automaticamente a pulito
- Form di prenotazione inline nel booking box della pagina dettaglio: click su "Prenota" espande il form direttamente nella pagina (senza saltare alla home), con esperienza pre-compilata e read-only, stato success con "Nuova Richiesta"

---

### [x] Step 5 — Pagine dettaglio escursioni
- Creato `lib/activities.ts` con dati completi delle 4 attività (itinerario, incluso/non incluso, gradienti, slug)
- Creata route dinamica `app/escursioni/[slug]/page.tsx` con `generateStaticParams` e `generateMetadata`
- Creato `components/ActivityDetail.tsx` con:
  - Hero fullscreen con effetto parallasse (Framer Motion `useScroll` + `useTransform`)
  - Quick stats bar (durata, difficoltà, gruppo, prezzo)
  - Timeline itinerario con animazioni scroll-triggered
  - Box incluso / non incluso
  - Booking box sticky con CTA
- `ActivitiesSection.tsx`: card ora sono link cliccabili verso `/escursioni/[slug]`
- `Navbar` spostato in `app/layout.tsx` per renderla disponibile su tutte le pagine

---

## Da fare

### [ ] Step 4 — Email form prenotazioni
- Integrare servizio email per il form contatti
- Opzioni valutate: Formspree / EmailJS / Resend
- **Da decidere con il cliente**

### [ ] Step 5 — Contenuti reali
- Sostituire testi placeholder con contenuti reali di Luigi Battista
- Aggiungere foto/immagini reali alle card attività
- Aggiornare contatti (telefono, email, zone operative)

### [ ] Step 6 — SEO & metadata
- Aggiornare `metadata` in `layout.tsx` con titolo e descrizione definitivi
- Aggiungere Open Graph tags per condivisione social
- Favicon personalizzata

### [ ] Step 7 — Dominio custom (opzionale)
- Collegare dominio personalizzato su Vercel

---

## Note tecniche
- Il form prenotazioni al momento mostra solo un messaggio di successo frontend, non invia dati reali
- Le immagini nelle card usano gradienti CSS (placeholder), da sostituire con foto reali
- Three.js caricato con `dynamic(() => import(...), { ssr: false })` per evitare errori SSR
