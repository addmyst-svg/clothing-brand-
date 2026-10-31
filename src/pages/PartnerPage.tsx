import React, { useState } from 'react';
import { Language } from '../types';
import { StitchDivider } from '../components/common/StitchDivider';
import { 
  Users, 
  Briefcase, 
  Handshake, 
  CheckCircle2, 
  Sparkles, 
  Store, 
  Building2, 
  ArrowRight 
} from 'lucide-react';

interface PartnerPageProps {
  language: Language;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'artisans' | 'business'>('artisans');

  // Artisan SHG form state
  const [artisanForm, setArtisanForm] = useState({
    leadName: '',
    shgName: '',
    village: '',
    district: 'Muzaffarpur',
    state: 'Bihar',
    craftTechnique: 'Sujini Embroidery',
    numArtisans: '15-30',
    phone: '',
    message: ''
  });

  // Business / Retailer / CSR form state
  const [businessForm, setBusinessForm] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: 'Boutique Retail / Stockist',
    estimatedVolumeOrBudget: '₹50,000 - ₹2,00,000',
    proposalMessage: ''
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleArtisanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(
      `धन्यवाद! Thank you ${artisanForm.leadName}. Our Bihar outreach field officer will call ${artisanForm.phone} to schedule a visit to your village collective.`
    );
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(
      `Thank you for your partnership interest, ${businessForm.contactPerson} (${businessForm.organizationName}). Our partnerships director will connect within 24 business hours.`
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#B33927]/10 text-[#B33927] text-xs font-semibold uppercase tracking-wider">
          <Handshake size={14} />
          <span>Collaborate with श्री Kala</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44]">
          Grow the Revival Movement
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Whether you are a rural women&apos;s collective looking for steady fair orders, or a boutique retailer, designer, or CSR foundation seeking authentic ethical textiles, join our mission.
        </p>
      </div>

