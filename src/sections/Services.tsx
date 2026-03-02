import {
  Home, Building2, Factory, Zap, Lightbulb, ShieldAlert, ArrowUpRight,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SERVICES } from '../utils/constants';
import type { Service } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Home, Building2, Factory, Zap, Lightbulb, ShieldAlert,
};

const CARD_ACCENTS: Record<string, { bg: string; icon: string; badge: string }> = {
  residential:  { bg: 'bg-[#2563EB]', icon: 'text-white', badge: 'bg-blue-400/20 text-blue-200' },
  commercial:   { bg: 'bg-[#0A1929]', icon: 'text-[#2563EB]', badge: 'bg-[#2563EB]/15 text-[#2563EB]' },
  industrial:   { bg: 'bg-[#06B6D4]', icon: 'text-white', badge: 'bg-cyan-800/20 text-cyan-100' },
  'ev-charging':{ bg: 'bg-[#050D1F]', icon: 'text-[#06B6D4]', badge: 'bg-[#06B6D4]/15 text-[#06B6D4]' },
  lighting:     { bg: 'bg-[#1D4ED8]', icon: 'text-white', badge: 'bg-blue-300/20 text-blue-200' },
  emergency:    { bg: 'bg-[#0F1C35]', icon: 'text-[#2563EB]', badge: 'bg-[#2563EB]/15 text-[#2563EB]' },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });
  const Icon = ICON_MAP[service.icon] ?? Zap;
  const accent = CARD_ACCENTS[service.id] ?? CARD_ACCENTS.commercial;

  return (
    <div
      ref={ref}
      className={`service-card-new relative ${accent.bg} rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/8 cursor-default group flex flex-col justify-between min-h-[240px] sm:min-h-[280px] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: `all 0.55s ease ${index * 80}ms` }}
    >
      {service.highlight && (
        <div className="absolute -top-3 left-6 bg-[#06B6D4] text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      {/* Top row */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center`}>
          <Icon size={22} className={accent.icon} />
        </div>
        <ArrowUpRight size={16} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </div>

      {/* Title + desc */}
      <div className="flex-1">
        <h3 className="text-white font-black text-lg leading-tight mb-2">{service.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10">
        <div className="flex flex-wrap gap-1.5">
          {service.features.slice(0, 2).map(f => (
            <span key={f} className={`text-[10px] font-semibold px-2 sm:px-2.5 py-1 rounded-full ${accent.badge}`}>
              {f}
            </span>
          ))}
        </div>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/50 hover:text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ml-2 min-h-[44px] flex items-center"
        >
          Quote →
        </button>
      </div>
    </div>
  );
}

export function Services() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section header */}
        <div
          ref={ref}
          className={`mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-5 bg-[#2563EB] rounded-full" />
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.25em]">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F1C35] leading-tight tracking-tight">
              Services for Every Need
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-lg leading-relaxed">
              From emergency repairs to large-scale industrial installations — trusted ESA-licensed professionals.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-[#1D4ED8] transition-colors cursor-pointer shadow-md shadow-blue-500/20 hover:-translate-y-px min-h-[48px]"
          >
            Get Free Quote <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


