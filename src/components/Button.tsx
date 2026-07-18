import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyle = "font-mono text-xs font-bold uppercase tracking-wider py-3 px-6 transition-all duration-300 outline-none select-none cursor-pointer border";
  
  const variants = {
    primary: "bg-ink-black text-pure-white border-ink-black hover:bg-charcoal hover:border-charcoal active:bg-ink-black",
    secondary: "bg-transparent text-ink-black border-light-gray hover:bg-off-white hover:border-ink-black active:bg-light-gray",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
