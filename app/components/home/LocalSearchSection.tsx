"use client";

import * as React from "react";
import { useLocale } from "@/context/locale-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/design-system/Button";

export function LocalSearchSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {isFrench ? "Ce qui change près de chez moi" : "What changes near me"}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder={
              isFrench ? "Renseigner un département ou une région" : "Enter a department or region"
            }
            className="md:w-80"
          />
          <Button>{isFrench ? "Rechercher" : "Search"}</Button>
        </div>
      </div>
    </section>
  );
}
