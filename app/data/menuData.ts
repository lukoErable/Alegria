// app/data/menuData.ts
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  type: 'drinks' | 'food';
}

export const menuData: MenuCategory[] = [
  {
    title: "Cocktails Signature",
    type: "drinks",
    items: [
      {
        name: "Le Jardin Secret",
        description:
          "Gin infusé au basilic, jus de citron vert, sirop de sureau, concombre",
        price: "15€",
      },
      {
        name: "Sunset Boulevard",
        description:
          "Tequila Reposado, Aperol, jus de pamplemousse rose, sirop d'agave",
        price: "16€",
      },
      {
        name: "L'Ambre Noir",
        description:
          "Rhum ambré, liqueur de café, touche de vanille, expresso frais",
        price: "14€",
      },
    ],
  },
  {
    title: "Cocktails Classiques",
    type: "drinks",
    items: [
      {
        name: "Mojito Classique",
        description: "Rhum, menthe fraîche, citron vert, sucre, Perrier",
        price: "12€",
      },
      {
        name: "Cosmopolitan",
        description: "Vodka, Cointreau, jus de cranberry, citron vert",
        price: "13€",
      },
      {
        name: "Old Fashioned",
        description: "Whisky, Angostura, sucre, zeste d'orange",
        price: "14€",
      },
      {
        name: "Margarita",
        description: "Tequila, Cointreau, jus de citron vert frais, sel",
        price: "13€",
      },
      {
        name: "Espresso Martini",
        description: "Vodka, liqueur de café, expresso frais",
        price: "14€",
      },
      {
        name: "Aperol Spritz",
        description: "Aperol, Prosecco, eau gazeuse, tranche d'orange",
        price: "11€",
      },
    ],
  },
  {
    title: "Cocktails Sans Alcool",
    type: "drinks",
    items: [
      {
        name: "Virgin Mojito",
        description: "Menthe fraîche, citron vert, sucre, limonade",
        price: "9€",
      },
      {
        name: "Sunset Cooler",
        description: "Jus d'orange, ananas, grenadine, ginger ale",
        price: "10€",
      },
      {
        name: "Berry Fizz",
        description: "Purée de fruits rouges, jus de citron, eau pétillante",
        price: "9€",
      },
    ],
  },
  {
    title: "Bières",
    type: "drinks",
    items: [
      { name: "Bière Blonde (25/50cl)", price: "4/7€" },
      { name: "Bière IPA (25/50cl)", price: "5/8€" },
      { name: "Heineken (33cl)", price: "6€" },
      {
        name: "Corona (35.5cl)",
        description: "Servie avec son quartier de citron vert",
        price: "7€",
      },
      {
        name: "Chouffe (33cl)",
        description: "Bière blonde belge forte et épicée",
        price: "8€",
      },
    ],
  },
  {
    title: "Vins au Verre",
    type: "drinks",
    items: [
      {
        name: "Pinot Noir (Rouge)",
        description: "Fruité et léger",
        price: "8€",
      },
      {
        name: "Chardonnay (Blanc)",
        description: "Rond et aromatique",
        price: "7€",
      },
      {
        name: "Rosé de Provence",
        description: "Frais et délicat",
        price: "7€",
      },
    ],
  },
  {
    title: "Planches à Partager",
    type: "food",
    items: [
      {
        name: "Planche de Fromages",
        description: "Sélection de fromages affinés, confiture de figues",
        price: "22€",
      },
      {
        name: "Planche de Charcuterie",
        description: "Assortiment de charcuteries fines italiennes et locales",
        price: "24€",
      },
      {
        name: "Planche Mixte",
        description: "Le meilleur des deux mondes",
        price: "26€",
      },
    ],
  },
  {
    title: "Softs & Boissons Chaudes",
    type: "drinks",
    items: [
      { name: "Coca-Cola / Zéro (33cl)", price: "4.5€" },
      {
        name: "Jus de fruits artisanaux (25cl)",
        description: "Orange, Pomme, Ananas",
        price: "5€",
      },
      { name: "Thé glacé maison (33cl)", price: "5€" },
      { name: "Evian / San Pellegrino (50cl)", price: "4€" },
      { name: "Café Expresso", price: "3€" },
      { name: "Thé / Infusion", price: "4€" },
    ],
  },
];
