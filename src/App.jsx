/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ProblemSolution } from './components/ProblemSolution.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { CoreFeatures } from './components/CoreFeatures.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { BottomCTA } from './components/BottomCTA.jsx';
import { Footer } from './components/Footer.jsx';
import { AuthModal } from './components/AuthModal.jsx';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('register');

  const handleOpenAuth = (mode = 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f6] text-[#1d2623] flex flex-col font-sans selection:bg-[#1f6b52] selection:text-white">
      {/* 1. Header Navigation */}
      <Header onOpenAuth={handleOpenAuth} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenAuth={() => handleOpenAuth('register')} />

        {/* 3. Problem vs Solution */}
        <ProblemSolution />

        {/* 4. How It Works (Alur Pengguna) */}
        <HowItWorks onOpenAuth={() => handleOpenAuth('register')} />

        {/* 5. Core Features (Fitur MVP & Interactive Simulator) */}
        <CoreFeatures onOpenAuth={() => handleOpenAuth('register')} />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Bottom CTA */}
        <BottomCTA onOpenAuth={() => handleOpenAuth('register')} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Supabase Registration & Login Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={handleCloseAuth}
      />
    </div>
  );
}
