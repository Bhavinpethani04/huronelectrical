import { Phone, ArrowRight, ShieldCheck, Star, Zap, Clock, CheckCircle } from 'lucide-react';
import { COMPANY } from '../utils/constants';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-[#050D1F] overflow-hidden">

      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />

      {/* Blue glow orbs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-[#2563EB]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#2563EB]/8 rounded-full blur-[110px] pointer-events-none" />

      {/* Large decorative circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 900">
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#2563EB" strokeWidth="1" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#2563EB" strokeWidth="1" />
        <circle cx="720" cy="450" r="180" stroke="#2563EB" strokeWidth="1" fill="none" />
        <circle cx="720" cy="450" r="340" stroke="#2563EB" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Header spacer */}
      <div className="h-[72px] shrink-0" />

      {/* Main content — left-aligned editorial */}
      <div className="relative flex-1 flex items-center px-5 sm:px-8 lg:px-16 xl:px-24 py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* Left — headline block */}
          <div className="space-y-6 sm:space-y-8 max-w-3xl">

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 bg-[#2563EB]/15 border border-[#2563EB]/30 rounded-lg px-3 py-1.5">
                <ShieldCheck size={11} className="text-[#2563EB]" />
                <span className="text-[#2563EB] text-[11px] sm:text-xs font-semibold tracking-wide">ESA Licensed · Fully Insured</span>
              </div>
              <div className="h-px w-8 sm:w-12 bg-[#2563EB]/40 hidden xs:block" />
              <span className="text-white/40 text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em]">Since 2021</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.25rem,7vw,6.5rem)] font-black text-white leading-[0.92] tracking-[-0.03em]">
              Ontario's<br />
              <span className="text-[#2563EB]">Trusted</span><br />
              Electricians
            </h1>

            {/* Slogan */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#2563EB]/50 shrink-0" />
              <p className="text-[#2563EB]/90 text-sm sm:text-base font-semibold italic tracking-wide">
                Strength in Every Connection
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-white/55 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Residential, commercial &amp; industrial electrical solutions — delivered on time by ESA-licensed experts across{' '}
              <span className="text-white/80 font-medium">Kitchener–Waterloo &amp; Cambridge</span>.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] text-white font-bold px-6 sm:px-8 py-4 rounded-xl text-sm sm:text-base hover:bg-[#1D4ED8] transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 min-h-[48px]"
              >
                <Phone size={17} />
                Call {COMPANY.phone}
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2.5 bg-white/8 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl text-sm sm:text-base border border-white/15 hover:bg-white/15 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
              >
                Get Free Quote
                <ArrowRight size={17} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#2563EB" className="text-[#2563EB]" />
                ))}
                <span className="text-white/40 text-xs sm:text-sm ml-1">5.0 Google</span>
              </div>
              <div className="w-px h-4 bg-white/15 hidden sm:block" />
              <span className="text-white/40 text-xs sm:text-sm">50+ Jobs Done</span>
              <div className="w-px h-4 bg-white/15 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm">
                <Clock size={12} className="text-[#2563EB]" />
                24/7 Emergency
              </div>
            </div>
          </div>

          {/* Right — info card */}
          <div className="hidden lg:flex flex-col gap-4 w-[280px] shrink-0">
            {[
              { label: 'Residential', check: true },
              { label: 'Commercial', check: true },
              { label: 'Industrial', check: true },
              { label: 'EV Charging', check: true },
              { label: 'Emergency 24/7', check: true },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-[#2563EB]/30 transition-all duration-200">
                <CheckCircle size={16} className="text-[#2563EB] shrink-0" />
                <span className="text-white/75 text-sm font-medium">{item.label}</span>
              </div>
            ))}
            <div className="bg-[#2563EB]/15 border border-[#2563EB]/25 rounded-xl px-4 py-4 mt-2">
              <p className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-1">Licensed By</p>
              <p className="text-white text-sm font-bold">Electrical Safety Authority</p>
              <p className="text-white/40 text-xs mt-1">Lic. #7018628 · #17006718</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pb-8 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#2563EB] to-transparent" />
        <Zap size={13} className="text-[#2563EB]" />
      </div>
    </section>
  );
}


