import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  currency: 'USD' | 'EUR' | 'GBP';
  onBuyNow: (product: Product) => void;
  onInspectDetails: (product: Product) => void;
}

const CURRENCY_SYMBOLS: Record<'USD' | 'EUR' | 'GBP', { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onBuyNow,
  onInspectDetails,
}) => {
  const { symbol, rate } = CURRENCY_SYMBOLS[currency];
  const convertedPrice = Math.round(product.price * rate);

  return (
    <div className="relative bg-[#1a1a1e] border border-zinc-800 hover:border-cyan-500/50 rounded-xl p-6 sm:p-7 flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4),0_0_24px_rgba(6,182,212,0.12)] group">
      {/* Optional Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-400 border border-cyan-500/30">
            {product.badge}
          </span>
        </div>
      )}

      {/* Product Icon */}
      <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 text-xl mb-5 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
        <i className={product.icon}></i>
      </div>

      {/* Category */}
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
        {product.category}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-zinc-100 tracking-tight leading-snug mb-3 group-hover:text-cyan-300 transition-colors">
        {product.title}
      </h3>

      {/* Tagline */}
      <p className="text-xs text-cyan-400/90 font-medium mb-3">
        {product.tagline}
      </p>

      {/* Brief description */}
      <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">
        {product.description}
      </p>

      {/* List of key features (badge tags) */}
      <div className="mb-6">
        <div className="text-xs font-mono text-zinc-500 mb-2.5">Key Capabilities:</div>
        <div className="flex flex-wrap gap-1.5">
          {product.features.map((feature, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800"
            >
              <i className="fa-solid fa-check text-[10px] text-emerald-400"></i>
              <span>{feature}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Price and Action Buttons */}
      <div className="pt-5 border-t border-zinc-800/80 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] text-zinc-500 font-mono">One-time license</div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold font-mono text-zinc-100 tabular-nums">
              {symbol}{convertedPrice}
            </span>
            <span className="text-xs text-zinc-500 font-mono">perpetual</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onInspectDetails(product)}
            title="View CLI usage & included files"
            className="p-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-xs font-mono cursor-pointer"
          >
            <i className="fa-solid fa-terminal"></i>
          </button>

          <button
            onClick={() => onBuyNow(product)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-[0_2px_12px_rgba(6,182,212,0.3)] transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="fa-solid fa-download"></i>
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
