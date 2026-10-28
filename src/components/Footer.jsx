/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer = ({ onOpenAuth }) => {
  return (
    <footer className="bg-[#f7f8f6] border-t border-[#dde3df] text-[#5b6762] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold font-serif text-[#1d2623] block mb-3">
              DapurPintar AI
            </span>
            <p className="text-sm text-[#5b6762] max-w-sm leading-relaxed mb-4">
              Asisten perencanaan menu berbasis AI untuk anak kos. Mengubah anggaran terbatas menjadi
              masakan variatif, lezat, dan bergizi tanpa pemborosan.
            </p>
            <div className="text-xs text-[#5b6762]">
              Inisiatif teknologi pangan & pengelolaan pengeluaran mahasiswa mandiri.
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#1d2623] uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#masalah" className="hover:text-[#1d2623] transition-colors">
                  Masalah Anak Kos
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-[#1d2623] transition-colors">
                  Alur Pengguna
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-[#1d2623] transition-colors">
                  Fitur MVP
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#1d2623] transition-colors">
                  Cerita Pengguna
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Info */}
          <div>
            <h4 className="text-xs font-semibold text-[#1d2623] uppercase tracking-wider mb-4">
              Akses Aplikasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenAuth('login')}
                  className="hover:text-[#1f6b52] transition-colors text-left"
                >
                  Masuk Akun Supabase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="hover:text-[#1f6b52] transition-colors text-left"
                >
                  Pendaftaran Baru (Gratis)
                </button>
              </li>
              <li>
                <span className="text-xs text-[#5b6762]">Dukungan: Supabase Auth & PostgreSQL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Technical Disclaimer */}
        <div className="pt-8 border-t border-[#dde3df] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5b6762]">
          <div>
            © {new Date().getFullYear()} DapurPintar AI. Hak cipta dilindungi undang-undang.
          </div>

          {/* Mandatory Technical Disclaimer */}
          <div className="text-center md:text-right text-[#5b6762] italic max-w-md">
            *Catatan Teknis: Harga yang digunakan adalah harga referensi, bukan harga pasar real-time.
          </div>
        </div>
      </div>
    </footer>
  );
};
