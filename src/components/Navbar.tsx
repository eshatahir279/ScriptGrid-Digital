import React from 'react';

interface NavbarProps {
  onOpenExportModal: () => void;
  currency: 'USD' | 'EUR' | 'GBP';
  onCurrencyChange: (c: 'USD' | 'EUR' | 'GBP') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExportModal, currency, onCurrencyChange }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a href="#" className="flex items-center gap-2.5 text-zinc-100 font-extrabold text-lg tracking-tight whitespace-nowrap shrink-0 group">
          <span className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <i className="fa-brands fa-python text-lg"></i>
          </span>
          <span className="font-sans">ScriptGrid Digital</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#featured-tools" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Tools
          </a>
          <a href="#terminal-demo" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Interactive CLI
          </a>
          <a href="#why-choose-us" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Why ScriptGrid
          </a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
          <a
            href="https://github.com/scriptgrid-digital"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <i className="fa-brands fa-github text-base"></i>
            <span>GitHub</span>
          </a>
        </nav>

        {/* Zone 3: Primary Action + Export Single File */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Currency Toggle */}
          <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-md p-0.5 text-xs font-mono">
            {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => onCurrencyChange(curr)}
                className={`px-2 py-1 rounded transition-colors ${
                  currency === curr ? 'bg-zinc-800 text-cyan-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenExportModal}
            title="Download or copy the raw single-file index.html for GitHub Pages"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700 hover:border-cyan-500/60 hover:text-white rounded-md transition-all whitespace-nowrap shrink-0"
          >
            <i className="fa-solid fa-code text-cyan-400"></i>
            <span className="hidden lg:inline">Export</span> index.html
          </button>

          <a
            href="#featured-tools"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-md shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Browse Tools</span>
          </a>
        </div>
      </div>
    </header>
  );
};
