import React from 'react';
import { WHY_CHOOSE_US } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-[#161619] border-t border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            Engineering Value
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Why Choose ScriptGrid Digital
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            We build software for developers and companies who value infrastructure sovereignty, transparent code, and zero telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-[#1e1e23] border border-zinc-800 hover:border-emerald-500/40 rounded-xl p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl mb-5 group-hover:scale-105 transition-transform">
                  <i className={item.icon}></i>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-1">
                  {item.title}
                </h3>
                
                <p className="text-xs text-emerald-400/90 font-mono mb-3">
                  {item.subtitle}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <i className="fa-solid fa-shield-check text-emerald-400"></i>
                <span className="truncate">{item.proof}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture Strip */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg shrink-0">
              <i className="fa-solid fa-code-fork"></i>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-200">
                Direct Git Integration & Collaborative Access
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Each license grants access to private GitHub repositories for automated pull requests and release tagging.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-box text-cyan-400"></i>
              <span>wheel / pip installable</span>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fa-solid fa-cube text-emerald-400"></i>
              <span>Docker & venv ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
