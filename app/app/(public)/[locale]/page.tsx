"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SubFooter } from "@/components/public/SubFooter";
import { DomainInfo } from "@/components/public/DomainInfo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
  Building,
  Users,
  Scale,
  Zap,
  Shield,
  Heart,
  Leaf,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Play,
  Video,
  Mail,
} from "lucide-react";

const newsItems = [
  {
    category: "Énergie",
    categoryEn: "Energy",
    title: "Crise énergétique : le point sur les mesures",
    titleEn: "Energy crisis: update on measures",
    href: "/news/energy-crisis",
  },
  {
    category: "Sécurité intérieure",
    categoryEn: "Internal Security",
    title: "Présentation des mesures renforçant la sécurité du quotidien",
    titleEn: "Presentation of measures strengthening daily security",
    href: "/news/security-measures",
  },
  {
    category: "Santé publique",
    categoryEn: "Public Health",
    title: "Qu'est-ce que le « One Health Summit » ?",
    titleEn: "What is the 'One Health Summit'?",
    href: "/news/one-health-summit",
  },
  {
    category: "Vie quotidienne",
    categoryEn: "Daily Life",
    title: "Ce qui change en avril 2026",
    titleEn: "What changes in April 2026",
    href: "/news/april-2026-changes",
  },
];

const videos = [
  {
    title: "Drogues : l'addiction s'installe insidieusement",
    titleEn: "Drugs: addiction settles insidiously",
    type: "Video",
    href: "/videos/drugs-addiction",
  },
  {
    title: "5 conseils pour mieux dormir",
    titleEn: "5 tips for better sleep",
    type: "Lecture",
    href: "/videos/sleep-tips",
  },
  {
    title: "Comment sont comptés les votes ?",
    titleEn: "How are votes counted?",
    type: "Lecture",
    href: "/videos/vote-counting",
  },
  {
    title: "Pourquoi votez-vous aux municipales ?",
    titleEn: "Why do you vote in municipal elections?",
    type: "Lecture",
    href: "/videos/why-vote",
  },
  {
    title: "Pilote de chasse",
    titleEn: "Fighter pilot",
    type: "Lecture",
    href: "/videos/fighter-pilot",
  },
];

const editorialPicks = [
  {
    title: "Carburant : où trouver la station-service la moins chère ?",
    titleEn: "Fuel: where to find the cheapest gas station?",
    href: "/editorial/fuel-prices",
  },
  {
    title: "Rupture conventionnelle : quelles sont les évolutions prévues ?",
    titleEn: "Mutual termination: what changes are planned?",
    href: "/editorial/mutual-termination",
  },
  {
    title: "Réunion sur les finances publiques",
    titleEn: "Public finance meeting",
    href: "/editorial/public-finance",
  },
  {
    title: "Lettre aux maires de France",
    titleEn: "Letter to the mayors of France",
    href: "/editorial/mayors-letter",
  },
];

const priorityThemes = [
  {
    icon: Briefcase,
    title: "Plein emploi et réindustrialisation",
    titleEn: "Full employment and reindustrialization",
    description:
      "Permettre aux Français de mieux vivre de leur travail et au travail. Partout en France, stimuler l'activité et promouvoir les métiers d'avenir pour renforcer l'indépendance de notre pays.",
    descriptionEn:
      "Enable French people to live better from their work and at work. Everywhere in France, stimulate activity and promote jobs of the future to strengthen our country's independence.",
    href: "/priorities/employment",
  },
  {
    icon: Users,
    title: "Progrès et services publics",
    titleEn: "Progress and public services",
    description:
      "Donner les mêmes chances à tous en valorisant les services publics, facilitateurs du quotidien. Bâtir de nouveaux progrès, c'est aussi sanctuariser les droits et en développer de nouveaux.",
    descriptionEn:
      "Give everyone the same chances by valuing public services, facilitators of daily life. Building new progress also means protecting rights and developing new ones.",
    href: "/priorities/public-services",
  },
  {
    icon: Leaf,
    title: "Transition écologique",
    titleEn: "Ecological transition",
    description:
      "Faire de la France la première grande Nation verte. Saisir cette opportunité pour renforcer l'indépendance et la compétitivité de la France, tout en créant un meilleur cadre de vie pour tous.",
    descriptionEn:
      "Make France the first great green Nation. Seize this opportunity to strengthen France's independence and competitiveness while creating a better living environment for all.",
    href: "/priorities/ecology",
  },
  {
    icon: Shield,
    title: "Ordre républicain",
    titleEn: "Republican order",
    description:
      "Renforcer l'autorité et la justice face aux défis actuels. Réarmer les forces régulariennes, moderniser les politiques d'immigration et d'intégration, et promouvoir l'engagement citoyen.",
    descriptionEn:
      "Strengthen authority and justice in the face of current challenges. Rearm the state forces, modernize immigration and integration policies, and promote citizen engagement.",
    href: "/priorities/republican-order",
  },
];

