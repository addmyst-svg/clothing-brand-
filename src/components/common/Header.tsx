import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Search, ShoppingBag, Heart, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  cartCount: number;
  openCart: () => void;
  wishlistCount: number;
  openWishlist: () => void;
  openSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  cartCount,
  openCart,
  wishlistCount,
  openWishlist,
  openSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'shop', label: t.nav.shop },
    { id: 'crafts', label: t.nav.crafts },
    { id: 'artisans', label: t.nav.artisans },
    { id: 'customise', label: t.nav.customise, badge: 'Bespoke' },
    { id: 'story', label: t.nav.story },
    { id: 'partner', label: t.nav.partner },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <>
      {/* Top Heritage Announcement Banner */}
      <div className="bg-[#1E2A44] text-[#FAF7F2] text-xs py-1.5 px-4 text-center font-body border-b border-[#D9822B]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="w-full text-center tracking-wide font-light flex items-center justify-center gap-2">
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D9822B] animate-pulse" />
            <span>
              {language === 'en' 
                ? 'Handcrafted with pride in Bihar, India • Free shipping on orders above ₹1,999' 
                : 'बिहार के ग्रामीण महिला स्वयं-सहायता समूहों द्वारा हस्तनिर्मित • ₹1,999 से अधिक पर निःशुल्क शिपिंग'}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D9822B] animate-pulse" />
          </p>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#E7DDCF]'
            : 'bg-[#FAF7F2] py-4 border-b border-[#E7DDCF]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1E2A44] hover:text-[#B33927] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B33927]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Brand Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="cursor-pointer transition-transform hover:opacity-95"
            >
              <Logo size={isScrolled ? 'sm' : 'md'} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#B33927] font-semibold'
                        : 'text-[#1C1917]/80 hover:text-[#B33927]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-[#D9822B]/15 text-[#B33927] font-medium tracking-tight">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B33927] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Utilities: Language Toggle, Search, Wishlist, Cart */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                title={language === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-[#D6C7B2] text-[#1E2A44] hover:bg-[#F3ECE1] hover:border-[#B33927] transition-all"
                aria-label="Toggle language between English and Hindi"
              >
                <Globe size={13} className="text-[#B33927]" />
                <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'EN'}</span>
              </button>

              {/* Search Trigger */}
              <button
                onClick={openSearch}
                className="p-2 text-[#1E2A44] hover:text-[#B33927] hover:bg-[#F3ECE1] rounded-full transition-colors"
                aria-label="Search collection"
                title="Search collection, crafts, and artisans"
              >
                <Search size={19} />
              </button>

              {/* Wishlist Trigger */}
              <button
                onClick={openWishlist}
                className="relative p-2 text-[#1E2A44] hover:text-[#B33927] hover:bg-[#F3ECE1] rounded-full transition-colors"
                aria-label="View wishlist"
                title="Wishlist"
              >
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span className="absolute 1 top-0.5 right-0.5 w-4 h-4 bg-[#B33927] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E2A44] hover:bg-[#B33927] text-white text-xs font-medium transition-all shadow-sm"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline">{cartCount}</span>
                {cartCount > 0 && (
                  <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 bg-[#B33927] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Decorative stitch accent under header */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9822B]/40 to-transparent mt-2.5" />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-xl flex flex-col justify-between p-6 z-50 border-r border-[#E7DDCF] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E7DDCF]">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-600 hover:text-stone-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="py-4">
                <p className="text-xs uppercase tracking-wider text-[#B33927] font-semibold mb-2">
                  {language === 'en' ? 'Explore Shri Kala' : 'श्री Kala संग्रह'}
                </p>
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = currentTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-[#1E2A44] text-white'
                            : 'text-[#1C1917] hover:bg-[#F3ECE1]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className={`text-[10px] px-2 py-0.5 rounded ${isActive ? 'bg-amber-400 text-slate-900' : 'bg-[#D9822B]/20 text-[#B33927]'}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E7DDCF] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-600">Language / भाषा:</span>
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-[#D9822B] text-[#B33927] bg-[#F3ECE1]"
                >
                  {language === 'en' ? 'हिन्दी में पढ़ें' : 'English'}
                </button>
              </div>
              <div className="p-3 bg-[#F3ECE1]/70 rounded-lg border border-[#E7DDCF] text-xs text-stone-600">
                <p className="font-semibold text-[#1E2A44] mb-1 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#D9822B]" />
                  {t.brandTagline}
                </p>
                <p className="text-[11px] text-stone-500">
                  {t.brandTaglineSub}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
