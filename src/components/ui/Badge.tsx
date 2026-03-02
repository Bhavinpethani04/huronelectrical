import type { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant?: 'yellow' | 'navy' | 'white';
}

export function Badge({ icon: Icon, children, variant = 'yellow' }: BadgeProps) {
  const styles = {
    yellow: 'bg-[#F5B800]/10 text-[#0A1628] border border-[#F5B800]/30',
    navy: 'bg-[#0A1628]/10 text-[#0A1628] border border-[#0A1628]/20',
    white: 'bg-white/10 text-white border border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${styles[variant]}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}

