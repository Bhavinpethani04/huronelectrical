import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TESTIMONIALS } from '../utils/constants';
import type { Testimonial } from '../types';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={13} fill="#2563EB" className="text-[#2563EB]" />
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`bg-white border border-[#DBEAFE] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <StarRow rating={t.rating} />

      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-[#DBEAFE]">
        <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-black text-xs shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="text-[#0F1C35] font-bold text-sm">{t.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">{t.location} · {t.service}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });
  const featured = TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-[#F0F6FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header row */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-5 bg-[#2563EB] rounded-full" />
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.25em]">Client Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F1C35] leading-tight tracking-tight">
              What Our<br /><span className="text-[#2563EB]">Customers</span> Say
            </h2>
          </div>
          <div className="shrink-0 md:text-right">
            <div className="flex items-center gap-1 md:justify-end mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#2563EB" className="text-[#2563EB]" />)}
            </div>
            <p className="text-slate-500 text-sm">5.0 · 50+ satisfied customers</p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className={`relative bg-white border border-[#BFDBFE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-4 sm:mb-6 overflow-hidden transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-10" />
          <div className="relative">
            <div className="text-[#2563EB] text-6xl sm:text-8xl font-black leading-none mb-3 sm:mb-4 opacity-10 select-none">&ldquo;</div>
            <p className="text-[#0F1C35] text-base sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl -mt-4 sm:-mt-6">
              {featured.text}
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-black text-sm sm:text-base shrink-0">
                {featured.initials}
              </div>
              <div>
                <p className="text-[#0F1C35] font-bold text-sm sm:text-base">{featured.name}</p>
                <p className="text-slate-400 text-xs sm:text-sm">{featured.location} · {featured.service}</p>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-1">
                {[...Array(featured.rating)].map((_, i) => <Star key={i} size={14} fill="#2563EB" className="text-[#2563EB]" />)}
              </div>
            </div>
          </div>
        </div>

        {/* Remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {TESTIMONIALS.slice(1).map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
          {/* CTA card */}
          <div className="bg-[#2563EB] rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[180px]">
            <div>
              <p className="text-white font-black text-base sm:text-lg leading-tight mb-2">
                Ready to join 50+ happy customers?
              </p>
              <p className="text-blue-200/70 text-sm">Get your free quote today — no obligation.</p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-5 sm:mt-6 bg-white text-[#2563EB] font-bold py-3.5 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer text-sm min-h-[48px]"
            >
              Get Free Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


