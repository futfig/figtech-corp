# figtech-corp

Corporate website for [FigTech](https://figtech.app) — the company behind **Favo**, a tournament soccer intelligence platform.

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
gsutil -m cp -r dist/* gs://figtech-corp-web/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://figtech-corp-web/index.html
```

## Contact

[edison.figueroa@figtech.app](mailto:edison.figueroa@figtech.app)
