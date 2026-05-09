"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on anchor click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 shadow-lg"
          : "py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(51, 51, 51, 0.4)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex flex-col leading-none group"
          onClick={handleNavClick}
        >
          <span
            className="font-serif text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
          >
            Renan Mourão
          </span>
          <span
            className="text-[0.6rem] font-sans font-bold tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300"
            style={{ color: "var(--gold-accent)" }}
          >
            Advocacia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-sans font-medium transition-colors duration-300 rounded-md hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5545999517673"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 text-sm font-sans font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,168,128,0.2)]"
            style={{
              background: "var(--gold-accent)",
              color: "#0A0A0A",
            }}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-0" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-base font-sans font-medium rounded-lg transition-colors duration-300 hover:bg-white/5"
              style={{ color: "var(--text-secondary)" }}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5545999517673"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 mx-4 px-5 py-3 text-center text-sm font-sans font-semibold rounded-lg transition-all duration-300"
            style={{
              background: "var(--gold-accent)",
              color: "#0A0A0A",
            }}
            onClick={handleNavClick}
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
