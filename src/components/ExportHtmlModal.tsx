import React, { useState } from 'react';
import { STANDALONE_HTML_CODE } from '../standaloneHtml';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(STANDALONE_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = STANDALONE_HTML_CODE;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#141418] border border-cyan-500/40 rounded-xl p-6 sm:p-7 shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
              <i className="fa-brands fa-github"></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <span>Single-File `index.html` for GitHub Pages</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                  Ready to Host
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Self-contained HTML5 file with embedded CSS and FontAwesome CDN. Drop directly into any GitHub repository root or `gh-pages` branch.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-100 p-1.5 rounded-md text-lg cursor-pointer transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Action Bar */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="text-zinc-400 flex items-center gap-2">
            <i className="fa-solid fa-file-lines text-cyan-400"></i>
            <span>Size: ~18 KB &bull; Zero external build tools required</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer"
            >
              <i className={`fa-solid ${copied ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire HTML'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-sm cursor-pointer"
            >
              <i className={`fa-solid ${downloaded ? 'fa-check' : 'fa-download'}`}></i>
              <span>{downloaded ? 'Downloaded!' : 'Download index.html'}</span>
            </button>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 bg-[#09090b] border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-300 overflow-auto whitespace-pre selection:bg-cyan-900 selection:text-white">
          {STANDALONE_HTML_CODE}
        </div>

        {/* Footer instructions */}
        <div className="pt-3.5 mt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div>
            GitHub Pages: Settings &rarr; Pages &rarr; Branch: <code>main</code> / <code>root</code> &rarr; Save.
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-200 cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
