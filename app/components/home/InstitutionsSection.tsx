"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { institutions } from "@/lib/data/institutions";
import { Card, CardContent } from "@/components/design-system/Card";

export function InstitutionsSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {isFrench ? "Gouvernement et institutions" : "Government and institutions"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {institutions.map((item, index) => (
            <Link key={index} href={`/${locale.locale}${item.href}`}>
              <Card className="hover:shadow-md cursor-pointer bg-white">
                <CardContent className="p-4 text-center">
                  <item.icon className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                  <p className="text-sm font-medium text-gray-900">
                    {isFrench ? item.title : item.titleEn}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
