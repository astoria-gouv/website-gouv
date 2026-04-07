import { LucideIcon } from "lucide-react";
import { Users, Mail, Building, Scale } from "lucide-react";

export interface Institution {
  icon: LucideIcon;
  title: string;
  titleEn: string;
  href: string;
}

export const institutions: Institution[] = [
  {
    icon: Users,
    title: "Le Président",
    titleEn: "The President",
    href: "/government/president",
  },
  {
    icon: Users,
    title: "Actualités",
    titleEn: "News",
    href: "/news",
  },
  {
    icon: Mail,
    title: "Écrire au Président",
    titleEn: "Write to the President",
    href: "/government/president/contact",
  },
  {
    icon: Building,
    title: "Services du Président",
    titleEn: "Services of the President",
    href: "/government/president/services",
  },
  {
    icon: Scale,
    title: "À propos du Gouvernement",
    titleEn: "About the Government",
    href: "/government",
  },
  {
    icon: Users,
    title: "Conseil des ministros",
    titleEn: "Council of Ministers",
    href: "/government/council",
  },
];
