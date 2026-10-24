"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Débouchage WC", href: "#services" },
      { label: "Débouchage évier", href: "#services" },
      { label: "Inspection caméra", href: "#services" },
      { label: "Haute pression", href: "#services" },
    ],
  },
  {
    title: "Zones",
    links: [
      { label: "Sarcelles", href: "/debouchage-sarcelles/" },
      { label: "Saint-Denis", href: "/debouchage-saint-denis/" },
      { label: "Argenteuil", href: "/debouchage-argenteuil/" },
      { label: "Montreuil", href: "/debouchage-montreuil/" },
      { label: "Clichy", href: "/debouchage-clichy/" },
      { label: "Toutes les villes", href: "/#villes" },
    ],
  },
  {
    title: "Liens",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "À Propos", href: "#apropos" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Logo Kidebouchetou"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold">
                ki<span className="text-accent">debouche</span>tou.com
              </span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Plombier spécialiste du débouchage de canalisations, plus de 25 ans
              d&apos;expérience. Intervention rapide 24h/24 à Sarcelles, dans le Val-d&apos;Oise,
              la Seine-Saint-Denis et toute l&apos;Île-de-France.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+33603740704"
                className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 03 74 07 04
              </a>
              <a
                href="mailto:contact.kidebouchetou@gmail.com"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact.kidebouchetou@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold text-lg mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-semibold">Sarcelles</p>
                <p className="text-blue-200 text-sm">
                  20 Allée Léon Paul Fargue, 95200 Sarcelles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              Copyright © {currentYear} - Kidebouchetou. Tous droits réservés.
            </p>
            <p className="text-blue-200 text-sm">
              Site réalisé par{" "}
              <a
                href="https://www.linkedin.com/in/pinhas-bentura-1ab82029b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors"
              >
                Pinhas Bentura
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <a
          href="tel:+33603740704"
          className="btn-primary w-full justify-center"
        >
          <Phone className="w-5 h-5" />
          Appeler maintenant
        </a>
      </div>

      {/* Spacer for mobile floating CTA */}
      <div className="md:hidden h-20" />
    </footer>
  );
}
