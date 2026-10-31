import React, { useState } from 'react';
import { ArtisanGroup, Product, Language } from '../types';
import { ARTISANS_DATA } from '../data/artisans';
import { PRODUCTS_DATA } from '../data/products';
import { StitchDivider } from '../components/common/StitchDivider';
import { 
  Users, 
  MapPin, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  ExternalLink,
  X
} from 'lucide-react';

interface ArtisansPageProps {
  onSelectProduct: (product: Product) => void;
  selectedArtisanId?: string;
  language: Language;
}

export const ArtisansPage: React.FC<ArtisansPageProps> = ({
  onSelectProduct,
  selectedArtisanId,
  language
}) => {
  const [activeArtisan, setActiveArtisan] = useState<ArtisanGroup | null>(
    selectedArtisanId
      ? ARTISANS_DATA.find((a) => a.id === selectedArtisanId) || null
      : null
  );

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B33927]/10 text-[#B33927] text-xs font-semibold uppercase tracking-wider mb-2">
          <HeartHandshake size={14} />
          <span>Digital Artisan Identity</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44]">
          The Hands Behind the Heritage
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
          In mass commercial fashion, the artisan remains an anonymous number. At श्री Kala, every craftswoman has an acknowledged digital identity, transparent remuneration, and direct recognition for her ancestral knowledge.
        </p>
      </div>

      {/* Artisan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTISANS_DATA.map((artisan) => (
          <div
            key={artisan.id}
            onClick={() => setActiveArtisan(artisan)}
            className="bg-white border border-[#E7DDCF] hover:border-[#D9822B] transition-all cursor-pointer group p-6 sm:p-7 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={artisan.photo}
                  alt={artisan.leadArtisanName}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-none object-cover border-2 border-[#D9822B]/40 shrink-0"
                />

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#1E2A44] bg-[#F3ECE1] px-2 py-0.5 border border-[#D6C7B2]">
                      [sample collective]
                    </span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <MapPin size={12} className="text-[#B33927]" />
                      <span>{artisan.village}, {artisan.district}</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-medium text-[#1E2A44] group-hover:text-[#B33927] transition-colors">
                    {artisan.leadArtisanName}
                  </h3>

                  <p className="text-xs font-semibold text-[#B33927]">
                    {artisan.name} ({artisan.hindiName})
                  </p>

                  <p className="text-xs text-stone-600">
                    Craft Specialty: <strong>{artisan.craftSpecialty}</strong>
                  </p>
                </div>
              </div>

              {/* Artisan Quote */}
              <div className="mt-5 p-4 bg-[#FAF7F2] border-l-2 border-[#D9822B] text-xs text-stone-700 italic leading-relaxed">
                &ldquo;{artisan.quote}&rdquo;
              </div>

              {/* Bio summary */}
              <p className="text-xs text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                {artisan.bio}
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
              <div className="flex gap-4">
                <span>⏱ <strong>{artisan.yearsOfExperience} yrs</strong> mastery</span>
                <span>👥 <strong>{artisan.womenSupported} women</strong> in SHG</span>
              </div>

              <span className="text-[#1E2A44] font-semibold flex items-center gap-1 group-hover:text-[#B33927] transition-colors">
                <span>View Full Profile</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Artisan Detail Modal */}
      {activeArtisan && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="relative bg-[#FAF7F2] w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#D9822B]/40 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArtisan(null)}
              className="absolute top-4 right-4 p-2 text-stone-600 hover:text-[#B33927] hover:bg-[#F3ECE1] rounded-full"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start pb-6 border-b border-[#E7DDCF]">
              <img
                src={activeArtisan.photo}
                alt={activeArtisan.leadArtisanName}
                className="w-32 h-32 object-cover border-2 border-[#D9822B]"
              />
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#B33927] bg-red-50 border border-red-200 px-2 py-0.5">
                  Artisan Lead Profile [Sample Data]
                </span>
                <h2 className="font-heading text-3xl font-medium text-[#1E2A44]">
                  {activeArtisan.leadArtisanName}
                </h2>
                <p className="text-sm font-semibold text-[#B33927]">
                  {activeArtisan.name} • {activeArtisan.village}, {activeArtisan.district}, {activeArtisan.state}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-stone-600 pt-1">
                  <span>Specialty: <strong>{activeArtisan.craftSpecialty}</strong></span>
                  <span>Experience: <strong>{activeArtisan.yearsOfExperience} Years</strong></span>
                  <span>Cooperative Size: <strong>{activeArtisan.womenSupported} Women</strong></span>
                </div>
              </div>
            </div>

            <div className="py-6 space-y-6">
              {/* Quote */}
              <div className="p-4 bg-[#F3ECE1] border-l-4 border-[#B33927] text-sm text-stone-800 italic font-heading">
                &ldquo;{activeArtisan.quote}&rdquo;
              </div>

              {/* Bio */}
              <div>
                <h3 className="font-heading text-xl font-medium text-[#1E2A44] mb-2">
                  Village Life & Craft Leadership
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeArtisan.bio}
                </p>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1E2A44] mb-2">
                  Key Achievements & Community Impact:
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {activeArtisan.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Award size={14} className="text-[#D9822B] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products Made by this Artisan Collective */}
              <div className="pt-4 border-t border-[#E7DDCF]">
                <h4 className="font-heading text-xl font-medium text-[#1E2A44] mb-3">
                  Pieces Handcrafted by {activeArtisan.leadArtisanName}&apos;s Group:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PRODUCTS_DATA.filter((p) => p.artisanGroupId === activeArtisan.id).map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setActiveArtisan(null);
                        onSelectProduct(prod);
                      }}
                      className="cursor-pointer group border border-[#E7DDCF] p-2 bg-white hover:border-[#D9822B] transition-colors"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                        <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <p className="text-xs font-semibold text-stone-900 group-hover:text-[#B33927] truncate mt-1">
                        {prod.name}
                      </p>
                      <p className="text-[11px] text-[#B33927] font-semibold">
                        {formatIndianCurrency(prod.price)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
