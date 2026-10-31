import React, { useState } from 'react';
import { CartItem, Language } from '../../types';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  QrCode, 
  Banknote, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Package, 
  Clock, 
  MapPin, 
  ArrowLeft
} from 'lucide-react';
import { Logo } from '../common/Logo';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  appliedDiscount: number;
  discountCode: string;
  onClearCart: () => void;
  language: Language;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  appliedDiscount,
  discountCode,
  onClearCart,
  language
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Heritage Residency, Fraser Road',
    city: 'Patna',
    state: 'Bihar',
    pincode: '800001'
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const shippingFee = subtotal >= 1999 ? 0 : 150;
  const grandTotal = subtotal - discountAmount + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const mockOrderId = `SK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(mockOrderId);
    setStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#FAF7F2] w-full max-w-4xl max-h-[94vh] overflow-y-auto shadow-2xl border border-[#D9822B]/40 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#E7DDCF] flex items-center justify-between bg-[#F3ECE1]">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-stone-400">|</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1E2A44]">
              {step === 'form' ? 'Secure Checkout' : 'Order Confirmation'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-600 hover:text-[#B33927] hover:bg-stone-200/60 rounded-full transition-colors"
            aria-label="Close checkout"
          >
            <X size={20} />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Shipping Address & Payment Selection (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E2A44] mb-4 flex items-center gap-2">
                    <Truck size={16} className="text-[#B33927]" />
                    <span>Shipping Address (Pan-India)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block text-stone-700 font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Phone Number (for Courier & Updates)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-stone-700 font-medium mb-1">Street Address / House No.</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">City / Town</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-stone-700 font-medium mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-medium mb-1">PIN Code</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="pt-4 border-t border-[#E7DDCF]">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1E2A44] mb-3 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#B33927]" />
                    <span>Select Payment Option (Demo Simulation)</span>
                  </h3>

                  <div className="space-y-2.5">
                    {/* UPI Option */}
                    <label
                      onClick={() => setPaymentMethod('upi')}
                      className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-[#B33927] bg-[#B33927]/5 ring-1 ring-[#B33927]'
                          : 'border-[#D6C7B2] bg-white hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'upi'}
                          onChange={() => setPaymentMethod('upi')}
                          className="text-[#B33927] focus:ring-[#B33927]"
                        />
                        <div>
                          <p className="text-xs font-semibold text-stone-900">
                            Instant UPI / QR Code (Recommended)
                          </p>
                          <p className="text-[11px] text-stone-500">
                            Google Pay, PhonePe, Paytm, BHIM UPI
                          </p>
                        </div>
                      </div>
                      <QrCode size={20} className="text-[#D9822B]" />
                    </label>

                    {/* Cards Option */}
                    <label
                      onClick={() => setPaymentMethod('card')}
                      className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#B33927] bg-[#B33927]/5 ring-1 ring-[#B33927]'
                          : 'border-[#D6C7B2] bg-white hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                          className="text-[#B33927] focus:ring-[#B33927]"
                        />
                        <div>
                          <p className="text-xs font-semibold text-stone-900">
                            Debit & Credit Cards / NetBanking
                          </p>
                          <p className="text-[11px] text-stone-500">
                            Visa, MasterCard, RuPay, Amex
                          </p>
                        </div>
                      </div>
                      <CreditCard size={20} className="text-[#1E2A44]" />
                    </label>

                    {/* Cash on Delivery */}
                    <label
                      onClick={() => setPaymentMethod('cod')}
                      className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-[#B33927] bg-[#B33927]/5 ring-1 ring-[#B33927]'
                          : 'border-[#D6C7B2] bg-white hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="text-[#B33927] focus:ring-[#B33927]"
                        />
                        <div>
                          <p className="text-xs font-semibold text-stone-900">
                            Cash on Delivery (COD)
                          </p>
                          <p className="text-[11px] text-stone-500">
                            Pay in cash or UPI at the time of doorstep delivery
                          </p>
                        </div>
                      </div>
                      <Banknote size={20} className="text-emerald-700" />
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary Col (5 Cols) */}
              <div className="lg:col-span-5 bg-[#F3ECE1] p-5 border border-[#E7DDCF] flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-800 pb-3 border-b border-[#D6C7B2]">
                    Order Summary ({cart.reduce((t, i) => t + i.quantity, 0)} Items)
                  </h4>

                  <div className="max-h-56 overflow-y-auto divide-y divide-[#E7DDCF] my-3">
                    {cart.map((item) => (
                      <div key={`${item.product.id}-${item.selectedSize}`} className="py-2.5 flex items-center gap-3 text-xs">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-12 h-14 object-cover shrink-0 bg-white border border-[#D6C7B2]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-stone-900 truncate">{item.product.name}</p>
                          <p className="text-[11px] text-stone-500">
                            Size: {item.selectedSize} • Qty: {item.quantity}
                          </p>
                          <p className="text-[10px] text-[#B33927] font-semibold">
                            {item.product.craftTechnique} Craft
                          </p>
                        </div>
                        <span className="font-semibold text-stone-900">
                          {formatIndianCurrency(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-stone-700 pt-3 border-t border-[#D6C7B2]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatIndianCurrency(subtotal)}</span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-800 font-medium">
                        <span>Discount ({discountCode} - {appliedDiscount}%)</span>
                        <span>-{formatIndianCurrency(discountAmount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Pan-India Courier Shipping</span>
                      <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : formatIndianCurrency(shippingFee)}</span>
                    </div>

                    <div className="flex justify-between text-base font-semibold text-[#1E2A44] pt-3 border-t border-[#D6C7B2]">
                      <span>Grand Total</span>
                      <span className="text-[#B33927]">
                        {formatIndianCurrency(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <div className="p-3 bg-white/70 border border-[#D6C7B2] text-[11px] text-stone-600">
                    <p className="font-medium text-[#1E2A44] flex items-center gap-1.5 mb-1">
                      <Sparkles size={13} className="text-[#D9822B]" />
                      Craft Transparency Pledge
                    </p>
                    <p>
                      Over 65% of this purchase goes directly into the hands of the rural women craftswomen of Bihar.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                  >
                    Place Demo Order ({formatIndianCurrency(grandTotal)})
                  </button>

                  <p className="text-[10px] text-center text-stone-500">
                    [Demo Mode] No real card or UPI charges are made.
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          /* Order Confirmation View */
          <div className="p-6 sm:p-12 text-center max-w-xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B33927] font-semibold">
                Order Placed Successfully
              </span>
              <h3 className="font-heading text-3xl font-medium text-[#1E2A44] mt-1">
                धन्यवाद! Thank You for Supporting Bihar’s Artisans.
              </h3>
              <p className="text-xs text-stone-600 mt-2">
                Order Reference: <strong className="font-mono text-[#1E2A44]">{confirmedOrderId}</strong>
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E7DDCF] text-left text-xs space-y-3 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Customer:</span>
                <span className="font-semibold text-stone-900">{formData.fullName}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Destination:</span>
                <span className="font-medium text-stone-800">{formData.city}, {formData.state} - {formData.pincode}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Payment:</span>
                <span className="font-medium text-stone-800 uppercase">{paymentMethod} (Simulated)</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500">Estimated Dispatch:</span>
                <span className="font-medium text-stone-800">48 Hours from Bihar Workshop</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-sm pt-1 text-[#1E2A44]">
                <span>Total Amount:</span>
                <span className="text-[#B33927]">{formatIndianCurrency(grandTotal)}</span>
              </div>
            </div>

            <div className="p-4 bg-[#F3ECE1] border border-[#E7DDCF] text-xs text-stone-600 flex items-start gap-3 text-left">
              <Package size={20} className="text-[#D9822B] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-900">What happens next?</p>
                <p className="text-[11px] mt-0.5">
                  Your artisan collective will steam-press your pieces, hand-pack them into our signature recycled cotton-rag pouches, and enclose an artisan greeting card.
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                Back to Collection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
