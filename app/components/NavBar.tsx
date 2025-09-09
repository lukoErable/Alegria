// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// On définit les liens de navigation dans un tableau pour un code plus propre
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "La Carte" },
  { href: "/events", label: "Événements" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile
  const pathname = usePathname();

  // Effet pour gérer le fond de la navbar au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile quand le chemin change (l'utilisateur a navigué)
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`transition-colors duration-300 ${
          isScrolled || isMenuOpen // Le fond est sombre aussi si le menu est ouvert
            ? "bg-black/50 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className=" container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white uppercase tracking-wider"
          >
          <Image className="rounded-full" src="/images/logo.png" alt="Alegria" width={100} height={100} />
          </Link>

          {/* Navigation pour Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors duration-300 py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Bouton Burger pour Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {isMenuOpen ? (
                // Icône de fermeture (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                // Icône Burger
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu déroulant pour Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-transparent pb-4">
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}