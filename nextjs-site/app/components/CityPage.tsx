import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  ArrowLeft,
  Clock,
  CheckCircle,
  Wrench,
  Camera,
  Droplets,
  MessageCircle,
} from "lucide-react";
import { cities, type City } from "../data/cities";
import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_WA,
  EMAIL,
  ADDRESS,
  RESPONSE_TIME,
} from "../lib/site";

// ---------- Métadonnées (une fonction, appelée par chaque route) ----------
export function cityMetadata(city: City): Metadata {
  const url = `${SITE_URL}/debouchage-${city.slug}/`;
  const title = `Débouchage Canalisation ${city.name} (${city.dept}) – Plombier 24h/24`;
  const description = `Débouchage canalisation ${city.nameIn} ⚡ Plombier disponible 24h/24 dans ${city.deptName}. WC, évier, douche, colonne, haute pression 350 bars. Devis gratuit ☎ ${PHONE_DISPLAY}.`;
  return {
    title,
    description,
    keywords: [
      `débouchage ${city.name}`,
      `plombier ${city.name}`,
      `débouchage canalisation ${city.name}`,
      `débouchage wc ${city.name}`,
      `débouchage urgence ${city.name}`,
      `plombier urgence ${city.name}`,
      `curage canalisation ${city.name}`,
      `débouchage ${city.postalCode}`,
      ...city.nearby.map((n) => `débouchage ${n.name}`),
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: "/logo.png", width: 512, height: 512, alt: `Kidebouchetou – débouchage ${city.nameIn}` }],
    },
  };
}

// ---------- Données JSON-LD ----------
function structuredData(city: City) {
  const url = `${SITE_URL}/debouchage-${city.slug}/`;
  const plumber = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${url}#plumber`,
    name: `${SITE_NAME} – Débouchage ${city.name}`,
    legalName: LEGAL_NAME,
    url,
    image: `${SITE_URL}/logo.png`,
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "€€",
    foundingDate: "2022-12",
    parentOrganization: { "@id": `${SITE_URL}/#organisation` },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.postalCode,
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: city.name, address: { "@type": "PostalAddress", postalCode: city.postalCode, addressRegion: city.deptName, addressCountry: "FR" } },
      ...city.nearby.map((n) => ({ "@type": "City", name: n.name })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    description: city.intro[0],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: city.deptName, item: `${SITE_URL}/intervention/${city.dept}/` },
      { "@type": "ListItem", position: 3, name: `Débouchage ${city.name}`, item: url },
    ],
  };
  return [plumber, faq, breadcrumb];
}

const services = [
  { icon: Droplets, label: "Débouchage WC et toilettes" },
  { icon: Droplets, label: "Débouchage évier et lavabo" },
  { icon: Droplets, label: "Débouchage douche et baignoire" },
  { icon: Wrench, label: "Débouchage colonne d'immeuble" },
  { icon: Wrench, label: "Curage et hydrocurage haute pression" },
  { icon: Camera, label: "Inspection caméra des canalisations" },
];

const pricing = [
  { name: "Débouchage standard", price: "110 €", detail: "WC, siphon, évier, douche, baignoire – furet mécanique professionnel" },
  { name: "Inspection caméra", price: "110 €", detail: "Caméra endoscopique 30 m, enregistrement vidéo, localisation du bouchon" },
  { name: "Haute pression 350 bars", price: "240 €", detail: "Hydrocureur + furet 100 m, passage caméra offert – bouchons tenaces" },
];

