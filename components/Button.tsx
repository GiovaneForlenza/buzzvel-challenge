import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-primary-blue text-text-white hover:bg-primary-blue/90",
  secondary:
    "bg-background-white text-text-primary border border-line-1 hover:bg-background-light-yellow",
  accent: "bg-secondary-yellow text-text-primary hover:bg-primary-yellow",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
