import { GiLovers } from "react-icons/gi";

const MENU_DATA_BOOKS_CATEGORY = [
  {
    icon: <GiLovers />,
    name: "Carti1 de dragoste",
    href: "books/love-books",
  },
  {
    icon: <GiLovers />,
    name: "Dezvoltare personala",
    href: "books/love-books",
    submenu: [
      { name: "Dezvoltare Personala", href: "carti/dezvoltare-personala" },
      { name: "Fericire", href: "carti/fericire" },
      {
        name: "Meditatie si mindfulness",
        href: "carti/meditatie-si-mindfulness",
      },
      {
        name: "Carti pentru femei",
        href: "/carti/dezvoltare-personala-pentru-femei",
      },
      {
        name: "Incredere in sine",
        href: "/carti/motivationale-despre-increderea-in-sine",
      },
      {
        name: "Comunicare",
        href: "/carti/Comunicare",
      },
      { name: "Relatii si sex", href: "/carti/relatii-si-sex" },
    ],
  },
  {
    icon: <GiLovers />,
    name: "Carti pentru copii",
    href: "carti/pentru-copii",
    submenu: [
      { name: "Carti pentru copii", href: "carti/pentru-copii" },
      { name: "Carti de colorat", href: "carti/de-colorat" },
      {
        name: "Atlase si enciclopedii",
        href: "carti/atlase-si-enciclopedii",
      },
      {
        name: "Carti in limbi strine",
        href: "/carti/limbi-strine",
      },
      {
        name: "Carti Montessori",
        href: "/carti/carti-montessori",
      },
      {
        name: "Benzi desenate",
        href: "/carti/benzi-desenate",
      },
      { name: "Literatura universala", href: "/carti/literatura-universala" },
      { name: "Dictionare", href: "/carti/dictionare" },

      { name: "Literatura romana", href: "/carti/literatura-romana" },
      { name: "Fantasy si SF", href: "/carti/fantasy-si-SF" },
      { name: "Povesti si povestiri", href: "/carti/povesti-si-povestiri" },
      { name: "Carti educative", href: "/carti/carti-educative" },
      { name: "Poezii pentru copii", href: "/carti/poezii-pentru-copii" },
      { name: "Carti bebelusi", href: "/carti/carti-bebelusi" },
      { name: "Carti 3-5 ani", href: "/carti/copii-3-5-ani" },
      { name: "Carti 6-8 ani", href: "/carti/copii-6-8-ani" },
      { name: "Carti 9-12+ ani", href: "/carti/copii-9-12-ani" },
    ],
  },
  {
    icon: <GiLovers />,
    name: "Young Adult",
    href: "books/young-adult",
  },
  {
    icon: <GiLovers />,
    name: "Carti pentru Copii",
    href: "books/love-books",
    submenu: [
      { name: "Dezvoltare Personala", href: "carti/dezvoltare-personala" },
      { name: "Fericire", href: "carti/fericire" },
      {
        name: "Meditatie si mindfulness",
        href: "carti/meditatie-si-mindfulness",
      },
      {
        name: "Carti pentru femei",
        href: "/carti/dezvoltare-personala-pentru-femei",
      },
      {
        name: "Incredere in sine",
        href: "/carti/motivationale-despre-increderea-in-sine",
      },
      {
        name: "Comunicare",
        href: "/carti/Comunicare",
      },
      {
        name: "Incredere in sine",
        href: "/carti/motivationale-despre-increderea-in-sine",
      },
      {
        name: "Comunicare",
        href: "/carti/Comunicare",
      },
    ],
  },
  {
    icon: <GiLovers />,
    name: "Nutritie & Sanatate",
    href: "books/love-books",
  },
  {
    icon: <GiLovers />,
    name: "Carti5 de dragoste",
    href: "books/love-books",
  },
];

const DATA_MENU_SECONDARY = [
  {
    name: "Top carti de dragoste",
    href: "/carti/carti-de-dragoste",
  },
  {
    name: "Top carti dezvoltate personala",
    href: "/carti/dezvoltare-personala",
  },
  {
    name: "Top carti pentru copii",
    href: "/carti/carti-pentru-copiii",
  },
];
const DATA_MENU_SECONDARY2 = [
  {
    name: "Noutati",
    href: "/noutati",
  },
  {
    name: "Ajutor",
    href: "/ajutor",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export { MENU_DATA_BOOKS_CATEGORY, DATA_MENU_SECONDARY, DATA_MENU_SECONDARY2 };
