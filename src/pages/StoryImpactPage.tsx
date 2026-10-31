import React from 'react';
import { Logo } from '../components/common/Logo';
import { StitchDivider } from '../components/common/StitchDivider';
import { Language } from '../types';
import { 
  Heart, 
  Target, 
  Eye, 
  Calendar, 
  Award, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

interface StoryImpactPageProps {
  language: Language;
}

export const StoryImpactPage: React.FC<StoryImpactPageProps> = ({ language }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header & Brand Philosophy */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
          Our Roots in Bihar
        </span>
        <h1 className="font-heading text-4xl sm:text-6xl font-medium text-[#1E2A44] leading-tight">
          Where Ancient Threads Meet Modern Living
        </h1>
        <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-light">
          We founded <strong className="font-medium text-[#1E2A44]">श्री Kala</strong> with a single, urgent conviction: India&apos;s most intricate hand crafts should not exist merely as static museum relics, but as living, breathable parts of modern daily life.
        </p>
      </section>

      {/* 2. Meaning of the Name Card */}
      <section className="bg-white border border-[#E7DDCF] p-8 sm:p-12 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#E7DDCF] pb-6 md:pb-0 md:pr-8">
            <Logo size="lg" className="mb-4" />
            <p className="font-heading text-2xl text-[#1E2A44] italic">
              &ldquo;Kala that carries a story.&rdquo;
            </p>
            <p className="font-devanagari text-lg text-[#B33927] mt-1">
              &ldquo;हर धागे में विरासत&rdquo;
            </p>
          </div>

          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-heading text-2xl font-medium text-[#1E2A44]">
              The Sacred Meaning of श्री Kala
            </h3>
            <p>
              In Sanskrit and Indian tradition, <strong className="text-[#B33927] font-semibold">&ldquo;श्री&rdquo; (Shri)</strong> signifies respect, divine grace, auspicious beauty, and self-earned prosperity. It is an honorific of supreme reverence.
            </p>
            <p>
              <strong className="text-[#1E2A44] font-semibold">&ldquo;Kala&rdquo; (कला)</strong> embodies art, ingenuity, and time-honored craft.
            </p>
            <p className="p-3 bg-[#FAF7F2] border-l-2 border-[#D9822B] text-stone-800 italic">
              Together, <strong>श्री Kala</strong> stands as an oath: to honor the art and restore dignity, prosperity, and respect to the rural women artisans who carry its torch in their fingers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-[#F3ECE1] border border-[#E7DDCF] space-y-4">
          <div className="w-12 h-12 bg-white text-[#B33927] border border-[#D9822B] flex items-center justify-center">
            <Target size={24} />
          </div>
          <h2 className="font-heading text-2xl font-medium text-[#1E2A44]">
            Our Mission
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            To resurrect disappearing regional handicrafts of Bihar—beginning with GI-tagged Sujini embroidery, Madhubani freehand art, and Khatwa cutwork—by engineering durable, comfortable, and affordable silhouettes that modern global citizens wear with genuine pride.
          </p>
        </div>

        <div className="p-8 bg-[#1E2A44] text-white border border-[#D9822B] space-y-4">
          <div className="w-12 h-12 bg-white/10 text-amber-300 border border-amber-300/40 flex items-center justify-center">
            <Eye size={24} />
          </div>
          <h2 className="font-heading text-2xl font-medium text-amber-200">
            Our Vision
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            &ldquo;To establish a nationally recognized Indian heritage fashion brand while creating sustainable, year-round market opportunities and economic autonomy for traditional rural women artisans.&rdquo;
          </p>
        </div>
      </section>

      <StitchDivider color="turmeric" withMirror />

      {/* 4. Journey & Roadmap (Timeline) */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B33927]">
            Milestones of Revival
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium text-[#1E2A44] mt-1">
            Our Journey & Roadmap
          </h2>
        </div>

        <div className="relative border-l-2 border-[#D9822B]/40 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
          {/* Milestone 1 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-[#B33927] ring-4 ring-[#FAF7F2]" />
            <span className="text-xs font-mono font-bold text-[#B33927] uppercase tracking-wider">
              2023 • The Genesis in Bhusra
            </span>
            <h4 className="font-heading text-xl font-medium text-[#1E2A44] mt-1">
              First Sujini Sewing Circle Formed
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl leading-relaxed">
              Started under a village tree in Bhusra, Muzaffarpur with 12 women artisans creating narrative quilt panels. Registered our first Fair Wage Charter ensuring direct digital bank accounts for all craftswomen.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-[#D9822B] ring-4 ring-[#FAF7F2]" />
            <span className="text-xs font-mono font-bold text-[#D9822B] uppercase tracking-wider">
              2024 • Cross-Pollination with Denim
            </span>
            <h4 className="font-heading text-xl font-medium text-[#1E2A44] mt-1">
              Madhubani Denim & Khatwa Applique Launch
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl leading-relaxed">
              Pioneered the integration of hand-painted Madhubani motifs onto upcycled denim streetwear. Expanded into the endangered Khatwa cutwork craft with the Rahika cluster in Madhubani district.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-[#1E2A44] ring-4 ring-[#FAF7F2]" />
            <span className="text-xs font-mono font-bold text-[#1E2A44] uppercase tracking-wider">
              2025 • National Recognition & Scale
            </span>
            <h4 className="font-heading text-xl font-medium text-[#1E2A44] mt-1">
              GI Certification Collaboration & 200+ Artisans
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl leading-relaxed">
              Showcased at premier heritage textile symposiums across India. Formalized training modules for young girls in village schools to stop generational craft abandonment.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <span className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-[#FAF7F2]" />
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              2026 & Beyond • Sustainable Global Footprint
            </span>
            <h4 className="font-heading text-xl font-medium text-[#1E2A44] mt-1">
              Solar-Powered Village Hubs & Zero-Waste Fashion
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl leading-relaxed">
              Establishing 5 clean energy artisan centers across North Bihar. Scaling demand-driven, small-batch ethical production with worldwide shipping.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Founders & Leadership Note */}
      <section className="bg-white border border-[#E7DDCF] p-8 sm:p-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B33927] bg-red-50 border border-red-200 px-2 py-0.5">
              Founders Note [Sample Placeholder]
            </span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#1E2A44]">
            &ldquo;When a woman in Bihar earns with her own art, the entire village moves forward.&rdquo;
          </h3>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            श्री Kala was founded by heritage fashion enthusiasts and social development practitioners from Bihar who noticed that while high-fashion boutiques in capital cities sold embroidered textiles for tens of thousands of rupees, the mothers in rural villages holding those needles were struggling to afford healthcare or basic school supplies.
          </p>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            By eliminating multiple layers of exploitative middlemen, setting up fair digital contracts, and creating youthful, modern silhouettes, we make Indian heritage wear exciting for college students, working professionals, and global connoisseurs alike.
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
            <span>Shri Kala Founders & Design Collective</span>
            <span>Patna & Muzaffarpur, Bihar</span>
          </div>
        </div>
      </section>
    </div>
  );
};
