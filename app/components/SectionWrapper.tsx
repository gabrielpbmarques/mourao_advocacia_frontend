import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  withGradient?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  withGradient = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-6 md:px-8 ${
        withGradient ? "gradient-subtle-bg" : ""
      } ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] w-full">
        {children}
      </div>
    </section>
  );
}
