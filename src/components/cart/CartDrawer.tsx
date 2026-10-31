import React, { useState } from 'react';
import { CartItem, Language } from '../../types';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckout: (appliedDiscount: number, discountCode: string) => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  language
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language];
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountError, setDiscountError] = useState('');
  const [discountAppliedCode, setDiscountAppliedCode] = useState('');

  const FREE_SHIPPING_THRESHOLD = 1999;

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'VIRASAT10' || cleanCode === 'SHRIKALA') {
      setDiscountPercent(10);
      setDiscountAppliedCode(cleanCode);
      setDiscountError('');
    } else if (cleanCode === 'ARTISAN15') {
      setDiscountPercent(15);
      setDiscountAppliedCode(cleanCode);
      setDiscountError('');
    } else {
      setDiscountError(language === 'en' ? 'Invalid code. Try "VIRASAT10"' : 'अमान्य कोड। "VIRASAT10" का उपयोग करें');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#D9822B]/30">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E7DDCF] flex items-center justify-between bg-[#F3ECE1]">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-[#B33927]" />
              <h2 className="font-heading text-xl font-semibold text-[#1E2A44]">
                {t.cart.title}
              </h2>
              <span className="text-xs bg-[#1E2A44] text-white px-2 py-0.5 rounded-full font-sans">
                {cart.reduce((total, i) => total + i.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-[#B33927] hover:bg-stone-200/60 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#FAF7F2] px-5 py-3 border-b border-[#E7DDCF]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500" />
                  {t.cart.freeShippingUnlocked}
                </span>
              ) : (
                <span className="text-stone-700">
                  {language === 'en' ? 'Add ' : 'निःशुल्क शिपिंग के लिए '}
                  <strong className="text-[#B33927]">{formatIndianCurrency(remainingForFreeShipping)}</strong>
                  {language === 'en' ? ' more for Free Pan-India Shipping' : ' का सामान और जोड़ें'}
                </span>
              )}
              <span className="text-stone-600 font-medium">{freeShippingProgress}%</span>
            </div>
            <div className="w-full bg-[#E7DDCF] h-1.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D9822B] to-[#B33927] h-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE1] border border-[#E7DDCF] flex items-center justify-center text-stone-400">
                  <ShoppingBag size={28} />
                </div>
                <p className="text-sm text-stone-600 max-w-xs leading-relaxed">
                  {t.cart.empty}
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-semibold tracking-wide transition-colors"
                >
                  {t.cart.emptyAction}
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-3.5 p-3 bg-white border border-[#E7DDCF] hover:border-[#D9822B]/60 transition-all shadow-xs"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover shrink-0 bg-[#F3ECE1]"
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-medium text-stone-900 truncate">
                          {language === 'hi' ? item.product.hindiName : item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                          className="text-stone-600 hover:text-[#B33927] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#B33927] font-medium mt-0.5">
                        {item.product.craftTechnique} Craft • Size: {item.selectedSize}
                      </p>

                      <p className="text-[10px] text-stone-600 truncate mt-0.5">
                        By {item.product.artisanGroupName}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-[#E7DDCF] text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 font-semibold text-stone-800 min-w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-semibold text-[#1E2A44]">
                        {formatIndianCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-[#F3ECE1] border-t border-[#E7DDCF] space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag size={13} className="absolute left-2.5 top-3 text-stone-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. VIRASAT10)"
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#D6C7B2] uppercase tracking-wide focus:outline-none focus:border-[#B33927]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountAppliedCode && (
                  <p className="text-[11px] text-emerald-700 font-medium">
                    ✓ Code {discountAppliedCode} applied ({discountPercent}% off)!
                  </p>
                )}
                {discountError && (
                  <p className="text-[11px] text-red-600">{discountError}</p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatIndianCurrency(subtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Artisan Heritage Discount ({discountPercent}%)</span>
                    <span>-{formatIndianCurrency(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Pan-India Delivery</span>
                  <span>
                    {remainingForFreeShipping === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE</span>
                    ) : (
                      formatIndianCurrency(150)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#1E2A44] pt-2 border-t border-[#D6C7B2]">
                  <span>Total Amount</span>
                  <span className="text-[#B33927] text-base">
                    {formatIndianCurrency(total + (remainingForFreeShipping === 0 ? 0 : 150))}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onCheckout(discountPercent, discountAppliedCode);
                  onClose();
                }}
                className="w-full py-3 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>{t.cart.checkout}</span>
                <ArrowRight size={15} />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
                <ShieldCheck size={13} className="text-emerald-700" />
                <span>100% Secure Checkout • Fair Wages Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
