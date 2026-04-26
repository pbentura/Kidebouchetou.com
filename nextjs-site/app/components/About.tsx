"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart, ThumbsUp, Clock, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Réactivité",
    description: "Intervention en 30 minutes pour les urgences",
  },
  {
    icon: CheckCircle,
    title: "Fiabilité",
    description: "Plus de 25 ans d'expérience à votre service",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Matériel professionnel et expertise reconnue",
  },
];

const features = [
  "Intervention rapide – Disponibles pour les urgences 24/7",
  "Expertise reconnue – Plus de 25 ans d'expérience",
  "Équipements professionnels – Matériel haute pression 350 bars",
  "Tarifs transparents – Devis clairs sans surprise",
  "Service complet – Du diagnostic à la résolution",
  "Conseils préventifs – Pour éviter les futurs bouchages",
];

export default function About() {
  return (
    <section
      id="apropos"
      className="section-padding bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold uppercase tracking-wider text-sm"
          >
            À Propos
          </motion.span>
          <motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Qui Sommes-Nous ?
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Who We Are */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Notre Histoire
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depuis plus de <strong className="text-accent">25 ans</strong>,{" "}
                <strong className="text-primary">Kidebouchetou</strong> est votre
                partenaire de confiance pour tous vos besoins en débouchage de
                canalisations et entretien d&apos;équipements sanitaires dans la région
                parisienne.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe d&apos;experts qualifiés intervient rapidement avec
                professionnalisme pour résoudre efficacement tous vos problèmes
                d&apos;engorgement, de bouchons et d&apos;entretien de réseaux
                d&apos;évacuation.
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-gradient-to-br from-accent/10 to-white p-8 rounded-2xl border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Notre Expertise
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spécialistes du débouchage de canalisations, nous mettons à votre
                disposition des équipements modernes et des techniques éprouvées pour
                traiter efficacement :
              </p>
              <ul className="space-y-2">
                {[
                  "Toilettes et WC bouchés",
                  "Éviers et lavabos obstrués",
                  "Douches et baignoires à écoulement lent",
                  "Canalisations extérieures et regards",
                  "Colonnes d'immeubles et évacuations communes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <span className="text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Values */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Nos Valeurs</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <value.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-bold text-primary mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Pourquoi Nous Choisir ?
                </h3>
              </div>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Mission Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
            <blockquote className="text-xl md:text-2xl italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;Notre mission est de vous offrir le meilleur service de
              débouchage pour résoudre rapidement et efficacement tous vos
              problèmes d&apos;évacuation, afin que vous puissiez retrouver un
              quotidien serein et sans désagrément.&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-accent">— L&apos;équipe Kidebouchetou</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
