export interface EditorialItem {
  title: string;
  titleEn: string;
  href: string;
}

export const editorialPicks: EditorialItem[] = [
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
