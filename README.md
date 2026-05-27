Fullstack (React + Node) scaffold for Anjanisut Enterprises

Client (Vite + React) and Server (Express) are provided in this folder.

Quick start (two terminals):

1) Client (development)
```
cd website/fullstack/client
npm install
npm run dev
```

2) Server (development)
```
cd website/fullstack/server
npm install
node index.js
```

When ready for production:
 - build client: `npm run build` in `client`
 - start server: `node index.js` (server serves `client/dist` when present)

Contact endpoint:
- POST `/api/contact` accepts JSON {name,email,company?,message} and logs enquiries to `website/fullstack/server/contacts.csv`.

Media optimization:
- Place high-resolution originals under `website/assets/images/originals` and `website/assets/videos/originals`.
- From `website/fullstack/server` run `npm install` then:

```
node scripts/optimize-media.js
```

This script uses `sharp` for image conversion and `ffmpeg` for video transcoding. Ensure `ffmpeg` is installed and available on your PATH.
