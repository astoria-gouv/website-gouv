"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Settings, ChevronDown } from "lucide-react";

const aLaUneContent = {
  fr: {
    title: "À la une",
    sections: [
      {
        title: "L'actualité",
        links: [
          { name: "Ce qui change", href: "/fr/news/what-changing" },
          { name: "Vos questions, nos réponses", href: "/fr/news/questions-answers" },
          { name: "Toute l'actualité", href: "/fr/news" },
        ],
      },
      {
        title: "Médias",
        links: [
          { name: "Podcasts", href: "/fr/news/podcasts" },
          { name: "Articles audio", href: "/fr/news/audio-article" },
          { name: "Newsletters", href: "/fr/newsletter" },
          { name: "Vidéos", href: "/fr/videos" },
        ],
      },
      {
        title: "Thématiques",
        links: [
          { name: "Budget", href: "/fr/news/budget" },
          { name: "Harcèlement à l'école", href: "/fr/topics/school-bullying" },
          { name: "Laïcité", href: "/fr/topics/laicite" },
          { name: "Narcotrafic", href: "/fr/topics/narcotrafic" },
          { name: "Santé", href: "/fr/news/health" },
          { name: "Handicap", href: "/fr/topics/disability" },
          { name: "Recherche et innovation", href: "/fr/topics/research" },
          { name: "Intelligence artificielle", href: "/fr/topics/ai" },
        ],
      },
      {
        title: "Grands dossiers",
        links: [
          { name: "Parlons santé mentale !", href: "/fr/health/mental-health" },
          { name: "La France en grand angle", href: "/fr/major-feature" },
          { name: "France 2030", href: "/fr/france-2030" },
          { name: "Toutes et tous égaux", href: "/fr/major-feature/equality-for-all" },
          { name: "France Nation verte", href: "/fr/major-feature/green-nation" },
          { name: "Maisons France services", href: "/fr/services/france-services" },
          { name: "Tous les grands dossiers", href: "/fr/major-feature" },
        ],
      },
    ],
  },
  en: {
    title: "Headlines",
    sections: [
      {
        title: "News",
        links: [
          { name: "What changes", href: "/en/news/what-changing" },
          { name: "Your questions, our answers", href: "/en/news/questions-answers" },
          { name: "All news", href: "/en/news" },
        ],
      },
      {
        title: "Media",
        links: [
          { name: "Podcasts", href: "/en/news/podcasts" },
          { name: "Audio articles", href: "/en/news/audio-article" },
          { name: "Newsletters", href: "/en/newsletter" },
          { name: "Videos", href: "/en/videos" },
        ],
      },
      {
        title: "Topics",
        links: [
          { name: "Budget", href: "/en/news/budget" },
          { name: "School bullying", href: "/en/topics/school-bullying" },
          { name: "Secularism", href: "/en/topics/laicite" },
          { name: "Drug trafficking", href: "/en/topics/narcotrafic" },
          { name: "Health", href: "/en/news/health" },
          { name: "Disability", href: "/en/topics/disability" },
          { name: "Research and innovation", href: "/en/topics/research" },
          { name: "Artificial intelligence", href: "/en/topics/ai" },
        ],
      },
      {
        title: "Major files",
        links: [
          { name: "Let's talk about mental health!", href: "/en/health/mental-health" },
          { name: "France in wide angle", href: "/en/major-feature" },
          { name: "France 2030", href: "/en/france-2030" },
          { name: "All equal", href: "/en/major-feature/equality-for-all" },
          { name: "Green Nation", href: "/en/major-feature/green-nation" },
          { name: "France Services", href: "/en/services/france-services" },
          { name: "All major files", href: "/en/major-feature" },
        ],
      },
    ],
  },
};

const policiesLinks = {
  fr: [
    { name: "Plein emploi et réindustrialisation", href: "/fr/priorities/employment" },
    { name: "Progrès et services publics", href: "/fr/priorities/public-services" },
    { name: "Transition écologique", href: "/fr/priorities/ecology" },
    { name: "Ordre républicain", href: "/fr/priorities/republican-order" },
  ],
  en: [
    { name: "Full employment and reindustrialization", href: "/en/priorities/employment" },
    { name: "Progress and public services", href: "/en/priorities/public-services" },
    { name: "Ecological transition", href: "/en/priorities/ecology" },
    { name: "Republican order", href: "/en/priorities/republican-order" },
  ],
};

