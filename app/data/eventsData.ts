// app/data/eventsData.ts

export interface Event {
  id: string;
  title: string;
  isoDate: string; // AJOUT : Date au format YYYY-MM-DD pour le tri
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

export const eventsData: Event[] = [
  // --- ÉVÉNEMENTS FUTURS ---
  {
    id: "anniversaire-alegria",
    title: "🎉 1er Anniversaire d'Alegria !",
    isoDate: "2025-09-6",
    date: "Vendredi 6 septembre 2025",
    time: "15h00 - 00h00",
    location: "Alegria Bar, Valence",
    description:
      "Célébrez avec nous le premier anniversaire d'Alegria ! Soirée exceptionnelle avec DJ, cocktails, planches. Un an déjà de bonheur partagé !",
    imageUrl: "/images/event-1.jpg",
    buttonText: "Fêter avec nous !",
    buttonLink: "/contact",
  },
  {
    id: "marche-exceptionnel",
    title: "🏪 Jour de Marché Exceptionnel",
    isoDate: "2025-09-20",
    date: "Samedi 20 septembre 2025",
    time: "10h00 - 18h00",
    location: "Alegria Bar, Lausanne",
    description:
      "Découvrez le marché spécial avec des producteurs locaux ! Mets d'exception, breuvages artisanaux, fromages affinés et spécialités régionales. Une journée unique pour savourer les meilleurs produits de la région.",
    imageUrl: "/images/event-2.jpg",
    buttonText: "Découvrir le marché",
    buttonLink: "/contact",
  },
  {
    id: "rld-run-club",
    title: "🏃‍♂️ RLD Run Club x New Balance",
    isoDate: "2025-09-08",
    date: "Lundi 8 septembre 2025",
    time: "18h45",
    location: "Alegria Bar, Lausanne",
    description:
      "RLD Run Club, c'est la rentrée ! Fusion avec New Balance pour un feu d'artifice. Social run limité à 100 personnes. Inscription via Strava uniquement. Testing de la New Balance Rebel V5. Nombreuses surprises et cadeaux pour les participants !",
    imageUrl: "/images/event-3.jpg",
    buttonText: "S'inscrire sur Strava",
    buttonLink: "/contact",
  }
];
