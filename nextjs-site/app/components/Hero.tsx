"use client";

import { Phone, ChevronDown, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center gradient-primary overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/camion.png"
          preload="auto"
        >
          <source src="/media/camion.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 mt-10 md:mt-0">
        <div className="text-center">
          
          {/* Trust Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-8 inline-flex bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm shadow-xl"
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white text-sm md:text-base font-medium">4.9/5 Avis Clients • Agréé assurances</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Urgence Canalisations ?<br />
            <span className="text-accent">Kidebouchetou.com</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Plombier spécialiste du débouchage, plus de 25 ans d&apos;expérience. Intervention 24h/24 à Sarcelles et en Île-de-France, devis gratuit avant intervention, sans frais cachés.
          </motion.p>

          {/* 2 CTA Buttons - Exactly TWO Choices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Choix 1 : Appel direct (Priorité absolue) */}
            <a
              href="tel:+33603740704"
              className="btn-primary flex items-center justify-center gap-3 text-xl md:text-2xl py-4 px-8 w-full sm:w-auto pulse-cta shadow-2xl hover:-translate-y-1 transition-transform"
              aria-label="Appeler Kidebouchetou au 06 03 74 07 04"
            >
              <Phone className="w-6 h-6 md:w-8 md:h-8" />
              <div className="flex flex-col items-start">
                <span className="font-bold">06 03 74 07 04</span>
                <span className="text-xs font-normal opacity-90 text-left">Disponible 24h/24 et 7j/7</span>
              </div>
            </a>
            
            {/* Choix 2 : Devis / Contact */}
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 text-xl md:text-2xl py-4 px-8 w-full sm:w-auto border-2 border-white/50 bg-white/5 hover:bg-white text-white hover:text-primary rounded-full font-bold transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Demander un devis
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-blue-200 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-accent font-bold text-lg">✓</span> Sarcelles
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent font-bold text-lg">✓</span> Val-d&apos;Oise &amp; Seine-Saint-Denis
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent font-bold text-lg">✓</span> Toute l&apos;Île-de-France
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Voir nos services"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.a>
    </section>
  );
}
