import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FAQ_ITEMS } from '../utils/constants';

function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={`border-b border-[#DBEAFE] last:border-0 ${isOpen ? 'bg-[#F0F6FF]' : ''} rounded-xl transition-colors duration-200`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between px-5 py-5 text-left cursor-pointer group gap-4"
      >
        <div className="flex items-start gap-4">
          <span className={`text-xs font-black mt-0.5 w-6 shrink-0 tabular-nums ${isOpen ? 'text-[#2563EB]' : 'text-slate-300'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`font-semibold text-sm md:text-[15px] leading-snug transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-[#0F1C35] group-hover:text-[#2563EB]'}`}>
            {question}
          </span>
        </div>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isOpen ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#2563EB]'}`}>
          {isOpen ? <Minus size={13} /> : <Plus size={13} />}
        </div>
      </button>
      <div className={`faq-body overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-[3.25rem] pr-5 pb-5 text-slate-500 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        <div
          ref={ref}
          className={`grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 lg:gap-16 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-1 h-5 bg-[#2563EB] rounded-full" />
              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.25em]">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F1C35] leading-tight tracking-tight">
              Common<br />Questions
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Everything you need to know about working with Huron Electrical.
            </p>

            {/* Still have questions card */}
            <div className="bg-[#050D1F] rounded-2xl p-5 sm:p-6 mt-2 sm:mt-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-blueprint-grid opacity-40" />
              <div className="relative">
                <MessageCircle size={20} className="text-[#06B6D4] mb-2.5 sm:mb-3" />
                <p className="text-white font-bold text-sm mb-1">Still have questions?</p>
                <p className="text-white/40 text-xs mb-4">We're happy to help — reach out any time.</p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-[#2563EB] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#1D4ED8] transition-colors cursor-pointer shadow-md shadow-blue-500/30 min-h-[48px]"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DBEAFE] overflow-hidden shadow-sm">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={item.id}
                className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <FAQItem
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


