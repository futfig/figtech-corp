# FigTech Corporate Website

Corporate page for **FigTech** — the company behind **Favo**, an international soccer intelligence and engagement platform powered by deep data analytics and machine learning.

Live at: **https://figtech.app**

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS (Dark Stadium design language) |
| Hosting | Google Cloud Storage (`figtech-corp-web` bucket) |
| CDN / HTTPS | Cloudflare Worker (`figtech-app-proxy`) |
| CI/CD | GitHub Actions → GCS on push to `main` |

---

## Repository

**GitHub:** https://github.com/futfig/figtech-corp
**Org:** futfig
**Branch:** `main` (auto-deploys on push)

---

## Project Structure

```
figtech-corp/
├── src/
│   ├── App.tsx                  # Root — assembles all sections
│   ├── index.css                # Tailwind + Dark Stadium utilities
│   └── components/
│       ├── Nav.tsx              # Fixed top nav
│       ├── Hero.tsx             # Hero section
│       ├── Product.tsx          # Platform feature cards
│       ├── Opportunity.tsx      # Why Now section
│       ├── Company.tsx          # FigTech + founder card
│       ├── Contact.tsx          # Contact form (Formsubmit.co)
│       ├── Footer.tsx           # Footer
│       └── Technology.tsx       # (unused — removed from page, kept for reference)
├── index.html                   # Entry point + meta tags
├── public/
│   └── favicon.svg
├── .github/workflows/deploy.yml # CI/CD pipeline
├── firebase.json                # Firebase Hosting config (not currently active)
├── .firebaserc                  # Firebase project: fut-gcp
└── .gcloudignore                # Prevents source upload to GCS
```

---

## Sections (page order)

1. **Nav** — FigTech logo + Product / Company / Contact links + Request Early Access CTA
2. **Hero** — Headline, subhead, 3 stat pills (3.5B fans / 500+ competitions / ML flywheel)
3. **Product** — 6 feature cards: Team & Player Intelligence, Outcome Prediction, Competition Tracking, Scenario Analysis, Community & Prediction Leagues, Global Audience
4. **Opportunity** — Why Now: underserved deep fan, global scale, ML network effect
5. **Company** — FigTech description + Edison Figueroa founder card
6. **Contact** — Form (Formsubmit.co → figtech10@gmail.com) + early access messaging
7. **Footer** — Copyright + Privacy Policy link + Contact link

---

## Deployment

### Manual deploy
```bash
npm run build
gsutil -m cp -r dist/* gs://figtech-corp-web/
gsutil setmeta -h "Cache-Control:no-cache,no-store" gs://figtech-corp-web/index.html
```

### Automatic (CI/CD)
Every push to `main` triggers GitHub Actions:
1. `npm ci` + `npm run build`
2. Upload `dist/` to `gs://figtech-corp-web/` via `google-github-actions/upload-cloud-storage`
3. Set cache headers

**Required GitHub secret:** `GCP_SERVICE_ACCOUNT_KEY` — JSON key for `github-actions@fut-gcp.iam.gserviceaccount.com`

---

## GCP Setup

| Resource | Value |
|----------|-------|
| Project | `fut-gcp` |
| Bucket | `gs://figtech-corp-web` |
| Location | `us-central1` |
| Access | Public (`allUsers:objectViewer`) |
| Static website config | `index.html` for main and 404 |
| Service account | `github-actions@fut-gcp.iam.gserviceaccount.com` |
| SA role | `roles/storage.admin` |

---

## DNS & Domain

| Item | Value |
|------|-------|
| Domain | `figtech.app` |
| Registrar | Cloudflare |
| Nameservers | Cloudflare (auto-assigned at registration) |
| TLD | `.app` (Google-backed, HTTPS required) |
| Cloudflare account | `edison.figueroa@gmail.com` |

### DNS Records

| Type | Name | Content | Purpose |
|------|------|---------|---------|
| TXT | `@` | `google-site-verification=ay0E7cbntwCqWl-PdN0uMR9wqzn_FQSD5DWOGk9E1PU` | Google Search Console domain verification |

### Cloudflare Worker

**Name:** `figtech-app-proxy`
**Purpose:** Proxies `https://figtech.app` → `https://storage.googleapis.com/figtech-corp-web/`
**Custom domains:** `figtech.app`, `www.figtech.app`
**HTTPS:** Automatic via Cloudflare (SSL cert issued by Google Trust Services)

Worker code (in Cloudflare dashboard → Workers & Pages → figtech-app-proxy → Edit Code):
```js
export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname === '/' ? '/index.html' : url.pathname
    const origin = `https://storage.googleapis.com/figtech-corp-web${path}`
    const response = await fetch(origin)

    if (response.status === 404) {
      const fallback = await fetch('https://storage.googleapis.com/figtech-corp-web/index.html')
      return new Response(fallback.body, { status: 200, headers: fallback.headers })
    }

    return response
  },
}
```

---

## Contact Form

**Provider:** Formsubmit.co (no account required)
**Destination:** `figtech10@gmail.com`
**Endpoint:** `https://formsubmit.co/ajax/figtech10@gmail.com`

> **Note:** First form submission triggers an activation email to `figtech10@gmail.com`. Must click the confirmation link before submissions deliver reliably.

Fields: Name, Email, Interest (dropdown), Message

---

## Domains Checked (for reference)

| Domain | Status | Notes |
|--------|--------|-------|
| `figtech.io` | Taken | Parked on GoDaddy |
| `figtech.ai` | Taken | Parked on GoDaddy |
| `figtech.co` | Taken | — |
| `figtech.app` | **Registered ✓** | Active — our domain |
| `figtech.dev` | Available | Alternative option |
| `favo.app` | Taken | — |
| `favo.io` | Taken | — |
| `getfavo.com` | Taken | — |
| `favosoccer.com` | Available | Alternative option |

---

## Google Search Console

- **Property:** `figtech.app` (Domain type)
- **Verified via:** TXT record on `@`
- **Account:** `edison.figueroa@gmail.com`

> Note: GCS domain-named bucket creation requires Search Console verification under the same Google account that owns the GCP project. The current setup uses a Cloudflare Worker to avoid this requirement (the GCS bucket retains the name `figtech-corp-web`).

---

## Design System

Inherits the **Dark Stadium** design language from the Favo product:
- Background: `#0B0C0F`
- Primary (gold): `#F5A200`
- Accent (teal): `#2DC4B2`
- Card surface: `#111318`
- Border: `#252A35`
- Font: SF Pro Display / system-ui

See `futfan/design-system.md` for the full spec.
