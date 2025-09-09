"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // On affiche si aucune décision n'a été prise
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDecision = (consent: "accepted" | "rejected") => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("cookie_consent", consent);
    }, 500);
  };

  if (!isVisible) {
    return null;
  }

  const animationClass = isExiting ? "animate-slide-out" : "animate-slide-in";

  return (
    // 👇 LA MODIFICATION EST ICI: sm:left-6 est devenu sm:right-6 et on ajoute sm:left-auto
    <div
      className={`fixed bottom-0 left-0 right-0 sm:left-auto sm:bottom-6 sm:right-6 z-[100] w-full sm:w-auto sm:max-w-md ${animationClass}`}
    >
      <div className="bg-gray-900/70 backdrop-blur-xl rounded-t-xl sm:rounded-xl shadow-2xl border border-indigo-500/20 overflow-hidden">
        <div className="p-6 flex items-center gap-5">
          {/* 1. Colonne des icônes (avec filtre pour les rendre blanches) */}
          <div className="flex-shrink-0 flex flex-col gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1047/1047813.png"
              alt="Icône de cookie"
              className="w-12 h-12 filter grayscale brightness-200 invert"
            />
          </div>

          <div className="flex-grow">
            <h3 className="font-bold text-white text-lg">Cookies !</h3>
            <p className="text-gray-300 text-sm mt-1">
              Ce site utilise des cookies pour améliorer votre expérience. C'est
              promis, ils sont aussi bons que nos cocktails !
            </p>
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => handleDecision("rejected")}
                className="bg-gray-700/50 hover:bg-gray-700 text-gray-200 font-semibold py-2 px-4 rounded-md transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
              >
                Refuser
              </button>
              <button
                onClick={() => handleDecision("accepted")}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg hover:shadow-indigo-500/50 w-full"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-out {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
        .animate-slide-out {
          animation: slide-out 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
