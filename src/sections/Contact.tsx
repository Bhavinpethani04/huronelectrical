import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useFormValidation } from '../hooks/useFormValidation';
import { COMPANY, SERVICES } from '../utils/constants';

export function Contact() {
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.04 });
  const { formData, errors, submitted, isSubmitting, handleChange, handleSubmit } = useFormValidation();

  const inputCls = (field: keyof typeof errors) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm outline-none transition-all duration-200 bg-white/8 text-white placeholder-white/25 ${
      errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/15 focus:border-[#2563EB] focus:bg-white/12 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)]'
    }`;

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[#050D1F] relative overflow-hidden">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50" />
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div
          ref={ref}
          className={`mb-8 sm:mb-12 lg:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
            <div className="w-1 h-5 bg-[#06B6D4] rounded-full" />
            <span className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.25em]">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Request a <span className="text-[#06B6D4]">Free Quote</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg mt-2.5 sm:mt-3">Tell us about your project — we'll get back to you within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">

          {/* Form — 3 cols */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-14 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2563EB]/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 border border-[#2563EB]/30">
                  <CheckCircle size={28} className="text-[#06B6D4] sm:hidden" />
                  <CheckCircle size={32} className="text-[#06B6D4] hidden sm:block" />
                </div>
                <h3 className="text-white font-black text-xl sm:text-2xl mb-2">Message Sent!</h3>
                <p className="text-white/40 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 space-y-4 sm:space-y-5 backdrop-blur-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputCls('name')} />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">Email Address *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputCls('email')} />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="(519) 555-0100" className={inputCls('phone')} />
                    {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/8 text-white/60 text-sm outline-none focus:border-[#2563EB] focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] transition-all duration-200">
                      <option value="" className="bg-[#050D1F]">Select a service...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-[#050D1F]">{s.title}</option>)}
                      <option value="other" className="bg-[#050D1F]">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-wide">Project Details *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                    placeholder="Describe your project or electrical issue..."
                    className={`${inputCls('message')} resize-none`} />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#06B6D4] text-white font-black py-4 rounded-2xl hover:bg-[#0891B2] transition-all disabled:opacity-60 cursor-pointer text-base shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5 min-h-[52px]">
                  {isSubmitting ? 'Sending...' : <><Send size={17} /> Send Message</>}
                </button>

                <p className="text-center text-white/25 text-xs">We typically respond within a few hours during business hours.</p>
              </form>
            )}
          </div>

          {/* Info sidebar — 2 cols */}
          <div className={`lg:col-span-2 space-y-3 sm:space-y-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* On mobile show as 2-col grid, on lg stack vertically */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {[
                { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MapPin, label: 'Service Area', value: 'Kitchener–Waterloo & 200km radius', href: undefined },
                { icon: Clock, label: 'Hours', value: 'Mon–Fri: 7am–6pm · Emergency: 24/7', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 sm:gap-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 min-h-[60px]">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/25 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-[#06B6D4]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/35 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href} className="text-white font-semibold text-xs sm:text-sm hover:text-[#06B6D4] transition-colors truncate block">{value}</a>
                      : <p className="text-white font-semibold text-xs sm:text-sm">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency CTA card */}
            <div className="bg-[#2563EB] rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <Zap size={17} className="text-white" fill="white" />
                <span className="font-black text-sm sm:text-base">Electrical Emergency?</span>
              </div>
              <p className="text-blue-200/70 text-sm mb-4 sm:mb-5">Don't wait — our team responds 24/7, day or night.</p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-[#2563EB] font-black py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg min-h-[48px]"
              >
                <Phone size={15} /> Call Now: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


