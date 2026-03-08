import { BadgeCheck, MapPin, DollarSign, Clock, Phone, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { WHY_CHOOSE, COMPANY } from '../utils/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  BadgeCheck, MapPin, DollarSign, Clock,
};

export function WhyChoose() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="why-choose" className="py-14 sm:py-20 lg:py-24 bg-[#F0F6FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section label */}
        <div className={`flex items-center gap-3 mb-10 sm:mb-14 lg:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} ref={ref}>
          <div className="w-1 h-6 bg-[#2563EB] rounded-full" />
          <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.25em]">Why Choose Us</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

          {/* Left — big numbered list */}
          <div className={`space-y-0 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F1C35] leading-[0.9] tracking-tight mb-8 sm:mb-10 lg:mb-12">
              The Huron<br />
              <span className="text-[#2563EB]">Electrical</span><br />
              Difference
            </h2>

            {WHY_CHOOSE.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? BadgeCheck;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 sm:gap-6 py-5 sm:py-7 border-b border-[#DBEAFE] last:border-0 group cursor-default"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#2563EB]/15 leading-none w-12 sm:w-16 shrink-0 group-hover:text-[#2563EB]/30 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-0.5 sm:pt-1">
                    <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
                      <Icon size={15} className="text-[#2563EB] shrink-0" />
                      <h3 className="text-[#0F1C35] font-black text-sm sm:text-base">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 sm:pt-8">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold px-6 sm:px-7 py-4 rounded-xl text-sm hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 min-h-[48px]"
              >
                <Phone size={16} /> {COMPANY.phone}
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#DBEAFE] text-[#0F1C35] font-semibold px-6 sm:px-7 py-4 rounded-xl text-sm hover:border-[#2563EB]/40 hover:bg-[#F0F6FF] transition-all cursor-pointer min-h-[48px]"
              >
                Free Quote <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Right — dark feature card */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white border border-[#BFDBFE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
              <div className="relative space-y-5 sm:space-y-6">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-[0.2em]">Our Commitment</p>
                <blockquote className="text-[#0F1C35] text-xl sm:text-2xl font-black leading-snug tracking-tight">
                  "Licensed. Reliable.<br />
                  <span className="text-[#2563EB]">On time.</span> Every time."
                </blockquote>
                <div className="h-px bg-[#DBEAFE]" />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { val: '4+', label: 'Years Experience' },
                    { val: 'EV', label: 'Charger Install' },
                    { val: '24/7', label: 'Emergency Line' },
                    { val: 'ESA', label: 'Licensed #7018628' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-4">
                      <p className="text-[#2563EB] font-black text-lg sm:text-xl">{stat.val}</p>
                      <p className="text-slate-400 text-xs mt-0.5 sm:mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs border-l-2 border-[#2563EB] pl-4">
                  ESA Lic. #7018628 &amp; #17006718 · Fully Insured · Ontario, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


