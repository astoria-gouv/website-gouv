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
    title: "Le Premier ministre",
    titleEn: "The Prime Minister",
    href: "/government/prime-minister",
  },
  {
    icon: Users,
    title: "Actualités",
    titleEn: "News",
    href: "/news",
  },
  {
    icon: Mail,
    title: "Écrire au Premier ministre",
    titleEn: "Write to the Prime Minister",
    href: "/contact",
  },
  {
    icon: Building,
    title: "Services du Premier ministre",
    titleEn: "Services of the Prime Minister",
    href: "/government/services",
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
