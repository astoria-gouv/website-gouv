export interface NewsItem {
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  href: string;
  image?: string;
}

export const newsItems: NewsItem[] = [
  {
    category: "Énergie",
    categoryEn: "Energy",
    title: "Crise énergétique : le point sur les mesures",
    titleEn: "Energy crisis: update on measures",
    href: "/news/energy-crisis",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
  },
  {
    category: "Sécurité intérieure",
    categoryEn: "Internal Security",
    title: "Présentation des mesures renforçant la sécurité du quotidien",
    titleEn: "Presentation of measures strengthening daily security",
    href: "/news/security-measures",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=250&fit=crop",
  },
  {
    category: "Santé publique",
    categoryEn: "Public Health",
    title: "Qu'est-ce que le « One Health Summit » ?",
    titleEn: "What is the 'One Health Summit'?",
    href: "/news/one-health-summit",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
  },
  {
    category: "Vie quotidienne",
    categoryEn: "Daily Life",
    title: "Ce qui change en avril 2026",
    titleEn: "What changes in April 2026",
    href: "/news/april-2026-changes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
];
