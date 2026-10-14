export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  price: number;
  badge?: string;
  icon: string;
  features: string[];
  cliCommand: string;
  cliOutput: string[];
  requirements: string[];
  includedFiles: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'anti-bot-scraper',
    title: 'Multi-Site Anti-Bot Web Scraper & Price Tracker',
    tagline: 'Undetected browser fingerprints, TLS mimicry & automated proxy rotation',
    description: 'Bypasses Cloudflare Turnstile, DataDome, and Akamai defenses using TLS client fingerprints, headless Playwright pooling, and smart residential proxy rotation. Automatically extracts product catalogs, stock variations, and historical pricing feeds into structured JSON, SQLite, or webhooks.',
    category: 'Web Scraping & Intelligence',
    price: 49,
    badge: 'Popular',
    icon: 'fa-solid fa-spider',
    features: [
      'Cloudflare & DataDome Bypass',
      'Automated Proxy Rotation',
      'Playwright / HTTPX Engine',
      'Real-Time Webhook Alerts',
      'SQLite & JSON Export',
      'Cron-Ready Headless CLI'
    ],
    cliCommand: 'python -m scriptgrid_scraper --targets ./targets.yaml --concurrency 8 --export json',
    cliOutput: [
      '[INFO] Initialized ScriptGrid Stealth Engine v2.4',
      '[INFO] Loaded 12 target e-commerce domains with residential proxy pool',
      '[OK] Target #1 bypass Cloudflare Turnstile (took 412ms)',
      '[EXTRACT] Parsed 248 SKU price points, 3 stock changes detected',
      '[WEBHOOK] Dispatched alert to Discord/Slack channel #price-alerts',
      '[SUCCESS] Exported 248 records to ./output/pricing_feed.json'
    ],
    requirements: ['Python 3.10+', 'macOS / Windows / Linux', 'Residential Proxy (optional)'],
    includedFiles: [
      'scraper_core.py',
      'fingerprints.json',
      'proxy_manager.py',
      'webhook_dispatcher.py',
      'targets_template.yaml',
      'Quickstart_Guide.pdf'
    ]
  },
  {
    id: 'ai-content-engine',
    title: 'Autonomous AI Content Engine & WordPress Auto-Poster',
    tagline: 'End-to-end topical research, SEO synthesis & automated CMS publishing',
    description: 'Researches trending search queries and RSS feeds, generates long-form factual articles with structured headings, automatically pulls royalty-free featured images, optimizes RankMath/Yoast meta tags, and schedules directly to WordPress via authenticated REST API.',
    category: 'Content & SEO Automation',
    price: 79,
    badge: 'Best Value',
    icon: 'fa-solid fa-robot',
    features: [
      'OpenAI & Gemini API Support',
      'WordPress REST API Auth',
      'SERP Trend & Keyword Analysis',
      'Automated Featured Images',
      'Yoast & RankMath Schema',
      'Drip Scheduling Queue'
    ],
    cliCommand: 'python -m scriptgrid_writer --keyword "Cloud Database Migration" --wp-site "https://myblog.com" --status schedule',
    cliOutput: [
      '[INFO] Fetching top 10 Google SERP outlines for "Cloud Database Migration"',
      '[SYNTHESIS] Generated 2,400-word comprehensive guide with FAQs & schema',
      '[MEDIA] Acquired licensed 16:9 featured graphic & compressed to WebP',
      '[SEO] Meta title, description, and internal links injected (RankMath Score: 94)',
      '[POST] Scheduled post to WordPress (ID #1482) for tomorrow at 09:00 UTC',
      '[SUCCESS] Queue processed: 1 draft queued, 0 errors'
    ],
    requirements: ['Python 3.10+', 'OpenAI or Gemini API Key', 'WordPress 5.8+ (REST API enabled)'],
    includedFiles: [
      'content_engine.py',
      'serp_analyzer.py',
      'wp_connector.py',
      'image_handler.py',
      'prompts_config.yaml',
      'WordPress_Setup_Walkthrough.mp4'
    ]
  },
  {
    id: 'local-privacy-app',
    title: 'Local Privacy Desktop App (PDF/Excel Batch Processor)',
    tagline: 'Air-gapped high-throughput document sanitizer, OCR & tabular normalizer',
    description: 'Zero external cloud transmission and zero data leakage. Process multi-gigabyte CSVs, normalize messy Excel sheets with fuzzy matching, batch OCR multilingual scanned documents, and redact sensitive PII (emails, SSNs, credit cards) locally at native multi-core speed.',
    category: 'Desktop Utility & Security',
    price: 39,
    badge: '100% Offline',
    icon: 'fa-solid fa-shield-halved',
    features: [
      '100% Offline / Air-Gapped',
      'Multi-Core PySide6 Desktop GUI',
      'Tesseract Multilingual OCR',
      'Millions of Excel Rows in Secs',
      'Automated PII Redaction',
      'Zero Cloud Telemetry'
    ],
    cliCommand: 'python -m scriptgrid_desktop --batch ./confidential_data/ --ocr --redact-pii --gui',
    cliOutput: [
      '[SECURITY] Operating in strict offline air-gapped mode (network calls disabled)',
      '[WORKER] Spawned 12 CPU worker threads for high-throughput pipeline',
      '[OCR] Processed 142 scanned tax PDFs using Tesseract OCR (accuracy: 99.4%)',
      '[SANITIZE] Identified and masked 1,894 PII entries (SSNs, credit numbers)',
      '[MERGE] Consolidated 38 Excel workbooks into normalized master parquet table',
      '[SUCCESS] All operations completed locally in 6.42s'
    ],
    requirements: ['Python 3.10+', 'macOS (Intel/Apple Silicon), Windows 10/11, Ubuntu 22.04+'],
    includedFiles: [
      'desktop_gui.py',
      'ocr_pipeline.py',
      'excel_processor.py',
      'pii_sanitizer.py',
      'requirements.txt',
      'Air_Gap_Security_Audit.pdf'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'instant-delivery',
    title: 'Instant Delivery',
    subtitle: 'Zero waiting time or email back-and-forth',
    description: 'Upon checkout, you immediately receive a direct secure archive download, your perpetual cryptographic license key, and an automated GitHub private repository collaborator invitation for continuous updates.',
    icon: 'fa-solid fa-bolt',
    proof: 'Average delivery latency: < 3 seconds'
  },
  {
    id: 'local-privacy',
    title: '100% Privacy & Local Run',
    subtitle: 'Your data never leaves your workstation',
    description: 'Every script and desktop utility runs 100% locally on your machine or private VPS. No hidden telemetry, no third-party cloud intermediaries, and no monthly API seat fees.',
    icon: 'fa-solid fa-lock',
    proof: 'Fully open source-auditable Python codebase'
  },
  {
    id: 'setup-video-docs',
    title: 'Detailed Setup Video & Docs',
    subtitle: 'From zero to production in under 5 minutes',
    description: 'Each package includes comprehensive 4K video walkthroughs, copy-paste terminal commands, poetry/venv configurations, and production docker-compose templates.',
    icon: 'fa-solid fa-book-open',
    proof: 'Step-by-step verified for Windows, macOS, and Linux'
  }
];

export const FAQS = [
  {
    q: 'What Python versions and operating systems are supported?',
    a: 'All tools are tested and verified on Python 3.10, 3.11, and 3.12 across macOS (both Intel & Apple Silicon M-series), Windows 10/11, and Linux (Ubuntu, Debian, Fedora).'
  },
  {
    q: 'Do these tools come with recurring subscription fees?',
    a: 'No. All tools from ScriptGrid Digital are sold as a one-time perpetual purchase. You get full source code, lifetime rights to use it on unlimited machines, and all minor release updates included.'
  },
  {
    q: 'How does instant delivery work?',
    a: 'Immediately after purchase, you will see a secure download link containing the full source package (.zip) and your license key. You also get an automated GitHub repository invite so you can run `git pull` whenever updates are pushed.'
  },
  {
    q: 'Can I modify and customize the Python source code?',
    a: 'Yes! You receive 100% unminified, well-commented Python source code with modular architecture. You are free to customize, extend, or integrate it into your internal business pipelines.'
  },
  {
    q: 'What if I need help setting up?',
    a: 'Every package contains a detailed setup guide and step-by-step video. In addition, our ScriptGrid Digital developer support team replies via email and private GitHub discussions within 24 hours.'
  }
];
