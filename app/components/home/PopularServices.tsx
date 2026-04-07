"use client";

import * as React from "react";
import { useLocale } from "@/context/locale-context";
import { ExternalLink } from "lucide-react";

const externalLinks = {
  fr: [
    { name: "impots.gov.aor", desc: "Impôts et taxation", href: "https://impots.gov.aor" },
    { name: "ameli.gov.aor", desc: "Assurance maladie", href: "https://ameli.gov.aor" },
    {
      name: "service-public.gov.aor",
      desc: "Démarches administratives",
      href: "https://service-public.gov.aor",
    },
    { name: "pole-emploi.gov.aor", desc: "Offres d'emploi", href: "https://pole-emploi.gov.aor" },
  ],
  en: [
    { name: "impots.gov.aor", desc: "Taxation", href: "https://impots.gov.aor" },
    { name: "ameli.gov.aor", desc: "Health Insurance", href: "https://ameli.gov.aor" },
    {
      name: "service-public.gov.aor",
      desc: "Administrative procedures",
      href: "https://service-public.gov.aor",
    },
    { name: "pole-emploi.gov.aor", desc: "Job offers", href: "https://pole-emploi.gov.aor" },
  ],
};

export function PopularServices() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  const links = isFrench ? externalLinks.fr : externalLinks.en;

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          {isFrench ? "Services officiels à connaître" : "Official services to know"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#003580] hover:shadow-sm transition-all group"
            >
              <div>
                <span className="font-medium text-[#003580]">{link.name}</span>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#003580]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
