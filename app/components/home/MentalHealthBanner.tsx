"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Heart } from "lucide-react";
import { Button } from "@/components/design-system/Button";

export function MentalHealthBanner() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8 bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
          <Heart className="h-6 w-6 text-[#0055A4]" />
          {isFrench
            ? "La santé mentale, Grande cause nationale 2026"
            : "Mental Health, Major National Cause 2026"}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          {isFrench
            ? "La santé mentale est la Grande cause nationale de 2026. Une nouvelle année qui va permettre de consolider le travail déjà engagé et d'accélérer la transformation amorcée."
            : "Mental health is the Major National Cause of 2026. A new year that will consolidate the work already undertaken and accelerate the transformation begun."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={`/${locale.locale}/health/mental-health`}>
            <Button>{isFrench ? "Lire le dossier spécial" : "Read the special file"}</Button>
          </Link>
          <Link href={`/${locale.locale}/health/psy-support`}>
            <Button variant="secondary">
              {isFrench
                ? "« Mon soutien psy » : 12 séances remboursées par an"
                : "« My psy support » : 12 sessions reimbursed per year"}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
