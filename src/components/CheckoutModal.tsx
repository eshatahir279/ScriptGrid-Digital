import React, { useState } from 'react';
import { Product } from '../data/products';

interface CheckoutModalProps {
  product: Product | null;
  currency: 'USD' | 'EUR' | 'GBP';
  onClose: () => void;
}

const CURRENCY_SYMBOLS: Record<'USD' | 'EUR' | 'GBP', { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
};

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, currency, onClose }) => {
  const [email, setEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  if (!product) return null;

  const { symbol, rate } = CURRENCY_SYMBOLS[currency];
  const convertedPrice = Math.round(product.price * rate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Generate pseudo-cryptographic license key
    const randHex = () => Math.random().toString(36).substring(2, 6).toUpperCase();
    const generatedKey = `SCRIPTGRID-${randHex()}-${randHex()}-${randHex()}-PRO`;
    setLicenseKey(generatedKey);
    setIsCompleted(true);
  };

  const handleDownloadSample = () => {
    setDownloadTriggered(true);
    // Create and trigger direct text file download of Python quickstart package
    const sampleScript = `"""
ScriptGrid Digital - ${product.title}
License Key: ${licenseKey || 'SCRIPTGRID-DEMO-LICENSE-KEY'}
Generated For: ${email || 'customer@company.com'}
Date: ${new Date().toISOString()}
"""

import sys
import time

print("[ScriptGrid] Initializing ${product.title}...")
print("[ScriptGrid] License Status: ACTIVE & PERPETUAL")
print("[ScriptGrid] Executing sample routine:")
time.sleep(0.5)
print("[ScriptGrid] System check passed. Enjoy your local automation!")
`;

    const blob = new Blob([sampleScript], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.id}_quickstart.py`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#18181c] border border-cyan-500/40 rounded-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 p-1 rounded-md text-lg transition-colors cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg shrink-0">
                <i className={product.icon}></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 leading-snug">
                  Instant Checkout & Delivery
                </h3>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl font-bold font-mono text-cyan-400">
                    {symbol}{convertedPrice}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    One-time &bull; Lifetime License & Updates
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 mb-6 font-mono space-y-1">
              <div className="text-zinc-400">Selected Package:</div>
              <div className="text-zinc-100 font-semibold">{product.title}</div>
              <div className="text-emerald-400 pt-1 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check"></i>
                <span>Includes full unminified Python source code + video tutorial</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Work / Developer Email
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 pointer-events-none">
                    <i className="fa-solid fa-envelope text-xs"></i>
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-[#121214] border border-zinc-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-zinc-100 text-sm rounded-lg pl-9 pr-3 py-2.5 outline-none transition-colors"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  License key and private GitHub invite will be dispatched instantly to this address.
                </p>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Payment Method (Instant Simulated)
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-cyan-500/40 flex items-center gap-2">
                    <i className="fa-brands fa-stripe text-cyan-400 text-lg"></i>
                    <span>Credit / Debit Card</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-2">
                    <i className="fa-brands fa-github text-zinc-400 text-base"></i>
                    <span>GitHub Sponsors</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg text-sm font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-lock"></i>
                  <span>Complete Purchase ({symbol}{convertedPrice})</span>
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-[11px] text-zinc-500 flex items-center justify-center gap-3">
              <span><i className="fa-solid fa-shield-halved text-emerald-400 mr-1"></i> 256-Bit SSL</span>
              <span>&bull;</span>
              <span>14-Day Money Back Guarantee</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-1">
              Order Confirmed & Delivered!
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              Receipt sent to <span className="text-zinc-200 font-semibold">{email}</span>
            </p>

            {/* License Key Display */}
            <div className="p-4 rounded-lg bg-[#121214] border border-emerald-500/30 text-left mb-6">
              <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center justify-between">
                <span>YOUR CRYPTOGRAPHIC LICENSE KEY:</span>
                <span className="text-emerald-400 font-bold">PERPETUAL</span>
              </div>
              <div className="font-mono text-sm text-cyan-400 bg-black/60 p-2.5 rounded border border-zinc-800 break-all select-all">
                {licenseKey}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadSample}
                className="w-full py-3 px-4 rounded-lg text-sm font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className={`fa-solid ${downloadTriggered ? 'fa-check' : 'fa-download'}`}></i>
                <span>{downloadTriggered ? 'Package Downloaded!' : `Download Source (${product.id}.zip)`}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Close & Return to Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
