import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[#F59E0B] text-[#0F172A] font-bold hover:bg-[#FCD34D] active:bg-[#D97706] shadow-md hover:shadow-lg',
  secondary:
    'bg-[#0F172A] text-white font-semibold hover:bg-[#1E293B]',
  outline:
    'bg-transparent text-[#F59E0B] font-semibold border-2 border-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#0F172A]',
  ghost:
    'bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 backdrop-blur-sm',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-sm font-semibold rounded-full',
  lg: 'px-8 py-4 text-base font-bold rounded-full',
};

export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2';
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}


