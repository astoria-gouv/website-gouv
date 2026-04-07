"use client";

import * as React from "react";
import { useLocale } from "@/context/locale-context";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { SubFooter } from "@/components/public/SubFooter";
import { DomainInfo } from "@/components/public/DomainInfo";
import { Card, CardContent } from "@/components/design-system/Card";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Globe,
  Wallet,
  Leaf,
  Car,
  HardDrive,
  Cpu,
  Scale,
  Heart,
  GraduationCap,
  Palette,
  Plane,
} from "lucide-react";

interface Ministry {
  id: string;
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  scopeKey: string;
  url: string;
}

const ministriesData: Record<string, Ministry[]> = {
  fr: [
    {
      id: "interior",
      icon: Building2,
      titleKey: "ministries.interior.title",
      descriptionKey: "ministries.interior.description",
      scopeKey: "ministries.interior.scope",
      url: "https://interieur.gov.aor",
    },
    {
      id: "foreign",
      icon: Globe,
      titleKey: "ministries.foreign.title",
      descriptionKey: "ministries.foreign.description",
      scopeKey: "ministries.foreign.scope",
      url: "https://etranger.gov.aor",
    },
    {
      id: "finance",
      icon: Wallet,
      titleKey: "ministries.finance.title",
      descriptionKey: "ministries.finance.description",
      scopeKey: "ministries.finance.scope",
      url: "https://finance.gov.aor",
    },
    {
      id: "environment",
      icon: Leaf,
      titleKey: "ministries.environment.title",
      descriptionKey: "ministries.environment.description",
      scopeKey: "ministries.environment.scope",
      url: "https://environnement.gov.aor",
    },
    {
      id: "transport",
      icon: Car,
      titleKey: "ministries.transport.title",
      descriptionKey: "ministries.transport.description",
      scopeKey: "ministries.transport.scope",
      url: "https://transports.gov.aor",
    },
    {
      id: "infrastructure",
      icon: HardDrive,
      titleKey: "ministries.infrastructure.title",
      descriptionKey: "ministries.infrastructure.description",
      scopeKey: "ministries.infrastructure.scope",
      url: "https://infrastructure.gov.aor",
    },
    {
      id: "digital",
      icon: Cpu,
      titleKey: "ministries.digital.title",
      descriptionKey: "ministries.digital.description",
      scopeKey: "ministries.digital.scope",
      url: "https://numerique.gov.aor",
    },
    {
      id: "justice",
      icon: Scale,
      titleKey: "ministries.justice.title",
      descriptionKey: "ministries.justice.description",
      scopeKey: "ministries.justice.scope",
      url: "https://justice.gov.aor",
    },
    {
      id: "health",
      icon: Heart,
      titleKey: "ministries.health.title",
      descriptionKey: "ministries.health.description",
      scopeKey: "ministries.health.scope",
      url: "https://sante.gov.aor",
    },
    {
      id: "education",
      icon: GraduationCap,
      titleKey: "ministries.education.title",
      descriptionKey: "ministries.education.description",
      scopeKey: "ministries.education.scope",
      url: "https://education.gov.aor",
    },
    {
      id: "culture",
      icon: Palette,
      titleKey: "ministries.culture.title",
      descriptionKey: "ministries.culture.description",
      scopeKey: "ministries.culture.scope",
      url: "https://culture.gov.aor",
    },
    {
      id: "air-maritime",
      icon: Plane,
      titleKey: "ministries.airMaritime.title",
      descriptionKey: "ministries.airMaritime.description",
      scopeKey: "ministries.airMaritime.scope",
      url: "https://transport-aerien-maritime.gov.aor",
    },
  ],
  en: [
    {
      id: "interior",
      icon: Building2,
      titleKey: "ministries.interior.title",
      descriptionKey: "ministries.interior.description",
      scopeKey: "ministries.interior.scope",
      url: "https://interior.gov.aor",
    },
    {
      id: "foreign",
      icon: Globe,
      titleKey: "ministries.foreign.title",
      descriptionKey: "ministries.foreign.description",
      scopeKey: "ministries.foreign.scope",
      url: "https://foreignaffairs.gov.aor",
    },
    {
      id: "finance",
      icon: Wallet,
      titleKey: "ministries.finance.title",
      descriptionKey: "ministries.finance.description",
      scopeKey: "ministries.finance.scope",
      url: "https://finance.gov.aor",
    },
    {
      id: "environment",
      icon: Leaf,
      titleKey: "ministries.environment.title",
      descriptionKey: "ministries.environment.description",
      scopeKey: "ministries.environment.scope",
      url: "https://environment.gov.aor",
    },
    {
      id: "transport",
      icon: Car,
      titleKey: "ministries.transport.title",
      descriptionKey: "ministries.transport.description",
      scopeKey: "ministries.transport.scope",
      url: "https://transport.gov.aor",
    },
    {
      id: "infrastructure",
      icon: HardDrive,
      titleKey: "ministries.infrastructure.title",
      descriptionKey: "ministries.infrastructure.description",
      scopeKey: "ministries.infrastructure.scope",
      url: "https://infrastructure.gov.aor",
    },
    {
      id: "digital",
      icon: Cpu,
      titleKey: "ministries.digital.title",
      descriptionKey: "ministries.digital.description",
      scopeKey: "ministries.digital.scope",
      url: "https://digital.gov.aor",
    },
    {
      id: "justice",
      icon: Scale,
      titleKey: "ministries.justice.title",
      descriptionKey: "ministries.justice.description",
      scopeKey: "ministries.justice.scope",
      url: "https://justice.gov.aor",
    },
    {
      id: "health",
      icon: Heart,
      titleKey: "ministries.health.title",
      descriptionKey: "ministries.health.description",
      scopeKey: "ministries.health.scope",
      url: "https://health.gov.aor",
    },
    {
      id: "education",
      icon: GraduationCap,
      titleKey: "ministries.education.title",
      descriptionKey: "ministries.education.description",
      scopeKey: "ministries.education.scope",
      url: "https://education.gov.aor",
    },
    {
      id: "culture",
      icon: Palette,
      titleKey: "ministries.culture.title",
      descriptionKey: "ministries.culture.description",
      scopeKey: "ministries.culture.scope",
      url: "https://culture.gov.aor",
    },
    {
      id: "air-maritime",
      icon: Plane,
      titleKey: "ministries.airMaritime.title",
      descriptionKey: "ministries.airMaritime.description",
      scopeKey: "ministries.airMaritime.scope",
      url: "https://air-maritime.gov.aor",
    },
  ],
};

