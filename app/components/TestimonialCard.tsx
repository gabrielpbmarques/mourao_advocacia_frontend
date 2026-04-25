interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  stars?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  stars = 5,
}: TestimonialCardProps) {
  return (
    <div
      className="group relative flex flex-col rounded-xl p-6 md:p-7 transition-all duration-500 overflow-hidden hover:-translate-y-1"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(197, 168, 128, 0.06) 0%, transparent 70%)",
          boxShadow: "inset 0 0 0 1px rgba(197, 168, 128, 0.15)",
          borderRadius: "inherit",
        }}
      />

      {/* Quote mark */}
      <div className="relative z-10 mb-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        >
          <path
            d="M10.667 18.667H6.667L10.667 10.667H8L4 18.667V24H10.667V18.667ZM22.667 18.667H18.667L22.667 10.667H20L16 18.667V24H22.667V18.667Z"
            fill="var(--gold-accent)"
          />
        </svg>
      </div>

      {/* Stars */}
      <div className="relative z-10 flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="var(--gold-accent)"
            className="opacity-80"
          >
            <path d="M8 1.333l1.885 3.82 4.215.613-3.05 2.974.72 4.193L8 10.847l-3.77 1.986.72-4.193-3.05-2.974 4.215-.613L8 1.333z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p
        className="relative z-10 font-sans text-sm md:text-base leading-relaxed flex-1 mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="relative z-10 flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(51, 51, 51, 0.4)" }}>
        {/* Avatar placeholder */}
        <div
          className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-sans text-sm font-bold uppercase"
          style={{
            background: "rgba(15, 52, 96, 0.3)",
            border: "1px solid rgba(26, 82, 118, 0.3)",
            color: "var(--gold-accent)",
          }}
        >
          {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <div>
          <div
            className="font-sans text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {name}
          </div>
          <div
            className="font-sans text-xs"
            style={{ color: "var(--text-secondary)", opacity: 0.7 }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
