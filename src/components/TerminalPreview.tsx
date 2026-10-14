import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';

export const TerminalPreview: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>(selectedProduct.cliOutput);

  const handleRunSimulation = () => {
    setIsRunning(true);
    setDisplayedLogs([]);
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < selectedProduct.cliOutput.length) {
        const nextLine = selectedProduct.cliOutput[currentIdx];
        setDisplayedLogs((prev) => [...prev, nextLine]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 280);
  };

  const handleSelectProduct = (p: Product) => {
    setSelectedProduct(p);
    setDisplayedLogs(p.cliOutput);
    setIsRunning(false);
  };

  return (
    <section id="terminal-demo" className="py-20 bg-[#121212] border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            Developer Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Live Command-Line Simulator
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Switch between tools to preview syntax, CLI arguments, and real-time execution outputs.
          </p>
        </div>

        {/* Tool Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => handleSelectProduct(prod)}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                selectedProduct.id === prod.id
                  ? 'bg-zinc-800 text-cyan-400 border border-cyan-500/50 shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <i className={prod.icon}></i>
              <span className="truncate max-w-[200px] sm:max-w-none">{prod.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Terminal Box */}
        <div className="bg-[#0c0d10] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          {/* Header Bar */}
          <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-zinc-400">
                bash &mdash; scriptgrid-venv (python 3.11.8)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <i className={`fa-solid ${isRunning ? 'fa-spinner fa-spin' : 'fa-play'}`}></i>
                <span>{isRunning ? 'Executing...' : 'Re-run Demo'}</span>
              </button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
            {/* Command Prompt */}
            <div className="flex items-center gap-2 text-zinc-300 mb-3 pb-2 border-b border-zinc-800/50">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-cyan-300">{selectedProduct.cliCommand}</span>
            </div>

            {/* Logs */}
            <div className="space-y-1.5">
              {displayedLogs.map((log, index) => {
                const isSuccess = log.includes('[SUCCESS]') || log.includes('[OK]');
                const isExtract = log.includes('[EXTRACT]') || log.includes('[SYNTHESIS]') || log.includes('[OCR]');
                const isAlert = log.includes('[WEBHOOK]') || log.includes('[POST]') || log.includes('[SECURITY]');

                return (
                  <div
                    key={index}
                    className={`transition-opacity duration-200 ${
                      isSuccess
                        ? 'text-emerald-400 font-semibold'
                        : isExtract
                        ? 'text-cyan-400'
                        : isAlert
                        ? 'text-yellow-300'
                        : 'text-zinc-400'
                    }`}
                  >
                    {log}
                  </div>
                );
              })}
              {isRunning && (
                <div className="text-zinc-500 animate-pulse flex items-center gap-1">
                  <span>&gt; Processing task worker pipeline...</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer requirements */}
          <div className="bg-zinc-900/50 border-t border-zinc-800/60 px-4 py-2.5 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-microchip text-zinc-400"></i>
              <span>Req: {selectedProduct.requirements.join(' &bull; ')}</span>
            </div>
            <div>
              <span className="text-emerald-400">Zero Cloud Dependency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
