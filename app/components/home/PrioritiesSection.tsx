"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { ArrowRight } from "lucide-react";
import { priorityThemes } from "@/lib/data/priorities";
import { Card, CardContent } from "@/components/design-system/Card";
import { Button } from "@/components/design-system/Button";

export function PrioritiesSection() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <section className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-900">
          {isFrench
            ? "Les priorités pour une Astoria plus juste et plus indépendante"
            : "Priorities for a fairer and more independent Astoria"}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          {isFrench
            ? "En partant de vos préoccupations et de vos attentes, le Gouvernement a construit un programme de politiques prioritaires pour changer durablement notre pays et améliorer votre quotidien, autour de 4 priorités."
            : "Based on your concerns and expectations, the Government has built a program of priority policies to sustainably change our country and improve your daily life, around 4 priorities."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {priorityThemes.map((theme, index) => (
            <Link key={index} href={`/${locale.locale}${theme.href}`}>
              <Card className="bg-white border border-gray-200 hover:shadow-lg cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <theme.icon className="h-10 w-10 mx-auto mb-4 text-[#0055A4]" />
                  <h3 className="font-bold mb-2 text-sm text-gray-900">
                    {isFrench ? theme.title : theme.titleEn}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-4">
                    {isFrench ? theme.description : theme.descriptionEn}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={`/${locale.locale}/priorities`}>
            <Button>
              {isFrench ? "Découvrir le programme" : "Discover the program"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
