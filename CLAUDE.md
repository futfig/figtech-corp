# CLAUDE.md — Orvka Corporate Website

This file provides guidance to Claude Code when working in this repository.

---

## What this repo is

The corporate website for **Orvka** — a FIFA World Cup prediction app. Users create leagues, pick match winners, and compete with friends on leaderboards.

- **Live URL:** https://orvka.com
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
gsutil -m cp -r dist/* gs://orvka-corp-web/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://orvka-corp-web/index.html
```

Git push to `main` triggers automatic CI/CD deploy via GitHub Actions.

---

## Architecture

### Hosting
- **GCS bucket:** `gs://orvka-corp-web` (us-central1, public)
- **Custom domain:** `orvka.com` via Cloudflare Worker named `orvka-com-proxy`
- The Worker proxies `orvka.com` → `storage.googleapis.com/orvka-corp-web/`
- HTTPS is handled automatically by Cloudflare

### Redirect
- `figtech.app` and `www.figtech.app` redirect 301 → `https://orvka.com` via the updated `figtech-app-proxy` Cloudflare Worker

### CI/CD
- GitHub Actions: `.github/workflows/deploy.yml`
- Secret required: `GCP_SERVICE_ACCOUNT_KEY` (set in futfig/figtech-corp repo secrets)
- Service account: `github-actions@fut-gcp.iam.gserviceaccount.com` (has `roles/storage.admin`)

---

## Domain & DNS

| Item | Value |
|------|-------|
| Domain | `orvka.com` |
| Registrar | Cloudflare |
| DNS | Managed by Cloudflare |

### Cloudflare Workers
- **`orvka-com-proxy`** — proxies `orvka.com` and `www.orvka.com` → GCS bucket `orvka-corp-web`
- **`figtech-app-proxy`** — redirects `figtech.app` and `www.figtech.app` → `https://orvka.com` (301)

---

## Contact form

- **Provider:** Formsubmit.co
- **Destination:** `hello@orvka.com`
- **Activation:** First submission sends a confirmation email to `hello@orvka.com` — must be clicked to activate delivery

---

## GCP accounts

| Account | Role |
|---------|------|
| `gcp-admin@orvka.com` | Project owner |
| `github-actions@fut-gcp.iam.gserviceaccount.com` | CI/CD deployments |

---

## Positioning & copy rules

- Product/company name: **Orvka**
- No mentions of FigTech or Favo
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
| `futfig/futfan-web` | Web app — React/TypeScript |
| `futfig/futfan-android` | Android app — Kotlin/Compose |
| `futfig/figtech-corp` | This repo — corporate website |