const translationKeys: Record<string, Record<string, string>> = {
  fr: {
    "ministries.hero.title": "Ministères du Gouvernement",
    "ministries.hero.description":
      "Découvrez les ministères responsables de la mise en œuvre des politiques publiques au service des citoyens.",
    "ministries.link.title": "Place dans la gouvernance",
    "ministries.link.description":
      "Les ministères font partie du pouvoir exécutif et opèrent sous l'autorité du Gouvernement. Ils sont chargés de mettre en œuvre les décisions validées par les citoyens, après débats au Parlement.",
    "ministries.link.notDecision": "Les ministères ne prennent pas de décisions politiques finales",
    "ministries.link.authority": "Autorités de décision",
    "ministries.link.citizens": "Citoyens",
    "ministries.link.parliament": "Parlement",
    "ministries.link.execution": "Exécution",
    "ministries.link.ministries": "Ministères",
    "ministries.grid.title": "Liste des Ministères",
    "ministries.grid.subtitle": "12 ministères chargés des politiques publiques",
    "ministries.role.title": "Rôle des Ministères",
    "ministries.role.description":
      "Les ministères sont responsables de l'exécution des politiques publiques et de la gestion des services publics. Ils agissent de manière transparente et rendent compte de leurs actions aux institutions et aux citoyens.",
    "ministries.role.execution": "Exécution des politiques",
    "role.execution.description": "Mise en œuvre des décisions votées par les citoyens",
    "ministries.role.transparency": "Transparence",
    "role.transparency.description": "Publication des rapports et des indicateurs",
    "ministries.role.accountability": "Responsabilité",
    "role.accountability.description": "Contrôle par les institutions et les citoyens",
    "ministries.interior.title": "Ministère de l'Intérieur",
    "ministries.interior.description":
      "Gère les affaires intérieures, la sécurité civile et l'administration territoriale.",
    "ministries.interior.scope": "Sécurité, administration locale, populations",
    "ministries.foreign.title": "Ministère des Affaires Étrangères",
    "ministries.foreign.description":
      "Représente Astoria à l'international et gère les relations diplomatiques.",
    "ministries.foreign.scope": "Diplomatie, accords internationaux, représentation",
    "ministries.finance.title": "Ministère des Finances et de l'Économie",
    "ministries.finance.description":
      "Gère les finances publiques et la politique économique du pays.",
    "ministries.finance.scope": "Budget, fiscalités, développement économique",
    "ministries.environment.title": "Ministère de l'Environnement et de la Transition Écologique",
    "ministries.environment.description":
      "Pilote les politiques de protection de l'environnement et de transition écologique.",
    "ministries.environment.scope": "Climat, biodiversité, énergies vertes",
    "ministries.transport.title": "Ministère des Transports et de la Mobilité",
    "ministries.transport.description":
      "Gère les infrastructures de transport et la mobilité sur le territoire.",
    "ministries.transport.scope": "Routes, transports publics, mobilité durable",
    "ministries.infrastructure.title":
      "Ministère de l'Infrastructure et du Développement Territorial",
    "ministries.infrastructure.description":
      "Coordonne les grands projets d'infrastructure et l'aménagement du territoire.",
    "ministries.infrastructure.scope": "Travaux publics, urbanisme, aménagement",
    "ministries.digital.title": "Ministère des Affairs Numériques et de l'Innovation",
    "ministries.digital.description":
      "Pilote la transformation numérique et les politiques d'innovation.",
    "ministries.digital.scope": "Technologies, innovation, administration numérique",
    "ministries.justice.title": "Ministère de la Justice et des Institutions",
    "ministries.justice.description":
      "Gère le système judiciaire et les relations avec les institutions publiques.",
    "ministries.justice.scope": "Justice, juridique, institutions",
    "ministries.health.title": "Ministère de la Santé et du Bien-être",
    "ministries.health.description":
      "Pilote les politiques de santé publique et de bien-être social.",
    "ministries.health.scope": "Santé, prévention, protection sociale",
    "ministries.education.title": "Ministère de l'Éducation et de la Recherche",
    "ministries.education.description": "Gère le système éducatif et la politique de recherche.",
    "ministries.education.scope": "Éducation, formation, recherche",
    "ministries.culture.title": "Ministère de la Culture, du Tourisme et de la Vie Citoyenne",
    "ministries.culture.description":
      "Pilote les politiques culturelles, le tourisme et la vie associative.",
    "ministries.culture.scope": "Culture, tourisme, associations, civicisme",
    "ministries.airMaritime.title": "Ministère du Transport Aérien et Maritime",
    "ministries.airMaritime.description":
      "Gère les transports aérien et maritime nationaux et internationaux.",
    "ministries.airMaritime.scope": "Aviation civile, navigation, ports",
  },
  en: {
    "ministries.hero.title": "Government Ministries",
    "ministries.hero.description":
      "Discover the ministries responsible for implementing public policies in service of the citizens.",
    "ministries.link.title": "Place in Governance",
    "ministries.link.description":
      "Ministries are part of the executive power and operate under the authority of the Government. They are responsible for implementing decisions validated by citizens, after debates in Parliament.",
    "ministries.link.notDecision": "Ministries do not make final political decisions",
    "ministries.link.authority": "Decision Authorities",
    "ministries.link.citizens": "Citizens",
    "ministries.link.parliament": "Parliament",
    "ministries.link.execution": "Execution",
    "ministries.link.ministries": "Ministries",
    "ministries.grid.title": "List of Ministries",
    "ministries.grid.subtitle": "12 ministries responsible for public policies",
    "ministries.role.title": "Role of Ministries",
    "ministries.role.description":
      "Ministries are responsible for executing public policies and managing public services. They operate transparently and are accountable to institutions and citizens.",
    "ministries.role.execution": "Policy Execution",
    "role.execution.description": "Implementation of decisions voted by citizens",
    "ministries.role.transparency": "Transparency",
    "role.transparency.description": "Publication of reports and indicators",
    "ministries.role.accountability": "Accountability",
    "role.accountability.description": "Oversight by institutions and citizens",
    "ministries.interior.title": "Ministry of the Interior",
    "ministries.interior.description":
      "Manages internal affairs, civil security, and territorial administration.",
    "ministries.interior.scope": "Security, local administration, populations",
    "ministries.foreign.title": "Ministry of Foreign Affairs",
    "ministries.foreign.description":
      "Represents Astoria internationally and manages diplomatic relations.",
    "ministries.foreign.scope": "Diplomacy, international agreements, representation",
    "ministries.finance.title": "Ministry of Finance and Economy",
    "ministries.finance.description": "Manages public finances and economic policy of the country.",
    "ministries.finance.scope": "Budget, taxation, economic development",
    "ministries.environment.title": "Ministry of Environment and Ecological Transition",
    "ministries.environment.description":
      "Leads environmental protection and ecological transition policies.",
    "ministries.environment.scope": "Climate, biodiversity, green energy",
    "ministries.transport.title": "Ministry of Transport and Mobility",
    "ministries.transport.description":
      "Manages transport infrastructure and mobility across the territory.",
    "ministries.transport.scope": "Roads, public transport, sustainable mobility",
    "ministries.infrastructure.title": "Ministry of Infrastructure and Territorial Development",
    "ministries.infrastructure.description":
      "Coordinates major infrastructure projects and territorial development.",
    "ministries.infrastructure.scope": "Public works, urban planning, development",
    "ministries.digital.title": "Ministry of Digital Affairs and Innovation",
    "ministries.digital.description": "Leads digital transformation and innovation policies.",
    "ministries.digital.scope": "Technology, innovation, digital administration",
    "ministries.justice.title": "Ministry of Justice and Institutions",
    "ministries.justice.description":
      "Manages the judicial system and relations with public institutions.",
    "ministries.justice.scope": "Justice, legal affairs, institutions",
    "ministries.health.title": "Ministry of Health and Well-being",
    "ministries.health.description": "Leads public health and social well-being policies.",
    "ministries.health.scope": "Health, prevention, social protection",
    "ministries.education.title": "Ministry of Education and Research",
    "ministries.education.description": "Manages the education system and research policy.",
    "ministries.education.scope": "Education, training, research",
    "ministries.culture.title": "Ministry of Culture, Tourism and Civic Life",
    "ministries.culture.description": "Leads cultural, tourism, and civic life policies.",
    "ministries.culture.scope": "Culture, tourism, associations, civic engagement",
    "ministries.airMaritime.title": "Ministry of Air and Maritime Transport",
    "ministries.airMaritime.description":
      "Manages air and maritime transport nationally and internationally.",
    "ministries.airMaritime.scope": "Civil aviation, shipping, ports",
  },
};

