import type { Metadata } from "next";
import { Phone, MapPin, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Val-d'Oise 95 | Intervention Rapide",
  description:
    "Service de débouchage professionnel dans le Val-d'Oise (95). Intervention rapide à Sarcelles, Cergy, Argenteuil. WC bouché, canalisation. Devis gratuit.",
  keywords: [
    "débouchage 95",
    "débouchage Val-d'Oise",
    "plombier Sarcelles",
    "débouchage Cergy",
    "débouchage Argenteuil",
    "canalisation 95",
    "urgence débouchage 95",
  ],
};

const cities = [
  "Argenteuil",
  "Beaumont-sur-Oise",
  "Bezons",
  "Cergy",
  "Cormeilles-en-Parisis",
  "Deuil-la-Barre",
  "Domont",
  "Eaubonne",
  "Ermont",
  "Franconville",
  "Garges-lès-Gonesse",
  "Gonesse",
  "Goussainville",
  "Herblay",
  "Montigny-lès-Cormeilles",
  "Montmagny",
  "Pierrefitte-sur-Seine",
  "Pontoise",
  "Saint-Brice-sous-Forêt",
  "Saint-Gratien",
  "Saint-Leu-la-Forêt",
  "Saint-Ouen-l'Aumône",
  "Sannois",
  "Sarcelles",
  "Soisy-sous-Montmorency",
  "Taverny",
  "Villiers-le-Bel",
];

const services = [
  "Débouchage WC et toilettes",
  "Débouchage évier et lavabo",
  "Débouchage douche et baignoire",
  "Curage canalisation",
  "Inspection caméra",
  "Haute pression",
];

export default function ValDOisePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#localisation"
            className="inline-flex items-center gap-2 text-orange-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux zones d&apos;intervention
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold">95</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Val-d&apos;Oise</h1>
              <p className="text-orange-200 text-lg">Débouchage professionnel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Débouchage Val-d&apos;Oise - Service 24/7
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kidebouchetou est basé à Sarcelles dans le Val-d&apos;Oise (95) et intervient
                rapidement dans tout le département. De Cergy à Argenteuil, en passant
                par Garges-lès-Gonesse et Gonesse, notre équipe locale est disponible
                24h/24 pour vos urgences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre proximité avec les villes du 95 nous permet d&apos;intervenir très
                rapidement. Avec plus de 25 ans d&apos;expérience et notre matériel haute
                pression, nous résolvons efficacement tous vos problèmes de canalisations.
              </p>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Nos Services dans le 95
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Cities Grid */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Villes desservies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="bg-orange-50 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Urgence dans le 95 ?</h3>
              <p className="text-white/80 mb-6">
                Intervention rapide dans tout le Val-d&apos;Oise.
              </p>
              <a
                href="tel:+33603740704"
                className="flex items-center justify-center gap-2 bg-white text-accent font-bold py-4 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 03 74 07 04
              </a>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-primary mb-4">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Intervention</p>
                    <p className="text-gray-600 text-sm">24h/24, 7j/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Siège</p>
                    <p className="text-gray-600 text-sm">Sarcelles (95200)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Kidebouchetou</h3>
              <p className="text-blue-200 text-sm">
                Basé à Sarcelles depuis plus de 25 ans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
