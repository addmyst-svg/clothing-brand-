import React, { useState } from 'react';
import { Language, CustomOrderRequest } from '../types';
import { StitchDivider } from '../components/common/StitchDivider';
import { 
  Sparkles, 
  Clock, 
  UploadCloud, 
  CheckCircle2, 
  Ruler, 
  Palette, 
  HelpCircle,
  FileCheck
} from 'lucide-react';

interface CustomisePageProps {
  language: Language;
}

export const CustomisePage: React.FC<CustomisePageProps> = ({ language }) => {
  const [formData, setFormData] = useState<CustomOrderRequest>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    productType: 'Denim Jacket with Hand Painting',
    craftTechnique: 'Madhubani Painting',
    primaryColor: 'Indigo & Madder Red',
    measurementsOrSize: 'Size M (Chest 38", Length 26")',
    occasion: 'Festive / Wedding Guest',
    budgetRange: '₹4,000 - ₹8,000',
    notes: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `BESPOKE-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D9822B]/20 text-[#8C2718] text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={13} />
          <span>Bespoke Handcrafted Commissions</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44]">
          Customise Your Heritage Piece
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
          Dream of a personalized bridal dupatta with your family story in Sujini stitches, or your vintage denim jacket hand-painted with Madhubani peacocks? Our Bihar master craftswomen bring your vision to life.
        </p>

        {/* Turnaround Time Notice */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-[#F3ECE1] border border-[#D9822B]/40 text-xs text-stone-800 font-medium">
          <Clock size={15} className="text-[#B33927]" />
          <span>Note: Purely handmade commissions require <strong>2–4 weeks</strong> for authentic needlecraft.</span>
        </div>
      </div>

      <StitchDivider color="turmeric" withMirror />

      {submittedTicket ? (
        <div className="p-8 sm:p-12 bg-white border border-[#E7DDCF] text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#B33927] font-semibold">
              Bespoke Request Received
            </span>
            <h2 className="font-heading text-3xl font-medium text-[#1E2A44] mt-1">
              Thank You, {formData.fullName}!
            </h2>
            <p className="text-xs text-stone-600 mt-2">
              Your inquiry reference: <strong className="font-mono text-[#1E2A44]">{submittedTicket}</strong>
            </p>
          </div>

          <div className="p-5 bg-[#FAF7F2] border border-[#E7DDCF] max-w-lg mx-auto text-left text-xs space-y-2.5">
            <p className="font-medium text-stone-900 pb-2 border-b border-stone-200">
              Commission Outline:
            </p>
            <p><strong>Item:</strong> {formData.productType}</p>
            <p><strong>Craft Technique:</strong> {formData.craftTechnique}</p>
            <p><strong>Target Budget:</strong> {formData.budgetRange}</p>
            <p><strong>Estimated Craft Duration:</strong> 2–4 Weeks</p>
          </div>

          <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
            Our Head of Artisan Collaborations from our Muzaffarpur studio will reach out on WhatsApp / Email within 24 hours with fabric swatches and sketch iterations.
          </p>

          <button
            onClick={() => setSubmittedTicket(null)}
            className="px-6 py-2.5 bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-semibold tracking-wide transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-[#E7DDCF] p-6 sm:p-10 shadow-xs space-y-8">
          {/* Section 1: Product & Craft Specifications */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-medium text-[#1E2A44] pb-2 border-b border-[#E7DDCF] flex items-center gap-2">
              <Palette size={18} className="text-[#B33927]" />
              <span>1. Craft & Silhouette Preferences</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Product Type to Customise *
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                >
                  <option value="Denim Jacket with Hand Painting">Denim Jacket (Upcycled / Hand-painted)</option>
                  <option value="Tussar Silk Saree with Sujini Border">Tussar Silk Saree with Custom Sujini Border</option>
                  <option value="Angrakha Kurta with Khatwa Patchwork">Angrakha Kurta with Khatwa Cutwork</option>
                  <option value="Bridal Organza Dupatta with Gota-Patti">Bridal Organza Dupatta with Gota-Patti</option>
                  <option value="Bespoke Embroidered Tote / Potli Bag">Bespoke Handcrafted Tote / Potli Bag</option>
                  <option value="Hand-painted Silk Stole / Scarf">Hand-painted Silk Stole / Scarf</option>
                  <option value="Framed Madhubani Heritage Wall Textile">Framed Madhubani Heritage Wall Textile</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Heritage Craft Technique *
                </label>
                <select
                  name="craftTechnique"
                  value={formData.craftTechnique}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                >
                  <option value="Sujini Embroidery">Sujini Narrative Embroidery (Muzaffarpur)</option>
                  <option value="Madhubani Painting">Madhubani / Mithila Painting (Mithila)</option>
                  <option value="Khatwa Cutwork Applique">Khatwa Cutwork Applique (Madhubani)</option>
                  <option value="Gota-Patti Ribbon Work">Gota-Patti Festive Work</option>
                  <option value="Shisha Mirror Work">Shisha Mirror Hand Caging</option>
                  <option value="Botanical Dyes & Freehand Brushwork">Botanical Dyes & Freehand Brushwork</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Color Palette / Preferred Dyes *
                </label>
                <input
                  type="text"
                  name="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleInputChange}
                  placeholder="e.g. Natural Indigo, Terracotta, Turmeric Gold, Raw Ivory"
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Occasion or Theme
                </label>
                <input
                  type="text"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  placeholder="e.g. Wedding trousseau, Art collector gift, Casual luxury"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Measurements & Budget */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-medium text-[#1E2A44] pb-2 border-b border-[#E7DDCF] flex items-center gap-2">
              <Ruler size={18} className="text-[#D9822B]" />
              <span>2. Fit, Budget & Story Notes</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Size or Detailed Measurements *
                </label>
                <input
                  type="text"
                  name="measurementsOrSize"
                  value={formData.measurementsOrSize}
                  onChange={handleInputChange}
                  placeholder="e.g. Size L, or Bust: 38, Waist: 32, Length: 44"
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Target Budget Range (₹) *
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                >
                  <option value="₹2,500 - ₹5,000">₹2,500 - ₹5,000 (Everyday Artisanal)</option>
                  <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000 (Medium Detailed Craft)</option>
                  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000 (Masterpiece Heirloom)</option>
                  <option value="₹20,000+">₹20,000+ (Extensive Bridal / Collector Edition)</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Story Details, Motifs, or Inscriptions to Include
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us what story you wish the artisans to embroider: e.g. wedding date, initials, a river motif, favorite birds, or memories..."
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              {/* File upload */}
              <div className="sm:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">
                  Reference Sketch or Inspiration Image (Optional)
                </label>
                <div className="border-2 border-dashed border-[#D6C7B2] p-4 text-center hover:border-[#B33927] transition-colors bg-[#FAF7F2]">
                  <input
                    type="file"
                    id="ref-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="ref-upload" className="cursor-pointer flex flex-col items-center justify-center gap-1.5">
                    <UploadCloud size={24} className="text-[#D9822B]" />
                    <span className="text-xs text-stone-700 font-medium">
                      {fileName ? `Attached: ${fileName}` : 'Click to select reference image / photo from device'}
                    </span>
                    <span className="text-[10px] text-stone-600">JPG, PNG, PDF up to 10MB</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-medium text-[#1E2A44] pb-2 border-b border-[#E7DDCF] flex items-center gap-2">
              <FileCheck size={18} className="text-emerald-700" />
              <span>3. Your Contact Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Radhika Sen"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. radhika@example.com"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">City / Country *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Mumbai / Bangalore / London"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
          >
            Submit Custom Commission Request
          </button>
        </form>
      )}
    </div>
  );
};
