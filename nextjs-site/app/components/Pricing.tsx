"use client";

import { motion } from "framer-motion";
import { Check, Star, CreditCard, Banknote, Receipt } from "lucide-react";

const plans = [
  {
    name: "Débouchage Standard",
    price: "110",
    tva: "TVA 10%",
    popular: false,
    features: [
      "Toilettes bouchées",
      "Siphon bouché",
      "Douche / baignoire",
      "Lave-vaisselle",
      "Évacuation lente",
      "Machine à laver",
    ],
    tools:
      "Déboucheur révolver basse pression ou furet mécanique professionnel",
    icon: Check,
  },
  {
    name: "Inspection Caméra",
    price: "110",
    tva: "TVA 10%",
    popular: true,
    features: [
      "Inspection canalisation sanitaire",
      "Inspection regard égouts",
      "Enregistrement vidéo HD",
      "Rapport détaillé",
    ],
    tools:
      "Caméra endoscopique 30m, système agréé par les assurances",
    icon: Star,
  },
  {
    name: "Haute Pression Pro",
    price: "240",
    tva: "TVA 10%",
    popular: false,
    features: [
      "Nettoyage canalisations",
      "Détartrage complet",
      "Curage professionnel",
      "Passage caméra OFFERT",
      "Zones difficiles d'accès",
    ],
    tools:
      "Furet 100m + pression 350 bars, véhicule 4x4 pour zones inaccessibles",
    icon: Star,
  },
];

const paymentMethods = [
  { icon: Banknote, name: "Espèces" },
  { icon: CreditCard, name: "Carte Bancaire" },
  { icon: Receipt, name: "Chèque" },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="section-padding bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="pricing-title"
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
            Nos Tarifs
          </motion.span>
          <motion.h2
            id="pricing-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Tarifs Transparents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Des prix clairs et sans surprise. Devis gratuit avant chaque
            intervention.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular
                  ? "border-2 border-accent ring-4 ring-accent/20 scale-105 z-10"
                  : "border border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                  Recommandé
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.popular ? "bg-accent" : "bg-primary"
                    }`}
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                </div>

                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-accent">
                    {plan.price}€
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{plan.tva}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                  <p className="text-sm text-gray-600">
                    <strong className="text-primary">Équipement :</strong>{" "}
                    {plan.tools}
                  </p>
                </div>

                <a
                  href="tel:+33603740704"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-accent-dark pulse-cta"
                      : "bg-primary text-white hover:bg-primary-dark"
                  }`}
                >
                  Réserver
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-primary mb-6">
            Modes de Paiement Acceptés
          </h3>
          <div className="flex justify-center gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Besoin d&apos;un devis personnalisé ? Contactez-nous pour une estimation
            gratuite.
          </p>
          <a href="tel:+33603740704" className="btn-primary text-lg">
            Obtenir un devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
