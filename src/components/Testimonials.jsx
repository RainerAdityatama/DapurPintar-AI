/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData.js';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimoni" className="py-16 lg:py-24 border-b border-[#dde3df] bg-[#f7f8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-medium text-[#1f6b52] uppercase tracking-wider mb-2">
            Cerita Nyata Anak Kos
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#1d2623] tracking-tight">
            Bagaimana Anak Kos Mengatur Anggaran Tanpa Sengsara
          </h2>
          <p className="mt-4 text-base text-[#5b6762] leading-relaxed">
            Pengalaman nyata dari mahasiswa dan pekerja kos yang berhasil memangkas pengeluaran makan bulanan
            hingga 50% sekaligus menikmati masakan sehat buatan sendiri.
          </p>
        </div>

        {/* 2 Big Typographic Blockquotes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#dde3df] p-8 sm:p-10 rounded-lg flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#1f6b52] mb-6 opacity-60" />
                <blockquote className="text-base sm:text-lg text-[#1d2623] font-serif leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#dde3df] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-[#1d2623]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#5b6762]">
                    {t.role} · <span className="text-[#1d2623]">{t.location}</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 bg-[#e8f2ee] text-[#1f6b52] font-mono font-bold text-xs rounded border border-[#1f6b52]/20 self-start sm:self-auto">
                  {t.savingsMetric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
