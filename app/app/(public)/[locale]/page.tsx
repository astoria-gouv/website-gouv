"use client";

import * as React from "react";
import { useLocale } from "@/context/locale-context";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SubFooter } from "@/components/public/SubFooter";
import { DomainInfo } from "@/components/public/DomainInfo";
import {
  Hero,
  NewsSection,
  VideosSection,
  MentalHealthBanner,
  EditorialSection,
  DossiersSection,
  LocalSearchSection,
  PrioritiesSection,
  InstitutionsSection,
} from "@/components/home";

export default function HomePage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <DomainInfo />
      <Header />

      <main className="flex-1 bg-white">
        <Hero />
        <NewsSection />
        <VideosSection />
        <MentalHealthBanner />
        <EditorialSection />
        <DossiersSection />
        <LocalSearchSection />
        <PrioritiesSection />
        <InstitutionsSection />
      </main>

      <SubFooter />
      <Footer />
    </div>
  );
}
