import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { STATS } from '../utils/constants';

export function Stats() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const [s0, s1, s2, s3] = STATS;

  return (
    <section className="bg-[#050D1F] py-0 border-b border-white/5">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16"
      >
        {/* Bento-style asymmetric grid — single col mobile, 2-col sm, 4-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

          {/* Featured large stat — full-width on sm, 2-col on lg */}
          <div
            className={`sm:col-span-2 lg:col-span-2 bg-[#0A1929] border border-white/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between group cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transition: 'all 0.7s ease 0ms' }}
          >
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-6">{s0?.label}</p>
            <div>
              <div className="bento-stat-num text-white">
                {s0?.value}<span className="text-[0.55em] text-[#2563EB]">{s0?.suffix}</span>
              </div>
              <p className="text-white/40 text-sm mt-2 sm:mt-3 leading-relaxed">{s0?.description}</p>
            </div>
          </div>

          {/* Projects Completed stat */}
          <div
            className={`bg-[#0A1929] border border-white/8 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transition: 'all 0.7s ease 100ms' }}
          >
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4">{s1?.label}</p>
            <div>
              <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-none">
                {s1?.value}<span className="text-[0.6em] text-[#2563EB]">{s1?.suffix}</span>
              </div>
              <p className="text-white/35 text-xs mt-2 leading-snug">{s1?.description}</p>
            </div>
          </div>

          {/* Navy stat */}
          <div
            className={`bg-[#0A1929] border border-white/8 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transition: 'all 0.7s ease 200ms' }}
          >
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4">{s2?.label}</p>
            <div>
              <div className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-none">
                {s2?.value}<span className="text-[0.6em] text-white/40">{s2?.suffix}</span>
              </div>
              <p className="text-white/35 text-xs mt-2 leading-snug">{s2?.description}</p>
            </div>
          </div>

          {/* Full-width bottom stat */}
          {s3 && (
            <div
              className={`sm:col-span-2 lg:col-span-4 bg-[#0A1929] border border-white/8 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transition: 'all 0.7s ease 300ms' }}
            >
              <div className="text-[clamp(2.25rem,6vw,4rem)] font-black text-white leading-none shrink-0">
                {s3.value}<span className="text-[0.55em] text-[#2563EB]">{s3.suffix}</span>
              </div>
              <div>
                <p className="text-white font-bold text-base">{s3.label}</p>
                <p className="text-white/40 text-sm mt-1">{s3.description}</p>
              </div>
              <div className="sm:ml-auto shrink-0 hidden sm:block">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-[#2563EB]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


