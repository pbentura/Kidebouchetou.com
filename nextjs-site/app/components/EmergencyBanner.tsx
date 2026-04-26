"use client";

import { Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-accent text-white py-2 px-4 text-center font-semibold text-sm md:text-base animate-pulse">
      <a
        href="tel:+33603740704"
        className="inline-flex items-center gap-2 hover:underline"
        aria-label="Appeler pour urgence débouchage"
      >
        <Phone className="w-4 h-4" />
        Urgence 24/7 : 06 03 74 07 04
      </a>
    </div>
  );
}