const risksLinks = {
  fr: [
    { name: "Se préparer à une situation d'urgence", href: "/fr/emergency/preparedness" },
    { name: "Risques naturels et technologiques", href: "/fr/emergency/natural-risks" },
    { name: "Risques épidémiques", href: "/fr/emergency/epidemic-risks" },
    { name: "Menace terrorist", href: "/fr/emergency/terrorism" },
    { name: "Menace cyber", href: "/fr/emergency/cyber" },
  ],
  en: [
    { name: "Preparing for an emergency", href: "/en/emergency/preparedness" },
    { name: "Natural and technological risks", href: "/en/emergency/natural-risks" },
    { name: "Epidemic risks", href: "/en/emergency/epidemic-risks" },
    { name: "Terrorist threat", href: "/en/emergency/terrorism" },
    { name: "Cyber threat", href: "/en/emergency/cyber" },
  ],
};

const governmentLinks = {
  fr: [
    { name: "Actualités du Premier ministre", href: "/fr/government/prime-minister/news" },
    { name: "Composition du Gouvernement", href: "/fr/government/composition" },
    { name: "Conseil des ministers", href: "/fr/government/council" },
    { name: "Espace presse", href: "/fr/government/press" },
  ],
  en: [
    { name: "Prime Minister's news", href: "/en/government/prime-minister/news" },
    { name: "Government composition", href: "/en/government/composition" },
    { name: "Council of Ministers", href: "/en/government/council" },
    { name: "Press area", href: "/en/government/press" },
  ],
};

const usefulLinks = {
  fr: [
    { name: "legifrance.gouv.aor", href: "https://legifrance.gouv.aor" },
    { name: "service-public.gouv.aor", href: "https://service-public.gouv.aor" },
    { name: "data.gouv.aor", href: "https://data.gouv.aor" },
  ],
  en: [
    { name: "legifrance.gouv.aor", href: "https://legifrance.gouv.aor" },
    { name: "service-public.gouv.aor", href: "https://service-public.gouv.aor" },
    { name: "data.gouv.aor", href: "https://data.gouv.aor" },
  ],
};

