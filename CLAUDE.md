# CLAUDE.md — Orvka Corporate Website

This file provides guidance to Claude Code when working in this repository.

---

## What this repo is

The corporate website for **Orvka** — a FIFA World Cup prediction app. Users create leagues, pick match winners, and compete with friends on leaderboards.

- **Live URL:** https://corp.orvka.com
- **GitHub:** https://github.com/futfig/figtech-corp
- **GCP project:** `orvka-predict`

> **Note:** `orvka.com` (root) is reserved for the **orvka-web** product app (deployed on Firebase). The corporate site lives at the `corp.` subdomain.

---

## Key commands

```bash
npm run dev        # Local dev server at http://localhost:5173
npm run build      # Production build → dist/
```

### Deploy manually
```bash
npm run build
gsutil -m cp -r dist/* gs://orvka-web-corp/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://orvka-web-corp/index.html
```

Git push to `main` triggers automatic CI/CD deploy via GitHub Actions.

---

## Architecture

### Hosting
- **GCS bucket:** `gs://orvka-web-corp` (us-central1, public)
- **Custom domain:** `corp.orvka.com` via Cloudflare Worker named `orvka-com-proxy`
- The Worker proxies `corp.orvka.com` → `storage.googleapis.com/orvka-web-corp/`
- HTTPS is handled automatically by Cloudflare

### Redirect
- `figtech.app` and `www.figtech.app` redirect 301 → `https://corp.orvka.com` via the `figtech-app-proxy` Cloudflare Worker

### CI/CD
- GitHub Actions: `.github/workflows/deploy.yml`
- Auth: Workload Identity Federation (no secrets needed in repo) — OIDC provider `github-pool/github-provider` on orvka-predict
- Service account: `github-actions@orvka-predict.iam.gserviceaccount.com` (has `roles/storage.admin` on bucket)

---

## Domain & DNS

| Item | Value |
|------|-------|
| Domain | `orvka.com` |
| Registrar | Cloudflare |
| DNS | Managed by Cloudflare |

### Cloudflare Workers
- **`orvka-com-proxy`** — proxies `corp.orvka.com` → GCS bucket `orvka-web-corp`
- **`figtech-app-proxy`** — redirects `figtech.app` and `www.figtech.app` → `https://corp.orvka.com` (301)

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
| `github-actions@orvka-predict.iam.gserviceaccount.com` | CI/CD deployments (via WIF) |

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

Dark Stadium theme (shared with the Orvka product):
- Background: `#0B0C0F`
- Gold primary: `#F5A200`
- Teal accent: `#2DC4B2`
- See `design-system.md` in `futfig/orvka-specs` for full spec

---

## Related repos

| Repo | Purpose |
|------|---------|
| `futfig/orvka-specs` | Cross-platform specs + design system |
| `futfig/orvka-services` | Backend — Kotlin/Ktor, deployed on GCP Cloud Run |
| `futfig/orvka-web` | Web app — React/TypeScript |
| `futfig/orvka-ios` | iOS app — SwiftUI |
| `futfig/orvka-android` | Android app — Kotlin/Compose |
| `futfig/figtech-corp` | This repo — corporate website |
