import { LucideIcon } from "lucide-react";
import { Users, Zap, Building } from "lucide-react";

export interface Dossier {
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  href: string;
  image?: string;
}

export const dossiers: Dossier[] = [
  {
    icon: Users,
    iconColor: "text-[#0055A4]",
    bgColor: "bg-[#E8F4F8]",
    title: "Toutes et tous égaux",
    titleEn: "All equal",
    description:
      "Découvrez le plan interministériel pour l'égalité femmes-hommes : des mesures pour agir sur le plan professionnel, économique et social.",
    descriptionEn:
      "Discover the interministerial plan for gender equality: measures to act on the professional, economic, and social levels.",
    href: "/dossiers/egalite",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    icon: Zap,
    iconColor: "text-green-600",
    bgColor: "bg-[#E8F8E8]",
    title: "France 2030",
    titleEn: "France 2030",
    description:
      "France 2030 vise à accélérer la transformation des secteurs clés de notre économie par l'innovation et à positionner la France en leader du monde de demain.",
    descriptionEn:
      "France 2030 aims to accelerate the transformation of key sectors of our economy through innovation and position France as a leader of tomorrow's world.",
    href: "/dossiers/france-2030",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    icon: Building,
    iconColor: "text-orange-600",
    bgColor: "bg-[#FFF8E8]",
    title: "La France en grand angle",
    titleEn: "France in wide angle",
    description:
      "Que perçoivent les Français de l'action de l'État, là où ils vivent ? Une démarche d'écoute et de diagnostic sur tout le territoire.",
    descriptionEn:
      "What do the French perceive of State action where they live? A listening and diagnosis approach across the entire territory.",
    href: "/dossiers/france-grand-angle",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
  },
];
