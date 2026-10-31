import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/shop/ProductCard';
import { Product, Language, Category, CraftTechnique, PriceTier } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { TRANSLATIONS } from '../data/translations';
import { 
  Filter, 
  ArrowUpDown, 
  RotateCcw, 
  Sparkles, 
  SlidersHorizontal,
  Check
} from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  language: Language;
  initialCraftFilter?: string;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  language,
  initialCraftFilter
}) => {
  const t = TRANSLATIONS[language];

  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedCraft, setSelectedCraft] = useState<CraftTechnique>(
    (initialCraftFilter as CraftTechnique) || 'All'
  );
  const [selectedTier, setSelectedTier] = useState<PriceTier>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');
  const [priceMax, setPriceMax] = useState<number>(14000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: Category[] = [
    'All',
    'Sarees',
    'Denim',
    'Kurtas & Tops',
    'Bags',
    'Jewellery',
    'Limited Edition'
  ];

  const crafts: CraftTechnique[] = [
    'All',
    'Sujini',
    'Madhubani',
    'Khatwa',
    'Gota-patti',
    'Mirror work',
    'Hand painting'
  ];

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category match
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Craft match
      if (selectedCraft !== 'All' && product.craftTechnique !== selectedCraft) {
        return false;
      }
      // Tier match
      if (selectedTier !== 'all' && product.tier !== selectedTier) {
        return false;
      }
      // Price ceiling
      if (product.price > priceMax) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      // 'newest' default
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });
  }, [selectedCategory, selectedCraft, selectedTier, priceMax, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedCraft('All');
    setSelectedTier('all');
    setPriceMax(14000);
    setSortBy('newest');
  };

  const isFiltered = selectedCategory !== 'All' || selectedCraft !== 'All' || selectedTier !== 'all' || priceMax < 14000;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="border-b border-[#E7DDCF] pb-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
            {language === 'en' ? 'Direct from Rural Collectives' : 'कारीगर स्वयं-सहायता समूह'}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44] mt-1">
            {t.shop.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
            {t.shop.subtext}
          </p>
        </div>

        {/* Tier Mode Selector Switch: All / Everyday / Heritage */}
        <div className="inline-flex p-1 bg-[#F3ECE1] border border-[#D6C7B2] rounded-none self-center sm:self-auto text-xs font-medium">
          <button
            onClick={() => setSelectedTier('all')}
            className={`px-3 py-1.5 transition-colors ${
              selectedTier === 'all'
                ? 'bg-[#1E2A44] text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            All Pieces
          </button>
          <button
            onClick={() => setSelectedTier('everyday')}
            className={`px-3 py-1.5 transition-colors ${
              selectedTier === 'everyday'
                ? 'bg-[#1E2A44] text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            {t.shop.everydayLine}
          </button>
          <button
            onClick={() => setSelectedTier('heritage')}
            className={`px-3 py-1.5 transition-colors flex items-center gap-1 ${
              selectedTier === 'heritage'
                ? 'bg-[#1E2A44] text-white shadow-xs'
                : 'text-stone-700 hover:text-black'
            }`}
          >
            <Sparkles size={11} className="text-amber-400" />
            <span>{t.shop.heritageLine}</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Filters Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between pb-4 border-b border-[#E7DDCF]">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D6C7B2] text-xs font-medium text-stone-800"
          >
            <SlidersHorizontal size={14} />
            <span>Filter & Sort ({filteredProducts.length})</span>
          </button>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="text-xs text-[#B33927] hover:underline flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Desktop Sidebar Filters (3 Cols) */}
        <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="p-5 bg-white border border-[#E7DDCF] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DDCF]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1E2A44] flex items-center gap-1.5">
                <Filter size={14} className="text-[#B33927]" />
                <span>Filters</span>
              </span>
              {isFiltered && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-[#B33927] hover:underline flex items-center gap-1"
                >
                  <RotateCcw size={11} />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-2.5">
                Category
              </p>
              <div className="space-y-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-2.5 py-1.5 flex items-center justify-between transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#1E2A44] text-white font-medium'
                        : 'text-stone-700 hover:bg-[#F3ECE1]'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <Check size={12} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Craft Technique Filter */}
            <div className="pt-4 border-t border-[#E7DDCF]">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-2.5">
                Craft Technique
              </p>
              <div className="space-y-1 text-xs">
                {crafts.map((cr) => (
                  <button
                    key={cr}
                    onClick={() => setSelectedCraft(cr)}
                    className={`w-full text-left px-2.5 py-1.5 flex items-center justify-between transition-colors ${
                      selectedCraft === cr
                        ? 'bg-[#B33927] text-white font-medium'
                        : 'text-stone-700 hover:bg-[#F3ECE1]'
                    }`}
                  >
                    <span>{cr}</span>
                    {selectedCraft === cr && <Check size={12} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Ceiling Slider */}
            <div className="pt-4 border-t border-[#E7DDCF]">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold uppercase tracking-wider text-stone-800">
                  Max Price
                </span>
                <span className="font-semibold text-[#B33927]">
                  {formatIndianCurrency(priceMax)}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="14000"
                step="500"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-[#B33927] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                <span>₹500</span>
                <span>₹14,000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Products Grid (9 Cols) */}
        <main className="lg:col-span-9 space-y-6">
          {/* Top Sort and Count Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F3ECE1]/70 p-3.5 border border-[#E7DDCF] text-xs">
            <p className="text-stone-700 font-medium">
              Showing <strong className="text-[#1E2A44]">{filteredProducts.length}</strong> {t.shop.itemsFound}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedCraft !== 'All' && ` (${selectedCraft} technique)`}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-stone-600 flex items-center gap-1">
                <ArrowUpDown size={12} />
                <span>Sort by:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#D6C7B2] px-2.5 py-1 text-xs text-stone-800 focus:outline-none focus:border-[#B33927]"
              >
                <option value="newest">Featured & Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center bg-white border border-[#E7DDCF] p-8 space-y-4">
              <p className="text-base font-heading text-stone-800">
                No handcrafted pieces found matching these filters.
              </p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try widening your price range or switching to &ldquo;All Categories&rdquo; to discover more pieces.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 bg-[#1E2A44] text-white text-xs font-semibold hover:bg-[#B33927] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  language={language}
                  onSelect={onSelectProduct}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlistIds.includes(prod.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
