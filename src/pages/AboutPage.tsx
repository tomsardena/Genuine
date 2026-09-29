import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../components/SEOHead';
import { SITE_SETTINGS } from '../data/siteSettings';
import { Link } from '../utils/router';
import { Award, ShieldCheck, HeartHandshake, MapPin, Users, Compass, ArrowRight, MessageCircle } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Genuine Egypte – Our Story, Philosophy & Team"
        description="Learn about Genuine Egypte, an independent Luxor-based tour operator founded by certified Egyptologists dedicated to unhurried, authentic travel experiences across Egypt."
        canonicalPath="/about"
        ogImage="/images/tours/genuine-egypte-19.webp"
      />

      <div className="bg-[#FAF8F5] min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          {/* Hero Intro */}
          <div className="space-y-4 border-b border-stone-200 pb-8">
            <span className="text-xs font-semibold text-amber-800 uppercase tracking-widest font-serif block">
              Our Identity & Purpose
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              About Genuine Egypte
            </h1>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-3xl">
              An independent Egyptian travel agency and art house headquartered on Khaled Ibn Al Waleed Street in Luxor, founded by veteran licensed Egyptologists and quality managers.
            </p>
          </div>

          {/* Core Philosophy Section */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-6">
            <div className="border-l-4 border-amber-600 pl-6 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 font-serif">
                The Founder&rsquo;s Mission
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                &ldquo;We Know the Difference Between a Tourist and a Traveler&rdquo;
              </h2>
            </div>

            <div className="prose prose-stone text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
              <p>
                Genuine Egypte was born out of firsthand experience in the Egyptian tourism industry. Having served for over 15 years as professional Egyptologists, tour leaders, and quality assurance managers for major commercial operators, our founders met thousands of travelers from every corner of the world.
              </p>
              <p>
                Again and again, we witnessed the limitations of traditional mass-market itineraries: travelers herded between monuments in breathless haste, hurried through sacred temples with no time to reflect, and shielded from genuine contact with Egyptian culture.
              </p>
              <p>
                We grew tired of the rushed classical tours that leave travelers exhausted rather than inspired. We decided to establish <strong>Genuine Egypte</strong> to realize a completely different vision: travel that honors ancient history, respects the traveler&rsquo;s curiosity, and reveals the living heart of Egyptian hospitality.
              </p>
            </div>
          </div>

          {/* Pillars of Genuine Egypte */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3">
              <Award className="w-6 h-6 text-amber-700" />
              <h3 className="font-serif text-base font-bold text-stone-900">
                Accredited Egyptologists
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We employ licensed, university-educated Egyptologists (both male and female guides). They are not scripted guides—they are true scholars of ancient Egyptian art, religion, and hieroglyphic scripture.
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
              <h3 className="font-serif text-base font-bold text-stone-900">
                Professional Private Fleet
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We contract exclusively with vetted, licensed professional tourist drivers and modern, late-model air-conditioned sedans and minivans, guaranteeing comfort and safety on all Egyptian roads.
              </p>
            </div>

            <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3">
              <HeartHandshake className="w-6 h-6 text-amber-700" />
              <h3 className="font-serif text-base font-bold text-stone-900">
                Authentic Cultural Respect
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From village agricultural life along the Nile to the artisan communities of Cairo and Upper Egypt, we introduce you to the true warmth and dignity of the Egyptian people.
              </p>
            </div>
          </div>

          {/* Authentic Local Presence in Luxor */}
          <div className="bg-[#181512] text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider font-serif">
                <MapPin className="w-4 h-4" />
                <span>Local Office in Luxor</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Based Where Ancient Egypt Began
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Our physical operations are centered at 44 Khaled Ibn Al Waleed Street in Luxor. We do not operate as an anonymous overseas reseller. When you travel with Genuine Egypte, our local team is personally coordinating every transfer, cruise cabin, and temple permit.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-lg transition-colors text-center"
              >
                Contact Our Luxor Team
              </Link>
              <a
                href={SITE_SETTINGS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
