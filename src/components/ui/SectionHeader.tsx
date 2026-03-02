interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-[#0F172A]';
  const subtitleColor = light ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
          <div className="w-6 h-px bg-[#F59E0B]" />
          <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
          <div className="w-6 h-px bg-[#F59E0B]" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed mt-1 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}


