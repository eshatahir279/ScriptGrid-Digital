import React, { useState } from 'react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#121212]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Everything you need to know about licensing, platform support, and our source code delivery.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#18181c] border border-zinc-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-200">
                    {faq.q}
                  </span>
                  <span className="text-cyan-400 text-sm font-mono shrink-0">
                    <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
