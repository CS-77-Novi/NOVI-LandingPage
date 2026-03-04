"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-8 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#hero" className="font-syne font-extrabold text-2xl logo-gradient tracking-tight">
          NOVI
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="text-sm font-medium text-muted hover:text-slate-100 transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <Button href="#cta" variant="primary" size="md">Request Demo</Button>
        </div>

        <button
          className="md:hidden text-slate-100"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-[99] bg-black/95 backdrop-blur-xl border-b border-white/10 px-8 py-6 flex flex-col gap-5 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted hover:text-slate-100 transition-colors">
                {link.label}
              </a>
            ))}
            <Button href="#cta" variant="primary" size="md" className="self-start">Request Demo</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
