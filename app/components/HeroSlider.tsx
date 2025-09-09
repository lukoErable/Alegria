// app/components/HeroSlider.tsx
"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useOpeningHours } from "../hooks/useOpeningHours";

const slides = [
  {
    image: "/images/bar-8.jpg",
    headline: "Cocktails Signature",
    subheadline: "Créativité et saveurs uniques dans chaque verre.",
  },
  {
    image: "/images/bar-2.jpg",
    headline: "Ambiance Inoubliable",
    subheadline: "Le lieu parfait pour vos soirées.",
  },
  {
    image: "/images/bar-7.jpg",
    headline: "Planches & Grignotages",
    subheadline: "Pour accompagner vos boissons préférées.",
  },
];

export function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const { status } = useOpeningHours();

  // Fonction pour le défilement en douceur
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fonction pour scroll vers les horaires
  const handleScrollToHours = () => {
    const hoursSection = document.querySelector('[data-hours-section]');
    if (hoursSection) {
      hoursSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden h-screen relative" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div className="flex-[0_0_100%] min-w-0 h-full relative" key={index}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
              <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight drop-shadow-lg">
                {slide.headline}
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                {slide.subheadline}
              </p>
              <Link
                href="/menu"
                className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-transform duration-300 hover:scale-105"
              >
                Découvrir la carte
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ===== AJOUT DU CHEVRON DE SCROLL ===== */}
      <button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        aria-label="Faire défiler vers le bas"
      >
        <svg
          className="w-8 h-8 text-white animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* ===== INDICATEUR D'ÉTAT - MOBILE AU CENTRE AU-DESSUS DU CHEVRON, DESKTOP EN BAS À DROITE ===== */}
      <button
        onClick={handleScrollToHours}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:bottom-6 md:transform-none z-20 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-black/80 transition-all duration-300 group"
        aria-label="Voir les horaires d'ouverture"
      >
        <div
          className={`w-3 h-3 rounded-full ${
            status.isOpen 
              ? status.message === "Ferme bientôt" 
                ? "bg-orange-400 animate-pulse" 
                : "bg-green-400 animate-pulse"
              : "bg-red-500"
          }`}
        ></div>
        <span
          className={`text-sm font-medium ${
            status.isOpen 
              ? status.message === "Ferme bientôt" 
                ? "text-orange-400" 
                : "text-green-400"
              : "text-red-400"
          } group-hover:text-white transition-colors duration-300`}
        >
          {status.message}
        </span>
      </button>
    </div>
  );
}
