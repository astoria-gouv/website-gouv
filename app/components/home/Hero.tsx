"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/design-system/Button";

export function Hero() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="bg-white text-black py-12 md:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Republic of Astoria
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {isFrench
              ? "Services aux citoyens, informations officielles et données ouvertes du gouvernement."
              : "Citizen services, official information, and open data from the government."}
          </p>
        </div>

        <div className="relative max-w-xl">
          <Input
            type="search"
            placeholder={
              isFrench ? "Rechercher sur Astoria.gouv.aor..." : "Search on Astoria.gouv.aor..."
            }
            className="pl-10 h-12 bg-gray-100 text-gray-900 rounded-lg border border-gray-300"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
