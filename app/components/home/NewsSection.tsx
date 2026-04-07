"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/locale-context";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/lib/data/news";
import { Card, CardContent } from "@/components/design-system/Card";
import { Badge } from "@/components/design-system/Badge";
import { Button } from "@/components/design-system/Button";

export function NewsSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{isFrench ? "À la une" : "Headlines"}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <Link key={index} href={`/${locale.locale}${item.href}`}>
              <Card className="h-full bg-white border-0 hover:shadow-lg cursor-pointer overflow-hidden">
                {item.image && (
                  <div className="relative h-32 w-full">
                    <Image
                      src={item.image}
                      alt={isFrench ? item.title : item.titleEn}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {isFrench ? item.category : item.categoryEn}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 line-clamp-3 text-sm leading-snug">
                    {isFrench ? item.title : item.titleEn}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href={`/${locale.locale}/news`}>
            <Button variant="secondary">
              {isFrench ? "Voir toute l'actualité" : "See all news"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
