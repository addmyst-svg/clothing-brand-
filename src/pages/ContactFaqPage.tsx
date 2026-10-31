import React, { useState } from 'react';
import { Language } from '../types';
import { StitchDivider } from '../components/common/StitchDivider';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

interface ContactFaqPageProps {
  language: Language;
}

export const ContactFaqPage: React.FC<ContactFaqPageProps> = ({ language }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order & Sizing Inquiry',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const faqs = [
    {
      q: 'How long does shipping take within India and internationally?',
      a: 'Ready-to-ship catalog pieces are packaged within 24–48 hours from our Bihar center and typically arrive in 4–7 business days anywhere across India via insured courier. Bespoke and customized handcrafted commissions require 2–4 weeks as each stitch or painting is executed entirely by hand.'
    },
    {
      q: 'What is your exchange and return policy on handmade apparel?',
      a: 'We offer an easy 7-day size exchange guarantee on unworn pieces with tags intact. If the fit isn’t quite right, we arrange a pickup and ship your replacement at no added charge.'
    },
    {
      q: 'Why are there slight variations in dye tone or embroidery thickness?',
      a: 'Because our pieces are truly handcrafted—never printed by industrial laser machines—slight shifts in natural botanical indigo shades, raw tussar slubs, and individual needle tension are authentic signatures of the human hand that made it.'
    },
    {
      q: 'How do you guarantee that women artisans are paid fairly?',
      a: 'श्री Kala operates on an open-ledger Fair Wage model. Over 60% of product retail margins are directed straight to artisan self-help accounts with guaranteed digital bank transfers, ensuring women have direct financial autonomy independent of middlemen.'
    },
    {
      q: 'Can you create custom matching wedding trousseaus or family outfits?',
      a: 'Yes! Our "Customise" studio specializes in bespoke bridal sarees, groomsmen Nehru jackets with Sujini piping, and hand-painted Madhubani dupattas. Submit an inquiry through our Customise page to begin.'
    },
    {
      q: 'Do you offer bulk corporate or festive gifting with custom branding?',
      a: 'Yes, we curate sustainable corporate gift sets (silk stoles, hand-painted diary folios, brass jewellery) in eco-friendly seed paper boxes with your organization’s story card.'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: 'Order & Sizing Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
          We&apos;d Love to Hear from You
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl font-medium text-[#1E2A44]">
          Contact & Heritage Studio FAQ
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Questions about artisanal sizing, craft origins, custom commissions, or visiting our village workshops in Bihar? Our team is here to assist.
        </p>
      </div>

      {/* Grid: Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 bg-[#F3ECE1] p-6 sm:p-8 border border-[#E7DDCF] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
              Artisan Studio & Coordinates
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-8 h-8 rounded-full bg-white text-[#B33927] border border-[#D6C7B2] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Registered Office & Design Studio:</p>
                <p className="mt-0.5">श्री Kala Heritage Center, Fraser Road,</p>
                <p>Patna, Bihar 800001, India</p>
                <p className="text-[11px] text-stone-500 mt-1 italic">
                  Craft Studios: Bhusra (Muzaffarpur) & Ranti (Madhubani)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-8 h-8 rounded-full bg-white text-[#B33927] border border-[#D6C7B2] flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={16} />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Email Inquiries:</p>
                <p className="mt-0.5 text-[#1E2A44] font-medium">namaste@shrikala.in</p>
                <p className="text-stone-500 text-[11px]">partnerships@shrikala.in</p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-3.5 text-xs text-stone-700">
              <div className="w-8 h-8 rounded-full bg-white text-[#B33927] border border-[#D6C7B2] flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={16} />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Telephone / Studio Helpline:</p>
                <p className="mt-0.5 font-medium">+91 98350 12345 / +91 612 223344</p>
                <p className="text-stone-500 text-[11px]">Mon – Sat, 10:00 AM – 7:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action Button */}
          <div className="pt-6 border-t border-[#D6C7B2]">
            <a
              href="https://wa.me/919835012345?text=Namaste%20Shri%20Kala%2C%20I%20have%20an%20inquiry%20regarding%20handcrafted%20pieces."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              <span>Direct WhatsApp with Craft Manager</span>
            </a>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E7DDCF] shadow-xs">
          <h3 className="font-heading text-2xl font-medium text-[#1E2A44] mb-2">
            Send Us a Message
          </h3>
          <p className="text-xs text-stone-600 mb-6">
            We respond to every query within 24 hours with warmth and precision.
          </p>

          {formSent ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 size={32} className="text-emerald-700 mx-auto" />
              <h4 className="font-heading text-xl font-medium text-emerald-900">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                Thank you for writing to श्री Kala. Our customer care and craft team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                    placeholder="e.g. Priya Mukherjee"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                    placeholder="e.g. priya@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Subject</label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                  >
                    <option value="Order & Sizing Inquiry">Order Status & Sizing Inquiry</option>
                    <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                    <option value="Corporate / Bulk Gifting">Corporate / Bulk Gifting</option>
                    <option value="Visiting Bihar Craft Studio">Visiting Bihar Craft Studio</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="How can we help you celebrate handcrafted Indian art today?"
                  className="w-full px-3 py-2 bg-white border border-[#D6C7B2] focus:border-[#B33927] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#B33927] hover:bg-[#8C2718] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <StitchDivider color="turmeric" withMirror />

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl font-medium text-[#1E2A44] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E7DDCF] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-medium text-[#1E2A44] hover:text-[#B33927] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#B33927] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
