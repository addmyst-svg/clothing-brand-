import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../../types';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = encodeURIComponent(
    'Namaste श्री Kala team, I am interested in your handcrafted heritage collection and bespoke artisan pieces.'
  );
  // Fictional realistic WhatsApp support link
  const whatsappUrl = `https://wa.me/919835012345?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="mb-3 p-3 bg-white border border-[#D9822B] shadow-xl max-w-xs text-xs text-stone-800 rounded-none relative animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 text-stone-400 hover:text-stone-700"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
          <p className="font-semibold text-[#1E2A44] mb-0.5">
            {language === 'en' ? 'Chat with Bihar Craft Studio' : 'शिल्प स्टूडियो से बात करें'}
          </p>
          <p className="text-[11px] text-stone-600">
            {language === 'en' 
              ? 'Inquire about custom orders, sizing, bulk gifting, or artisan techniques.' 
              : 'कस्टम ऑर्डर, आकार, उपहार या कारीगरों की जानकारी के लिए WhatsApp करें।'}
          </p>
        </div>
      )}

      {/* WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-green-400/40 relative group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Shri Kala"
      >
        <MessageCircle size={26} className="fill-white text-white" />
        
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};
