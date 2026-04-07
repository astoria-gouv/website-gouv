"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Menu, X, Search, Settings, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" as const } },
};

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
  fr: {
    primeMinister: {
      title: "Le Président",
      name: "Liam Von Astoria",
      href: "/fr/government/president",
      links: [
        { name: "Actualité du Président", href: "/fr/government/president/news" },
        { name: "Agenda du Président", href: "/fr/government/president/agenda" },
        { name: "Discours et rapports", href: "/fr/government/president/speeches" },
        { name: "Écrire au Président", href: "/fr/government/president/contact" },
      ],
    },
    government: {
      title: "Le Gouvernement",
      links: [
        { name: "Composition du Gouvernement", href: "/fr/government/composition" },
        { name: "Conseil des ministre", href: "/fr/government/composition/council" },
        { name: "Ministères", href: "/fr/government/composition/ministries" },
        { name: "Services du Président", href: "/fr/government/services" },
        { name: "Patrimoine", href: "/fr/government/heritage" },
      ],
    },
  },
  en: {
    primeMinister: {
      title: "The President",
      name: "Liam Von Astoria",
      href: "/en/government/president",
      links: [
        { name: "President's news", href: "/en/government/president/news" },
        { name: "President's agenda", href: "/en/government/president/agenda" },
        { name: "Speeches and reports", href: "/en/government/president/speeches" },
        { name: "Write to the President", href: "/en/government/president/contact" },
      ],
    },
    government: {
      title: "The Government",
      links: [
        { name: "Government composition", href: "/en/government/composition" },
        { name: "Council of Ministers", href: "/en/government/council" },
        { name: "Ministries", href: "/en/government/ministries" },
        { name: "Prime Minister's services", href: "/en/government/services" },
        { name: "Heritage", href: "/en/government/heritage" },
        { name: "Former Prime Ministers", href: "/en/government/former-pm" },
      ],
    },
  },
};

const usefulLinks = {
  fr: {
    title: "Sites officiels à connaître",
    sites: [
      {
        name: "service-public.gov.aor",
        desc: "Pour les formalités administratives",
        href: "https://service-public.gov.aor",
      },
      { name: "impots.gov.aor", desc: "Pour les impôts", href: "https://impots.gov.aor" },
      { name: "ameli.gov.aor", desc: "Pour l'Assurance maladie", href: "https://ameli.gov.aor" },
    ],
    subjects: [
      { name: "Vie quotidienne", href: "/fr/useful-links/daily-life" },
      { name: "Santé", href: "/fr/useful-links/health" },
      { name: "Emploi", href: "/fr/useful-links/employment" },
      { name: "Jeunes", href: "/fr/useful-links/youth" },
      { name: "International", href: "/fr/useful-links/international" },
      { name: "Seniors", href: "/fr/useful-links/seniors" },
    ],
    allSites: { name: "Tous les sites utiles par sujet", href: "/fr/useful-links" },
  },
  en: {
    title: "Official sites to know",
    sites: [
      {
        name: "service-public.gov.aor",
        desc: "For administrative procedures",
        href: "https://service-public.gov.aor",
      },
      { name: "impots.gov.aor", desc: "For taxes", href: "https://impots.gov.aor" },
      { name: "ameli.gov.aor", desc: "For Health Insurance", href: "https://ameli.gov.aor" },
    ],
    subjects: [
      { name: "Daily life", href: "/en/useful-links/daily-life" },
      { name: "Health", href: "/en/useful-links/health" },
      { name: "Employment", href: "/en/useful-links/employment" },
      { name: "Youth", href: "/en/useful-links/youth" },
      { name: "International", href: "/en/useful-links/international" },
      { name: "Seniors", href: "/en/useful-links/seniors" },
    ],
    allSites: { name: "All useful sites by topic", href: "/en/useful-links" },
  },
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
                <span className="text-xs text-gray-500 leading-tight">info.gov.aor</span>
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
                  isFrench ? "Rechercher sur info.gov.aor..." : "Search on info.gov.aor..."
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

            <AnimatePresence>
              {activeDropdown === "alaune" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
                >
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
                </motion.div>
              )}

              {activeDropdown === "policies" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
                >
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
                </motion.div>
              )}

              {activeDropdown === "risks" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
                >
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
                </motion.div>
              )}

              {activeDropdown === "government" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
                >
                  <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-sm text-[#003580] mb-3 border-b border-gray-200 pb-2">
                          {government.primeMinister.title}
                        </h3>
                        <Link
                          href={government.primeMinister.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block text-sm text-gray-700 hover:text-[#003580] transition-colors mb-2"
                        >
                          {government.primeMinister.name}
                        </Link>
                        <ul className="space-y-2">
                          {government.primeMinister.links.map((link) => (
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
                      <div>
                        <h3 className="font-semibold text-sm text-[#003580] mb-3 border-b border-gray-200 pb-2">
                          {government.government.title}
                        </h3>
                        <ul className="space-y-2">
                          {government.government.links.map((link) => (
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
                  </div>
                </motion.div>
              )}

              {activeDropdown === "useful" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-lg z-50"
                >
                  <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-sm text-[#003580] mb-3 border-b border-gray-200 pb-2">
                          {useful.title}
                        </h3>
                        <ul className="space-y-2">
                          {useful.sites.map((site) => (
                            <li key={site.name}>
                              <a
                                href={site.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                                className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                              >
                                <span className="font-medium">{site.name}</span>
                                <span className="block text-xs text-gray-500">{site.desc}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#003580] mb-3 border-b border-gray-200 pb-2">
                          {isFrench ? "Par sujet" : "By topic"}
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {useful.subjects.map((subject) => (
                            <li key={subject.name}>
                              <Link
                                href={subject.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block text-sm text-gray-700 hover:text-[#003580] transition-colors"
                              >
                                {subject.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={useful.allSites.href}
                          onClick={() => setActiveDropdown(null)}
                          className="inline-block text-sm text-[#003580] hover:underline mt-3"
                        >
                          {useful.allSites.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-[#003580]">
                  {government.primeMinister.title}
                </p>
                <Link
                  href={government.primeMinister.href}
                  className="block pl-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {government.primeMinister.name}
                </Link>
                {government.primeMinister.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block pl-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-[#003580]">
                  {government.government.title}
                </p>
                {government.government.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block pl-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
