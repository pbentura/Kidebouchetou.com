"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Wind,
  Timer,
  Waves,
  Droplets,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

const consequences = [
  {
    icon: Wind,
    title: "Mauvaises odeurs",
    description:
      "L'accumulation de déchets organiques dans les canalisations provoque des odeurs désagréables, rendant l'air intérieur insalubre.",
  },
  {
    icon: Timer,
    title: "Évacuation lente",
    description:
      "Si l'eau met plus de temps à s'écouler, cela indique souvent une obstruction partielle qui nécessite une intervention rapide.",
  },
  {
    icon: Waves,
    title: "Refoulement d'eau",
    description:
      "Le refoulement d'eau dans les éviers, douches ou toilettes peut causer des inondations et des dégâts importants.",
  },
  {
    icon: Droplets,
    title: "Risque de fuite",
    description:
      "La pression exercée par l'obstruction peut endommager vos tuyaux et provoquer des fuites d'eau coûteuses à réparer.",
  },
  {
    icon: ShieldAlert,
    title: "Problèmes sanitaires",
    description:
      "Un bouchage prolongé favorise la prolifération de bactéries et moisissures, mettant en danger la santé des occupants.",
  },
];

export default function Consequences() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="consequences-title"
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
            Attention
          </motion.span>
          <motion.h2
            id="consequences-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Les Conséquences d&apos;un Bouchage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Un tuyau bouché peut entraîner des problèmes non seulement gênants, mais
            aussi dangereux pour votre maison et votre santé.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-100 to-amber-50 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <AlertCircle className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  N&apos;attendez pas !
                </h3>
                <p className="text-gray-600">
                  Plus vous attendez, plus les dégâts peuvent être importants.
                </p>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 text-red-600">
                <ShieldAlert className="w-5 h-5" />
                <span className="font-bold">Risque sanitaire</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Consequences List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {consequences.map((consequence, index) => (
              <motion.div
                key={consequence.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-gradient-to-r from-red-50 to-white rounded-xl border border-red-100"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <consequence.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">
                    {consequence.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {consequence.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Prevention CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ne Laissez Pas Vos Canalisations Se Boucher !
                </h3>
                <p className="text-blue-100 mb-4">
                  Avec le temps, les tuyaux accumulent des résidus de graisse, de
                  savon, de calcaire et d&apos;autres déchets. Sans entretien régulier,
                  cela entraîne des bouchons, des mauvaises odeurs et des dégâts des
                  eaux.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Intervention rapide pour éviter les blocages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Matériel professionnel pour nettoyage en profondeur
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Prévention des mauvaises odeurs et risques
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="tel:+33603740704"
                  className="btn-primary text-lg pulse-cta"
                >
                  Appelez maintenant
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
