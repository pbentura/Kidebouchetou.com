"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À Propos" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg top-0" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#accueil"
            className="flex items-center gap-2"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/logo.jpg"
              alt="Logo Kidebouchetou"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span
              className={`font-bold text-lg md:text-xl transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Ki<span className="text-accent">debouche</span>tou
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium hover:text-accent transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33603740704"
              className="btn-primary text-sm py-2 px-4"
              aria-label="Appeler maintenant"
            >
              <Phone className="w-4 h-4" />
              06 03 74 07 04
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-primary font-medium hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33603740704"
              className="btn-primary w-full justify-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              06 03 74 07 04
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
