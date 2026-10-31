import React, { useState } from 'react';
import { Logo } from '../components/common/Logo';
import { StitchDivider } from '../components/common/StitchDivider';
import { ProductCard } from '../components/shop/ProductCard';
import { Product, Craft, ArtisanGroup, Language } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { CRAFTS_DATA } from '../data/crafts';
import { ARTISANS_DATA } from '../data/artisans';
import { TRANSLATIONS } from '../data/translations';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  TrendingUp, 
  HeartHandshake, 
  BookOpen, 
  Scissors, 
  Users, 
  PackageCheck,
  CheckCircle2,
  ExternalLink,
  Instagram
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectCraft: (craftTechnique: string) => void;
  onSelectArtisan: (artisanId: string) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onSelectCraft,
  onSelectArtisan,
  language
}) => {
  const t = TRANSLATIONS[language];
  const [selectedFeaturedCategory, setSelectedFeaturedCategory] = useState<string>('All');

  const categories = ['All', 'Sarees', 'Denim', 'Kurtas & Tops', 'Bags', 'Jewellery'];

  const filteredFeaturedProducts = selectedFeaturedCategory === 'All'
    ? PRODUCTS_DATA.slice(0, 6)
    : PRODUCTS_DATA.filter((p) => p.category === selectedFeaturedCategory).slice(0, 6);

  const spotlightCraft = CRAFTS_DATA.find((c) => c.id === 'sujini') || CRAFTS_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E7DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B33927]/10 border border-[#B33927]/30 text-[#B33927] text-xs font-semibold tracking-wide">
                <Sparkles size={14} className="text-[#D9822B]" />
                <span>{t.hero.eyebrow}</span>
              </div>

              <div>
                <Logo size="lg" className="mb-3" />
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1E2A44] tracking-tight leading-[1.15]">
                  {language === 'en' ? (
                    <>
                      Kala that carries <br />
                      <span className="italic font-serif text-[#B33927]">a living story.</span>
                    </>
                  ) : (
                    <>
                      हर धागे में <br />
                      <span className="font-devanagari text-[#B33927]">जीवंत विरासत।</span>
                    </>
                  )}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-stone-700 max-w-xl font-normal leading-relaxed">
                {t.hero.subtext}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-6 py-3.5 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2.5"
                >
                  <span>{t.hero.shopCta}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => onNavigate('artisans')}
                  className="px-6 py-3.5 bg-white hover:bg-[#F3ECE1] text-[#1E2A44] border border-[#1E2A44] text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all"
                >
                  <span>{t.hero.artisanCta}</span>
                </button>
              </div>

              {/* Artisan Micro-Trust Badges */}
              <div className="pt-6 border-t border-[#E7DDCF] flex flex-wrap gap-6 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>100% Fair Wages to Rural Women</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9822B]" />
                  <span>Zero Mass Industrial Machine Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E2A44]" />
                  <span>GI-Certified Craft Revival</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="aspect-[4/5] overflow-hidden shadow-2xl border-2 border-[#D9822B]/30 bg-[#F3ECE1] relative">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
                    alt="Indian artisan handcrafting heritage saree with Sujini and Gota-patti embroidery"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Narrative Chip */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-xs border border-[#E7DDCF] shadow-lg text-xs">
                    <p className="font-semibold text-[#1E2A44]">
                      Sujini & Khatwa Revival Line
                    </p>
                    <p className="text-[11px] text-stone-600">
                      Hand-stitched by Chandrakala Devi & 40 women artisans in Bhusra, Bihar
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Secondary Badge */}
                <div className="absolute -bottom-6 -left-6 hidden sm:block p-3.5 bg-[#1E2A44] text-[#FAF7F2] border border-[#D9822B] shadow-xl max-w-[200px]">
                  <p className="text-[10px] tracking-widest uppercase text-amber-300 font-semibold">Artisan Direct</p>
                  <p className="font-heading text-sm font-medium mt-0.5">Every purchase funds children’s schooling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
            The Crisis in Fast Fashion
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44] mt-2">
            {t.problem.heading}
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            {t.problem.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white border border-[#E7DDCF] hover:border-[#B33927] transition-all shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-red-50 text-[#B33927] flex items-center justify-center mb-4 border border-red-200">
                <ShieldAlert size={20} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#B33927] bg-red-50 px-2 py-0.5 border border-red-200 inline-block mb-2">
                [placeholder stat]
              </span>
              <h3 className="font-heading text-xl font-medium text-[#1E2A44] mb-2">
                {t.problem.card1Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.problem.card1Desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Disappearing Hand Heritage
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border border-[#E7DDCF] hover:border-[#D9822B] transition-all shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#D9822B] flex items-center justify-center mb-4 border border-amber-200">
                <HeartHandshake size={20} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D9822B] bg-amber-50 px-2 py-0.5 border border-amber-200 inline-block mb-2">
                [placeholder stat]
              </span>
              <h3 className="font-heading text-xl font-medium text-[#1E2A44] mb-2">
                {t.problem.card2Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.problem.card2Desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Middlemen Inequity
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border border-[#E7DDCF] hover:border-[#1E2A44] transition-all shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-slate-50 text-[#1E2A44] flex items-center justify-center mb-4 border border-slate-200">
                <TrendingUp size={20} />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#1E2A44] bg-slate-100 px-2 py-0.5 border border-slate-200 inline-block mb-2">
                [placeholder stat]
              </span>
              <h3 className="font-heading text-xl font-medium text-[#1E2A44] mb-2">
                {t.problem.card3Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.problem.card3Desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-[11px] text-stone-400">
              Seasonal Vulnerability
            </div>
          </div>
        </div>

        <StitchDivider color="turmeric" withMirror />
      </section>

      {/* 3. OUR SOLUTION: 4-STEP FLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#D9822B]">
            From Ancient Loom to Modern Street
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44] mt-2">
            {t.solution.heading}
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            {t.solution.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#B33927] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-[#F3ECE1] border border-[#D9822B] text-[#B33927] flex items-center justify-center font-heading font-semibold text-lg mb-4 group-hover:bg-[#B33927] group-hover:text-white transition-colors">
                <BookOpen size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1E2A44] mb-2">
                {t.solution.step1Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.solution.step1Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7DDCF] text-[11px] font-medium text-[#B33927]">
              Step 01: Oral History
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#B33927] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-[#F3ECE1] border border-[#D9822B] text-[#B33927] flex items-center justify-center font-heading font-semibold text-lg mb-4 group-hover:bg-[#B33927] group-hover:text-white transition-colors">
                <Scissors size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1E2A44] mb-2">
                {t.solution.step2Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.solution.step2Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7DDCF] text-[11px] font-medium text-[#B33927]">
              Step 02: Modern Silhouette
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#B33927] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-[#F3ECE1] border border-[#D9822B] text-[#B33927] flex items-center justify-center font-heading font-semibold text-lg mb-4 group-hover:bg-[#B33927] group-hover:text-white transition-colors">
                <Users size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1E2A44] mb-2">
                {t.solution.step3Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.solution.step3Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7DDCF] text-[11px] font-medium text-[#B33927]">
              Step 03: Women SHGs
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#B33927] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-[#F3ECE1] border border-[#D9822B] text-[#B33927] flex items-center justify-center font-heading font-semibold text-lg mb-4 group-hover:bg-[#B33927] group-hover:text-white transition-colors">
                <PackageCheck size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1E2A44] mb-2">
                {t.solution.step4Title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t.solution.step4Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E7DDCF] text-[11px] font-medium text-[#B33927]">
              Step 04: Fair Delivery
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COLLECTIONS CAROUSEL / TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
              Small Batch Production
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44] mt-1">
              Featured Craft Collections
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Hand-painted denim, narrative quilts, silk organza, and artisan jewellery.
            </p>
          </div>

          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#B33927] hover:text-[#8C2718] flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>{t.common.viewAll}</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Category Pills/Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFeaturedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium tracking-wide whitespace-nowrap transition-all border ${
                selectedFeaturedCategory === cat
                  ? 'bg-[#1E2A44] text-white border-[#1E2A44]'
                  : 'bg-white text-stone-700 border-[#D6C7B2] hover:border-[#1E2A44]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeaturedProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              language={language}
              onSelect={onSelectProduct}
              onAddToCart={(p, sz) => onAddToCart(p, sz)}
              isWishlisted={wishlistIds.includes(prod.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* 5. CRAFT OF THE MONTH SPOTLIGHT */}
      <section className="bg-[#F3ECE1] border-y border-[#E7DDCF] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] overflow-hidden border border-[#D9822B]/40 shadow-xl bg-stone-100">
                <img
                  src={spotlightCraft.heroImage}
                  alt={spotlightCraft.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#1E2A44] text-[#FAF7F2] text-xs font-medium border border-amber-300/40">
                GI Tag Status: Bihar Certified
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9822B]/20 text-[#8C2718] text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>{t.spotlight.badge}</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44]">
                {spotlightCraft.name} ({spotlightCraft.hindiName})
              </h2>

              <p className="text-xs uppercase tracking-wider text-[#B33927] font-semibold">
                Origin: {spotlightCraft.originRegion}
              </p>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                {spotlightCraft.fullHistory}
              </p>

              <div className="p-4 bg-white/70 border border-[#E7DDCF] text-xs text-stone-700 space-y-1">
                <p className="font-semibold text-[#1E2A44]">Why It Deserves Revival:</p>
                <p>{spotlightCraft.culturalSignificance}</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onSelectCraft(spotlightCraft.name)}
                  className="px-5 py-3 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wide uppercase transition-colors flex items-center gap-2"
                >
                  <span>{t.spotlight.readStory}</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-5 py-3 bg-white text-[#1E2A44] border border-[#1E2A44] hover:bg-[#FAF7F2] text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  <span>{t.spotlight.exploreCraft}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARTISAN HIGHLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
              Women of Substance & Heritage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44] mt-1">
              Meet the Women Behind Your Garments
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Real artisan cooperatives across Muzaffarpur, Madhubani, and Bhagalpur weaving independence into every stitch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('artisans')}
            className="text-xs font-semibold text-[#B33927] hover:text-[#8C2718] flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>View All Artisan Stories</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTISANS_DATA.slice(0, 3).map((artisan) => (
            <div
              key={artisan.id}
              onClick={() => onSelectArtisan(artisan.id)}
              className="bg-white border border-[#E7DDCF] hover:border-[#D9822B] transition-all cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={artisan.photo}
                    alt={artisan.leadArtisanName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-[#1E2A44]/90 text-white text-[11px] backdrop-blur-xs font-medium">
                    {artisan.village}, {artisan.district}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[#1E2A44] group-hover:text-[#B33927] transition-colors">
                      {artisan.leadArtisanName}
                    </h3>
                    <p className="text-xs text-[#B33927] font-semibold mt-0.5">
                      {artisan.name}
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Specialty: {artisan.craftSpecialty}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 italic leading-relaxed border-l-2 border-[#D9822B] pl-3 py-0.5">
                    &ldquo;{artisan.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 mt-4">
                <span>{artisan.womenSupported} Women Supported</span>
                <span className="text-[#1E2A44] font-semibold group-hover:translate-x-1 transition-transform">
                  Read Journey →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SOCIAL IMPACT COUNTERS */}
      <section className="bg-[#1E2A44] text-[#FAF7F2] py-16 sm:py-20 border-y border-[#D9822B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold">
              Empowering Rural Bihar
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium text-white mt-1">
              {t.impact.heading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300/80 mt-2">
              {t.impact.subheading}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="p-6 bg-white/5 border border-white/10 hover:border-[#D9822B]/60 transition-colors">
              <span className="text-[10px] text-amber-300 font-mono">[placeholder]</span>
              <p className="font-heading text-4xl sm:text-5xl font-semibold text-[#FAF7F2] my-1">
                240+
              </p>
              <p className="text-xs text-stone-300">
                {t.impact.stat1Label}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-6 bg-white/5 border border-white/10 hover:border-[#D9822B]/60 transition-colors">
              <span className="text-[10px] text-amber-300 font-mono">[certified]</span>
              <p className="font-heading text-4xl sm:text-5xl font-semibold text-[#D9822B] my-1">
                7
              </p>
              <p className="text-xs text-stone-300">
                {t.impact.stat2Label}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-6 bg-white/5 border border-white/10 hover:border-[#D9822B]/60 transition-colors">
              <span className="text-[10px] text-amber-300 font-mono">[placeholder]</span>
              <p className="font-heading text-4xl sm:text-5xl font-semibold text-[#FAF7F2] my-1">
                48,000+
              </p>
              <p className="text-xs text-stone-300">
                {t.impact.stat3Label}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-6 bg-white/5 border border-white/10 hover:border-[#D9822B]/60 transition-colors">
              <span className="text-[10px] text-amber-300 font-mono">[placeholder]</span>
              <p className="font-heading text-4xl sm:text-5xl font-semibold text-[#FAF7F2] my-1">
                ₹84L+
              </p>
              <p className="text-xs text-stone-300">
                {t.impact.stat4Label}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM ARTISAN GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#B33927] font-semibold uppercase tracking-wider mb-1">
            <Instagram size={14} />
            <span>@shrikala_heritage</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#1E2A44]">
            Dispatches from the Village Adda
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Follow our daily embroidery circles, dye vats, and design experiments on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=500&q=80', caption: 'Sujini needlework rhythm in Bhusra' },
            { img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80', caption: 'Natural indigo and turmeric grinding' },
            { img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80', caption: 'Khatwa applique shear work' },
            { img: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80', caption: 'Hand-painted denim panel tests' },
            { img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80', caption: 'Bhagalpur handloom Tussar silk reeling' },
            { img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80', caption: 'Mirror work brass jewelry assembly' }
          ].map((item, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden bg-stone-100 border border-[#E7DDCF]">
              <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                <p className="text-[10px] text-white font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
