export interface VideoItem {
  title: string;
  titleEn: string;
  type: string;
  href: string;
}

export const videos: VideoItem[] = [
  {
    title: "Drogues : l'addiction s'installe insidieusement",
    titleEn: "Drugs: addiction settles insidiously",
    type: "Video",
    href: "/videos/drugs-addiction",
  },
  {
    title: "5 conseils pour mieux dormir",
    titleEn: "5 tips for better sleep",
    type: "Lecture",
    href: "/videos/sleep-tips",
  },
  {
    title: "Comment sont comptés les votes ?",
    titleEn: "How are votes counted?",
    type: "Lecture",
    href: "/videos/vote-counting",
  },
  {
    title: "Pourquoi votez-vous aux municipales ?",
    titleEn: "Why do you vote in municipal elections?",
    type: "Lecture",
    href: "/videos/why-vote",
  },
  {
    title: "Pilote de chasse",
    titleEn: "Fighter pilot",
    type: "Lecture",
    href: "/videos/fighter-pilot",
  },
];
