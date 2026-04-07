"use client";

import Link from "next/link";
import { useLocale } from "@/context/locale-context";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const footerLinks = {
  fr: {
    actualites: {
      title: "Actualités",
      links: [
        { name: "Toute l'actualité", href: "/fr/news" },
        { name: "Budget", href: "/fr/news/budget" },
        { name: "Santé", href: "/fr/news/health" },
        { name: "Ce qui change", href: "/fr/news/what-changing" },
        { name: "Vos questions, nos réponses", href: "/fr/news/questions-answers" },
        { name: "Vidéos", href: "/fr/videos" },
        { name: "Podcasts", href: "/fr/news/podcasts" },
        { name: "Lettres d'info", href: "/fr/newsletter" },
        { name: "Articles audio", href: "/fr/news/audio-article" },
      ],
    },
    institutions: {
      title: "Gouvernement et institutions",
      links: [
        { name: "Actualités du Président", href: "/fr/government/president/news" },
        { name: "Composition du Gouvernement", href: "/fr/government/composition" },
        { name: "Conseil des ministers", href: "/fr/government/council" },
        { name: "Espace presse", href: "/fr/government/press" },
        { name: "Discours et rapports", href: "/fr/government/speeches" },
        { name: "Écrire au Président", href: "/fr/contact" },
        { name: "Patrimoine", href: "/fr/government/heritage" },
      ],
    },
    services: {
      title: "Services du Président",
      links: [
        { name: "Agenda du Président", href: "/fr/government/president/agenda" },
        { name: "Politiques prioritaires", href: "/fr/priorities" },
        { name: "Plein emploi et réindustrialisation", href: "/fr/priorities/employment" },
        { name: "Progrès et services publics", href: "/fr/priorities/public-services" },
        { name: "Transition écologique", href: "/fr/priorities/ecology" },
        { name: "Ordre républicain", href: "/fr/priorities/republican-order" },
      ],
    },
    dossiers: {
      title: "Grands dossiers",
      links: [
        { name: "Parlons santé mentale !", href: "/fr/health/mental-health" },
        { name: "Toutes et tous égaux", href: "/fr/major-feature/equality-for-all" },
        { name: "La France en grand angle", href: "/fr/major-feature" },
        { name: "France 2030", href: "/fr/france-2030" },
        { name: "France Nation verte", href: "/fr/major-feature/green-nation" },
        { name: "Maisons France services", href: "/fr/services/france-services" },
        { name: "Tous les grands dossiers", href: "/fr/major-feature" },
      ],
    },
    risques: {
      title: "Prévenir les risques",
      links: [
        { name: "Se préparer à une situation d'urgence", href: "/fr/emergency/preparedness" },
        { name: "Risques naturels et technologiques", href: "/fr/emergency/natural-risks" },
        { name: "Risques épidémiques", href: "/fr/emergency/epidemic-risks" },
        { name: "Menace terrorist", href: "/fr/emergency/terrorism" },
        { name: "Menace cyber", href: "/fr/emergency/cyber" },
      ],
    },
    outils: {
      title: "Outils",
      links: [
        { name: "Portail de l'accessibilité", href: "/fr/accessibility" },
        { name: "Marque de l'État", href: "/fr/government/brand" },
        { name: "Devenir partenaire de l'État", href: "/fr/partnership" },
        { name: "Liens utiles et démarches", href: "/fr/useful-links" },
      ],
    },
  },
  en: {
    actualites: {
      title: "News",
      links: [
        { name: "All news", href: "/en/news" },
        { name: "Budget", href: "/en/news/budget" },
        { name: "Health", href: "/en/news/health" },
        { name: "What changes", href: "/en/news/what-changing" },
        { name: "Your questions, our answers", href: "/en/news/questions-answers" },
        { name: "Videos", href: "/en/videos" },
        { name: "Podcasts", href: "/en/news/podcasts" },
        { name: "Newsletters", href: "/en/newsletter" },
        { name: "Audio articles", href: "/en/news/audio-article" },
      ],
    },
    institutions: {
      title: "Government and institutions",
      links: [
        { name: "President's news", href: "/en/government/prime-minister/news" },
        { name: "President's agenda", href: "/en/government/prime-minister/agenda" },
        { name: "Government composition", href: "/en/government/composition" },
        { name: "Council of Ministers", href: "/en/government/council" },
        { name: "Press area", href: "/en/government/press" },
        { name: "Speeches and reports", href: "/en/government/speeches" },
        { name: "Write to the President", href: "/en/contact" },
        { name: "Heritage", href: "/en/government/heritage" },
      ],
    },
    services: {
      title: "President's services",
      links: [
        { name: "President's agenda", href: "/en/government/prime-minister/agenda" },
        { name: "Priority policies", href: "/en/priorities" },
        { name: "Full employment and reindustrialization", href: "/en/priorities/employment" },
        { name: "Progress and public services", href: "/en/priorities/public-services" },
        { name: "Ecological transition", href: "/en/priorities/ecology" },
        { name: "Republican order", href: "/en/priorities/republican-order" },
      ],
    },
    dossiers: {
      title: "Major files",
      links: [
        { name: "Let's talk about mental health!", href: "/en/health/mental-health" },
        { name: "All equal", href: "/en/major-feature/equality-for-all" },
        { name: "France in wide angle", href: "/en/major-feature" },
        { name: "France 2030", href: "/en/france-2030" },
        { name: "Green Nation", href: "/en/major-feature/green-nation" },
        { name: "France Services", href: "/en/services/france-services" },
        { name: "All major files", href: "/en/major-feature" },
      ],
    },
    risques: {
      title: "Preventing risks",
      links: [
        { name: "Preparing for an emergency", href: "/en/emergency/preparedness" },
        { name: "Natural and technological risks", href: "/en/emergency/natural-risks" },
        { name: "Epidemic risks", href: "/en/emergency/epidemic-risks" },
        { name: "Terrorist threat", href: "/en/emergency/terrorism" },
        { name: "Cyber threat", href: "/en/emergency/cyber" },
      ],
    },
    outils: {
      title: "Tools",
      links: [
        { name: "Accessibility portal", href: "/en/accessibility" },
        { name: "State brand", href: "/en/government/brand" },
        { name: "Become a State partner", href: "/en/partnership" },
        { name: "Useful links and procedures", href: "/en/useful-links" },
      ],
    },
  },
};

