# CLAUDE.md — FigTech Corporate Website

This file provides guidance to Claude Code when working in this repository.

---

## What this repo is

The corporate website for **FigTech**, the company behind **Favo** — an international soccer intelligence and engagement platform powered by deep data analytics and machine learning.

- **Live URL:** https://figtech.app
- **GitHub:** https://github.com/futfig/figtech-corp
- **GCP project:** `fut-gcp`

---

## Key commands

```bash
npm run dev        # Local dev server at http://localhost:5173
npm run build      # Production build → dist/
```

### Deploy manually
```bash
npm run build
gsutil -m cp -r dist/* gs://figtech-corp-web/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://figtech-corp-web/index.html
```

Git push to `main` triggers automatic CI/CD deploy via GitHub Actions.

---

## Architecture

### Hosting
- **GCS bucket:** `gs://figtech-corp-web` (us-central1, public)
- **Custom domain:** `figtech.app` via Cloudflare Worker named `figtech-app-proxy`
- The Worker proxies `figtech.app` → `storage.googleapis.com/figtech-corp-web/`
- HTTPS is handled automatically by Cloudflare

### Why a Worker instead of GCS domain-named bucket
GCS domain-named bucket creation (e.g. `gs://www.figtech.app`) requires Google Search Console domain verification under the same Google account as the GCP project owner. This verification did not propagate correctly. The Cloudflare Worker approach bypasses this entirely and is more robust.

### CI/CD
- GitHub Actions: `.github/workflows/deploy.yml`
- Secret required: `GCP_SERVICE_ACCOUNT_KEY` (set in futfig/figtech-corp repo secrets)
- Service account: `github-actions@fut-gcp.iam.gserviceaccount.com` (has `roles/storage.admin`)

---

## Domain & DNS

| Item | Value |
|------|-------|
| Domain | `figtech.app` |
| Registrar | Cloudflare |
| Cloudflare account | `edison.figueroa@gmail.com` |
| DNS | Managed by Cloudflare |

### DNS records
- `TXT @` → `google-site-verification=ay0E7cbntwCqWl-PdN0uMR9wqzn_FQSD5DWOGk9E1PU` (Search Console verification)

### Cloudflare Worker
- **Name:** `figtech-app-proxy`
- **Custom domains:** `figtech.app`, `www.figtech.app`
- Edit at: Cloudflare dashboard → Workers & Pages → figtech-app-proxy

To update the Worker, edit it directly in the Cloudflare dashboard (there is no CLI deploy for the Worker currently).

---

## Contact form

- **Provider:** Formsubmit.co
- **Destination:** `figtech10@gmail.com`
- **Activation:** First submission sends a confirmation email to `figtech10@gmail.com` — must be clicked to activate delivery

---

## GCP accounts

| Account | Role |
|---------|------|
| `edison.figueroa@gmail.com` | Project owner (use for GCS bucket operations, Search Console) |
| `github-actions@fut-gcp.iam.gserviceaccount.com` | CI/CD deployments |

Always use `gcloud config set account edison.figueroa@gmail.com` for operations that require domain ownership (e.g. creating domain-named GCS buckets).

---

## Positioning & copy rules

- Company name on the page: **FigTech** (not "FigTech LLC")
- Product name: **Favo**
- No mentions of FIFA, World Cup, or specific tournament years
- No mentions of Minnesota or specific location
- No mailto: links — all contact routes to the form at `#contact`
- Tone: credible early-stage startup, product-focused, not overhyped

---

## Design system

Dark Stadium theme (shared with futfan product):
- Background: `#0B0C0F`
- Gold primary: `#F5A200`
- Teal accent: `#2DC4B2`
- See `futfan/design-system.md` for full spec

---

## Related repos

| Repo | Purpose |
|------|---------|
| `futfig/futfan-services` | Backend — Kotlin/Ktor, deployed on GCP App Engine |
| `futfig/futfan-web` | Web app (Favo product) — React/TypeScript |
| `futfig/futfan-android` | Android app (Favo product) — Kotlin/Compose |
| `futfig/figtech-corp` | This repo — corporate website |
