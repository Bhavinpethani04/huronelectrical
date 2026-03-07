import { ShieldCheck, Award, Users, Phone, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { COMPANY } from '../utils/constants';

export function About() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-[1.15fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-center">

          {/* Left — large dark image panel */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-[#050D1F] rounded-2xl sm:rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] flex items-end">
              {/* Blueprint grid overlay */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-60" />
              {/* Blue glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-[60px]" />

              {/* Centre wordmark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#2563EB] rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/40">
                    <Users size={28} className="text-white sm:hidden" />
                    <Users size={36} className="text-white hidden sm:block" />
                  </div>
                  <p className="text-white font-black text-base sm:text-xl tracking-tight">The Huron Electrical Team</p>
                  <p className="text-white/40 text-sm">Proudly serving Ontario since 2021</p>
                </div>
              </div>

              {/* Floating top-left badge */}
              <div className="absolute top-5 left-5 bg-[#2563EB] rounded-xl px-4 py-2.5 shadow-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={13} className="text-white" />
                  <span className="text-white text-xs font-bold">ESA Licensed</span>
                </div>
              </div>

              {/* Floating year badge */}
              <div className="absolute bottom-5 right-5 bg-[#2563EB] rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-white font-black text-3xl leading-none">4+</div>
                <div className="text-white/70 text-[11px] font-semibold mt-1 uppercase tracking-wide">Years</div>
              </div>

              {/* Stat strip at bottom */}
              <div className="relative w-full grid grid-cols-2 border-t border-white/10">
                {[
                  { value: '50+', label: 'Jobs Completed' },
                  { value: 'EV+', label: 'Charger Installs' },
                ].map((stat, i) => (
                  <div key={stat.label} className={`px-4 sm:px-6 py-4 sm:py-5 ${i === 0 ? 'border-r border-white/10' : ''}`}>
                    <p className="text-white font-black text-xl sm:text-2xl">{stat.value}</p>
                    <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div className={`space-y-6 sm:space-y-7 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-5 bg-[#2563EB] rounded-full" />
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.25em]">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F1C35] leading-tight tracking-tight">
                Powering Kitchener–Waterloo<br />
                <span className="text-[#2563EB]">Since 2021</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Huron Electrical was built on a simple belief: skilled, honest electrical work should be accessible to every homeowner and business — without the guesswork.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                From our roots in the Kitchener–Waterloo & Cambridge area, we've grown into a full-service electrical contractor serving the region and beyond. Every technician is ESA-licensed, thoroughly trained, and committed to safety first.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-0 border border-[#DBEAFE] rounded-2xl overflow-hidden">
              {[
                { icon: ShieldCheck, label: 'ESA Licensed & Certified', sub: 'Lic. #7018628 / #17006718' },
                { icon: Award, label: '50+ Jobs Done', sub: 'Residential, commercial & industrial' },
                { icon: Users, label: 'Experienced Team', sub: 'Skilled & certified electricians' },
                { icon: Phone, label: '24/7 Emergency', sub: 'Always a call away' },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div key={label} className={`flex items-center gap-4 px-5 py-4 ${i !== 3 ? 'border-b border-[#DBEAFE]' : ''} hover:bg-[#F0F6FF] transition-colors`}>
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-[#0F1C35] text-sm font-bold">{label}</p>
                    <p className="text-slate-400 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold px-6 sm:px-7 py-4 rounded-xl text-sm hover:bg-[#1D4ED8] transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F0F6FF] border border-[#DBEAFE] text-[#0F1C35] font-semibold px-6 sm:px-7 py-4 rounded-xl text-sm hover:border-[#2563EB]/40 transition-all min-h-[48px]"
              >
                <Phone size={15} className="text-[#2563EB]" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


