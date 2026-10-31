import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { Product, Craft, ArtisanGroup, Language } from '../../types';
import { PRODUCTS_DATA } from '../../data/products';
import { CRAFTS_DATA } from '../../data/crafts';
import { ARTISANS_DATA } from '../../data/artisans';

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectProduct: (product: Product) => void;
  onSelectCraft: (craftTechnique: string) => void;
  onSelectArtisan: (artisanId: string) => void;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectProduct,
  onSelectCraft,
  onSelectArtisan
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const cleanQuery = query.trim().toLowerCase();

  const filteredProducts = cleanQuery
    ? PRODUCTS_DATA.filter((p) =>
        p.name.toLowerCase().includes(cleanQuery) ||
        p.hindiName.includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.craftTechnique.toLowerCase().includes(cleanQuery) ||
        p.tags.some((t) => t.toLowerCase().includes(cleanQuery))
      ).slice(0, 4)
    : [];

  const filteredCrafts = cleanQuery
    ? CRAFTS_DATA.filter((c) =>
        c.name.toLowerCase().includes(cleanQuery) ||
        c.hindiName.includes(cleanQuery) ||
        c.originRegion.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const filteredArtisans = cleanQuery
    ? ARTISANS_DATA.filter((a) =>
        a.name.toLowerCase().includes(cleanQuery) ||
        a.leadArtisanName.toLowerCase().includes(cleanQuery) ||
        a.village.toLowerCase().includes(cleanQuery) ||
        a.district.toLowerCase().includes(cleanQuery)
      ).slice(0, 2)
    : [];

  const popularSearches = ['Sujini', 'Madhubani Saree', 'Denim Jacket', 'Khatwa Kurta', 'Mirror Work', 'Tussar'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-8 animate-fadeIn">
      <div 
        className="relative bg-[#FAF7F2] w-full max-w-2xl shadow-2xl border border-[#D9822B]/40 overflow-hidden mt-12 sm:mt-20 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E7DDCF] flex items-center gap-3 bg-[#F3ECE1]">
          <Search size={22} className="text-[#B33927] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search sarees, denim, Madhubani, Sujini, artisans...'
                : 'साड़ी, डेनिम, मधुबनी, सुजिनी या कारीगर खोजें...'
            }
            className="w-full bg-transparent text-base sm:text-lg font-heading placeholder:font-sans placeholder-stone-500 text-stone-900 focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-500 hover:text-stone-800"
              aria-label="Clear query"
            >
              <X size={18} />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="p-1 text-stone-500 hover:text-stone-800"
              aria-label="Close search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Popular Tags when query is empty */}
        {!cleanQuery ? (
          <div className="p-6 space-y-4">
            <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Popular Craft Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 bg-white border border-[#D6C7B2] hover:border-[#B33927] hover:text-[#B33927] text-xs font-medium text-stone-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E7DDCF] text-xs text-stone-500 flex items-center gap-2">
              <Sparkles size={14} className="text-[#D9822B]" />
              <span>Discover authentic handcrafted pieces directly from rural Bihar collectives</span>
            </div>
          </div>
        ) : (
          /* Live Results List */
          <div className="p-5 max-h-[70vh] overflow-y-auto space-y-5">
            {/* Products Results */}
            {filteredProducts.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#B33927] font-semibold mb-2.5">
                  Products ({filteredProducts.length})
                </p>
                <div className="space-y-2">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        onSelectProduct(prod);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2 bg-white border border-[#E7DDCF] hover:border-[#D9822B] cursor-pointer transition-colors"
                    >
                      <img src={prod.images[0]} alt={prod.name} className="w-12 h-14 object-cover bg-stone-100" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-stone-900 truncate">{prod.name}</p>
                        <p className="text-[11px] text-stone-500">{prod.craftTechnique} • {prod.category}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#1E2A44]">
                        {formatIndianCurrency(prod.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Crafts Results */}
            {filteredCrafts.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D9822B] font-semibold mb-2.5">
                  Craft Traditions ({filteredCrafts.length})
                </p>
                <div className="space-y-2">
                  {filteredCrafts.map((craft) => (
                    <div
                      key={craft.id}
                      onClick={() => {
                        onSelectCraft(craft.name);
                        onClose();
                      }}
                      className="p-3 bg-white border border-[#E7DDCF] hover:border-[#B33927] cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-semibold text-stone-900">{craft.name} ({craft.hindiName})</p>
                        <p className="text-[11px] text-stone-500">{craft.originRegion}</p>
                      </div>
                      <ArrowRight size={14} className="text-stone-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Artisans Results */}
            {filteredArtisans.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E2A44] font-semibold mb-2.5">
                  Artisan Collectives ({filteredArtisans.length})
                </p>
                <div className="space-y-2">
                  {filteredArtisans.map((artisan) => (
                    <div
                      key={artisan.id}
                      onClick={() => {
                        onSelectArtisan(artisan.id);
                        onClose();
                      }}
                      className="p-3 bg-white border border-[#E7DDCF] hover:border-[#B33927] cursor-pointer transition-colors flex items-center gap-3"
                    >
                      <img src={artisan.photo} alt={artisan.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-stone-900">{artisan.leadArtisanName} — {artisan.name}</p>
                        <p className="text-[11px] text-stone-500">{artisan.village}, {artisan.district}</p>
                      </div>
                      <ArrowRight size={14} className="text-stone-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredProducts.length === 0 && filteredCrafts.length === 0 && filteredArtisans.length === 0 && (
              <div className="text-center py-8 text-stone-500 text-xs">
                No matching handcrafted pieces or artisans found for &ldquo;{query}&rdquo;.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
