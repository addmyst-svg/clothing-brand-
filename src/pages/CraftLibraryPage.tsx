import React, { useState } from 'react';
import { Craft, Product, Language } from '../types';
import { CRAFTS_DATA } from '../data/crafts';
import { PRODUCTS_DATA } from '../data/products';
import { StitchDivider } from '../components/common/StitchDivider';
import { 
  Sparkles, 
  MapPin, 
  BookOpen, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Layers, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

interface CraftLibraryPageProps {
  onSelectProduct: (product: Product) => void;
  onExploreCraftProducts: (craftTechnique: string) => void;
  selectedCraftSlug?: string;
  language: Language;
}

export const CraftLibraryPage: React.FC<CraftLibraryPageProps> = ({
  onSelectProduct,
  onExploreCraftProducts,
  selectedCraftSlug,
  language
}) => {
  const initialCraft = selectedCraftSlug 
    ? CRAFTS_DATA.find((c) => c.slug === selectedCraftSlug || c.name.toLowerCase().includes(selectedCraftSlug.toLowerCase())) || CRAFTS_DATA[0]
    : CRAFTS_DATA[0];

  const [activeCraft, setActiveCraft] = useState<Craft>(initialCraft);

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const associatedProducts = PRODUCTS_DATA.filter(
    (p) => p.craftTechnique.toLowerCase() === activeCraft.name.toLowerCase() ||
           activeCraft.name.toLowerCase().includes(p.craftTechnique.toLowerCase())
  );

  const getStatusBadge = (status: Craft['status']) => {
    switch (status) {
      case 'Endangered':
        return {
          bg: 'bg-red-50 text-red-700 border-red-200',
          dot: 'bg-red-600',
          desc: 'Urgent Revival Priority'
        };
      case 'Reviving':
        return {
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          dot: 'bg-amber-600',
          desc: 'Active Collective Training'
        };
      case 'Thriving':
        return {
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-600',
          desc: 'Self-Sustaining Demand'
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D9822B]/15 text-[#8C2718] text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen size={13} />
          <span>Bihar Craft Heritage Archive</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44]">
          The Living Craft Library
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
          At श्री Kala, documentation is as essential as creation. We research, archive, and revive disappearing Indian textile arts, ensuring the women who hold these generational secrets receive the recognition and royalties they deserve.
        </p>
      </div>

      {/* Craft Selection Horizontal Tabs */}
      <div className="flex overflow-x-auto gap-2.5 pb-2 border-b border-[#E7DDCF] scrollbar-none">
        {CRAFTS_DATA.map((craft) => {
          const isActive = activeCraft.id === craft.id;
          const status = getStatusBadge(craft.status);
          return (
            <button
              key={craft.id}
              onClick={() => setActiveCraft(craft)}
              className={`px-4 py-2.5 text-xs font-medium tracking-wide whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1E2A44] text-white border-[#1E2A44] shadow-xs'
                  : 'bg-white text-stone-700 border-[#D6C7B2] hover:border-[#1E2A44]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${status.dot}`} />
              <span>{craft.name}</span>
              <span className="text-[10px] opacity-75">({craft.hindiName})</span>
            </button>
          );
        })}
      </div>

      {/* Active Craft Spotlight Dossier */}
      <div className="bg-white border border-[#E7DDCF] shadow-sm overflow-hidden">
        {/* Banner with Craft Title & Status */}
        <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full overflow-hidden bg-stone-900">
          <img
            src={activeCraft.heroImage}
            alt={activeCraft.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 border ${getStatusBadge(activeCraft.status).bg}`}>
                  Status: {activeCraft.status} ({getStatusBadge(activeCraft.status).desc})
                </span>
                <span className="text-xs text-amber-300 font-medium flex items-center gap-1">
                  <MapPin size={13} />
                  <span>{activeCraft.originRegion}</span>
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-medium tracking-tight">
                {activeCraft.name}
              </h2>
              <p className="font-devanagari text-lg text-amber-200 mt-0.5">
                {activeCraft.hindiName}
              </p>
            </div>

            <button
              onClick={() => onExploreCraftProducts(activeCraft.name)}
              className="px-4 py-2.5 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wide flex items-center gap-2 transition-colors self-start sm:self-auto"
            >
              <ShoppingBag size={14} />
              <span>Shop {activeCraft.name} Pieces</span>
            </button>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* History & Significance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
                History & Living Narrative
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {activeCraft.fullHistory}
              </p>
              <div className="p-4 bg-[#FAF7F2] border-l-4 border-[#B33927] text-xs text-stone-700 leading-relaxed">
                <strong className="block text-[#1E2A44] mb-1">Cultural Significance & GI Heritage:</strong>
                {activeCraft.culturalSignificance}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F3ECE1] p-5 border border-[#E7DDCF] space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1E2A44] flex items-center gap-1.5">
                <Layers size={14} className="text-[#D9822B]" />
                <span>Traditional Tools & Materials</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {activeCraft.toolsUsed.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={13} className="text-[#B33927] shrink-0 mt-0.5" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#D6C7B2] text-[11px] text-stone-500">
                Craft documentation verified by Bihar Craft Council artisans.
              </div>
            </div>
          </div>

          <StitchDivider color="turmeric" withMirror />

          {/* How It's Made: 4-Step Process Guide */}
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B33927] font-semibold">
                Anatomy of the Needlecraft
              </span>
              <h3 className="font-heading text-2xl font-medium text-[#1E2A44] mt-1">
                How It&apos;s Made (Step-by-Step Creation)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeCraft.stepProcess.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="p-5 bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#B33927] transition-all relative"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1E2A44] text-white text-xs font-semibold flex items-center justify-center mb-3">
                    {stepItem.step}
                  </span>
                  <h4 className="font-heading text-base font-semibold text-[#1E2A44] mb-2">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Associated Products Made Using This Craft */}
          {associatedProducts.length > 0 && (
            <div className="pt-6 border-t border-[#E7DDCF]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
                    Pieces Crafted Using {activeCraft.name}
                  </h3>
                  <p className="text-xs text-stone-500">
                    Directly supporting the women artisans preserving this technique.
                  </p>
                </div>

                <button
                  onClick={() => onExploreCraftProducts(activeCraft.name)}
                  className="text-xs font-semibold text-[#B33927] hover:underline flex items-center gap-1"
                >
                  <span>View All in Shop</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {associatedProducts.slice(0, 3).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => onSelectProduct(prod)}
                    className="cursor-pointer group border border-[#E7DDCF] p-2 bg-white hover:border-[#D9822B] transition-all"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                      <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="pt-3 pb-1">
                      <p className="text-xs font-semibold text-stone-900 group-hover:text-[#B33927] transition-colors truncate">
                        {language === 'hi' ? prod.hindiName : prod.name}
                      </p>
                      <p className="text-[11px] text-stone-500 truncate">By {prod.artisanGroupName}</p>
                      <p className="text-xs font-semibold text-[#1E2A44] mt-1">{formatIndianCurrency(prod.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
