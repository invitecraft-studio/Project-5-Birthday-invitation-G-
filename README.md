# Daanvi's Princess Garden Birthday Invitation 🎀

A Vite project (HTML + CSS + JavaScript) with:
- Tap-the-bow opening
- Tilting invite card
- Countdown
- Tap-to-open family cards
- Wish lantern sky
- WhatsApp RSVP

## Run it

```bash
npm install
npm run dev                # local preview
npm run build              # production build in dist/ (deploy to Vercel / Netlify)
npm run build:standalone   # one double-clickable file: dist-standalone/index.html
```

## Edit the details

- Open `src/data/party.js` to change the name, age, date, time, venue, Andhra Pradesh address, parents, programme and WhatsApp number (e.g. `919876543210`, country code, no `+`).
- Replace pictures in `src/assets/`, keeping the same file names.
- Personal links: `https://your-site/?guest=Fatima`

## Deploy on Vercel

Import the repo, then set:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
