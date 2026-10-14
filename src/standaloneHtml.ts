export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ScriptGrid Digital - High-Performance Python Automation & Data Tools</title>
  <meta name="description" content="ScriptGrid Digital - High-Performance Python Automation & Data Tools for international business owners and developers.">
  
  <!-- Google Fonts: Plus Jakarta Sans & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- FontAwesome 6 CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <style>
    /* Reset & Base Variables */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg-dark: #121212;
      --bg-surface: #18181b;
      --bg-card: #1f1f23;
      --bg-card-hover: #26262b;
      --border-subtle: #2d2d35;
      --border-accent: rgba(6, 182, 212, 0.35);
      --text-main: #f3f4f6;
      --text-muted: #9ca3af;
      --text-dim: #6b7280;
      --accent-cyan: #06b6d4;
      --accent-cyan-glow: rgba(6, 182, 212, 0.15);
      --accent-green: #10b981;
      --accent-green-glow: rgba(16, 185, 129, 0.15);
      --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --max-width: 1200px;
    }

    html {
      scroll-behavior: smooth;
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-sans);
      line-height: 1.6;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      overflow-x: hidden;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Container */
    .container {
      width: 100%;
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Sticky Top Navigation Bar */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(18, 18, 18, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-subtle);
      padding: 1rem 0;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: var(--text-main);
      font-weight: 800;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
    }

    .brand-icon {
      color: var(--accent-cyan);
      font-size: 1.35rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }

    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.925rem;
      font-weight: 500;
      transition: color 0.2s ease;
      white-space: nowrap;
    }

    .nav-link:hover {
      color: var(--accent-cyan);
    }

    .nav-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--accent-cyan), #0891b2);
      color: #041014;
      font-weight: 700;
      font-size: 0.875rem;
      padding: 0.55rem 1.15rem;
      border-radius: 6px;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      white-space: nowrap;
    }

    .nav-cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(6, 182, 212, 0.35);
    }

    /* Hero Section */
    .hero {
      position: relative;
      padding: 5rem 0 4rem;
      background: radial-gradient(circle at 50% 10%, rgba(6, 182, 212, 0.08) 0%, transparent 65%);
      border-bottom: 1px solid var(--border-subtle);
    }

    .hero-content {
      text-align: center;
      max-width: 860px;
      margin: 0 auto;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--accent-green);
      background: var(--accent-green-glow);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      margin-bottom: 1.5rem;
    }

    .hero-title {
      font-size: clamp(2.35rem, 5vw, 3.75rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      text-wrap: balance;
    }

    .hero-title span.highlight {
      background: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-green) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-sub {
      font-size: clamp(1.05rem, 2vw, 1.25rem);
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 2.25rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      text-wrap: balance;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: var(--accent-cyan);
      color: #031417;
      font-weight: 700;
      font-size: 1rem;
      padding: 0.85rem 1.85rem;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.2s ease;
      box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
    }

    .btn-primary:hover {
      background: #22d3ee;
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(6, 182, 212, 0.45);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: var(--bg-surface);
      color: var(--text-main);
      font-weight: 600;
      font-size: 1rem;
      padding: 0.85rem 1.6rem;
      border-radius: 8px;
      border: 1px solid var(--border-subtle);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .btn-secondary:hover {
      border-color: var(--text-muted);
      background: var(--bg-card);
    }

    .hero-trust {
      margin-top: 3.5rem;
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      flex-wrap: wrap;
      color: var(--text-dim);
      font-size: 0.875rem;
      font-family: var(--font-mono);
    }

    .trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .trust-item i {
      color: var(--accent-cyan);
    }

    /* Section Structure */
    .section {
      padding: 5rem 0;
    }

    .section-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 3.5rem;
    }

    .section-tag {
      font-family: var(--font-mono);
      font-size: 0.825rem;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.6rem;
    }

    .section-title {
      font-size: clamp(1.85rem, 3.5vw, 2.5rem);
      font-weight: 800;
      letter-spacing: -0.025em;
      margin-bottom: 0.85rem;
    }

    .section-desc {
      color: var(--text-muted);
      font-size: 1rem;
    }

    /* Products Grid */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .product-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-cyan);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.1);
    }

    .product-card.featured-card {
      border-color: rgba(6, 182, 212, 0.45);
      background: linear-gradient(180deg, #1f2229 0%, var(--bg-card) 100%);
    }

    .card-badge {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      font-family: var(--font-mono);
      font-size: 0.725rem;
      font-weight: 600;
      padding: 0.25rem 0.65rem;
      border-radius: 4px;
      background: var(--accent-cyan-glow);
      color: var(--accent-cyan);
      border: 1px solid rgba(6, 182, 212, 0.3);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-icon-wrap {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: var(--accent-cyan);
      margin-bottom: 1.5rem;
    }

    .product-card:nth-child(2) .card-icon-wrap {
      color: var(--accent-green);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 0.75rem;
      letter-spacing: -0.015em;
    }

    .card-description {
      color: var(--text-muted);
      font-size: 0.925rem;
      line-height: 1.55;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }

    .features-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.75rem;
    }

    .feature-tag {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #d1d5db;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      white-space: nowrap;
    }

    .feature-tag i {
      font-size: 0.65rem;
      color: var(--accent-green);
    }

    /* Card Footer & Price */
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--border-subtle);
    }

    .price-box {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
    }

    .price-tag {
      font-family: var(--font-mono);
      font-size: 1.85rem;
      font-weight: 700;
      color: var(--text-main);
      font-variant-numeric: tabular-nums;
    }

    .price-term {
      font-size: 0.8rem;
      color: var(--text-dim);
    }

    .buy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, var(--accent-cyan), #0284c7);
      color: #031417;
      font-weight: 700;
      font-size: 0.925rem;
      padding: 0.65rem 1.25rem;
      border-radius: 6px;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
      white-space: nowrap;
    }

    .buy-btn:hover {
      background: linear-gradient(135deg, #22d3ee, var(--accent-cyan));
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.35);
    }

    /* Why Choose Us Section */
    .why-section {
      background: var(--bg-surface);
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
    }

    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .why-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 2.25rem 2rem;
      position: relative;
      transition: border-color 0.2s ease;
    }

    .why-card:hover {
      border-color: rgba(16, 185, 129, 0.4);
    }

    .why-icon {
      width: 52px;
      height: 52px;
      border-radius: 10px;
      background: var(--accent-green-glow);
      border: 1px solid rgba(16, 185, 129, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      color: var(--accent-green);
      margin-bottom: 1.25rem;
    }

    .why-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: var(--text-main);
    }

    .why-desc {
      color: var(--text-muted);
      font-size: 0.925rem;
      line-height: 1.6;
    }

    /* Live Terminal Demo */
    .terminal-section {
      padding: 4rem 0;
    }

    .terminal-box {
      max-width: 860px;
      margin: 0 auto;
      background: #0d0d0f;
      border: 1px solid #2d2d35;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    }

    .terminal-header {
      background: #17171c;
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #2d2d35;
    }

    .terminal-dots {
      display: flex;
      gap: 6px;
    }

    .terminal-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dot-red { background: #ef4444; }
    .dot-yellow { background: #f59e0b; }
    .dot-green { background: #10b981; }

    .terminal-title {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--text-dim);
    }

    .terminal-body {
      padding: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.85rem;
      line-height: 1.7;
    }

    .term-cmd {
      color: var(--accent-cyan);
      margin-bottom: 0.85rem;
    }

    .term-cmd::before {
      content: "$ ";
      color: var(--accent-green);
      font-weight: bold;
    }

    .term-log {
      color: #9ca3af;
    }

    .term-success {
      color: var(--accent-green);
    }

    /* Footer */
    .footer {
      background: #0a0a0c;
      border-top: 1px solid var(--border-subtle);
      padding: 4rem 0 2.5rem;
      margin-top: auto;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .footer-brand-col {
      max-width: 380px;
    }

    .footer-brand {
      font-size: 1.2rem;
      font-weight: 800;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 0.85rem;
    }

    .footer-desc {
      color: var(--text-dim);
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .footer-col-title {
      font-size: 0.85rem;
      font-family: var(--font-mono);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-main);
      margin-bottom: 1rem;
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .footer-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .footer-link:hover {
      color: var(--accent-cyan);
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      color: var(--text-dim);
      font-size: 0.825rem;
    }

    /* Modal for Quick Buy */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(8px);
      z-index: 100;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .modal-overlay.active {
      display: flex;
    }

    .modal-content {
      background: #18181c;
      border: 1px solid var(--border-accent);
      border-radius: 12px;
      max-width: 520px;
      width: 100%;
      padding: 2rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      position: relative;
    }

    .modal-close {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.25rem;
      cursor: pointer;
    }

    .modal-close:hover {
      color: var(--text-main);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .hero {
        padding: 3.5rem 0 3rem;
      }
      .hero-trust {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      .footer-inner {
        flex-direction: column;
        gap: 2rem;
      }
    }
  </style>
</head>
<body>

  <!-- Top Navigation Bar -->
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#" class="brand">
        <i class="fa-brands fa-python brand-icon"></i>
        <span>ScriptGrid Digital</span>
      </a>

      <nav>
        <ul class="nav-links">
          <li><a href="#featured-tools" class="nav-link">Tools</a></li>
          <li><a href="#why-choose-us" class="nav-link">Why Choose Us</a></li>
          <li><a href="#terminal-demo" class="nav-link">Live Terminal</a></li>
          <li><a href="https://github.com/scriptgrid-digital" target="_blank" rel="noopener noreferrer" class="nav-link"><i class="fa-brands fa-github"></i> GitHub</a></li>
        </ul>
      </nav>

      <a href="#featured-tools" class="nav-cta">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Browse Tools</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-eyebrow">
        <i class="fa-solid fa-code"></i>
        <span>Engineered for Production & Local Execution</span>
      </div>

      <h1 class="hero-title">
        High-Performance <span class="highlight">Python Automation</span> & Data Tools
      </h1>

      <p class="hero-sub">
        Production-tested desktop utilities, stealth web scrapers, and autonomous automation scripts built for international business owners and developers who value speed, privacy, and full source code ownership.
      </p>

      <div class="hero-actions">
        <a href="#featured-tools" class="btn-primary">
          <i class="fa-solid fa-bolt"></i>
          <span>Browse Featured Tools</span>
        </a>
        <a href="#why-choose-us" class="btn-secondary">
          <i class="fa-solid fa-shield-halved"></i>
          <span>100% Local Run Guarantee</span>
        </a>
      </div>

      <div class="hero-trust">
        <div class="trust-item">
          <i class="fa-solid fa-check-circle"></i>
          <span>100% Unminified Python Source</span>
        </div>
        <div class="trust-item">
          <i class="fa-solid fa-check-circle"></i>
          <span>Zero Monthly Subscription Lock-in</span>
        </div>
        <div class="trust-item">
          <i class="fa-solid fa-check-circle"></i>
          <span>Instant Download & License Key</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects Section (3 Product Cards) -->
  <section id="featured-tools" class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Digital Software Catalog</div>
        <h2 class="section-title">Featured Production Tools</h2>
        <p class="section-desc">
          Ready-to-deploy Python packages with documented CLI flags, modular architectures, and perpetual lifetime licenses.
        </p>
      </div>

      <div class="products-grid">
        <!-- Card 1: Multi-Site Anti-Bot Web Scraper & Price Tracker -->
        <article class="product-card featured-card">
          <span class="card-badge">Popular</span>
          <div class="card-icon-wrap">
            <i class="fa-solid fa-spider"></i>
          </div>
          <h3 class="card-title">Multi-Site Anti-Bot Web Scraper & Price Tracker</h3>
          <p class="card-description">
            Bypasses Cloudflare Turnstile, DataDome, and Akamai defenses using TLS client fingerprints, headless Playwright pooling, and smart residential proxy rotation. Automatically extracts product catalogs, stock variations, and historical pricing feeds into structured JSON or SQLite.
          </p>

          <div class="features-list">
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Cloudflare & DataDome Bypass</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Proxy Pool Rotation</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Playwright / HTTPX Engine</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Webhook Alert Feeds</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> SQLite & JSON Export</span>
          </div>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-tag">$49</span>
              <span class="price-term">one-time</span>
            </div>
            <a href="#" class="buy-btn" onclick="openCheckout('Multi-Site Anti-Bot Web Scraper & Price Tracker', '$49'); return false;">
              <i class="fa-solid fa-download"></i>
              <span>Buy Now</span>
            </a>
          </div>
        </article>

        <!-- Card 2: Autonomous AI Content Engine & WordPress Auto-Poster -->
        <article class="product-card">
          <span class="card-badge">Best Value</span>
          <div class="card-icon-wrap">
            <i class="fa-solid fa-robot"></i>
          </div>
          <h3 class="card-title">Autonomous AI Content Engine & WordPress Auto-Poster</h3>
          <p class="card-description">
            Researches trending search queries and RSS feeds, generates long-form factual articles with structured headings, automatically pulls royalty-free featured images, optimizes RankMath/Yoast meta tags, and schedules directly to WordPress via authenticated REST API.
          </p>

          <div class="features-list">
            <span class="feature-tag"><i class="fa-solid fa-check"></i> OpenAI & Gemini API</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> WordPress REST API</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> SERP Trend Analysis</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Auto-Featured Images</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> RankMath / Yoast Schema</span>
          </div>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-tag">$79</span>
              <span class="price-term">one-time</span>
            </div>
            <a href="#" class="buy-btn" onclick="openCheckout('Autonomous AI Content Engine & WordPress Auto-Poster', '$79'); return false;">
              <i class="fa-solid fa-download"></i>
              <span>Buy Now</span>
            </a>
          </div>
        </article>

        <!-- Card 3: Local Privacy Desktop App (PDF/Excel Batch Processor) -->
        <article class="product-card">
          <span class="card-badge">Air-Gapped</span>
          <div class="card-icon-wrap">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h3 class="card-title">Local Privacy Desktop App (PDF/Excel Batch Processor)</h3>
          <p class="card-description">
            Zero external cloud transmission and zero data leakage. Process multi-gigabyte CSVs, normalize messy Excel sheets with fuzzy matching, batch OCR multilingual scanned documents, and redact sensitive PII (emails, SSNs, credit cards) locally at native multi-core speed.
          </p>

          <div class="features-list">
            <span class="feature-tag"><i class="fa-solid fa-check"></i> 100% Offline / Air-Gapped</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Multi-Core PySide6 GUI</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Tesseract OCR Engine</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> 100k+ Rows in Seconds</span>
            <span class="feature-tag"><i class="fa-solid fa-check"></i> Zero Cloud Telemetry</span>
          </div>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-tag">$39</span>
              <span class="price-term">one-time</span>
            </div>
            <a href="#" class="buy-btn" onclick="openCheckout('Local Privacy Desktop App (PDF/Excel Batch Processor)', '$39'); return false;">
              <i class="fa-solid fa-download"></i>
              <span>Buy Now</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Live Terminal CLI Demo -->
  <section id="terminal-demo" class="terminal-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Interactive Preview</div>
        <h2 class="section-title">Built with Developer Precision</h2>
        <p class="section-desc">
          Clean, documented CLI flags and native Python architecture that integrates cleanly with Docker, systemd, or local virtual environments.
        </p>
      </div>

      <div class="terminal-box">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot dot-red"></div>
            <div class="terminal-dot dot-yellow"></div>
            <div class="terminal-dot dot-green"></div>
          </div>
          <div class="terminal-title">bash — scriptgrid-venv (python 3.11)</div>
          <div><i class="fa-solid fa-terminal" style="color: #6b7280; font-size: 0.8rem;"></i></div>
        </div>
        <div class="terminal-body">
          <div class="term-cmd">python -m scriptgrid_scraper --targets ./ecommerce_targets.yaml --concurrency 8 --export json</div>
          <div class="term-log">[INFO] Initialized ScriptGrid Stealth Engine v2.4 (TLS fingerprint spoofing enabled)</div>
          <div class="term-log">[INFO] Loaded 12 target domains with residential proxy pool</div>
          <div class="term-log">[OK] Target #1 bypass Cloudflare Turnstile token verified (412ms)</div>
          <div class="term-log">[EXTRACT] Parsed 248 SKU price points, 3 stock changes detected</div>
          <div class="term-log">[WEBHOOK] Dispatched real-time alert payload to Slack webhook</div>
          <div class="term-success">[SUCCESS] Exported 248 validated records to ./output/pricing_feed.json in 3.12s</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section id="why-choose-us" class="section why-section">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">Our Engineering Philosophy</div>
        <h2 class="section-title">Why Developers & Businesses Choose ScriptGrid Digital</h2>
        <p class="section-desc">
          We reject bloated SaaS models and closed vendor lock-in. You buy the code, you own the infrastructure.
        </p>
      </div>

      <div class="why-grid">
        <!-- Item 1: Instant Delivery -->
        <div class="why-card">
          <div class="why-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3 class="why-title">Instant Delivery</h3>
          <p class="why-desc">
            Upon purchase, you immediately receive a direct secure archive download (.zip), your perpetual cryptographic license key, and an automated GitHub private repository invite for code updates.
          </p>
        </div>

        <!-- Item 2: 100% Privacy & Local Run -->
        <div class="why-card">
          <div class="why-icon">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h3 class="why-title">100% Privacy & Local Run</h3>
          <p class="why-desc">
            All code runs natively on your local machine or private server. No phone-home telemetry, no third-party data tracking, and no external API seat charges to process your sensitive records.
          </p>
        </div>

        <!-- Item 3: Detailed Setup Video & Docs -->
        <div class="why-card">
          <div class="why-icon">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <h3 class="why-title">Detailed Setup Video & Docs</h3>
          <p class="why-desc">
            Get up and running in under five minutes. Every utility includes step-by-step 4K video walkthroughs, pre-configured poetry/venv scripts, and copy-paste CLI flags for Windows, macOS, and Linux.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand-col">
          <div class="footer-brand">
            <i class="fa-brands fa-python" style="color: var(--accent-cyan);"></i>
            <span>ScriptGrid Digital</span>
          </div>
          <p class="footer-desc">
            High-Performance Python Automation & Data Tools for international business owners, web scrapers, and data engineers worldwide.
          </p>
        </div>

        <div>
          <div class="footer-col-title">Tools & Navigation</div>
          <ul class="footer-links">
            <li><a href="#featured-tools" class="footer-link"><i class="fa-solid fa-angle-right"></i> Multi-Site Scraper</a></li>
            <li><a href="#featured-tools" class="footer-link"><i class="fa-solid fa-angle-right"></i> AI Content Engine</a></li>
            <li><a href="#featured-tools" class="footer-link"><i class="fa-solid fa-angle-right"></i> PDF/Excel Batch Processor</a></li>
            <li><a href="#why-choose-us" class="footer-link"><i class="fa-solid fa-angle-right"></i> Why Choose Us</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-title">Connect & Support</div>
          <ul class="footer-links">
            <li><a href="https://github.com/scriptgrid-digital" target="_blank" rel="noopener noreferrer" class="footer-link"><i class="fa-brands fa-github"></i> github.com/scriptgrid-digital</a></li>
            <li><a href="mailto:support@scriptgriddigital.com" class="footer-link"><i class="fa-solid fa-envelope"></i> support@scriptgriddigital.com</a></li>
            <li><span class="footer-link" style="color: var(--accent-green);"><i class="fa-solid fa-circle-check"></i> Response time: &lt; 24h</span></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 ScriptGrid Digital. All rights reserved. Designed for GitHub Pages.</div>
        <div>Built for Python 3.10+ &bull; Native Cross-Platform Performance</div>
      </div>
    </div>
  </footer>

  <!-- Instant Checkout Modal (Demo) -->
  <div id="checkoutModal" class="modal-overlay" onclick="closeCheckoutOnOverlay(event)">
    <div class="modal-content">
      <button class="modal-close" onclick="closeCheckout()">&times;</button>
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(6, 182, 212, 0.15); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan); font-size: 1.2rem;">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div>
          <h4 id="modalItemTitle" style="font-size: 1.15rem; font-weight: 700;">Product Order</h4>
          <span id="modalItemPrice" style="color: var(--accent-green); font-family: var(--font-mono); font-weight: 700;">$49</span> &bull; <span style="color: var(--text-dim); font-size: 0.85rem;">One-time perpetual license</span>
        </div>
      </div>

      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">
        Complete checkout to receive immediate access to the full source code, lifetime updates, and GitHub private repository invitation.
      </p>

      <form onsubmit="handleDemoOrder(event)">
        <div style="margin-bottom: 1rem;">
          <label style="display: block; font-size: 0.825rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.4rem;">YOUR WORK EMAIL (FOR LICENSE & DOWNLOAD LINK)</label>
          <input type="email" required placeholder="developer@company.com" style="width: 100%; background: #121214; border: 1px solid var(--border-subtle); color: #fff; padding: 0.75rem 1rem; border-radius: 6px; font-family: inherit; font-size: 0.95rem; outline: none;">
        </div>

        <button type="submit" class="buy-btn" style="width: 100%; padding: 0.85rem; font-size: 1rem;">
          <i class="fa-solid fa-lock"></i>
          <span>Confirm & Generate Download Key</span>
        </button>
      </form>

      <div id="licenseResult" style="display: none; margin-top: 1.25rem; padding: 1rem; background: #121215; border: 1px dashed var(--accent-green); border-radius: 6px;">
        <div style="color: var(--accent-green); font-size: 0.85rem; font-weight: bold; margin-bottom: 0.4rem;"><i class="fa-solid fa-circle-check"></i> License Key Generated!</div>
        <div style="font-family: var(--font-mono); font-size: 0.85rem; background: #000; padding: 0.5rem; border-radius: 4px; color: var(--accent-cyan); word-break: break-all;">SCRIPTGRID-9A4F-88E2-B310-LIVE</div>
        <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">Package (.zip) ready: <code>scriptgrid_package_v2.4.zip</code></div>
      </div>
    </div>
  </div>

  <script>
    function openCheckout(title, price) {
      document.getElementById('modalItemTitle').innerText = title;
      document.getElementById('modalItemPrice').innerText = price;
      document.getElementById('licenseResult').style.display = 'none';
      document.getElementById('checkoutModal').classList.add('active');
    }

    function closeCheckout() {
      document.getElementById('checkoutModal').classList.remove('active');
    }

    function closeCheckoutOnOverlay(e) {
      if (e.target.id === 'checkoutModal') {
        closeCheckout();
      }
    }

    function handleDemoOrder(e) {
      e.preventDefault();
      document.getElementById('licenseResult').style.display = 'block';
    }
  </script>
</body>
</html>`;
