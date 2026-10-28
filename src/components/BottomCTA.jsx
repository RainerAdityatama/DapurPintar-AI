/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BottomCTA = ({ onOpenAuth }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#1f6b52] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#e8f2ee] font-medium mb-4">
          <Sparkles className="w-4 h-4 text-[#e8f2ee]" />
          <span>Akses Gratis Selamanya Untuk Anak Kos</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight tracking-tight mb-6 max-w-3xl mx-auto text-balance">
          Siap mengubah cara kamu mengatur uang makan bulanan?
        </h2>

        <p className="text-base sm:text-lg text-[#e8f2ee] max-w-2xl mx-auto mb-10 leading-relaxed">
          Bergabunglah sekarang. Masukkan anggaran mingguanmu, biarkan AI menyusun 3 pilihan menu terbaik,
          dan nikmati daftar belanja terkurasi tanpa pusing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#1f6b52] bg-white hover:bg-[#f7f8f6] active:scale-[0.98] rounded-md transition-all shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f6b52]"
          >
            <span>Coba DapurPintar AI Sekarang</span>
            <ArrowRight className="w-5 h-5 text-[#1f6b52]" />
          </button>
        </div>

        <div className="mt-8 text-xs text-[#e8f2ee]/80 flex items-center justify-center gap-6">
          <span>Tanpa kartu kredit</span>
          <span>·</span>
          <span>Proses daftar 30 detik</span>
          <span>·</span>
          <span>Supabase Auth aman</span>
        </div>
      </div>
    </section>
  );
};
