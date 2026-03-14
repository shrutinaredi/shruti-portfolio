"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-mono text-sm font-semibold grad-text">
        sa<span className="text-emerald-light">.</span>dev
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-muted hover:text-emerald-light transition-colors duration-200 font-medium">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA — Hire Me (desktop only; mobile menu has its own) */}
      <a
        href="mailto:sagarwal235@wisc.edu?subject=Hiring%20Inquiry&body=Hi%20Shruti%2C"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald text-white font-semibold text-sm hover:bg-emerald-dark transition-all duration-200 hover:-translate-y-0.5"
      >
        Hire Me
      </a>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
        <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}   className="block w-5 h-0.5 bg-muted origin-center" />
        <motion.span animate={menuOpen ? { opacity: 0 }      : { opacity: 1 }}          className="block w-5 h-0.5 bg-muted" />
        <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-muted origin-center" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg2/95 backdrop-blur-xl border-b border-border px-6 py-4 flex flex-col gap-4 md:hidden">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-emerald-light transition-colors py-1">
                {link.label}
              </a>
            ))}
            <a 
  href="mailto:sagarwal235@wisc.edu?subject=Hiring Inquiry&body=Hi Shruti,"
  className="bg-[#10b981] text-black px-4 py-2 rounded-md font-bold hover:bg-[#059669] transition-all">
  Hire Me
</a>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
