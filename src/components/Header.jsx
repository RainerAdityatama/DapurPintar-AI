/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Masalah', href: '#masalah' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f7f8f6]/95 backdrop-blur-md border-b border-[#dde3df] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element in Source Serif 4) */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-[#1d2623] font-serif whitespace-nowrap shrink-0 hover:text-[#1f6b52] transition-colors"
          aria-label="DapurPintar AI Beranda"
        >
          DapurPintar AI
        </a>

        {/* Zone 2: Navigation Links (Single-Line Text Links with subtle hover) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5b6762]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#1d2623] hover:underline underline-offset-8 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenAuth('login')}
            className="text-sm font-medium text-[#1d2623] hover:text-[#1f6b52] px-3 py-2 transition-colors whitespace-nowrap"
          >
            Masuk
          </button>
          <button
            onClick={() => onOpenAuth('register')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1f6b52] rounded-md hover:bg-[#17523f] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-[#1f6b52] focus-visible:ring-offset-2"
          >
            <span>Daftar Gratis</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#1d2623] hover:bg-[#dde3df]/40 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#dde3df] bg-[#ffffff] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#1d2623] hover:bg-[#f7f8f6] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#dde3df] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-[#1d2623] border border-[#dde3df] rounded-md hover:bg-[#f7f8f6]"
            >
              Masuk ke Akun
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('register');
              }}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-[#1f6b52] rounded-md hover:bg-[#17523f]"
            >
              Daftar Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
