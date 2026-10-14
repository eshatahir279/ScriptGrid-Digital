# ScriptGrid Digital ⚡
### High-Performance Python Automation & Data Tools

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python&logoColor=white)](https://www.python.org/)
[![License: Perpetual](https://img.shields.io/badge/License-Perpetual%20Source-emerald.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready%20to%20Deploy-cyan.svg?logo=github)](https://pages.github.com/)
[![Zero Telemetry](https://img.shields.io/badge/Telemetry-Zero%20%2F%20100%25%20Local-success.svg)](https://github.com/scriptgrid-digital)
[![Platform: macOS | Windows | Linux](https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)]()

Welcome to **ScriptGrid Digital** — a digital storefront and automation ecosystem built specifically for international business owners, web scrapers, data teams, and indie developers who demand speed, privacy, and full source code ownership.

---

## 🌟 Core Philosophy

- 🔒 **100% Privacy & Local Execution**: Every utility, desktop application, and scraping pipeline runs natively on your hardware or private VPS. No phone-home telemetry, no third-party data tracking, and no external middleman.
- ⚡ **Instant Delivery**: Upon purchase, users immediately receive direct archive downloads (`.zip`), perpetual cryptographic license keys, and automated GitHub private repository collaborator invitations.
- 💸 **Zero Monthly Subscription Lock-In**: Reject $99/month recurring SaaS bloat. You buy the code once, you own the infrastructure perpetually.
- 📹 **Step-by-Step 4K Video Guides & Documentation**: Comprehensive virtualenv/poetry setups, copy-paste terminal arguments, and production Docker configurations for Windows, macOS, and Linux.

---

## 📦 Featured Tools Catalog

| Product | Focus Area | Key Technologies | Pricing |
| :--- | :--- | :--- | :--- |
| **Multi-Site Anti-Bot Web Scraper & Price Tracker** | Web Scraping & E-Commerce Intel | Playwright, HTTPX, TLS Mimicry, Proxy Pools, Webhook Alerts | **$49** |
| **Autonomous AI Content Engine & WordPress Auto-Poster** | Content & SEO Automation | OpenAI / Gemini API, WordPress REST API, SERP Scraping, RankMath Schema | **$79** |
| **Local Privacy Desktop App (PDF/Excel Batch Processor)** | Desktop Security & Tabular ETL | PySide6 GUI, Multi-Core Workers, Tesseract OCR, PII Sanitizer | **$39** |
| **All-Access Trio Developer Bundle** | Complete Automation Arsenal | All 3 tools + priority private GitHub repository access | **$129** *(Save $38)* |

---

## 🚀 Deployment Options

This repository provides two ways to run and deploy the storefront:

### Option A: 1-Click GitHub Pages Hosting (Zero Build Required)
A pristine, self-contained single-file `index.html` with embedded CSS and FontAwesome CDN is included in `public/standalone.html`.

1. Create a new GitHub repository (e.g., `scriptgrid-digital-store`).
2. Copy `public/standalone.html` into your repository root as `index.html`.
3. Go to **Settings** &rarr; **Pages** &rarr; Source: **Deploy from a branch** &rarr; Branch: `main` / `root` &rarr; Click **Save**.
4. Your digital software store is immediately live on `https://<your-username>.github.io/<repo-name>/` with 100% mobile responsiveness, dark-tech aesthetic, and zero server maintenance!

---

### Option B: Interactive React + Vite Application
For advanced customizations, multi-currency toggles, search filtering, CLI simulators, and interactive licensing modals:

#### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

#### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/scriptgrid-digital/storefront.git
cd storefront

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:3000` to preview the interactive store.

#### Production Build

```bash
npm run build
```

The optimized static assets will be output to `/dist`, ready to deploy to Vercel, Netlify, Cloudflare Pages, or AWS S3.

---

## 📂 Repository File Structure

```text
├── index.html                      # Vite application entry point with synced SEO metadata & fonts
├── metadata.json                   # Project metadata and platform permissions
├── package.json                    # Project scripts & frontend dependencies
├── tsconfig.json                   # Strict TypeScript compiler options
├── vite.config.ts                  # Vite build configuration with Tailwind integration
├── public/
│   └── standalone.html             # Fully self-contained single-file HTML for GitHub Pages
└── src/
    ├── main.tsx                    # React DOM mounting
    ├── App.tsx                     # Main store layout, category filters, and state orchestration
    ├── index.css                   # Tailwind CSS styling & custom dark-tech scrollbar
    ├── standaloneHtml.ts           # Pristine raw HTML code generator for the 1-click export modal
    ├── data/
    │   └── products.ts             # Products data, CLI commands, pricing, FAQs & value pillars
    └── components/
        ├── Navbar.tsx              # Top bar contract (Brand, single-line links, Currency & Export)
        ├── Hero.tsx                # High-conversion hero with gradient headline & trust indicators
        ├── ProductCard.tsx         # Detailed product cards with badge tags, price & Buy actions
        ├── TerminalPreview.tsx     # Interactive CLI simulator demonstrating real Python commands
        ├── WhyChooseUs.tsx         # Three core value pillars (Instant Delivery, Privacy, Docs)
        ├── FaqSection.tsx          # Interactive accordion addressing licensing and compatibility
        ├── CheckoutModal.tsx       # Working demo checkout, license key generator & script download
        ├── ProductDrawer.tsx       # Architectural deep-dive (file trees, runtime requirements)
        ├── ExportHtmlModal.tsx     # 1-click code viewer to copy or download index.html
        └── Footer.tsx              # Quiet legal footer, GitHub repository links & support email
```

---

## 🛠️ How to Customize Your Store

### 1. Linking Real Payment Gateways
To connect your live payment provider (Stripe Payment Links, LemonSqueezy, or Gumroad):
- Open `src/components/ProductCard.tsx` or `src/standaloneHtml.ts`.
- Replace the `openCheckout()` placeholder or `#` link with your real checkout URL:
  ```html
  <!-- Example LemonSqueezy / Stripe link -->
  <a href="https://checkout.scriptgriddigital.com/buy/scraper-license" class="buy-btn">
    <i class="fa-solid fa-download"></i>
    <span>Buy Now ($49)</span>
  </a>
  ```

### 2. Updating Products & Pricing
Modify `src/data/products.ts` to add new scripts, update price tags, change key feature badges, or customize the simulated CLI output.

### 3. Adding More Currencies
In `src/components/Navbar.tsx` and `src/components/ProductCard.tsx`, add additional currency mappings (e.g., CAD, AUD, JPY) to the `CURRENCY_SYMBOLS` map.

---

## 💻 Python Runtime Compatibility

All ScriptGrid Digital tools are pre-tested across:
- **Python**: `3.10.x`, `3.11.x`, `3.12.x`
- **Operating Systems**:
  - macOS (Apple Silicon M1/M2/M3/M4 & Intel x86_64)
  - Windows 10 & Windows 11 (64-bit PowerShell & CMD)
  - Linux (Ubuntu 20.04+, Debian 11+, Fedora, Arch Linux)
- **Environments**: Poetry, `pipenv`, standard `venv`, and Docker containers (`python:3.11-slim`).

---

## 🛡️ License & Code Ownership

When you acquire software from **ScriptGrid Digital**:
- You receive **100% unminified, well-commented Python source code**.
- You are granted a **perpetual, commercial license** to execute and modify the code across unlimited personal and internal business machines.
- No recurring subscription or telemetry checks will ever disable your tools.

---

## 📬 Contact & Support

- **GitHub Repository**: [github.com/scriptgrid-digital](https://github.com/scriptgrid-digital)
- **Technical Support**: [support@scriptgriddigital.com](mailto:support@scriptgriddigital.com)
- **SLA**: Dedicated developer responses within **24 hours**.

---

<p align="center">
  <sub>&copy; 2026 ScriptGrid Digital. All rights reserved. Designed for independent developers & business automation.</sub>
</p>
