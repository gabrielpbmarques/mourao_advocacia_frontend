import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "gold" | "outline";
  size?: "default" | "lg";
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  variant = "gold",
  size = "default",
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none";

  const sizeStyles =
    size === "lg"
      ? "px-8 py-4 text-base md:text-lg"
      : "px-6 py-3 text-sm md:text-base";

  const variantStyles =
    variant === "gold"
      ? "bg-[var(--gold-accent)] text-[#0A0A0A] hover:bg-[#b89770] hover:shadow-[0_0_30px_rgba(197,168,128,0.25)] active:scale-[0.97]"
      : "border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--gold-accent)] hover:text-[var(--gold-accent)] active:scale-[0.97]";

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
