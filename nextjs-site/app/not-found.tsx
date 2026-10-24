import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./lib/site";

export const metadata = { title: "Page introuvable", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-lg">
        <p className="text-6xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-bold text-primary mb-3">Cette page n&apos;existe pas</h1>
        <p className="text-gray-600 mb-8">
          L&apos;adresse a peut-être changé. Retrouvez nos services de débouchage depuis l&apos;accueil, ou
          appelez-nous directement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-secondary justify-center">
            Retour à l&apos;accueil
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-primary justify-center">
            <Phone className="w-5 h-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </main>
  );
}
