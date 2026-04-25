interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16 ${className}`}>
      {label && (
        <span
          className="inline-block font-sans text-xs font-bold tracking-[0.15em] uppercase mb-4 px-4 py-1.5 rounded-full border"
          style={{
            color: "var(--gold-accent)",
            borderColor: "rgba(197, 168, 128, 0.25)",
            background: "rgba(197, 168, 128, 0.06)",
          }}
        >
          {label}
        </span>
      )}
      <h2
        className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className="mt-4 h-[2px] w-16 rounded-full"
        style={{
          background: "linear-gradient(90deg, var(--gold-accent), transparent)",
        }}
      />
      {subtitle && (
        <p
          className="mt-5 max-w-2xl font-sans text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
