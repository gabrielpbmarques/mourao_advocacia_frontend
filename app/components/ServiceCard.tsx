import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = "#contato",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group relative flex flex-col rounded-xl p-5 md:p-6 transition-all duration-500 cursor-pointer overflow-hidden no-underline hover:-translate-y-1"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(26, 82, 118, 0.15) 0%, transparent 70%)",
          boxShadow: "inset 0 0 0 1px rgba(26, 82, 118, 0.4)",
          borderRadius: "inherit",
        }}
      />

      {/* Top line glow */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(26, 82, 118, 0.6), transparent)",
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110"
        style={{
          background: "rgba(15, 52, 96, 0.2)",
          border: "1px solid rgba(15, 52, 96, 0.3)",
        }}
      >
        <div className="text-[var(--blue-highlight)] transition-colors duration-500 group-hover:text-[var(--gold-accent)]">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3
        className="relative z-10 font-serif text-lg md:text-xl font-medium mb-2 transition-colors duration-300"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="relative z-10 font-sans text-sm md:text-base leading-relaxed flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {/* Bottom accent — CTA */}
      <div
        className="relative z-10 mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        style={{ color: "var(--gold-accent)" }}
      >
        <span>Saiba mais</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
}