export function Footer() {
  const locale = useLocale();
  const currentLocale = locale.locale;
  const isFrench = currentLocale === "fr" || currentLocale === "be_fr" || currentLocale === "ch_fr";
  const links = isFrench ? footerLinks.fr : footerLinks.en;

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-sm text-[#003580]">{links.actualites.title}</h3>
            <ul className="space-y-2">
              {links.actualites.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm text-[#003580]">
              {links.institutions.title}
            </h3>
            <ul className="space-y-2">
              {links.institutions.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm text-[#003580]">{links.services.title}</h3>
            <ul className="space-y-2">
              {links.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm text-[#003580]">{links.dossiers.title}</h3>
            <ul className="space-y-2">
              {links.dossiers.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-sm text-[#003580]">{links.risques.title}</h3>
            <ul className="space-y-2">
              {links.risques.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <Link href={`/${currentLocale}`} className="flex items-center gap-3">
              <img
                src="/images/astoria-government-logo-font.png"
                alt={isFrench ? "Gouvernement" : "Government"}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#003580] leading-tight">
                  {isFrench ? "Gouvernement d'Astoria" : "Government of Astoria"}
                </span>
                <span className="text-xs text-gray-500 leading-tight">info.gov.aor</span>
              </div>
            </Link>
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm text-gray-600">
                {isFrench ? "Ce site est géré par le " : "This site is managed by the "}
                <Link
                  href="https://sig.gov.aor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003580] hover:underline"
                >
                  {isFrench
                    ? "Service d'Information du Gouvernement (SIG)"
                    : "Government Information Service (SIG)"}
                </Link>
                .
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-end">
                <Link
                  href="https://legislation.gov.aor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#003580] transition-colors"
                >
                  legislation.gov.aor
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="https://service-public.gov.aor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#003580] transition-colors"
                >
                  service-public.gov.aor
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link
                  href="https://data.gov.aor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#003580] transition-colors"
                >
                  data.gov.aor
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        <div className="pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <Link
                href={`/${currentLocale}/sitemap`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Plan du site" : "Sitemap"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/accessibility`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench
                  ? "Accessibilité : totalement conforme"
                  : "Accessibility: fully compliant"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/legal/terms`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Mentions légales" : "Legal notice"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/legal/privacy`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Données personnelles" : "Personal data"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/legal/cookies`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Gestion des cookies" : "Cookie management"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/notifications`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Notifications" : "Notifications"}
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href={`/${currentLocale}/publications`}
                className="text-sm text-gray-600 hover:text-[#003580] transition-colors"
              >
                {isFrench ? "Publications officielles" : "Official publications"}
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              {isFrench
                ? "Sauf mention contraire, tous les contenus de ce site sont sous licence "
                : "Unless otherwise stated, all content on this site is under license "}
              <Link
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#003580]"
              >
                etalab-2.0
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