      {/* Two Tabs Selector */}
      <div className="flex border-b border-[#E7DDCF] bg-[#F3ECE1] p-1 text-xs sm:text-sm font-medium">
        <button
          onClick={() => {
            setActiveTab('artisans');
            setSubmittedMessage(null);
          }}
          className={`flex-1 py-3 px-4 text-center transition-all flex items-center justify-center gap-2 ${
            activeTab === 'artisans'
              ? 'bg-[#1E2A44] text-white shadow-xs font-semibold'
              : 'text-stone-700 hover:text-black'
          }`}
        >
          <Users size={16} />
          <span>For Artisans & Self-Help Groups (SHGs)</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('business');
            setSubmittedMessage(null);
          }}
          className={`flex-1 py-3 px-4 text-center transition-all flex items-center justify-center gap-2 ${
            activeTab === 'business'
              ? 'bg-[#1E2A44] text-white shadow-xs font-semibold'
              : 'text-stone-700 hover:text-black'
          }`}
        >
          <Building2 size={16} />
          <span>For Retailers, Designers & CSR Partners</span>
        </button>
      </div>

      {submittedMessage ? (
        <div className="p-8 sm:p-12 bg-white border border-[#E7DDCF] text-center space-y-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="font-heading text-2xl font-medium text-[#1E2A44]">
            Proposal Received Successfully
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 max-w-lg mx-auto leading-relaxed">
            {submittedMessage}
          </p>
          <button
            onClick={() => setSubmittedMessage(null)}
            className="px-5 py-2.5 bg-[#1E2A44] text-white text-xs font-semibold hover:bg-[#B33927] transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : activeTab === 'artisans' ? (
        /* Artisan SHG Application Form */
        <form onSubmit={handleArtisanSubmit} className="bg-white border border-[#E7DDCF] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-[#E7DDCF] pb-4">
            <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
              ग्रामीण शिल्पकार एवं महिला स्वयं-सहायता समूह पंजीकरण
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Join our fair-wage ecosystem. We offer guaranteed seasonal advances, raw material supply, design guidance, and direct bank payments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Lead Artisan / President Name (अध्यक्ष का नाम) *
              </label>
              <input
                type="text"
                required
                value={artisanForm.leadName}
                onChange={(e) => setArtisanForm({ ...artisanForm, leadName: e.target.value })}
                placeholder="e.g. Smt. Manju Devi"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                SHG / Group / Cooperative Name (समूह का नाम) *
              </label>
              <input
                type="text"
                required
                value={artisanForm.shgName}
                onChange={(e) => setArtisanForm({ ...artisanForm, shgName: e.target.value })}
                placeholder="e.g. Pragati Mahila Vikas Samiti"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Village / Block (गांव / ब्लॉक) *
              </label>
              <input
                type="text"
                required
                value={artisanForm.village}
                onChange={(e) => setArtisanForm({ ...artisanForm, village: e.target.value })}
                placeholder="e.g. Bhusra / Ranti / Saraiya"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                District in Bihar (जिला) *
              </label>
              <select
                value={artisanForm.district}
                onChange={(e) => setArtisanForm({ ...artisanForm, district: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              >
                <option value="Muzaffarpur">Muzaffarpur</option>
                <option value="Madhubani">Madhubani</option>
                <option value="Bhagalpur">Bhagalpur</option>
                <option value="Darbhanga">Darbhanga</option>
                <option value="Patna">Patna</option>
                <option value="East/West Champaran">East/West Champaran</option>
                <option value="Gaya">Gaya</option>
                <option value="Other District">Other Region in Bihar / Neighboring State</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Primary Craft Technique (मुख्य हस्तकला) *
              </label>
              <select
                value={artisanForm.craftTechnique}
                onChange={(e) => setArtisanForm({ ...artisanForm, craftTechnique: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              >
                <option value="Sujini Embroidery">Sujini Embroidery (सुजिनी)</option>
                <option value="Madhubani Painting">Madhubani Painting (मधुबनी)</option>
                <option value="Khatwa Applique">Khatwa Cutwork Applique (खतवा)</option>
                <option value="Gota-Patti & Zari">Gota-Patti & Zari (गोटा-पत्ती)</option>
                <option value="Mirror & Threadwork">Mirror & Threadwork (शीशा वर्क)</option>
                <option value="Handloom Weaving">Tussar Handloom Weaving (तसर बुनाई)</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Number of Women Artisans in Group (कारीगरों की संख्या) *
              </label>
              <select
                value={artisanForm.numArtisans}
                onChange={(e) => setArtisanForm({ ...artisanForm, numArtisans: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              >
                <option value="5-15">5 – 15 Artisans</option>
                <option value="15-30">15 – 30 Artisans</option>
                <option value="30-60">30 – 60 Artisans</option>
                <option value="60+">60+ Artisans (Large Cooperative)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-stone-700 font-medium mb-1">
                Contact Phone / WhatsApp (मोबाइल नंबर) *
              </label>
              <input
                type="tel"
                required
                value={artisanForm.phone}
                onChange={(e) => setArtisanForm({ ...artisanForm, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-stone-700 font-medium mb-1">
                Brief Introduction or Questions (संक्षिप्त विवरण)
              </label>
              <textarea
                rows={3}
                value={artisanForm.message}
                onChange={(e) => setArtisanForm({ ...artisanForm, message: e.target.value })}
                placeholder="Tell us what types of fabrics your group currently stitches or paints..."
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            Submit Artisan Group Registration
          </button>
        </form>
      ) : (
        /* Business / CSR / Retailer Partner Form */
        <form onSubmit={handleBusinessSubmit} className="bg-white border border-[#E7DDCF] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="border-b border-[#E7DDCF] pb-4">
            <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
              Retailers, Designers & CSR Partnerships
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Collaborate on wholesale boutique curation, custom designer capsule collections, corporate sustainable gifting, or rural livelihood impact grants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Organization / Company / Brand Name *
              </label>
              <input
                type="text"
                required
                value={businessForm.organizationName}
                onChange={(e) => setBusinessForm({ ...businessForm, organizationName: e.target.value })}
                placeholder="e.g. Veda Heritage Studio / Tata CSR"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Contact Person & Designation *
              </label>
              <input
                type="text"
                required
                value={businessForm.contactPerson}
                onChange={(e) => setBusinessForm({ ...businessForm, contactPerson: e.target.value })}
                placeholder="e.g. Devika Nair, Head of Merchandising"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Official Email Address *
              </label>
              <input
                type="email"
                required
                value={businessForm.email}
                onChange={(e) => setBusinessForm({ ...businessForm, email: e.target.value })}
                placeholder="e.g. partnerships@brand.com"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={businessForm.phone}
                onChange={(e) => setBusinessForm({ ...businessForm, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Partnership Scope *
              </label>
              <select
                value={businessForm.partnerType}
                onChange={(e) => setBusinessForm({ ...businessForm, partnerType: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              >
                <option value="Boutique Retail / Stockist">Boutique Retail / Stockist Orders</option>
                <option value="Designer Capsule Collaboration">Co-Branded Designer Capsule Collaboration</option>
                <option value="Corporate Sustainable Gifting">Corporate Festive & Sustainable Gifting</option>
                <option value="CSR Livelihood Grant / Impact Fund">CSR Women Livelihood Grant / Impact Funding</option>
                <option value="Export / International Distribution">Export & International Distribution</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Estimated Volume / Budget Bracket
              </label>
              <select
                value={businessForm.estimatedVolumeOrBudget}
                onChange={(e) => setBusinessForm({ ...businessForm, estimatedVolumeOrBudget: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              >
                <option value="₹50,000 - ₹2,00,000">₹50,000 - ₹2,00,000 (Small Boutique Trial)</option>
                <option value="₹2,00,000 - ₹10,00,000">₹2,00,000 - ₹10,00,000 (Seasonal Stock)</option>
                <option value="₹10,00,000+">₹10,00,000+ (Institutional / Multi-Store)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-stone-700 font-medium mb-1">
                Collaboration Brief or Requirements *
              </label>
              <textarea
                required
                rows={4}
                value={businessForm.proposalMessage}
                onChange={(e) => setBusinessForm({ ...businessForm, proposalMessage: e.target.value })}
                placeholder="Share your timeline, required quantities, target crafts, or customized logo branding requirements..."
                className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#1E2A44] hover:bg-[#121B2D] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            Submit Commercial Partnership Inquiry
          </button>
        </form>
      )}
    </div>
  );
};