export function Header() {
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const currentLocale = locale.locale;
  const isFrench = currentLocale === "fr" || currentLocale === "be_fr" || currentLocale === "ch_fr";

  const aLaUne = isFrench ? aLaUneContent.fr : aLaUneContent.en;
  const policies = isFrench ? policiesLinks.fr : policiesLinks.en;
  const risks = isFrench ? risksLinks.fr : risksLinks.en;
  const government = isFrench ? governmentLinks.fr : governmentLinks.en;
  const useful = isFrench ? usefulLinks.fr : usefulLinks.en;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/${currentLocale}/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/${currentLocale}`} className="flex items-center gap-3">
              <img
                src="/images/astoria-government-logo-font.png"
                alt="Gouvernement"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#003580] leading-tight">Gouvernement</span>
                <span className="text-xs text-gray-500 leading-tight">info.gouv.aor</span>
              </div>
            </Link>
            <span className="hidden lg:block text-sm text-gray-500 border-l border-gray-300 pl-4">
              {isFrench ? "Le site officiel du Gouvernement" : "The official Government website"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/${currentLocale}/government/press`}
              className="hidden md:inline-flex items-center px-3 py-1.5 text-sm text-[#003580] hover:bg-gray-100 rounded-md transition-colors"
            >
              {isFrench ? "Espace presse" : "Press area"}
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:bg-gray-100"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">{isFrench ? "Rechercher" : "Search"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700 hover:bg-gray-100 hidden md:flex"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">
                {isFrench ? "Paramètres d'affichage" : "Display settings"}
              </span>
            </Button>

            <Link
              href={isFrench ? "/en" : "/fr"}
              className="px-3 py-1.5 text-sm text-[#003580] border border-[#003580] hover:bg-[#003580] hover:text-white rounded-md transition-colors"
            >
              {isFrench ? "EN" : "FR"}
            </Link>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <Search className="h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={
                  isFrench ? "Rechercher sur info.gouv.aor..." : "Search on info.gouv.aor..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button type="submit" size="sm" className="bg-white text-[#003580] hover:bg-blue-50">
                {isFrench ? "Rechercher" : "Search"}
              </Button>
            </form>
          </div>
        </div>
      )}

      <div
        className="border-t border-gray-200 bg-gray-50"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav className="hidden lg:flex items-stretch relative">
            <div className="flex items-center">
              <button
                onMouseEnter={() => setActiveDropdown("alaune")}
                onClick={() => setActiveDropdown(activeDropdown === "alaune" ? null : "alaune")}
                className={cn(
                  "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeDropdown === "alaune"
                    ? "text-[#003580] border-[#003580]"
                    : "text-gray-700 border-transparent hover:text-[#003580]"
                )}
              >
                {aLaUne.title}
                <ChevronDown className="h-4 w-4" />
              </button>

              <button
                onMouseEnter={() => setActiveDropdown("policies")}
                onClick={() => setActiveDropdown(activeDropdown === "policies" ? null : "policies")}
                className={cn(
                  "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeDropdown === "policies"
                    ? "text-[#003580] border-[#003580]"
                    : "text-gray-700 border-transparent hover:text-[#003580]"
                )}
              >
                {isFrench ? "Politiques prioritaires" : "Priority policies"}
                <ChevronDown className="h-4 w-4" />
              </button>

              <button
                onMouseEnter={() => setActiveDropdown("risks")}
                onClick={() => setActiveDropdown(activeDropdown === "risks" ? null : "risks")}
                className={cn(
                  "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeDropdown === "risks"
                    ? "text-[#003580] border-[#003580]"
                    : "text-gray-700 border-transparent hover:text-[#003580]"
                )}
              >
                {isFrench ? "Prévention des risques" : "Risk prevention"}
                <ChevronDown className="h-4 w-4" />
              </button>

              <button
                onMouseEnter={() => setActiveDropdown("government")}
                onClick={() =>
                  setActiveDropdown(activeDropdown === "government" ? null : "government")
                }
                className={cn(
                  "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeDropdown === "government"
                    ? "text-[#003580] border-[#003580]"
                    : "text-gray-700 border-transparent hover:text-[#003580]"
                )}
              >
                {isFrench ? "Le Gouvernement" : "The Government"}
                <ChevronDown className="h-4 w-4" />
              </button>

              <button
                onMouseEnter={() => setActiveDropdown("useful")}
                onClick={() => setActiveDropdown(activeDropdown === "useful" ? null : "useful")}
                className={cn(
                  "flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors border-b-2",
                  activeDropdown === "useful"
                    ? "text-[#003580] border-[#003580]"
                    : "text-gray-700 border-transparent hover:text-[#003580]"
                )}
              >
                {isFrench ? "Liens utiles" : "Useful links"}
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {activeDropdown === "alaune" && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <div className="grid grid-cols-4 gap-8">
                    {aLaUne.sections.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-sm text-[#003580] mb-3 border-b border-gray-200 pb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <Link
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === "policies" && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <ul className="grid grid-cols-4 gap-4">
                    {policies.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeDropdown === "risks" && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <ul className="grid grid-cols-4 gap-4">
                    {risks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeDropdown === "government" && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <ul className="grid grid-cols-4 gap-4">
                    {government.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeDropdown === "useful" && (
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <ul className="grid grid-cols-4 gap-4">
                    {useful.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {aLaUne.sections.map((section) => (
              <div
                key={section.title}
                className="border-t border-gray-200 my-2 pt-2 first:border-t-0 first:pt-0"
              >
                <p className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  {section.title}
                </p>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-gray-200 my-2 pt-2">
              <p className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide">
                {isFrench ? "Politiques prioritaires" : "Priority policies"}
              </p>
              {policies.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 my-2 pt-2">
              <p className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wide">
                {isFrench ? "Le Gouvernement" : "The Government"}
              </p>
              {government.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
