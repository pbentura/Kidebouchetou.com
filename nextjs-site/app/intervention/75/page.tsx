import type { Metadata } from "next";
import { Phone, MapPin, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Paris 75 | Intervention Rapide 24/7",
  description:
    "Service de débouchage professionnel à Paris (75). Intervention rapide dans tous les arrondissements. WC bouché, évier, canalisation. Devis gratuit.",
  keywords: [
    "débouchage Paris",
    "débouchage 75",
    "plombier Paris",
    "WC bouché Paris",
    "canalisation Paris",
    "urgence débouchage Paris",
  ],
};

const cities = [
  "Paris 1er",
  "Paris 2ème",
  "Paris 3ème",
  "Paris 4ème",
  "Paris 5ème",
  "Paris 6ème",
  "Paris 7ème",
  "Paris 8ème",
  "Paris 9ème",
  "Paris 10ème",
  "Paris 11ème",
  "Paris 12ème",
  "Paris 13ème",
  "Paris 14ème",
  "Paris 15ème",
  "Paris 16ème",
  "Paris 17ème",
  "Paris 18ème",
  "Paris 19ème",
  "Paris 20ème",
];

const services = [
  "Débouchage WC et toilettes",
  "Débouchage évier et lavabo",
  "Débouchage douche et baignoire",
  "Curage canalisation",
  "Inspection caméra",
  "Haute pression",
];

export default function ParisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#localisation"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux zones d&apos;intervention
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl font-bold">75</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Paris</h1>
              <p className="text-blue-200 text-lg">Débouchage professionnel</p>
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
                Débouchage Paris - Service 24/7
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kidebouchetou intervient rapidement dans tous les arrondissements de Paris
                pour vos problèmes de canalisations. Notre équipe d&apos;experts qualifiés
                est disponible 24h/24 et 7j/7 pour traiter vos urgences débouchage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Que vous soyez particulier ou professionnel dans le 75, nous mettons à votre
                disposition notre expertise de plus de 25 ans et notre matériel professionnel
                haute pression pour résoudre efficacement tous vos problèmes de canalisations.
              </p>
            </section>

            {/* Services */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Nos Services à Paris
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
                Arrondissements desservis
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="bg-blue-50 text-primary px-4 py-2 rounded-lg text-sm font-medium text-center"
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
              <h3 className="text-xl font-bold mb-4">Urgence à Paris ?</h3>
              <p className="text-white/80 mb-6">
                Intervention rapide dans tous les arrondissements du 75.
              </p>
              <a
                href="tel:+33603740704"
                className="flex items-center justify-center gap-2 bg-white text-accent font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors"
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
                    <p className="text-gray-600 text-sm">Tout Paris (75)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">kidebouchetou.com</h3>
              <p className="text-blue-200 text-sm">
                Plus de 25 ans d&apos;expérience dans le débouchage de canalisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
