/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { TerminalPreview } from './components/TerminalPreview';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDrawer } from './components/ProductDrawer';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { PRODUCTS, Product } from './data/products';

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [selectedProductForCheckout, setSelectedProductForCheckout] = useState<Product | null>(null);
  const [selectedProductForDetails, setSelectedProductForDetails] = useState<Product | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleBrowseClick = () => {
    const el = document.getElementById('featured-tools');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'scraping' && p.id === 'anti-bot-scraper') ||
      (activeCategory === 'ai' && p.id === 'ai-content-engine') ||
      (activeCategory === 'desktop' && p.id === 'local-privacy-app');

    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100 flex flex-col font-sans selection:bg-cyan-900 selection:text-white">
      {/* Top Bar */}
      <Navbar
        onOpenExportModal={() => setIsExportModalOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onBrowseClick={handleBrowseClick}
          onOpenExportModal={() => setIsExportModalOpen(true)}
        />

        {/* Featured Projects Section */}
        <section id="featured-tools" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <i className="fa-solid fa-layer-group"></i>
                <span>Digital Software Catalog</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
                Featured Python Tools & Automation
              </h2>
              <p className="text-sm text-zinc-400 mt-1 max-w-xl">
                Ready-to-deploy desktop utilities and automation scripts with documented CLI flags, modular architectures, and perpetual lifetime licenses.
              </p>
            </div>

            {/* Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-zinc-500 pointer-events-none text-xs">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  placeholder="Filter by feature or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 rounded-lg pl-8 pr-3 py-2 outline-none focus:border-cyan-500/50 transition-colors w-full sm:w-56"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-zinc-500 hover:text-zinc-300 text-xs cursor-pointer"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-medium">
                {[
                  { id: 'all', label: 'All Tools' },
                  { id: 'scraping', label: 'Scraping' },
                  { id: 'ai', label: 'AI Writing' },
                  { id: 'desktop', label: 'Desktop' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      activeCategory === tab.id
                        ? 'bg-zinc-800 text-cyan-400 font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onBuyNow={(prod) => setSelectedProductForCheckout(prod)}
                  onInspectDetails={(prod) => setSelectedProductForDetails(prod)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#161619] border border-zinc-800 rounded-xl">
              <i className="fa-solid fa-filter-circle-xmark text-3xl text-zinc-500 mb-3 block"></i>
              <h3 className="text-base font-semibold text-zinc-300">No matching tools found</h3>
              <p className="text-xs text-zinc-500 mt-1">Try resetting your search query or filter tags.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Quick Bundle Banner */}
          <div className="mt-12 p-6 sm:p-7 rounded-xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-emerald-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 mb-2">
                <i className="fa-solid fa-sparkles"></i>
                <span>All-Access Developer Bundle</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                Get All 3 Python Automation Packages for Just $129
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Save $38 compared to individual tool purchases. Includes all three source code repos, priority Slack support, and lifetime updates.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedProductForCheckout({
                  id: 'all-access-bundle',
                  title: 'ScriptGrid Digital All-Access Trio Bundle',
                  tagline: 'All 3 tools: Scraper + AI Engine + Privacy Desktop App',
                  description: 'The complete Python automation arsenal: Multi-site anti-bot scraper, automated WordPress AI engine, and local offline document sanitizer.',
                  category: 'Full Suite',
                  price: 129,
                  icon: 'fa-solid fa-boxes-stacked',
                  features: [
                    'All 3 Full Python Packages',
                    'Direct Private GitHub Access',
                    'Step-by-Step 4K Video Guides',
                    'Lifetime Minor & Major Updates',
                    'Priority Developer Support'
                  ],
                  cliCommand: 'python -m scriptgrid --bundle-all',
                  cliOutput: ['[INFO] All 3 ScriptGrid automation packages verified and unlocked.'],
                  requirements: ['Python 3.10+'],
                  includedFiles: ['Full_ScriptGrid_Trio_Package.zip']
                });
              }}
              className="px-6 py-3 rounded-lg text-xs font-bold text-zinc-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer transition-all shrink-0"
            >
              <i className="fa-solid fa-gift mr-1.5"></i>
              Get Full Trio Bundle ($129)
            </button>
          </div>
        </section>

        {/* Live Terminal Demo */}
        <TerminalPreview />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CheckoutModal
        product={selectedProductForCheckout}
        currency={currency}
        onClose={() => setSelectedProductForCheckout(null)}
      />

      <ProductDrawer
        product={selectedProductForDetails}
        onClose={() => setSelectedProductForDetails(null)}
        onBuyNow={(prod) => {
          setSelectedProductForDetails(null);
          setSelectedProductForCheckout(prod);
        }}
      />

      <ExportHtmlModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
