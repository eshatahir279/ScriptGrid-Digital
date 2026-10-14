import React from 'react';
import { Product } from '../data/products';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
  onBuyNow: (p: Product) => void;
}

export const ProductDrawer: React.FC<ProductDrawerProps> = ({ product, onClose, onBuyNow }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#16161a] border border-zinc-700 rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 p-1.5 rounded-md text-lg transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 text-xl shrink-0">
            <i className={product.icon}></i>
          </div>
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {product.category}
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mt-0.5">
              {product.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Included Files in Archive */}
        <div className="mb-6">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i className="fa-solid fa-folder-tree text-cyan-400"></i>
            <span>Included Files in Source Archive (.zip)</span>
          </div>
          <div className="bg-black/50 border border-zinc-800 rounded-lg p-3 font-mono text-xs text-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.includedFiles.map((file, i) => (
              <div key={i} className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200">
                <i className={`fa-solid ${file.endsWith('.py') ? 'fa-file-code text-cyan-400' : file.endsWith('.pdf') ? 'fa-file-pdf text-red-400' : 'fa-file text-emerald-400'}`}></i>
                <span>{file}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CLI Command Example */}
        <div className="mb-6">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i className="fa-solid fa-terminal text-emerald-400"></i>
            <span>CLI Invocation Syntax</span>
          </div>
          <div className="bg-[#0b0c0e] border border-zinc-800 rounded-lg p-3.5 font-mono text-xs text-cyan-300 overflow-x-auto">
            $ {product.cliCommand}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i className="fa-solid fa-gears text-zinc-400"></i>
            <span>Runtime Compatibility</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.requirements.map((req, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-500 font-mono">One-time price:</span>
            <div className="text-xl font-bold font-mono text-zinc-100">
              ${product.price}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800 cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBuyNow(product);
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Purchase License (${product.price})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
