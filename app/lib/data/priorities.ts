import { LucideIcon } from "lucide-react";
import { Briefcase, Users, Leaf, Shield } from "lucide-react";

export interface PriorityTheme {
  icon: LucideIcon;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  href: string;
}

export const priorityThemes: PriorityTheme[] = [
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
