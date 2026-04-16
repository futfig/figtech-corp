# orvka-corp

Corporate website for [Orvka](https://corp.orvka.com) — a FIFA World Cup prediction app.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- Hosted on Google Cloud Storage, served via Cloudflare Worker

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
```

## Deploy

Push to `main` triggers automatic CI/CD via GitHub Actions.

```bash
# Manual deploy
npm run build
gsutil -m cp -r dist/* gs://orvka-web-corp/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://orvka-web-corp/index.html
```

## Contact

[hello@orvka.com](mailto:hello@orvka.com)
