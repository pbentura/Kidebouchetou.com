"use client";

import { Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center gradient-primary overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Logo Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="Logo Kidebouchetou - Expert en débouchage de canalisations"
              width={200}
              height={200}
              className="mx-auto w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 break-words"
          >
            ki<span className="text-accent">debouche</span>tou.com
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-4"
          >
            Votre expert en débouchage depuis 25 ans
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Intervention rapide 24/7 à Sarcelles, Saint-Ouen et toute l&apos;Île-de-France
          </motion.p>

          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <a
              href="tel:+33603740704"
              className="inline-flex items-center gap-3 text-2xl md:text-4xl font-bold text-accent hover:text-accent-light transition-colors phone-animate"
              aria-label="Appeler Kidebouchetou au 06 03 74 07 04"
            >
              <Phone className="w-8 h-8 md:w-10 md:h-10" />
              06 03 74 07 04
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+33603740704"
              className="btn-primary text-lg pulse-cta"
            >
              <Phone className="w-5 h-5" />
              Appelez maintenant
            </a>
            <a
              href="#contact"
              className="btn-secondary text-lg border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Demandez un devis
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-blue-200 text-sm"
          >
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> Intervention 30 min
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> Devis gratuit
            </span>
            <span className="flex items-center gap-1">
              <span className="text-accent">✓</span> Garantie satisfait
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Voir nos services"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
