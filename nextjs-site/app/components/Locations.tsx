"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cities } from "../data/cities";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

const locations = [
  {
    city: ADDRESS.city,
    address: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    mapUrl: ADDRESS.mapUrl,
    areas: ["Sarcelles", "Garges-lès-Gonesse", "Villiers-le-Bel", "Arnouville", "Gonesse", "Saint-Denis", "Argenteuil"],
  },
];

const departments = [
  {
    number: "75",
    name: "Paris",
    description: "Intervention rapide dans tous les arrondissements de Paris pour vos urgences débouchage.",
    color: "from-blue-600 to-blue-800",
  },
  {
    number: "93",
    name: "Seine-Saint-Denis",
    description: "Service de débouchage dans tout le 93 : Saint-Denis, Aubervilliers, Bobigny et environs.",
    color: "from-purple-600 to-purple-800",
  },
  {
    number: "94",
    name: "Val-de-Marne",
    description: "Expert débouchage dans le 94 : Créteil, Vitry, Champigny et communes environnantes.",
    color: "from-teal-600 to-teal-800",
  },
  {
    number: "95",
    name: "Val-d'Oise",
    description: "Débouchage professionnel dans le 95 : Sarcelles, Cergy, Argenteuil et alentours.",
    color: "from-orange-500 to-orange-700",
  },
];

export default function Locations() {
  return (
    <section
      id="localisation"
      className="section-padding bg-white"
      aria-labelledby="locations-title"
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
            Zone d&apos;Intervention
          </motion.span>
          <motion.h2
            id="locations-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6"
          >
            Où Nous Trouver ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Basés à Sarcelles, nous intervenons à domicile dans le Val-d&apos;Oise, la
            Seine-Saint-Denis, les Hauts-de-Seine et toute l&apos;Île-de-France.
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Carte de la base */}
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {location.city}
                  </h3>
                  <p className="text-gray-500">{location.postalCode}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Adresse</p>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Disponibilité</p>
                    <p className="text-gray-600">24h/24, 7j/7 - Urgences</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary">Téléphone</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-accent font-semibold hover:underline"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-medium text-primary mb-2">
                  Secteurs desservis :
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area) => (
                    <span
                      key={area}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <MapPin className="w-5 h-5" />
                Voir sur Google Maps
              </a>
            </motion.div>
          ))}

          {/* Villes : pages dédiées */}
          <motion.div
            id="villes"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">Débouchage ville par ville</h3>
            <p className="text-gray-600 mb-6">
              Délais, quartiers desservis et tarifs pour chaque commune où nous intervenons le plus.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/debouchage-${c.slug}/`}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>
                      {c.name} <span className="text-gray-400 font-normal">({c.dept})</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Departments Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Nos Zones d&apos;Intervention
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/intervention/${dept.number}/`}
                  className={`block bg-gradient-to-br ${dept.color} rounded-2xl p-6 text-white h-full card-hover group`}
                >
                  <div className="text-4xl font-bold mb-2">{dept.number}</div>
                  <h4 className="text-lg font-bold mb-2">{dept.name}</h4>
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">
                    {dept.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:underline">
                    Voir les villes
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Intervention dans toute l&apos;Île-de-France
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Notre équipe mobile intervient rapidement dans un rayon de 50km autour
            de notre base de Sarcelles. Contactez-nous pour connaître
            les délais d&apos;intervention dans votre commune.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Paris (75)",
              "Seine-Saint-Denis (93)",
              "Val-de-Marne (94)",
              "Val-d'Oise (95)",
            ].map((dept) => (
              <span
                key={dept}
                className="bg-white/20 px-4 py-2 rounded-full text-sm"
              >
                {dept}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
