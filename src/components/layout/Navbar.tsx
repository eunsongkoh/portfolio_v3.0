"use client";

import { useState } from "react";
import { aboutData } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-[1000] flex items-center gap-10 px-6 md:px-16 h-[64px] font-mono text-[13px] text-muted border-b border-border bg-bg">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-fg font-bold"
      >
        Song
      </a>

      <div className="flex-1" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href={aboutData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg hover:opacity-70 transition-opacity"
          >
            Resume ↗
          </a>
        </li>
        <li className="flex items-center">
          <ThemeToggle />
        </li>
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="flex md:hidden items-center gap-5">
        <ThemeToggle />
        <button
          className="text-fg focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden bg-bg border-t border-border absolute w-full left-0 top-[64px] px-6 py-6 flex flex-col gap-4"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={aboutData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg py-1"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
