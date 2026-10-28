/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CORE_FEATURES_LIST, SAMPLE_MEAL_SLOTS } from '../data/mockData.js';
import {
  Sparkles,
  Calculator,
  ListChecks,
  RefreshCw,
  Check,
  Clock,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';

export const CoreFeatures = ({ onOpenAuth }) => {
  // Interactive Simulator State
  const [mealSlots, setMealSlots] = useState(SAMPLE_MEAL_SLOTS);
  const [activeSlotId, setActiveSlotId] = useState('siang');
  
  // Track items marked as already owned in kos
  const [ownedItems, setOwnedItems] = useState({
    'Bawang merah & putih': true,
    'Kecap asin & merica': true,
    'Saus tiram sachet': true,
    'Quick Oat instant': true,
    'Abon sapi / ayam kos': true,
    'Beras kosan': true,
    'Minyak & daun jeruk': true,
    'Minyak goreng & garam': true,
    'Bawang putih geprek': true,
    'Bumbu kaldu bubuk & lada': true,
    'Bawang goreng tabur': true,
    'Sambal terasi sachet': true,
    'Mie instan kuah/goreng': true,
    'Minyak kelapa kosan': true,
  });

  const [imgError, setImgError] = useState(false);

  // Active slot object
  const currentSlot = mealSlots.find((s) => s.slotId === activeSlotId) || mealSlots[0];
  const selectedRecipe = currentSlot.options[currentSlot.selectedOptionIndex];

  // Handler for Single-Slot Swap (Requirement #4)
  const handleSelectRecipe = (slotId, optionIndex) => {
    setMealSlots((prev) =>
      prev.map((slot) =>
        slot.slotId === slotId
          ? { ...slot, selectedOptionIndex: optionIndex }
          : slot
      )
    );
  };

  // Toggle owned state for an ingredient
  const toggleOwned = (name) => {
    setOwnedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Calculate consolidated grocery list and total costs
  const allSelectedRecipes = mealSlots.map(
    (slot) => slot.options[slot.selectedOptionIndex]
  );

  // Aggregate ingredients across all 3 selected meals
  const groceryItemsMap = new Map();

  allSelectedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ing) => {
      const isOwned = !!ownedItems[ing.name];
      if (groceryItemsMap.has(ing.name)) {
        const existing = groceryItemsMap.get(ing.name);
        groceryItemsMap.set(ing.name, {
          ...existing,
          cost: existing.cost + ing.cost,
        });
      } else {
        groceryItemsMap.set(ing.name, {
          name: ing.name,
          quantity: ing.quantity,
          cost: ing.cost,
          isOwned,
        });
      }
    });
  });

  const consolidatedGroceryList = Array.from(groceryItemsMap.values());
  const itemsToBuy = consolidatedGroceryList.filter((item) => !item.isOwned);
  const totalCostToSpend = itemsToBuy.reduce((sum, item) => sum + item.cost, 0);
  const totalSavedByKosanStok = consolidatedGroceryList
    .filter((item) => item.isOwned)
    .reduce((sum, item) => sum + item.cost, 0);

  const featureIcons = [
    <Sparkles className="w-5 h-5 text-[#1f6b52]" key="1" />,
    <Calculator className="w-5 h-5 text-[#1f6b52]" key="2" />,
    <ListChecks className="w-5 h-5 text-[#1f6b52]" key="3" />,
    <RefreshCw className="w-5 h-5 text-[#1f6b52]" key="4" />,
  ];

  return (
    <section id="fitur" className="py-16 lg:py-24 border-b border-[#dde3df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-medium text-[#1f6b52] uppercase tracking-wider mb-2">
            Spesifikasi Fitur MVP
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#1d2623] tracking-tight">
            Dirancang Presisi untuk Kebutuhan Anak Kos
          </h2>
          <p className="mt-4 text-base text-[#5b6762] leading-relaxed">
            Empat pilar fungsional yang memastikan kamu bisa makan enak, bergizi, dan bervariasi tanpa
            pernah khawatir uang saku jebol sebelum tanggal gajian atau kiriman bulanan.
          </p>
        </div>

        {/* 4 Feature Cards (Swiss Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {CORE_FEATURES_LIST.map((feat, idx) => (
            <div
              key={feat.number}
              className="bg-[#ffffff] border border-[#dde3df] p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:border-[#1f6b52]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#dde3df] mb-5">
                  <span className="text-2xl font-serif font-bold text-[#1f6b52]">
                    {feat.number}
                  </span>
                  <div className="p-2 bg-[#f7f8f6] border border-[#dde3df] rounded">
                    {featureIcons[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1d2623] font-serif mb-2">
                  {feat.title}
                </h3>
                <div className="text-xs font-semibold text-[#1f6b52] mb-3">
                  {feat.summary}
                </div>
                <p className="text-sm text-[#5b6762] leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#dde3df] text-xs text-[#1d2623] font-medium flex items-start gap-2 bg-[#f7f8f6]/60 p-3 rounded">
                <span className="text-[#1f6b52] font-bold">Dampak:</span>
                <span>{feat.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Feature Demo: Live Meal Planner & Budget Calculator */}
        <div className="bg-[#ffffff] border border-[#dde3df] rounded-lg p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#dde3df] gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1f6b52] uppercase tracking-wider mb-1">
                <span>Simulasi Interaktif Langsung</span>
                <span aria-hidden="true">·</span>
                <span>Coba Di Sini</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1d2623]">
                Uji Coba Cara Kerja 3 Pilihan & Estimasi Belanja
              </h3>
              <p className="text-sm text-[#5b6762] mt-1">
                Pilih slot makan, klik alternatif resep (perencanaan fleksibel), dan centang bahan yang sudah kamu miliki di kos.
              </p>
            </div>

            {/* Total Budget Calculator Display */}
            <div className="bg-[#f7f8f6] border border-[#dde3df] px-5 py-3 rounded-md shrink-0 flex flex-col justify-center">
              <span className="text-xs font-medium text-[#5b6762]">TOTAL PERKIRAAN BELANJA</span>
              <div className="text-2xl font-bold font-mono text-[#1f6b52] tabular-nums">
                Rp {totalCostToSpend.toLocaleString('id-ID')}
              </div>
              <span className="text-[11px] text-[#5b6762]">
                Hemat Rp {totalSavedByKosanStok.toLocaleString('id-ID')} dari stok kos
              </span>
            </div>
          </div>

          {/* Slot Tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {mealSlots.map((slot) => {
              const active = slot.slotId === activeSlotId;
              const chosen = slot.options[slot.selectedOptionIndex];
              return (
                <button
                  key={slot.slotId}
                  onClick={() => setActiveSlotId(slot.slotId)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                    active
                      ? 'bg-[#1f6b52] text-white border-[#1f6b52]'
                      : 'bg-[#f7f8f6] text-[#1d2623] border-[#dde3df] hover:border-[#1f6b52]'
                  }`}
                >
                  <span>{slot.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-mono ${
                      active ? 'bg-white/20 text-white' : 'bg-white text-[#5b6762]'
                    }`}
                  >
                    {chosen.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3 Choices Selection Grid (Core Feature 1 & 4) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3 text-xs text-[#5b6762]">
              <span className="font-semibold text-[#1d2623]">
                3 ALTERNATIF RESEP VALID UNTUK {currentSlot.label.toUpperCase()}:
              </span>
              <span>Klik kartu untuk menukar resep (Perencanaan Fleksibel)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentSlot.options.map((opt, idx) => {
                const isSelected = idx === currentSlot.selectedOptionIndex;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectRecipe(currentSlot.slotId, idx)}
                    className={`text-left p-4 rounded-md border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-2 border-[#1f6b52] bg-[#e8f2ee]/30 ring-1 ring-[#1f6b52]'
                        : 'border-[#dde3df] bg-[#ffffff] hover:border-[#1f6b52]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#5b6762]">
                          Opsi 0{idx + 1}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1f6b52]">
                            <Check className="w-3.5 h-3.5" /> Terpilih
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-[#1d2623] mb-1 font-serif">
                        {opt.title}
                      </h4>
                      <p className="text-xs text-[#5b6762] mb-3">
                        {opt.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#dde3df]/60 flex items-center justify-between text-xs text-[#5b6762]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{opt.cookTimeMinutes} mnt</span>
                      </div>
                      <span className="font-mono font-semibold text-[#1d2623]">
                        Rp {opt.estimatedCost.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grocery Checklist & Stok Kosan Eliminator (Core Feature 2 & 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#dde3df]">
            {/* Ingredients for Active Recipe */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1d2623]">
                  Bahan untuk: {selectedRecipe.title}
                </span>
                <span className="text-xs text-[#5b6762]">Centang jika sudah ada di kos</span>
              </div>

              <div className="space-y-2">
                {selectedRecipe.ingredients.map((ing) => {
                  const isOwned = !!ownedItems[ing.name];
                  return (
                    <div
                      key={ing.name}
                      onClick={() => toggleOwned(ing.name)}
                      className={`flex items-center justify-between p-3 rounded border text-sm cursor-pointer transition-colors ${
                        isOwned
                          ? 'bg-[#f7f8f6] border-[#dde3df] text-[#5b6762]'
                          : 'bg-[#ffffff] border-[#dde3df] text-[#1d2623] hover:bg-[#e8f2ee]/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isOwned}
                          onChange={() => {}}
                          className="w-4 h-4 rounded text-[#1f6b52] focus:ring-[#1f6b52]"
                          id={`ing-${ing.name}`}
                        />
                        <label htmlFor={`ing-${ing.name}`} className="cursor-pointer">
                          <span className={isOwned ? 'line-through text-[#5b6762]' : 'font-medium'}>
                            {ing.name}
                          </span>
                          <span className="text-xs text-[#5b6762] ml-2">({ing.quantity})</span>
                        </label>
                      </div>

                      <div className="font-mono text-xs tabular-nums">
                        {isOwned ? (
                          <span className="text-[#1f6b52] font-medium">Stok Kos (Rp 0)</span>
                        ) : (
                          <span>Rp {ing.cost.toLocaleString('id-ID')}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3 bg-[#f7f8f6] border border-[#dde3df] rounded text-xs text-[#5b6762] flex items-center justify-between">
                <span>Peralatan Masak: <strong>{selectedRecipe.equipment}</strong></span>
                <div className="flex gap-1.5">
                  {selectedRecipe.tags.map((tag) => (
                    <span key={tag} className="text-[#1f6b52]">· {tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Photo & Action Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#dde3df] mb-4 bg-[#f7f8f6]">
                  {!imgError ? (
                    <img
                      src="/src/assets/images/feature_market_grocery_1793104917554.jpg"
                      alt="Tas belanja pasar tradisional isi sayuran segar dan catatan belanja"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <ShoppingBag className="w-8 h-8 text-[#1f6b52] mb-2" />
                      <span className="text-xs font-semibold text-[#1d2623]">Belanja Terencana</span>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-[#ffffff]/90 px-2 py-1 rounded text-[11px] font-mono text-[#1d2623] border border-[#dde3df]">
                    {itemsToBuy.length} Item Perlu Dibeli
                  </div>
                </div>

                <div className="text-xs text-[#5b6762] leading-relaxed mb-4">
                  DapurPintar AI secara otomatis menghitung harga referensi bumbu pasar dan mencocokkan stok di kamar kosmu.
                </div>
              </div>

              <button
                onClick={onOpenAuth}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1f6b52] hover:bg-[#17523f] text-white font-medium text-sm rounded-md transition-colors shadow-sm"
              >
                <span>Buka Rencana Mingguan Penuh (Gratis)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
