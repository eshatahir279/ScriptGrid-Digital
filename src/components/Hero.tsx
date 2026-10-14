import React from 'react';

interface HeroProps {
  onBrowseClick: () => void;
  onOpenExportModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseClick, onOpenExportModal }) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-zinc-800/80">
      {/* Background radial aura */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(16, 185, 129, 0.12) 40%, transparent 70%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle top indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 mb-8">
          <i className="fa-solid fa-code text-[11px]"></i>
          <span>Production-Grade Python &bull; Full Source Code Ownership</span>
        </div>

        {/* Catchy Main Headline */}
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 tracking-tight leading-tight mb-6"
          style={{ textWrap: 'balance' }}
        >
          High-Performance{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Python Automation
          </span>{' '}
          & Data Tools
        </h1>

        {/* Short Sub-headline */}
        <p 
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10"
          style={{ textWrap: 'balance' }}
        >
          Engineered for international business owners, web scrapers, and data teams who need battle-tested desktop utilities, anti-bot extraction pipelines, and automated content engines with zero cloud telemetry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onBrowseClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_28px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
          >
            <i className="fa-solid fa-bolt text-zinc-950"></i>
            <span>Browse Featured Tools</span>
          </button>

          <a
            href="#terminal-demo"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-zinc-200 bg-zinc-900/90 border border-zinc-700/80 hover:border-zinc-500 hover:bg-zinc-850 transition-all"
          >
            <i className="fa-solid fa-terminal text-emerald-400"></i>
            <span>Test CLI Simulator</span>
          </a>

          <button
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-mono font-medium text-zinc-400 hover:text-cyan-400 bg-transparent border border-zinc-800 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <i className="fa-solid fa-file-code"></i>
            <span>Get Single-File index.html</span>
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-14 pt-8 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-circle-check text-emerald-400"></i>
            <span>100% Unminified Python Source</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-circle-check text-emerald-400"></i>
            <span>No Monthly Subscriptions</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <i className="fa-solid fa-circle-check text-emerald-400"></i>
            <span>Instant Zip & License Key</span>
          </div>
        </div>
      </div>
    </section>
  );
};
