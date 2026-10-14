import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0d10] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-zinc-100 font-bold text-lg mb-3">
              <span className="w-7 h-7 rounded-md bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm">
                <i className="fa-brands fa-python"></i>
              </span>
              <span>ScriptGrid Digital</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mb-6">
              High-Performance Python Automation & Data Tools for international business owners, web scrapers, and data engineers worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/scriptgrid-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-750 transition-colors"
                title="GitHub Repository"
              >
                <i className="fa-brands fa-github text-base"></i>
              </a>
              <a
                href="mailto:support@scriptgriddigital.com"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-750 transition-colors"
                title="Email Support"
              >
                <i className="fa-solid fa-envelope text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#featured-tools" className="hover:text-cyan-400 transition-colors">
                  Anti-Bot Web Scraper
                </a>
              </li>
              <li>
                <a href="#featured-tools" className="hover:text-cyan-400 transition-colors">
                  AI Content Engine
                </a>
              </li>
              <li>
                <a href="#featured-tools" className="hover:text-cyan-400 transition-colors">
                  Local Privacy Desktop App
                </a>
              </li>
              <li>
                <a href="#terminal-demo" className="hover:text-cyan-400 transition-colors">
                  Live CLI Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Support and Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200 mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-cyan-400 text-xs"></i>
                <a href="mailto:support@scriptgriddigital.com" className="hover:text-cyan-400 transition-colors">
                  support@scriptgriddigital.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-brands fa-github text-zinc-400 text-xs"></i>
                <a
                  href="https://github.com/scriptgrid-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  github.com/scriptgrid-digital
                </a>
              </li>
              <li className="text-xs text-emerald-400 font-mono pt-1 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check"></i>
                <span>Direct dev support &lt; 24h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; 2026 ScriptGrid Digital. All rights reserved.
          </div>
          <div>
            Optimized for GitHub Pages &bull; Python 3.10+ Native
          </div>
        </div>
      </div>
    </footer>
  );
};
