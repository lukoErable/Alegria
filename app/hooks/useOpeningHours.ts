import { useEffect, useState } from "react";

// Données d'horaires centralisées
const hoursData = [
  { day: "Dimanche", open: 18, close: 2 },
  { day: "Lundi", open: 17, close: 2 },
  { day: "Mardi", open: 17, close: 2 },
  { day: "Mercredi", open: 17, close: 2 },
  { day: "Jeudi", open: 17, close: 2 },
  { day: "Vendredi", open: 17, close: 2 },
  { day: "Samedi", open: 10, close: 2 },
];

export function useOpeningHours() {
  const [status, setStatus] = useState({ isOpen: false, message: "" });
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    const now = new Date();
    const currentDayIndex = now.getDay();
    const currentHour = now.getHours();
    
    // Déterminer le jour d'ouverture actuel
    // Si on est après minuit (0-2h), on considère qu'on est encore dans la journée précédente
    let actualDayIndex = currentDayIndex;
    if (currentHour >= 0 && currentHour < 2) {
      actualDayIndex = (currentDayIndex - 1 + 7) % 7;
    }
    
    setTodayIndex(actualDayIndex);
    const today = hoursData[actualDayIndex];
    let currentlyOpen = false;
    
    if (today.open !== null && today.close !== null) {
      if (today.close > today.open) {
        // Horaires normaux (ex: 10h-18h)
        if (currentHour >= today.open && currentHour < today.close) {
          currentlyOpen = true;
        }
      } else {
        // Horaires qui passent minuit (ex: 17h-2h)
        if (currentHour >= today.open || currentHour < today.close) {
          currentlyOpen = true;
        }
      }
    }
    
    if (currentlyOpen) {
      const closingHour = today.close;
      if (closingHour !== null) {
        if (today.close > today.open) {
          // Horaires normaux
          if (closingHour - currentHour === 1) {
            setStatus({ isOpen: true, message: "Ferme bientôt" });
          } else {
            setStatus({ isOpen: true, message: "Ouvert Actuellement" });
          }
        } else {
          // Horaires qui passent minuit
          if (currentHour >= today.open && closingHour - currentHour === 1) {
            setStatus({ isOpen: true, message: "Ferme bientôt" });
          } else if (currentHour < today.close && currentHour === today.close - 1) {
            setStatus({ isOpen: true, message: "Ferme bientôt" });
          } else {
            setStatus({ isOpen: true, message: "Ouvert Actuellement" });
          }
        }
      } else {
        setStatus({ isOpen: true, message: "Ouvert Actuellement" });
      }
    } else {
      setStatus({ isOpen: false, message: "Fermé Actuellement" });
    }
  }, []);

  const formatTime = (hour: number | null) => {
    if (hour === null) return "Fermé Actuellement";
    if (hour === 24) return "00h";
    return `${hour}h`;
  };

  return {
    status,
    todayIndex,
    hoursData,
    formatTime,
  };
}
