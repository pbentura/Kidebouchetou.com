"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Activity,
  Filter,
  Camera,
  Truck,
  Home,
  Building2,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Vidange et Curage de Canalisations",
    description:
      "Nettoyage en profondeur et débouchage haute pression jusqu'à 350 bars pour garantir un réseau d'évacuation optimal.",
    features: ["Haute pression 350 bars", "Furet 100 mètres", "Véhicule 4x4"],
  },
  {
    icon: Activity,
    title: "Remplacement de Colonne",
    description:
      "Remplacement et installation de colonnes en fonte, PVC et autres matériaux pour assurer un écoulement durable.",
    features: ["Fonte", "PVC", "Multicouche"],
  },
  {
    icon: Filter,
    title: "Débouchage d'Évier et Canalisations",
    description:
      "Utilisation d'équipements spécialisés pour éliminer les bouchons et prévenir les engorgements.",
    features: ["Évier", "Douche/Baignoire", "Lave-vaisselle"],
  },
  {
    icon: Camera,
    title: "Inspection par Caméra",
    description:
      "Inspection endoscopique de 30 mètres avec enregistrement vidéo, système agréé par les assurances.",
    features: ["Caméra 30m", "Enregistrement HD", "Rapport détaillé"],
  },
  {
    icon: Home,
    title: "Débouchage WC et Toilettes",
    description:
      "Intervention rapide pour déboucher vos WC avec des outils professionnels adaptés à chaque situation.",
    features: ["Déboucheur révolver", "Furet mécanique", "Intervention propre"],
  },
  {
    icon: Building2,
    title: "Canalisations Extérieures",
    description:
      "Débouchage et nettoyage de regards, gouttières et canalisations extérieures pour immeubles et maisons.",
    features: ["Regards", "Égouts", "Gouttières"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-white to-blue-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent font-semibold uppercase tracking-wider text-sm"
          >
            Nos Expertises
          </motion.span>
          <motion.h2
            id="services-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Services de Débouchage Professionnel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Des solutions rapides et efficaces pour tous vos problèmes de canalisations,
            avec plus de 25 ans d&apos;expérience à votre service.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-8 h-8 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Urgence débouchage ?
              </h3>
            </div>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Nos experts interviennent rapidement pour résoudre vos problèmes de canalisations.
              Disponible 24h/24, 7j/7.
            </p>
            <a href="tel:+33603740704" className="btn-primary">
              <Droplets className="w-5 h-5" />
              Appelez maintenant : 06 03 74 07 04
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
