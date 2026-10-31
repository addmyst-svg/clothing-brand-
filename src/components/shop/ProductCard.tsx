import React from 'react';
import { Product, Language } from '../../types';
import { Heart, Plus, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  language: Language;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  language,
  onSelect,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard';
    onAddToCart(product, defaultSize);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-[#FAF7F2] border border-[#E7DDCF] hover:border-[#D9822B] transition-all duration-300 rounded-none overflow-hidden cursor-pointer shadow-xs hover:shadow-md"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3ECE1]">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Secondary image preview on hover if available */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate angle`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />
        )}

        {/* Top Badges: Tier or Craft Tag */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.isNew && (
            <span className="text-[10px] tracking-wider uppercase font-semibold bg-[#B33927] text-white px-2 py-0.5 shadow-xs">
              New Revival
            </span>
          )}
          {product.tier === 'heritage' && (
            <span className="text-[10px] tracking-wider uppercase font-medium bg-[#1E2A44] text-[#F3ECE1] px-2 py-0.5 border border-[#D9822B]/40 shadow-xs flex items-center gap-1">
              <Sparkles size={10} className="text-[#D9822B]" />
              Heritage Masterpiece
            </span>
          )}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/90 backdrop-blur-xs text-[#1C1917] hover:text-[#B33927] hover:scale-110 transition-all shadow-sm"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'fill-[#B33927] text-[#B33927]' : 'text-stone-700'}
          />
        </button>

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-1.5 z-10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2 px-3 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow-md"
          >
            <Plus size={14} />
            <span>{language === 'en' ? 'Quick Add' : 'जोड़ें'}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(product);
            }}
            aria-label="View product details"
            className="p-2 bg-white/90 hover:bg-white text-[#1C1917] hover:text-[#B33927] transition-colors shadow-md"
            title="Inspect Details"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#FAF7F2]">
        <div>
          {/* Craft Technique & Category Metadata */}
          <div className="flex items-center justify-between text-xs text-[#57534E] mb-1.5">
            <span className="font-semibold text-[#B33927] tracking-wide uppercase text-[11px]">
              {product.craftTechnique}
            </span>
            <span className="text-[11px] text-stone-500">
              {product.category}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-heading text-lg font-medium text-[#1C1917] group-hover:text-[#B33927] transition-colors line-clamp-1">
            {language === 'hi' ? product.hindiName : product.name}
          </h3>

          {/* Artisan Collective Attribution */}
          <p className="text-[11px] text-stone-500 mt-1 italic flex items-center gap-1">
            <span>By {product.artisanGroupName}</span>
          </p>
        </div>

        {/* Price & Stitch Line Footer */}
        <div className="mt-3 pt-2.5 border-t border-[#E7DDCF]/80 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#1E2A44]">
              {formatIndianCurrency(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-stone-600 line-through">
                {formatIndianCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          <span className="text-[11px] text-amber-800 font-medium tracking-tight">
            ⏱ {product.timeToMake}
          </span>
        </div>
      </div>
    </div>
  );
};
