import React, { useState } from 'react';
import { Product, Language } from '../../types';
import { ARTISANS_DATA } from '../../data/artisans';
import { PRODUCTS_DATA } from '../../data/products';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Clock, 
  Users, 
  MapPin, 
  Sparkles, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Check, 
  Share2,
  ExternalLink
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  language: Language;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onViewArtisan: (artisanId: string) => void;
  onViewCraft: (craftTechnique: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  language,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  onViewArtisan,
  onViewCraft
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'craft' | 'maker' | 'care' | 'delivery'>('craft');
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedNotice, setAddedNotice] = useState(false);

  const artisan = ARTISANS_DATA.find((a) => a.id === product.artisanGroupId);

  const relatedProducts = PRODUCTS_DATA
    .filter((p) => p.id !== product.id && (p.category === product.category || p.craftTechnique === product.craftTechnique))
    .slice(0, 3);

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleShare = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } catch {
      // clipboard access might be denied in sandboxed iframe
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-[#FAF7F2] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#D9822B]/40 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-600 hover:text-[#B33927] hover:bg-[#F3ECE1] rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* Gallery Col */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3ECE1] border border-[#E7DDCF]">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              {product.tier === 'heritage' && (
                <div className="absolute top-3 left-3 bg-[#1E2A44] text-white text-[11px] font-medium px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                  <Sparkles size={12} className="text-[#D9822B]" />
                  <span>Heritage Masterpiece</span>
                </div>
              )}
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-20 shrink-0 border-2 overflow-hidden transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#B33927] scale-102 ring-1 ring-[#B33927]'
                        : 'border-[#E7DDCF] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Craft Origin Snippet Card */}
            <div className="p-4 bg-[#F3ECE1]/70 border border-[#E7DDCF] text-xs space-y-2">
              <div className="flex items-center justify-between text-stone-700 font-medium">
                <span className="flex items-center gap-1.5 text-[#B33927]">
                  <MapPin size={14} />
                  <span>{product.artisanLocation}</span>
                </span>
                <span className="flex items-center gap-1.5 text-stone-600">
                  <Clock size={14} />
                  <span>{product.timeToMake}</span>
                </span>
              </div>
              <p className="text-stone-600 italic">
                {product.fabric}
              </p>
            </div>
          </div>

          {/* Product Details & Actions Col */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Craft Tag */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => onViewCraft(product.craftTechnique)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#B33927] hover:underline flex items-center gap-1"
                >
                  <span>{product.craftTechnique} Craft</span>
                  <ExternalLink size={12} />
                </button>
                <button
                  onClick={handleShare}
                  className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1"
                  title="Share product link"
                >
                  <Share2 size={13} />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="font-heading text-2xl sm:text-3xl font-medium text-[#1E2A44] mt-2">
                {language === 'hi' ? product.hindiName : product.name}
              </h2>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-[#B33927]">
                  {formatIndianCurrency(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-stone-600 line-through">
                    {formatIndianCurrency(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 font-medium border border-emerald-200">
                  Fair Price Guarantee
                </span>
              </div>

              <p className="text-xs text-stone-600 mt-1">
                Taxes included. Free insured delivery within India.
              </p>

              {/* Short Description */}
              <p className="text-sm text-stone-700 mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Select Size / Fit:
                    </span>
                    <span className="text-xs text-stone-500 italic">
                      Traditional Comfort Tailoring
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-2 text-xs font-medium border transition-all ${
                          selectedSize === sz
                            ? 'bg-[#1E2A44] text-white border-[#1E2A44]'
                            : 'bg-white text-stone-800 border-[#D6C7B2] hover:border-[#1E2A44]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Actions */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center border border-[#D6C7B2] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-stone-600 hover:text-black transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-semibold text-stone-900 min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-stone-600 hover:text-black transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-2.5 border transition-all ${
                    isWishlisted 
                      ? 'border-[#B33927] text-[#B33927] bg-[#B33927]/10' 
                      : 'border-[#D6C7B2] text-stone-700 hover:border-[#B33927] bg-white'
                  }`}
                  aria-label="Toggle wishlist"
                  title="Save to Wishlist"
                >
                  <Heart size={18} className={isWishlisted ? 'fill-[#B33927]' : ''} />
                </button>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 px-4 bg-[#1E2A44] hover:bg-[#121B2D] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <ShoppingBag size={16} />
                  <span>{addedNotice ? 'Added to Bag ✓' : 'Add to Bag'}</span>
                </button>
                <button
                  onClick={() => {
                    onBuyNow(product, selectedSize, quantity);
                    onClose();
                  }}
                  className="w-full py-3 px-4 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Buy Now (Instant Checkout)</span>
                </button>
              </div>
            </div>

            {/* In-depth Tabs: Craft, Maker, Care, Delivery */}
            <div className="border-t border-[#E7DDCF] pt-4">
              <div className="flex border-b border-[#E7DDCF] text-xs font-medium gap-6">
                <button
                  onClick={() => setActiveTab('craft')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'craft'
                      ? 'text-[#B33927] font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  The Craft Behind It
                  {activeTab === 'craft' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B33927]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('maker')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'maker'
                      ? 'text-[#B33927] font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Meet the Maker
                  {activeTab === 'maker' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B33927]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'care'
                      ? 'text-[#B33927] font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Care & Fabric
                  {activeTab === 'care' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B33927]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'delivery'
                      ? 'text-[#B33927] font-semibold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Delivery & Returns
                  {activeTab === 'delivery' && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B33927]" />
                  )}
                </button>
              </div>

              {/* Tab Contents */}
              <div className="py-4 text-xs text-stone-700 leading-relaxed min-h-24">
                {activeTab === 'craft' && (
                  <div className="space-y-3">
                    <p>{product.craftStory}</p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 bg-white border border-[#E7DDCF] flex items-center gap-2">
                        <Clock size={16} className="text-[#D9822B]" />
                        <div>
                          <p className="text-[10px] text-stone-500 uppercase">Production Time</p>
                          <p className="font-semibold text-stone-800">{product.timeToMake}</p>
                        </div>
                      </div>
                      <div className="p-2.5 bg-white border border-[#E7DDCF] flex items-center gap-2">
                        <Users size={16} className="text-[#D9822B]" />
                        <div>
                          <p className="text-[10px] text-stone-500 uppercase">Artisans Involved</p>
                          <p className="font-semibold text-stone-800">{product.artisansInvolved} Rural Women</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'maker' && artisan && (
                  <div className="p-3 bg-white border border-[#E7DDCF] flex items-start gap-4">
                    <img
                      src={artisan.photo}
                      alt={artisan.leadArtisanName}
                      className="w-14 h-14 rounded-full object-cover border border-[#D9822B] shrink-0"
                    />
                    <div className="space-y-1">
                      <p className="font-semibold text-[#1E2A44]">{artisan.leadArtisanName}</p>
                      <p className="text-[11px] text-[#B33927]">{artisan.name} • {artisan.village}, {artisan.district}</p>
                      <p className="text-stone-600 italic text-[11px] line-clamp-2">&ldquo;{artisan.quote}&rdquo;</p>
                      <button
                        onClick={() => {
                          onViewArtisan(artisan.id);
                          onClose();
                        }}
                        className="text-[11px] text-[#1E2A44] font-semibold underline hover:text-[#B33927] pt-1 inline-block"
                      >
                        View Full Artisan Story →
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <div className="space-y-2">
                    <p className="font-medium text-stone-800">Fabric Composition: {product.fabric}</p>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      {product.careInstructions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'delivery' && (
                  <div className="space-y-2.5 text-stone-600">
                    <div className="flex items-center gap-2 text-stone-800">
                      <Truck size={14} className="text-[#B33927]" />
                      <span className="font-medium">Free Pan-India Delivery: 4–7 business days</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-800">
                      <RotateCcw size={14} className="text-[#B33927]" />
                      <span className="font-medium">7-Day Hassle-Free Exchange:</span>
                    </div>
                    <p className="text-[11px] pl-6 text-stone-500">
                      Because every piece is handcrafted in small artisan batches, slight variations in weave and brushstrokes are hallmarks of authenticity, not defects. We gladly exchange sizes.
                    </p>
                    <div className="flex items-center gap-2 text-stone-800">
                      <ShieldCheck size={14} className="text-emerald-700" />
                      <span className="font-medium">Plastic-free corrugated gift packaging</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related items */}
            {relatedProducts.length > 0 && (
              <div className="border-t border-[#E7DDCF] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-800 mb-3">
                  Complementary Handcrafted Pieces:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {relatedProducts.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectProduct(rel)}
                      className="cursor-pointer group border border-[#E7DDCF] p-1.5 bg-white hover:border-[#D9822B] transition-colors"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                        <img src={rel.images[0]} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <p className="text-[11px] font-medium text-stone-800 truncate mt-1">{rel.name}</p>
                      <p className="text-[10px] text-[#B33927] font-semibold">{formatIndianCurrency(rel.price)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
