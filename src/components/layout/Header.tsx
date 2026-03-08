import { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sectionIds = NAV_ITEMS.map(n => n.href);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-blue-100/60 border-b border-[#DBEAFE]'
          : 'bg-white/85 backdrop-blur-md border-b border-[#DBEAFE]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-9 h-9 bg-[#2563EB] rounded-xl flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-blue-500/30">
              <Zap size={18} fill="white" className="text-white" />
            </div>
            <div>
              <span className="text-[#0F1C35] font-black text-lg leading-none tracking-tight">HURON</span>
              <div className="text-[#2563EB] font-semibold text-[9px] leading-none tracking-[0.3em] uppercase mt-0.5">
                Electrical
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map(item => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeId === item.href
                    ? 'text-[#2563EB] bg-[#2563EB]/10'
                    : 'text-slate-500 hover:text-[#0F1C35] hover:bg-[#EFF6FF]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="hidden sm:flex items-center gap-2 bg-[#2563EB] text-white px-4 lg:px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#1D4ED8] transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-px min-h-[44px]"
            >
              <Phone size={14} />
              <span className="hidden lg:inline">{COMPANY.phone}</span>
              <span className="lg:hidden">Call Now</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 rounded-xl text-slate-500 hover:text-[#0F1C35] hover:bg-[#EFF6FF] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-white border-t border-[#DBEAFE] px-4 py-4 space-y-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`block w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-colors cursor-pointer min-h-[48px] flex items-center ${
                activeId === item.href
                  ? 'text-[#2563EB] bg-[#2563EB]/10 font-bold'
                  : 'text-slate-500 hover:text-[#0F1C35] hover:bg-[#EFF6FF]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 mt-2 bg-[#2563EB] text-white font-bold px-5 py-4 rounded-xl text-sm justify-center shadow-md min-h-[52px]"
          >
            <Phone size={16} />
            Call Now: {COMPANY.phone}
          </a>
          <p className="text-center text-slate-400 text-[11px] pt-2 pb-1">ESA Lic. #7018628 · Licensed & Insured</p>
        </div>
      </div>
    </header>
  );
}


