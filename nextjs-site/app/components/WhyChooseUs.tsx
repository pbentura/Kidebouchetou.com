"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle,
  Wrench,
  Award,
  Timer,
  Users,
  ListChecks,
  Droplets,
  Video,
  Truck,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-gradient-to-b from-blue-50 to-white"
      aria-labelledby="why-choose-title"
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
            La Différence
          </motion.span>
          <motion.h2
            id="why-choose-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 break-words"
          >
            Pourquoi Choisir kidebouchetou.com ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Découvrez pourquoi nos clients nous font confiance pour leurs problèmes
            de canalisations : plus de 25 ans d&apos;expérience à votre service.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Urgency Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-600">
                Une Urgence à Ne Pas Négliger
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Un <strong>débouchage de canalisations</strong> urgent peut
              rapidement devenir un cauchemar avec des conséquences graves :
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: "☠️", text: "Risques sanitaires" },
                { icon: "💨", text: "Mauvaises odeurs" },
                { icon: "💧", text: "Refoulements d'eau" },
                { icon: "🏠", text: "Dégâts matériels" },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag.icon} {tag.text}
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              Un simple problème d&apos;écoulement peut causer des dégâts importants
              si l&apos;intervention est retardée.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-600">
                Notre Solution Immédiate
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              <strong>Kidebouchetou</strong> vous propose une intervention rapide et
              efficace, avec des équipements spécialisés :
            </p>

            {/* Camion Image */}
            <div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src="/media/camion.png"
                alt="Camion d'intervention Kidebouchetou équipé pour le débouchage"
                width={600}
                height={338}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                Véhicule équipé
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                { icon: Droplets, text: "Débouchage haute pression jusqu'à 350 bars" },
                { icon: Video, text: "Inspection par caméra" },
                { icon: Wrench, text: "Matériel professionnel adapté" },
                { icon: Truck, text: "Véhicules équipés prêts à intervenir" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <item.icon className="w-5 h-5 text-green-600" />
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="bg-green-100 text-green-800 p-4 rounded-xl font-medium text-center">
              Notre objectif : restaurer un écoulement optimal dans les plus brefs
              délais !
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 bg-gradient-to-r from-primary to-primary-dark text-white">
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6" />
              <h3 className="text-xl font-bold">
                Plombier général vs Spécialiste débouchage
              </h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-primary font-bold">
                    Critère
                  </th>
                  <th className="px-6 py-4 text-left text-amber-600 font-bold">
                    Plombier général
                  </th>
                  <th className="px-6 py-4 text-left text-green-600 font-bold">
                    kidebouchetou.com
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    critere: "Délai d'intervention",
                    general: "⏰ Horaires limités",
                    kidebouche: "⚡ 24/7 - 30 à 45 min",
                  },
                  {
                    critere: "Équipement",
                    general: "🔧 Standard",
                    kidebouche: "🛠️ Haute pression 350 bars",
                  },
                  {
                    critere: "Expertise",
                    general: "👤 Compétences généralistes",
                    kidebouche: "🎓 Spécialiste débouchage",
                  },
                  {
                    critere: "Caméra d'inspection",
                    general: "❌ Souvent indisponible",
                    kidebouche: "✅ 30m avec enregistrement",
                  },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {row.critere}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.general}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">
                      {row.kidebouche}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Kidebouchetou Difference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">
              La Différence kidebouchetou.com
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: Timer,
                title: "Rapide",
                desc: "Intervention en 30 à 45 minutes",
              },
              {
                icon: Users,
                title: "Spécialisé",
                desc: "Expertise unique en débouchage",
              },
              {
                icon: ListChecks,
                title: "Efficace",
                desc: "Résolution garantie du problème",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-primary text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
