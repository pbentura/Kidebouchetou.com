import type { Metadata } from "next";
import { Phone, MapPin, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Val-de-Marne 94 | Intervention Rapide",
  description:
    "Service de débouchage professionnel dans le Val-de-Marne (94). Intervention rapide à Créteil, Vitry, Champigny. WC bouché, canalisation. Devis gratuit.",
  keywords: [
    "débouchage 94",
    "débouchage Val-de-Marne",
    "plombier Créteil",
    "débouchage Vitry",
    "canalisation 94",
    "urgence débouchage 94",
  ],
};

const cities = [
  "Champigny-sur-Marne",
  "Chennevières-sur-Marne",
  "Choisy-le-Roi",
  "Créteil",
  "Fontenay-sous-Bois",
  "Ivry-sur-Seine",
  "Joinville-le-Pont",
  "Le Kremlin-Bicêtre",
  "Le Perreux-sur-Marne",
  "Le Plessis-Trévise",
  "L'Haÿ-les-Roses",
  "Maisons-Alfort",
  "Nogent-sur-Marne",
  "Orly",
  "Saint-Mandé",
  "Saint-Maur-des-Fossés",
  "Saint-Maurice",
  "Sucy-en-Brie",
  "Thiais",
  "Villecresnes",
  "Villejuif",
  "Villeneuve-le-Roi",
  "Villeneuve-Saint-Georges",
  "Villiers-sur-Marne",
  "Vitry-sur-Seine",
];

const services = [
  "Débouchage WC et toilettes",
  "Débouchage évier et lavabo",
  "Débouchage douche et baignoire",
  "Curage canalisation",
  "Inspection caméra",
  "Haute pression",
];

export default function ValDeMarnePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#localisation"
            className="inline-flex items-center gap-2 text-teal-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux zones d&apos;intervention
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold">94</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Val-de-Marne</h1>
              <p className="text-teal-200 text-lg">Débouchage professionnel</p>
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
                Débouchage Val-de-Marne - Service 24/7
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kidebouchetou intervient rapidement dans tout le Val-de-Marne (94) pour
                vos problèmes de canalisations. De Créteil à Vitry-sur-Seine, en passant
                par Champigny et Saint-Maur, notre équipe est disponible 24h/24.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre expertise de plus de 25 ans et notre matériel professionnel haute
                pression nous permettent de résoudre efficacement tous vos problèmes
                de canalisations dans le 94.
              </p>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Nos Services dans le 94
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
                    className="bg-teal-50 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center"
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
              <h3 className="text-xl font-bold mb-4">Urgence dans le 94 ?</h3>
              <p className="text-white/80 mb-6">
                Intervention rapide dans tout le Val-de-Marne.
              </p>
              <a
                href="tel:+33603740704"
                className="flex items-center justify-center gap-2 bg-white text-accent font-bold py-4 rounded-xl hover:bg-teal-50 transition-colors"
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
                    <p className="font-medium text-gray-900">Zone</p>
                    <p className="text-gray-600 text-sm">Tout le 94</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">kidebouchetou.com</h3>
              <p className="text-blue-200 text-sm">
                Plus de 25 ans d&apos;expérience dans le débouchage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
