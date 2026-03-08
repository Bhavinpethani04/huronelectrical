import { Phone, Mail, MapPin, Zap, Facebook, Instagram, Linkedin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_ITEMS, SERVICES } from '../../utils/constants';

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFF6FF] text-slate-500 relative overflow-hidden border-t border-[#DBEAFE]">
      <div className="absolute inset-0 bg-electric-grid opacity-100 pointer-events-none" />

      {/* Top CTA band */}
      <div className="relative border-b border-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8">
          <div>
            {/* Large HURON wordmark */}
            <p className="text-[#0F1C35] font-black text-[clamp(1.75rem,6vw,4rem)] leading-none tracking-tight">HURON</p>
            <p className="text-[#2563EB] font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase mt-1">Electrical · Ontario, Canada</p>
            <p className="text-slate-500 text-sm mt-2 sm:mt-3 max-w-sm">Get a free estimate — residential, commercial or industrial.</p>
          </div>
          <div className="flex gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-bold px-5 sm:px-6 py-3.5 rounded-xl text-sm hover:bg-[#1D4ED8] transition-all shadow-md shadow-blue-500/20 hover:-translate-y-px min-h-[48px]"
            >
              <Phone size={15} /> Call Now
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-white border border-[#BFDBFE] text-[#0F1C35] font-semibold px-5 sm:px-6 py-3.5 rounded-xl text-sm hover:bg-[#EFF6FF] hover:border-[#2563EB]/40 transition-all cursor-pointer min-h-[48px]"
            >
              Free Quote <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand col — full width on mobile */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#1D4ED8] transition-colors">
                <Zap size={17} fill="white" className="text-white" />
              </div>
              <div>
                <div className="text-[#0F1C35] font-black text-lg leading-none">HURON</div>
                <div className="text-[#2563EB] font-semibold text-[9px] leading-none tracking-[0.3em] uppercase mt-0.5">Electrical</div>
              </div>
            </a>

            <p className="text-sm leading-relaxed text-slate-500">
              Strength in Every Connection. Serving Kitchener–Waterloo & Cambridge with trusted, licensed electrical services since 2021.
            </p>

            <div className="flex gap-2">
              {[
                { href: COMPANY.facebook, icon: Facebook },
                { href: COMPANY.instagram, icon: Instagram },
                { href: COMPANY.linkedin, icon: Linkedin },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#BFDBFE] hover:bg-[#EFF6FF] hover:border-[#2563EB]/40 hover:text-[#2563EB] flex items-center justify-center transition-all text-slate-400"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-[#0F1C35] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 sm:mb-5">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors cursor-pointer min-h-[36px] flex items-center"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#0F1C35] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 sm:mb-5">Our Services</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-slate-500 hover:text-[#2563EB] text-sm transition-colors cursor-pointer text-left min-h-[36px] flex items-center"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[#0F1C35] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 sm:mb-5">Contact</h3>
            <ul className="space-y-3 sm:space-y-3.5">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-[#2563EB] transition-colors min-h-[36px]">
                  <Phone size={13} className="text-[#2563EB] shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2.5 text-sm text-slate-500 hover:text-[#2563EB] transition-colors break-all min-h-[36px]">
                  <Mail size={13} className="text-[#2563EB] shrink-0 mt-0.5" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin size={13} className="text-[#2563EB] shrink-0 mt-0.5" />
                Kitchener–Waterloo &amp; Cambridge
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <Clock size={13} className="text-[#2563EB] shrink-0 mt-0.5" />
                <span>Mon–Fri: 7am–6pm<br />Emergency: 24/7</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#DBEAFE] rounded-lg px-3 py-2 text-[11px] text-[#2563EB] font-semibold">
              <Zap size={11} fill="currentColor" />
              ESA Lic. #7018628 · #17006718
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-[#DBEAFE] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Huron Electrical. All rights reserved.</p>
        </div>
        {/* Developer credit */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-2 flex justify-center">
          <a
            href="https://bhavinpethani04.github.io/bhavin-pethani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-400 hover:text-[#2563EB] transition-colors duration-200 tracking-wide"
          >
            Design &amp; Developed by{' '}
            <span className="font-semibold text-slate-500 hover:text-[#2563EB]">Bhavin Pethani</span>
          </a>
        </div>
      </div>
    </footer>
  );
}


