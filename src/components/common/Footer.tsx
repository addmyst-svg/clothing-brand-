import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, ArrowRight, Heart, MapPin, Phone, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, language }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const t = TRANSLATIONS[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navigateTo = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121B2D] text-[#FAF7F2] pt-16 pb-8 border-t-2 border-[#D9822B]">
      {/* Decorative top stitch line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="stitch-line-h opacity-40 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="font-heading text-lg text-amber-200/90 italic tracking-wide">
              &ldquo;{t.brandTagline}&rdquo;
            </p>

            <p className="text-sm text-stone-300/80 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'श्री Kala (Shri Kala) revives disappearing traditional handicrafts like Sujini, Madhubani, and Khatwa by translating them into contemporary, durable everyday clothing handcrafted by rural women in Bihar.'
                : 'श्री Kala बिहार की विलुप्तप्राय सुजिनी, मधुबनी और खतवा हस्तकलाओं को समकालीन फैशन में संजोकर ग्रामीण महिला कारीगरों को सशक्त और आत्मनिर्भर बनाती है।'}
            </p>

            {/* Artisan Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-xs text-amber-200">
              <MapPin size={13} className="text-[#D9822B]" />
              <span>{language === 'en' ? 'Craft Studios: Muzaffarpur & Madhubani, Bihar' : 'शिल्प केंद्र: मुजफ्फरपुर एवं मधुबनी, बिहार'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold mb-4">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-amber-300 transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-300 transition-colors">
                  {t.nav.shop}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors">
                  {t.nav.crafts}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('artisans')} className="hover:text-amber-300 transition-colors">
                  {t.nav.artisans}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('customise')} className="hover:text-amber-300 transition-colors">
                  {t.nav.customise}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('story')} className="hover:text-amber-300 transition-colors">
                  {t.nav.story}
                </button>
              </li>
            </ul>
          </div>

          {/* Heritage Crafts */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold mb-4">
              {language === 'en' ? 'Craft Traditions' : 'शिल्प परंपराएं'}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Sujini Storytelling Embroidery
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Madhubani / Mithila Painting
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Khatwa Applique & Cutwork
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Gota-Patti Festive Handwork
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Shisha Mirror Work
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('crafts')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Handloom Bhagalpur Tussar
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D9822B] font-semibold mb-4">
              {language === 'en' ? 'Artisan Chronicle' : 'शिल्प समाचार पत्रिका'}
            </h4>
            <p className="text-xs text-stone-300/80 mb-4 leading-relaxed">
              {language === 'en'
                ? 'Receive monthly craft stories, village studio dispatches, and private previews of limited seasonal drops.'
                : 'मासिक शिल्प गाथाएं, गांव के केंद्रों की खबरें और विशेष नए उत्पादों की अग्रिम सूचना पाएं।'}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'en' ? 'Enter your email address' : 'अपना ईमेल दर्ज करें'}
                  required
                  className="w-full pl-3.5 pr-10 py-2.5 text-xs bg-white/10 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:outline-none focus:border-[#D9822B] focus:ring-1 focus:ring-[#D9822B]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-[#B33927] hover:bg-[#8C2718] text-white rounded-md flex items-center justify-center transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 py-1">
                  <CheckCircle2 size={13} />
                  <span>{language === 'en' ? 'Thank you! You are subscribed to our craft stories.' : 'धन्यवाद! आप हमारे शिल्प परिवार से जुड़ चुके हैं।'}</span>
                </div>
              )}
            </form>

            <div className="pt-4 flex items-center space-x-3 text-stone-300">
              <a href="#instagram" className="p-2 bg-white/5 hover:bg-[#B33927] rounded-full transition-colors" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#facebook" className="p-2 bg-white/5 hover:bg-[#B33927] rounded-full transition-colors" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#twitter" className="p-2 bg-white/5 hover:bg-[#B33927] rounded-full transition-colors" title="Twitter / X">
                <Twitter size={16} />
              </a>
              <button onClick={() => navigateTo('contact')} className="p-2 bg-white/5 hover:bg-[#B33927] rounded-full transition-colors" title="Contact Us">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p className="flex items-center gap-1.5">
            <span>Handcrafted with pride in Bihar, India</span>
            <span>•</span>
            <span>Made with <Heart size={12} className="inline text-[#B33927] fill-[#B33927]" /> for rural women artisans</span>
          </p>

          <p className="font-heading tracking-wider">
            © 2026 श्री Kala (Shri Kala). All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <button onClick={() => navigateTo('partner')} className="hover:text-amber-300 transition-colors">
              {t.nav.partner}
            </button>
            <span>•</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-amber-300 transition-colors">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
