"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { editorialPicks } from "@/lib/data/editorial";
import { Card, CardContent } from "@/components/design-system/Card";

export function EditorialSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {isFrench ? "Le choix de la rédaction" : "Editorial choice"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {editorialPicks.map((item, index) => (
            <Link key={index} href={`/${locale.locale}${item.href}`}>
              <Card className="h-full bg-white hover:shadow-lg cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">
                    {isFrench ? item.title : item.titleEn}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
