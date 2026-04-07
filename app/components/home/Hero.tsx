"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Search, ChevronRight, Building2, FileText, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";

const quickLinks = {
  fr: [
    { label: "Services administratifs", icon: Building2, href: "/fr/services" },
    { label: "Formulaires", icon: FileText, href: "/fr/forms" },
    { label: "Mes droits", icon: Shield, href: "/fr/rights" },
  ],
  en: [
    { label: "Administrative services", icon: Building2, href: "/en/services" },
    { label: "Forms", icon: FileText, href: "/en/forms" },
    { label: "My rights", icon: Shield, href: "/en/rights" },
  ],
};

export function Hero() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  const links = isFrench ? quickLinks.fr : quickLinks.en;

  return (
    <section className="relative bg-white text-gray-900 py-12 md:py-16 border-b border-gray-200 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {isFrench ? "République d'Astoria" : "Republic of Astoria"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            {isFrench
              ? "Accédez aux services-citoyens, informations officielles et données ouvertes du gouvernement."
              : "Access citizen services, official information, and open data from the government."}
          </p>

          <div className="relative max-w-xl mb-8">
            <Input
              type="search"
              placeholder={
                isFrench
                  ? "Rechercher un service, une information..."
                  : "Search for a service, information..."
              }
              className="h-12 pl-11 pr-4 bg-gray-100 text-gray-900 rounded-lg border border-gray-300 shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#003580] hover:text-white rounded-lg text-sm font-medium transition-colors"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
                <ChevronRight className="h-4 w-4 opacity-60" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
