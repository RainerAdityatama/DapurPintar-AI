/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, User, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AuthModal = ({
  isOpen,
  initialMode = 'register',
  onClose,
}) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [budgetGoal, setBudgetGoal] = useState('150000');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync mode when initialMode changes
  useEffect(() => {
    setMode(initialMode);
    setIsSuccess(false);
    setErrorMsg('');
  }, [initialMode, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Masukkan alamat email yang valid.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Kata sandi minimal 6 karakter.');
      return;
    }
    if (mode === 'register' && !name.trim()) {
      setErrorMsg('Nama lengkap wajib diisi.');
      return;
    }

    setIsSubmitting(true);
    // Simulate Supabase Auth request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleGoogleAuth = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1d2623]/60 backdrop-blur-xs transition-opacity"
    >
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-md bg-[#ffffff] border border-[#dde3df] rounded-lg shadow-xl overflow-hidden z-10 transition-all">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#dde3df] flex items-center justify-between bg-[#f7f8f6]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1f6b52]">
            <ShieldCheck className="w-4 h-4" />
            <span>Supabase Auth & Database</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#5b6762] hover:text-[#1d2623] hover:bg-[#dde3df]/40 transition-colors"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-[#e8f2ee] text-[#1f6b52] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1f6b52]/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-[#1d2623] mb-2">
                {mode === 'register' ? 'Pendaftaran Berhasil!' : 'Berhasil Masuk!'}
              </h3>
              <p className="text-sm text-[#5b6762] mb-6 leading-relaxed">
                {mode === 'register'
                  ? `Akun atas nama ${name || email} telah terdaftar di Supabase Auth. Sesi generator menu pintar anak kos kamu telah aktif.`
                  : `Selamat datang kembali di DapurPintar AI. Mengarahkan ke dasbor menu kosanmu...`}
              </p>
              <div className="p-3 bg-[#f7f8f6] border border-[#dde3df] rounded text-xs text-[#1d2623] mb-6 font-mono">
                Target Anggaran: Rp {parseInt(budgetGoal, 10).toLocaleString('id-ID')} / minggu
              </div>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-[#1f6b52] hover:bg-[#17523f] text-white font-medium text-sm rounded-md transition-colors"
              >
                Lanjutkan ke Generator Menu
              </button>
            </div>
          ) : (
            <>
              {/* Heading */}
              <div className="mb-6">
                <h3 id="auth-modal-title" className="text-2xl font-bold font-serif text-[#1d2623]">
                  {mode === 'register' ? 'Mulai Gratis di DapurPintar AI' : 'Masuk ke Akun Anda'}
                </h3>
                <p className="text-xs text-[#5b6762] mt-1.5 leading-relaxed">
                  Aplikasi ini 100% gratis. Masuk untuk menyimpan riwayat menu, estimasi belanja, dan preferensi dapur kosmu.
                </p>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="flex border border-[#dde3df] p-1 rounded-md mb-6 bg-[#f7f8f6]">
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded transition-colors ${
                    mode === 'register'
                      ? 'bg-[#ffffff] text-[#1d2623] shadow-xs'
                      : 'text-[#5b6762] hover:text-[#1d2623]'
                  }`}
                >
                  Daftar Akun Baru
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMsg('');
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded transition-colors ${
                    mode === 'login'
                      ? 'bg-[#ffffff] text-[#1d2623] shadow-xs'
                      : 'text-[#5b6762] hover:text-[#1d2623]'
                  }`}
                >
                  Sudah Punya Akun (Masuk)
                </button>
              </div>

              {/* Quick Google SSO */}
              <button
                type="button"
                onClick={handleGoogleAuth}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-[#dde3df] hover:bg-[#f7f8f6] rounded-md text-xs font-semibold text-[#1d2623] transition-colors mb-4"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Lanjutkan dengan Akun Google</span>
              </button>

              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#dde3df]" />
                </div>
                <span className="relative bg-[#ffffff] px-2 text-[11px] text-[#5b6762] uppercase tracking-wider">
                  atau gunakan email
                </span>
              </div>

              {/* Form Error */}
              {errorMsg && (
                <div className="mb-4 p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                  {errorMsg}
                </div>
              )}

              {/* Auth Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2623] mb-1">
                      Nama Lengkap / Panggilan
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6762]" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Rian Pratama"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-[#dde3df] rounded-md focus:outline-none focus:border-[#1f6b52] bg-[#ffffff]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#1d2623] mb-1">
                    Email Mahasiswa / Pribadi
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6762]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@kampus.ac.id"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#dde3df] rounded-md focus:outline-none focus:border-[#1f6b52] bg-[#ffffff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d2623] mb-1">
                    Kata Sandi (Password)
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6762]" />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimal 6 karakter"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#dde3df] rounded-md focus:outline-none focus:border-[#1f6b52] bg-[#ffffff]"
                    />
                  </div>
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#1d2623] mb-1">
                      Estimasi Budget Makan Mingguan (Rp)
                    </label>
                    <select
                      value={budgetGoal}
                      onChange={(e) => setBudgetGoal(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-[#dde3df] rounded-md focus:outline-none focus:border-[#1f6b52] bg-[#ffffff]"
                    >
                      <option value="100000">Rp 100.000 / minggu (Super Hemat)</option>
                      <option value="150000">Rp 150.000 / minggu (Standar Kos Sehat)</option>
                      <option value="200000">Rp 200.000 / minggu (Cukup & Bergizi)</option>
                      <option value="300000">Rp 300.000 / minggu (Bebas Variasi)</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1f6b52] hover:bg-[#17523f] disabled:opacity-60 text-white font-semibold text-sm rounded-md transition-all shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Memproses dengan Supabase...</span>
                  ) : (
                    <>
                      <span>{mode === 'register' ? 'Daftar Akun Gratis' : 'Masuk ke Aplikasi'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Disclaimer footer */}
              <div className="mt-5 text-[11px] text-center text-[#5b6762] leading-relaxed">
                Dengan melanjutkan, kamu menyetujui Ketentuan Penggunaan DapurPintar AI. Data akun diamankan dengan standar enkripsi Supabase Auth.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
