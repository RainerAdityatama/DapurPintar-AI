/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, ChefHat } from 'lucide-react';

export const Hero = ({ onOpenAuth }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#dde3df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 Cols (Typographic dominance, Swiss discipline) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#1f6b52] uppercase tracking-wider mb-4">
              <span>Perencanaan Menu Cerdas</span>
              <span aria-hidden="true">·</span>
              <span>Khusus Anak Kos</span>
              <span aria-hidden="true">·</span>
              <span>100% Gratis</span>
            </div>

            {/* H1 Headline in Source Serif 4 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1d2623] font-serif leading-[1.15] tracking-tight mb-6 text-balance">
              Masak Hemat & Bervariasi, Tanpa Pusing Mikir Menu.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#5b6762] leading-relaxed mb-8 max-w-2xl">
              Asisten perencanaan menu berbasis AI untuk anak kos: dapatkan variasi masakan,
              estimasi uang belanja, dan daftar belanja dalam satu alur.
            </p>

            {/* Primary Action Button and trust note */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenAuth}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white bg-[#1f6b52] hover:bg-[#17523f] active:scale-[0.99] rounded-md transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#1f6b52] focus-visible:ring-offset-2"
              >
                <span>Mulai Rencanakan Menu (Gratis)</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-[#1d2623] hover:text-[#1f6b52] hover:bg-[#ffffff] border border-[#dde3df] rounded-md transition-all"
              >
                Lihat Cara Kerja
              </a>
            </div>
          </div>

          {/* Right Column: 5 Cols (High-Fidelity Visual Asset + Swiss Info Box) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#ffffff] border border-[#dde3df] p-3 rounded-lg shadow-sm">
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#e8f2ee] border border-[#dde3df]">
                {!imgError ? (
                  <img
                    src="/src/assets/images/hero_kos_meal_prep_1793104917341.jpg"
                    alt="Bahan segar masakan kos: tempe, tahu, sayuran hijau, telur, dan cabai"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#f7f8f6]">
                    <ChefHat className="w-10 h-10 text-[#1f6b52] mb-2" />
                    <span className="font-serif font-semibold text-[#1d2623]">Meal Prep Hemat Anak Kos</span>
                    <span className="text-xs text-[#5b6762] mt-1">Variasi masakan lezat dalam anggaran terkontrol</span>
                  </div>
                )}
                
                {/* Floating Micro-Badge */}
                <div className="absolute top-3 left-3 bg-[#ffffff]/95 backdrop-blur-sm border border-[#dde3df] px-3 py-1.5 rounded text-xs font-medium text-[#1d2623] flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#1f6b52]" />
                  <span>3 Pilihan Resep / Slot</span>
                </div>
              </div>

              {/* Swiss Data Ledger Under Image */}
              <div className="p-4 mt-1 bg-[#ffffff]">
                <div className="flex items-center justify-between border-b border-[#dde3df] pb-2 text-xs font-medium text-[#5b6762]">
                  <span>CONTOH ALOKASI HARIAN</span>
                  <span className="text-[#1f6b52] font-semibold">STATUS: SESUAI BUDGET</span>
                </div>
                <div className="pt-3 space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1d2623]">Pagi: Nasi Orak-Arik Buncis</span>
                    <span className="font-mono text-xs tabular-nums text-[#5b6762]">Rp 12.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1d2623]">Siang: Tempe Mendoan + Kangkung</span>
                    <span className="font-mono text-xs tabular-nums text-[#5b6762]">Rp 15.500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1d2623]">Malam: Tahu Balado Kemangi</span>
                    <span className="font-mono text-xs tabular-nums text-[#5b6762]">Rp 11.500</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#dde3df] font-semibold text-[#1d2623]">
                    <span>Estimasi Uang Belanja</span>
                    <span className="font-mono tabular-nums text-[#1f6b52]">Rp 39.000 / hari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