export default function HomePage() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";
  const [videoIndex, setVideoIndex] = React.useState(0);

  const prevVideo = () => setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextVideo = () => setVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen flex flex-col">
      <DomainInfo />
      <Header />

      <main className="flex-1 bg-white">
        <section className="bg-white text-black py-12 md:py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
                {isFrench ? "Republic of Astoria" : "Republic of Astoria"}
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

        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {isFrench ? "À la une" : "Headlines"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {newsItems.map((item, index) => (
                <Link key={index} href={`/${locale.locale}${item.href}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-0 bg-white">
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
                <Button
                  variant="outline"
                  className="border-[#0055A4] text-[#0055A4] hover:bg-[#0055A4] hover:text-white"
                >
                  {isFrench ? "Voir toute l'actualité" : "See all news"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {isFrench ? "À regarder" : "To watch"}
              </h2>
              <Link
                href={`/${locale.locale}/videos`}
                className="text-[#0055A4] hover:underline text-sm"
              >
                {isFrench ? "Voir tout" : "See all"}
              </Link>
            </div>
            <div className="relative">
              <Card className="bg-gray-100 text-gray-900 overflow-hidden border border-gray-200">
                <div className="flex flex-col md:flex-row">
                  <div className="relative bg-gray-200 aspect-video md:aspect-auto md:w-1/2 flex items-center justify-center">
                    <Play className="h-16 w-16 text-gray-500" />
                  </div>
                  <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-2 text-gray-700 border-gray-400">
                      {videos[videoIndex].type}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      {isFrench ? videos[videoIndex].title : videos[videoIndex].titleEn}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevVideo}
                        className="text-gray-700 hover:bg-gray-200"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <span className="text-sm text-gray-500">
                        {videoIndex + 1} / {videos.length}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextVideo}
                        className="text-gray-700 hover:bg-gray-200"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {videos.slice(0, 6).map((video, index) => (
                <Link key={index} href={`/${locale.locale}${video.href}`} className="shrink-0 w-32">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-2">
                      <div className="bg-gray-200 border-2 border-dashed rounded-md w-full aspect-video flex items-center justify-center mb-2">
                        <Video className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {isFrench ? video.title : video.titleEn}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
                <Button className="bg-[#0055A4] text-white hover:bg-[#004080]">
                  {isFrench ? "Lire le dossier spécial" : "Read the special file"}
                </Button>
              </Link>
              <Link href={`/${locale.locale}/health/psy-support`}>
                <Button
                  variant="outline"
                  className="border-[#0055A4] text-[#0055A4] hover:bg-[#0055A4] hover:text-white"
                >
                  {isFrench
                    ? "« Mon soutien psy » : 12 séances remboursées par an"
                    : "« My psy support » : 12 sessions reimbursed per year"}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {isFrench ? "Le choix de la rédaction" : "Editorial choice"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {editorialPicks.map((item, index) => (
                <Link key={index} href={`/${locale.locale}${item.href}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer bg-white">
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
              <Card className="bg-[#E8F4F8] hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-8 w-8 text-[#0055A4]" />
                    <h3 className="font-bold text-gray-900">Toutes et tous égaux</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {isFrench
                      ? "Découvrez le plan interministériel pour l'égalité femmes-hommes : des mesures pour agir sur le plan professionnel, économique et social."
                      : "Discover the interministerial plan for gender equality: measures to act on the professional, economic, and social levels."}
                  </p>
                  <span className="text-[#0055A4] text-sm font-medium flex items-center">
                    {isFrench ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-[#E8F8E8] hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                    <h3 className="font-bold text-gray-900">France 2030</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {isFrench
                      ? "France 2030 vise à accélérer la transformation des secteurs clés de notre économie par l'innovation et à positionner la France en leader du monde de demain."
                      : "France 2030 aims to accelerate the transformation of key sectors of our economy through innovation and position France as a leader of tomorrow's world."}
                  </p>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    {isFrench ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-[#FFF8E8] hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-8 w-8 text-orange-600" />
                    <h3 className="font-bold text-gray-900">
                      {isFrench ? "La France en grand angle" : "France in wide angle"}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {isFrench
                      ? "Que perçoivent les Français de l'action de l'État, là où ils vivent ? Une démarche d'écoute et de diagnostic sur tout le territoire."
                      : "What do the French perceive of State action where they live? A listening and diagnosis approach across the entire territory."}
                  </p>
                  <span className="text-orange-600 text-sm font-medium flex items-center">
                    {isFrench ? "En savoir plus" : "Learn more"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {isFrench ? "Ce qui change près de chez moi" : "What changes near me"}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                placeholder={
                  isFrench
                    ? "Renseigner un département ou une région"
                    : "Enter a department or region"
                }
                className="md:w-80"
              />
              <Button className="bg-[#0055A4] hover:bg-[#004080]">
                {isFrench ? "Rechercher" : "Search"}
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white text-gray-900 border-t border-gray-200">
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
                  <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
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
                <Button className="bg-[#0055A4] text-white hover:bg-[#004080]">
                  {isFrench ? "Découvrir le programme" : "Discover the program"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {isFrench ? "Gouvernement et institutions" : "Government and institutions"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link href={`/${locale.locale}/government/prime-minister`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "Le Premier ministre" : "The Prime Minister"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${locale.locale}/news`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "Actualités" : "News"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${locale.locale}/contact`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "Écrire au Premier ministre" : "Write to the Prime Minister"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${locale.locale}/government/services`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Building className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "Services du Premier ministre" : "Services of the Prime Minister"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${locale.locale}/government`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Scale className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "À propos du Gouvernement" : "About the Government"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={`/${locale.locale}/government/council`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-[#0055A4]" />
                    <p className="text-sm font-medium text-gray-900">
                      {isFrench ? "Conseil des ministros" : "Council of Ministers"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SubFooter />
      <Footer />
    </div>
  );
}