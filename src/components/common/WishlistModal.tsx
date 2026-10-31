import React from 'react';
import { Product, Language } from '../../types';
import { PRODUCTS_DATA } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
  language: Language;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  language
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS_DATA.filter((p) => wishlistIds.includes(p.id));

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#D9822B]/30">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E7DDCF] flex items-center justify-between bg-[#F3ECE1]">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-[#B33927] fill-[#B33927]" />
              <h2 className="font-heading text-xl font-semibold text-[#1E2A44]">
                {language === 'en' ? 'Saved Pieces (Wishlist)' : 'पसंदीदा हस्तशिल्प'}
              </h2>
              <span className="text-xs bg-[#B33927] text-white px-2 py-0.5 rounded-full font-sans">
                {wishlistedProducts.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-[#B33927] hover:bg-stone-200/60 rounded-full transition-colors"
              aria-label="Close wishlist"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE1] border border-[#E7DDCF] flex items-center justify-center text-stone-400">
                  <Heart size={28} />
                </div>
                <p className="text-sm text-stone-600">
                  {language === 'en'
                    ? 'No craft pieces saved yet. Tap the heart on any item you love.'
                    : 'अभी कोई पसंदीदा उत्पाद नहीं जोड़ा गया है।'}
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  {language === 'en' ? 'Explore Crafts' : 'संग्रह देखें'}
                </button>
              </div>
            ) : (
              wishlistedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="flex gap-3.5 p-3 bg-white border border-[#E7DDCF] hover:border-[#D9822B]/60 transition-all shadow-xs"
                >
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    className="w-20 h-24 object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 
                          onClick={() => {
                            onSelectProduct(prod);
                            onClose();
                          }}
                          className="text-xs font-semibold text-stone-900 truncate hover:text-[#B33927] cursor-pointer"
                        >
                          {language === 'hi' ? prod.hindiName : prod.name}
                        </h4>
                        <button
                          onClick={() => onToggleWishlist(prod.id)}
                          className="text-stone-600 hover:text-[#B33927] p-1"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#B33927] font-medium mt-0.5">
                        {prod.craftTechnique} Craft
                      </p>

                      <p className="text-xs font-semibold text-[#1E2A44] mt-1">
                        {formatIndianCurrency(prod.price)}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const defaultSize = prod.sizes[0] || 'Standard';
                        onAddToCart(prod, defaultSize);
                      }}
                      className="mt-2 py-1.5 px-3 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag size={13} />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
