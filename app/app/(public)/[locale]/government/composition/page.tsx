"use client";

import * as React from "react";
import { useLocale } from "@/context/locale-context";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SubFooter } from "@/components/public/SubFooter";
import { DomainInfo } from "@/components/public/DomainInfo";
import { Card, CardContent } from "@/components/design-system/Card";
import {
  ArrowDown,
  ArrowRight,
  Users,
  Building2,
  Landmark,
  Globe,
  Cog,
  Scale,
  Eye,
  Shield,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

interface InstitutionData {
  id: string;
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  features: string[];
}

const institutionsData: Record<string, InstitutionData[]> = {
  fr: [
    {
      id: "citizens",
      icon: Users,
      titleKey: "composition.citizens.title",
      descriptionKey: "composition.citizens.description",
      features: [
        "composition.citizens.feature1",
        "composition.citizens.feature2",
        "composition.citizens.feature3",
      ],
    },
    {
      id: "parliament",
      icon: Landmark,
      titleKey: "composition.parliament.title",
      descriptionKey: "composition.parliament.description",
      features: [
        "composition.parliament.feature1",
        "composition.parliament.feature2",
        "composition.parliament.feature3",
      ],
    },
    {
      id: "government",
      icon: Building2,
      titleKey: "composition.government.title",
      descriptionKey: "composition.government.description",
      features: [
        "composition.government.feature1",
        "composition.government.feature2",
        "composition.government.feature3",
      ],
    },
    {
      id: "president",
      icon: Globe,
      titleKey: "composition.president.title",
      descriptionKey: "composition.president.description",
      features: [
        "composition.president.feature1",
        "composition.president.feature2",
        "composition.president.feature3",
      ],
    },
    {
      id: "operating",
      icon: Cog,
      titleKey: "composition.operating.title",
      descriptionKey: "composition.operating.description",
      features: [
        "composition.operating.feature1",
        "composition.operating.feature2",
        "composition.operating.feature3",
      ],
    },
  ],
  en: [
    {
      id: "citizens",
      icon: Users,
      titleKey: "composition.citizens.title",
      descriptionKey: "composition.citizens.description",
      features: [
        "composition.citizens.feature1",
        "composition.citizens.feature2",
        "composition.citizens.feature3",
      ],
    },
    {
      id: "parliament",
      icon: Landmark,
      titleKey: "composition.parliament.title",
      descriptionKey: "composition.parliament.description",
      features: [
        "composition.parliament.feature1",
        "composition.parliament.feature2",
        "composition.parliament.feature3",
      ],
    },
    {
      id: "government",
      icon: Building2,
      titleKey: "composition.government.title",
      descriptionKey: "composition.government.description",
      features: [
        "composition.government.feature1",
        "composition.government.feature2",
        "composition.government.feature3",
      ],
    },
    {
      id: "president",
      icon: Globe,
      titleKey: "composition.president.title",
      descriptionKey: "composition.president.description",
      features: [
        "composition.president.feature1",
        "composition.president.feature2",
        "composition.president.feature3",
      ],
    },
    {
      id: "operating",
      icon: Cog,
      titleKey: "composition.operating.title",
      descriptionKey: "composition.operating.description",
      features: [
        "composition.operating.feature1",
        "composition.operating.feature2",
        "composition.operating.feature3",
      ],
    },
  ],
};

const translationKeys: Record<string, Record<string, string>> = {
  fr: {
    "composition.hero.title": "Composition du Gouvernement",
    "composition.hero.description":
      "Découvrez comment la gouvernance de la République d'Astoria repose sur la souveraineté populaire, la transparence et la séparation des pouvoirs.",
    "composition.system.title": "Vue d'ensemble du système",
    "composition.system.subtitle": "Une structure hiérarchique claire au service des citoyens",
    "composition.decision.title": "Processus décisionnel",
    "composition.decision.subtitle": "Du proposition à l'exécution",
    "composition.citizens.title": "Citoyens",
    "composition.citizens.description":
      "Les citoyens constituent le fondement de la souveraineté à Astoria. Ils détiennent le pouvoir décisionnel final sur toutes les questions majeures.",
    "composition.citizens.feature1": "Droit de vote sur les lois",
    "composition.citizens.feature2": "Initiative populaire",
    "composition.citizens.feature3": "Contrôle de l'exécutif",
    "composition.parliament.title": "Parlement / Chambre des Citoyens",
    "composition.parliament.description":
      "L'assemblée élue qui débat, structure et surveille l'application des lois.",
    "composition.parliament.feature1": "Élagoration législative",
    "composition.parliament.feature2": "Contrôle du gouvernement",
    "composition.parliament.feature3": "Pouvoir de contrôle",
    "composition.government.title": "Gouvernement",
    "composition.government.description":
      "Le pouvoir exécutif dirigé par les ministres, responsable de la mise en œuvre des politiques.",
    "composition.government.feature1": "Mise en œuvre des lois",
    "composition.government.feature2": "Gestion opérationnelle",
    "composition.government.feature3": "Politiques publiques",
    "composition.president.title": "Président",
    "composition.president.description":
      "Rôle symbolique et consultatif sans pouvoir de décision politique.",
    "composition.president.feature1": "Représentation internationale",
    "composition.president.feature2": "Fonction symbolique",
    "composition.president.feature3": "Conseil et consultatif",
    "composition.operating.title": "Société d'Exploitation",
    "composition.operating.description":
      "Entité technique fournissant les infrastructures et services publics.",
    "composition.operating.feature1": "Infrastructures techniques",
    "composition.operating.feature2": "Services opérationnels",
    "composition.operating.feature3": "Pas d'autorité politique",
    "composition.principles.title": "Principes fondamentaux",
    "composition.principles.subtitle": "Les valeurs qui guident notre gouvernance",
    "composition.principles.sovereignty.title": "Souveraineté populaire",
    "composition.principles.sovereignty.description":
      "Le pouvoir émane des citoyens et retourne aux citoyens",
    "composition.principles.transparency.title": "Transparence",
    "composition.principles.transparency.description":
      "Toutes les décisions sont publiques et auditables",
    "composition.principles.separation.title": "Séparation des pouvoirs",
    "composition.principles.separation.description": "Prévention de la concentration du pouvoir",
    "composition.principles.accountability.title": "Responsabilité",
    "composition.principles.accountability.description": "Les élus rendent compte de leurs actions",
    "composition.stats.title": "Chiffres clés",
    "composition.stats.citizens": "Citoyens éligibles",
    "composition.stats.parliamentMembers": "Députés",
    "composition.stats.ministers": "Ministres",
    "composition.stats.turnout": "Participation moyenne",
    "composition.faq.title": "Questions fréquentes",
    "composition.faq.q1.question": "Qui a le pouvoir de décision final ?",
    "composition.faq.q1.answer":
      "Les citoyens détiennent le pouvoir de décision final sur toutes les questions majeures par le biais du vote.",
    "composition.faq.q2.question": "Quel est le rôle du Président ?",
    "composition.faq.q2.answer":
      "Le Président assure la représentation internationale et joue un rôle symbolique et consultatif, sans pouvoir de décision politique.",
    "composition.faq.q3.question": "Comment les lois sont-elles votées ?",
    "composition.faq.q3.answer":
      "Toute loi doit être débattue au Parlement puis votée par les citoyens pour entrer en vigueur.",
    "composition.faq.q4.question": "Qu'est-ce que la Société d'Exploitation ?",
    "composition.faq.q4.answer":
      "C'est une entité technique qui gère les infrastructures et services publics, sans aucune autorité politique.",
    "composition.links.title": "En savoir plus",
    "composition.links.ministries": "Ministères",
    "composition.links.ministriesDesc": "Découvrez les différents ministères et leurs attributions",
    "composition.links.council": "Conseil des Ministres",
    "composition.links.councilDesc": "Le organe exécutif collégial du gouvernement",
    "composition.links.president": "Présidence",
    "composition.links.presidentDesc": "En savoir plus sur le rôle du Président",
    "composition.decision.step1.label": "Proposition",
    "composition.decision.step1.description": "Citizens, Parliament or President",
    "composition.decision.step2.label": "Débat",
    "composition.decision.step2.description": "Parliament discusses and structures",
    "composition.decision.step3.label": "Vote",
    "composition.decision.step3.description": "Citizens vote on the proposal",
    "composition.decision.step4.label": "Exécution",
    "composition.decision.step4.description": "Government implements",
  },
  en: {
    "composition.hero.title": "Government Composition",
    "composition.hero.description":
      "Discover how the governance of the Republic of Astoria is based on popular sovereignty, transparency, and separation of powers.",
    "composition.system.title": "System Overview",
    "composition.system.subtitle": "A clear hierarchical structure serving the citizens",
    "composition.decision.title": "Decision Process",
    "composition.decision.subtitle": "From proposal to execution",
    "composition.principles.title": "Core Principles",
    "composition.principles.subtitle": "The values that guide our governance",
    "composition.principles.sovereignty.title": "Popular Sovereignty",
    "composition.principles.sovereignty.description":
      "Power originates from citizens and returns to citizens",
    "composition.principles.transparency.title": "Transparency",
    "composition.principles.transparency.description": "All decisions are public and auditable",
    "composition.principles.separation.title": "Separation of Powers",
    "composition.principles.separation.description": "Preventing concentration of power",
    "composition.principles.accountability.title": "Accountability",
    "composition.principles.accountability.description":
      "Elected officials are accountable for their actions",
    "composition.stats.title": "Key Numbers",
    "composition.stats.citizens": "Eligible Citizens",
    "composition.stats.parliamentMembers": "Parliament Members",
    "composition.stats.ministers": "Ministers",
    "composition.stats.turnout": "Average Turnout",
    "composition.faq.title": "Frequently Asked Questions",
    "composition.faq.q1.question": "Who has the final decision-making power?",
    "composition.faq.q1.answer":
      "Citizens hold the final decision-making power on all major issues through voting.",
    "composition.faq.q2.question": "What is the President's role?",
    "composition.faq.q2.answer":
      "The President ensures international representation and plays a symbolic and consultative role, without political decision-making power.",
    "composition.faq.q3.question": "How are laws passed?",
    "composition.faq.q3.answer":
      "Any law must be debated in Parliament and then voted on by citizens to come into force.",
    "composition.faq.q4.question": "What is the Operating Company?",
    "composition.faq.q4.answer":
      "It is a technical entity that manages public infrastructure and services, with no political authority.",
    "composition.links.title": "Learn More",
    "composition.links.ministries": "Ministries",
    "composition.links.ministriesDesc":
      "Discover the different ministries and their responsibilities",
    "composition.links.council": "Council of Ministers",
    "composition.links.councilDesc": "The collegiate executive body of the government",
    "composition.links.president": "Presidency",
    "composition.links.presidentDesc": "Learn more about the President's role",
    "composition.citizens.title": "Citizens",
    "composition.citizens.description":
      "Citizens are the foundation of sovereignty in Astoria. They hold the final decision-making power on all major issues.",
    "composition.citizens.feature1": "Voting rights on laws",
    "composition.citizens.feature2": "Popular initiative",
    "composition.citizens.feature3": "Executive oversight",
    "composition.parliament.title": "Parliament / Citizen Chamber",
    "composition.parliament.description":
      "The elected assembly that debates, shapes, and oversees the application of laws.",
    "composition.parliament.feature1": "Legislative elaboration",
    "composition.parliament.feature2": "Government oversight",
    "composition.parliament.feature3": "Scrutiny power",
    "composition.government.title": "Government",
    "composition.government.description":
      "The executive power led by ministers, responsible for implementing policies.",
    "composition.government.feature1": "Law implementation",
    "composition.government.feature2": "Operational management",
    "composition.government.feature3": "Public policies",
    "composition.president.title": "President",
    "composition.president.description":
      "Symbolic and consultative role without political decision-making power.",
    "composition.president.feature1": "International representation",
    "composition.president.feature2": "Symbolic function",
    "composition.president.feature3": "Advisory role",
    "composition.operating.title": "Operating Company",
    "composition.operating.description":
      "Technical entity providing public infrastructure and services.",
    "composition.operating.feature1": "Technical infrastructure",
    "composition.operating.feature2": "Operational services",
    "composition.operating.feature3": "No political authority",
    "composition.decision.step1.label": "Proposal",
    "composition.decision.step1.description": "Citizens, Parliament or President",
    "composition.decision.step2.label": "Debate",
    "composition.decision.step2.description": "Parliament discusses and structures",
    "composition.decision.step3.label": "Vote",
    "composition.decision.step3.description": "Citizens vote on the proposal",
    "composition.decision.step4.label": "Execution",
    "composition.decision.step4.description": "Government implements",
  },
};

function getNestedValue(obj: Record<string, string>, path: string): string {
  return obj[path] || path;
}

export default function GovernmentCompositionPage() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";
  const t = translationKeys[isFrench ? "fr" : "en"];
  const institutions = institutionsData[isFrench ? "fr" : "en"];

  return (
    <div className="min-h-screen flex flex-col">
      <DomainInfo />
      <Header />

      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t["composition.hero.title"]}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t["composition.hero.description"]}
            </p>
          </div>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.system.title"]}
              </h2>
              <p className="text-gray-600">{t["composition.system.subtitle"]}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="bg-[#0055A4] text-white px-6 py-3 rounded-lg font-semibold text-center min-w-48">
                  <Users className="inline-block w-5 h-5 mr-2" />
                  {t["composition.citizens.title"]}
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="text-gray-400" />
              </div>

              <div className="flex justify-center">
                <div className="bg-[#003580] text-white px-6 py-3 rounded-lg font-semibold text-center min-w-48">
                  <Landmark className="inline-block w-5 h-5 mr-2" />
                  {t["composition.parliament.title"]}
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="text-gray-400" />
              </div>

              <div className="flex justify-center">
                <div className="bg-[#002040] text-white px-6 py-3 rounded-lg font-semibold text-center min-w-48">
                  <Building2 className="inline-block w-5 h-5 mr-2" />
                  {t["composition.government.title"]}
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="text-gray-400" />
              </div>

              <div className="flex justify-center">
                <div className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold text-center min-w-48">
                  {t["composition.operating.title"]}
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card variant="colored" className="border-l-4 border-l-[#0055A4]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-[#0055A4]" />
                    <h3 className="font-semibold text-gray-900">
                      {t["composition.president.title"]}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{t["composition.president.description"]}</p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-l-4 border-l-gray-500">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="w-5 h-5 text-gray-500" />
                    <h3 className="font-semibold text-gray-900">
                      {t["composition.operating.title"]}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{t["composition.operating.description"]}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.decision.title"]}
              </h2>
              <p className="text-gray-600">{t["composition.decision.subtitle"]}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
              <div className="bg-[#0055A4] text-white px-6 py-4 rounded-lg text-center min-w-32">
                <div className="font-semibold">{t["composition.decision.step1.label"]}</div>
                <div className="text-xs mt-1 opacity-90">
                  {t["composition.decision.step1.description"]}
                </div>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0 text-gray-400 w-8 h-8" />

              <div className="bg-[#003580] text-white px-6 py-4 rounded-lg text-center min-w-32">
                <div className="font-semibold">{t["composition.decision.step2.label"]}</div>
                <div className="text-xs mt-1 opacity-90">
                  {t["composition.decision.step2.description"]}
                </div>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0 text-gray-400 w-8 h-8" />

              <div className="bg-[#002040] text-white px-6 py-4 rounded-lg text-center min-w-32">
                <div className="font-semibold">{t["composition.decision.step3.label"]}</div>
                <div className="text-xs mt-1 opacity-90">
                  {t["composition.decision.step3.description"]}
                </div>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0 text-gray-400 w-8 h-8" />

              <div className="bg-gray-600 text-white px-6 py-4 rounded-lg text-center min-w-32">
                <div className="font-semibold">{t["composition.decision.step4.label"]}</div>
                <div className="text-xs mt-1 opacity-90">
                  {t["composition.decision.step4.description"]}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.principles.title"]}
              </h2>
              <p className="text-gray-600">{t["composition.principles.subtitle"]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="colored" className="border-t-4 border-t-[#0055A4]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#0055A4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["composition.principles.sovereignty.title"]}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t["composition.principles.sovereignty.description"]}
                  </p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-t-4 border-t-[#003580]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#003580] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["composition.principles.transparency.title"]}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t["composition.principles.transparency.description"]}
                  </p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-t-4 border-t-[#002040]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#002040] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["composition.principles.separation.title"]}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t["composition.principles.separation.description"]}
                  </p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-t-4 border-t-gray-600">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["composition.principles.accountability.title"]}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t["composition.principles.accountability.description"]}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.stats.title"]}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-[#0055A4] to-[#003580] text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">50,000+</div>
                <div className="text-sm opacity-90">{t["composition.stats.citizens"]}</div>
              </div>
              <div className="bg-linear-to-br from-[#003580] to-[#002040] text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">45</div>
                <div className="text-sm opacity-90">{t["composition.stats.parliamentMembers"]}</div>
              </div>
              <div className="bg-linear-to-br from-[#002040] to-gray-800 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">12</div>
                <div className="text-sm opacity-90">{t["composition.stats.ministers"]}</div>
              </div>
              <div className="bg-linear-to-br from-gray-600 to-gray-800 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">78%</div>
                <div className="text-sm opacity-90">{t["composition.stats.turnout"]}</div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.faq.title"]}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <Card variant="default" className="p-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0055A4] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t["composition.faq.q1.question"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.faq.q1.answer"]}</p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="p-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0055A4] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t["composition.faq.q2.question"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.faq.q2.answer"]}</p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="p-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0055A4] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t["composition.faq.q3.question"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.faq.q3.answer"]}</p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="p-4">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0055A4] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t["composition.faq.q4.question"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.faq.q4.answer"]}</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["composition.links.title"]}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/government/composition/ministries" className="block">
                <Card
                  variant="highlighted"
                  className="hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#0055A4] rounded-lg">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t["composition.links.ministries"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.links.ministriesDesc"]}</p>
                  </CardContent>
                </Card>
              </a>

              <a href="/government/composition/council" className="block">
                <Card
                  variant="highlighted"
                  className="hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#003580] rounded-lg">
                        <Landmark className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t["composition.links.council"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.links.councilDesc"]}</p>
                  </CardContent>
                </Card>
              </a>

              <a href="/government/president" className="block">
                <Card
                  variant="highlighted"
                  className="hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#002040] rounded-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t["composition.links.president"]}
                    </h3>
                    <p className="text-sm text-gray-600">{t["composition.links.presidentDesc"]}</p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isFrench ? "Institutions" : "Institutions"}
              </h2>
              <p className="text-gray-600">
                {isFrench ? "Composantes clés de la gouvernance" : "Key components of governance"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutions.map((institution) => {
                const Icon = institution.icon;
                return (
                  <Card
                    key={institution.id}
                    variant="highlighted"
                    className="hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#0055A4] rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {t[institution.titleKey]}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{t[institution.descriptionKey]}</p>
                      <ul className="space-y-2">
                        {institution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-[#0055A4] rounded-full mt-2 shrink-0" />
                            {t[feature]}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <SubFooter />
      <Footer />
    </div>
  );
}
