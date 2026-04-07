"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { ArrowRight } from "lucide-react";
import { dossiers } from "@/lib/data/dossiers";
import { Card, CardContent } from "@/components/design-system/Card";

export function DossiersSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {isFrench ? "Grands dossiers" : "Major files"}
        </h2>
        <p className="text-gray-600 mb-6">
          {isFrench
            ? "Retrouvez les grands dossiers de l'État : programmes prioritaires, et bien d'autres."
            : "Find the major files of the State: priority programs, and many more."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dossiers.map((dossier, index) => (
            <Link key={index} href={`/${locale.locale}${dossier.href}`}>
              <Card className={`${dossier.bgColor} hover:shadow-lg cursor-pointer h-full`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <dossier.icon className={`h-8 w-8 ${dossier.iconColor}`} />
                    <h3 className="font-bold text-gray-900">
                      {isFrench ? dossier.title : dossier.titleEn}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {isFrench ? dossier.description : dossier.descriptionEn}
                  </p>
                  <span className={`${dossier.iconColor} text-sm font-medium flex items-center`}>
                    {isFrench ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
