import {
  Home, Building2, Factory, Zap, Lightbulb, ShieldAlert, ArrowUpRight,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SERVICES } from '../utils/constants';
import type { Service } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Home, Building2, Factory, Zap, Lightbulb, ShieldAlert,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });
  const Icon = ICON_MAP[service.icon] ?? Zap;

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-2xl sm:rounded-3xl border border-[#BFDBFE] cursor-default group flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: `all 0.55s ease ${index * 80}ms` }}
    >
      {service.highlight && (
        <div className="absolute top-4 right-4 z-20 bg-[#2563EB] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      {/* Image header */}
      {service.image && (
        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-[#EFF6FF] flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay so icon badge reads clearly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Icon badge anchored to bottom-left of image */}
          <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
            <Icon size={20} className="text-[#2563EB]" />
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Title row */}
        <div className="flex items-start justify-between mb-2">
          {!service.image && (
            <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mr-3 flex-shrink-0">
              <Icon size={20} className="text-[#2563EB]" />
            </div>
          )}
          <h3 className="text-[#0F1C35] font-black text-base sm:text-lg leading-tight flex-1">{service.title}</h3>
          <ArrowUpRight size={16} className="text-slate-300 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-2 mt-0.5" />
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>

        {/* Feature badges + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#DBEAFE]">
          <div className="flex flex-wrap gap-1.5">
            {service.features.slice(0, 2).map(f => (
              <span key={f} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                {f}
              </span>
            ))}
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-400 hover:text-[#2563EB] text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ml-2 min-h-[44px] flex items-center"
          >
            Quote →
          </button>
        </div>
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