// ---------- Page ----------
export default function CityPage({ city }: { city: City }) {
  const others = cities.filter((c) => c.slug !== city.slug);
  const waText = encodeURIComponent(`Bonjour, j'ai besoin d'un débouchage ${city.nameIn}.`);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {structuredData(city).map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* En-tête */}
      <header className={`bg-gradient-to-r ${city.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-white/80 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white inline-flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Accueil
            </Link>
            <span>/</span>
            <Link href={`/intervention/${city.dept}/`} className="hover:text-white">
              {city.deptName} ({city.dept})
            </Link>
            <span>/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Débouchage canalisation {city.nameIn} ({city.postalCode})
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">
            Plombier débouchage disponible 24h/24, 7j/7 – intervention en {RESPONSE_TIME} – devis gratuit
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Votre plombier débouchage {city.nameIn}
              </h2>
              {city.intro.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Nos interventions {city.nameIn}</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <li key={s.label} className="flex items-center gap-3">
                    <s.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{s.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 space-y-3">
                {city.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-2">Quartiers et communes desservis</h2>
              <p className="text-gray-600 mb-6">
                Nous intervenons dans tous les quartiers de {city.name} et dans les communes voisines.
              </p>
              <h3 className="font-semibold text-primary mb-3">Quartiers de {city.name}</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {city.neighborhoods.map((n) => (
                  <span key={n} className={`${city.soft} text-primary px-3 py-1.5 rounded-full text-sm font-medium`}>
                    {n}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold text-primary mb-3">Communes voisines</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {city.nearby.map((n) => {
                  const linked = cities.find((c) => c.name === n.name);
                  const inner = (
                    <>
                      <span className="block font-medium text-primary">{n.name}</span>
                      <span className="text-xs text-gray-500">{n.postalCode}</span>
                    </>
                  );
                  return linked ? (
                    <Link key={n.name} href={`/debouchage-${linked.slug}/`} className="bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2 text-center border border-slate-100">
                      {inner}
                    </Link>
                  ) : (
                    <div key={n.name} className="bg-slate-50 rounded-lg px-3 py-2 text-center border border-slate-100">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg" id="tarifs">
              <h2 className="text-2xl font-bold text-primary mb-6">Tarifs débouchage {city.nameIn}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {pricing.map((p) => (
                  <div key={p.name} className="border border-slate-200 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-accent">{p.price}</p>
                    <p className="text-xs text-gray-500 mb-3">TTC, TVA 10 % incluse</p>
                    <p className="font-semibold text-primary mb-2">{p.name}</p>
                    <p className="text-sm text-gray-600">{p.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Paiement après intervention : espèces, carte bancaire, chèque. Tarif confirmé avant de commencer.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Questions fréquentes – {city.name}</h2>
              <div className="space-y-6">
                {city.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-primary mb-1">{f.q}</h3>
                    <p className="text-gray-600">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne latérale */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-6 text-white lg:sticky lg:top-6">
              <h2 className="text-xl font-bold mb-2">Urgence débouchage {city.nameIn} ?</h2>
              <p className="text-white/80 mb-6">Appelez-nous, nous sommes disponibles 24h/24.</p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 bg-white text-accent font-bold py-4 rounded-xl hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="font-bold text-primary mb-4">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Horaires</p>
                    <p className="text-gray-600 text-sm">24h/24, 7j/7 – jours fériés inclus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Siège</p>
                    <p className="text-gray-600 text-sm">
                      {ADDRESS.city} ({ADDRESS.postalCode}) – intervention à domicile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="font-bold text-primary mb-4">Autres villes</h2>
              <ul className="space-y-2">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/debouchage-${c.slug}/`} className="text-gray-700 hover:text-accent">
                      Débouchage {c.name} ({c.dept})
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={`/intervention/${city.dept}/`} className="text-gray-700 hover:text-accent font-medium">
                    Tout le {city.deptName} ({city.dept})
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-white">
              <h2 className="font-bold mb-2">{SITE_NAME}</h2>
              <p className="text-blue-200 text-sm">
                Plombier spécialiste du débouchage, plus de 25 ans d&apos;expérience. Société {LEGAL_NAME}, Sarcelles.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Bandeau final */}
      <section className={`bg-gradient-to-r ${city.color} text-white py-12`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Besoin d&apos;un débouchage {city.nameIn} ?</h2>
          <p className="text-white/90 mb-6">Un appel, un horaire d&apos;arrivée, un tarif clair. Disponible maintenant.</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-accent">
          ← Retour à l&apos;accueil
        </Link>
        <span className="mx-2">·</span>
        <a href={`mailto:${EMAIL}`} className="hover:text-accent">
          {EMAIL}
        </a>
      </footer>
    </main>
  );
}