function getNestedValue(obj: Record<string, string>, path: string): string {
  return obj[path] || path;
}

export default function MinistriesPage() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";
  const t = translationKeys[isFrench ? "fr" : "en"];
  const ministries = ministriesData[isFrench ? "fr" : "en"];

  return (
    <div className="min-h-screen flex flex-col">
      <DomainInfo />
      <Header />

      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t["ministries.hero.title"]}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t["ministries.hero.description"]}
            </p>
          </div>

          <section className="mb-16">
            <Card variant="default" className="p-6 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {t["ministries.link.title"]}
                  </h2>
                  <p className="text-gray-600 mb-4">{t["ministries.link.description"]}</p>
                  <div className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {t["ministries.link.notDecision"]}
                  </div>
                </div>

                <div className="flex flex-col gap-3 min-w-50">
                  <div className="text-sm font-semibold text-gray-500 mb-1">
                    {t["ministries.link.authority"]}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#0055A4] rounded-full" />
                    <span className="text-sm font-medium text-gray-900">
                      {t["ministries.link.citizens"]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#003580] rounded-full" />
                    <span className="text-sm font-medium text-gray-900">
                      {t["ministries.link.parliament"]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowLeft className="w-3 h-3 text-gray-400 rotate-90" />
                    <span className="text-sm text-gray-400">{t["ministries.link.execution"]}</span>
                  </div>
                  <div className="flex items-center gap-3 pl-6">
                    <div className="w-3 h-3 bg-gray-600 rounded-full" />
                    <span className="text-sm font-medium text-gray-900">
                      {t["ministries.link.ministries"]}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["ministries.grid.title"]}
              </h2>
              <p className="text-gray-600">{t["ministries.grid.subtitle"]}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((ministry) => {
                const Icon = ministry.icon;
                return (
                  <a
                    key={ministry.id}
                    href={ministry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card variant="default" className="hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#0055A4] rounded-lg">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">
                              {t[ministry.titleKey]}
                            </h3>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{t[ministry.descriptionKey]}</p>
                        <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">
                          {t[ministry.scopeKey]}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t["ministries.role.title"]}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t["ministries.role.description"]}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card variant="colored" className="border-t-4 border-t-[#0055A4]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#0055A4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t["ministries.role.execution"]}</h3>
                  <p className="text-sm text-gray-600">{t["role.execution.description"]}</p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-t-4 border-t-[#003580]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#003580] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["ministries.role.transparency"]}
                  </h3>
                  <p className="text-sm text-gray-600">{t["role.transparency.description"]}</p>
                </CardContent>
              </Card>

              <Card variant="colored" className="border-t-4 border-t-gray-600">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t["ministries.role.accountability"]}
                  </h3>
                  <p className="text-sm text-gray-600">{t["role.accountability.description"]}</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <SubFooter />
      <Footer />
    </div>
  );
}
