/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData.js';
import { ArrowRight, Sliders, Cpu, ShoppingBag } from 'lucide-react';

export const HowItWorks = ({ onOpenAuth }) => {
  const stepIcons = [
    <Sliders className="w-5 h-5 text-[#1f6b52]" key="1" />,
    <Cpu className="w-5 h-5 text-[#1f6b52]" key="2" />,
    <ShoppingBag className="w-5 h-5 text-[#1f6b52]" key="3" />,
  ];

  return (
    <section id="cara-kerja" className="py-16 lg:py-24 border-b border-[#dde3df] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-medium text-[#1f6b52] uppercase tracking-wider mb-2">
            Alur Pengguna Sederhana
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#1d2623] tracking-tight">
            Bagaimana DapurPintar AI Bekerja
          </h2>
          <p className="mt-4 text-base text-[#5b6762] leading-relaxed">
            Hanya butuh waktu kurang dari 2 menit untuk mengubah nominal budget di dompetmu menjadi daftar
            belanja siap pakai tanpa kebingungan.
          </p>
        </div>

        {/* 3-Step Horizontal / Stacked Swiss Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-[#f7f8f6] border border-[#dde3df] p-6 sm:p-8 rounded-lg flex flex-col justify-between"
            >
              <div>
                {/* Step Header with Oversized Numbering */}
                <div className="flex items-baseline justify-between border-b border-[#dde3df] pb-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-bold font-serif text-[#1f6b52] leading-none">
                    {step.step}
                  </span>
                  <div className="p-2 bg-[#ffffff] border border-[#dde3df] rounded-md">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1d2623] mb-2 font-serif">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#1f6b52] mb-3">
                  {step.summary}
                </div>
                <p className="text-sm text-[#5b6762] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Footer Micro-indicator */}
              <div className="mt-8 pt-4 border-t border-[#dde3df] flex items-center justify-between text-xs text-[#5b6762]">
                <span>Tahap {index + 1} dari 3</span>
                <span className="font-mono text-[#1d2623]">INSTAN</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 p-6 bg-[#f7f8f6] border border-[#dde3df] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#1d2623]">
            <span className="font-semibold">Ingin mencoba langsung alur perencanaannya?</span>{' '}
            <span className="text-[#5b6762]">Uji simulator interaktif di bagian fitur bawah ini atau buat akun.</span>
          </div>
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1f6b52] hover:bg-[#17523f] rounded-md transition-all shrink-0"
          >
            <span>Mulai Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
