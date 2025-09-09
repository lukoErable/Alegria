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
    setTodayIndex(currentDayIndex);
    const yesterdayIndex = (currentDayIndex - 1 + 7) % 7;
    const today = hoursData[currentDayIndex];
    const yesterday = hoursData[yesterdayIndex];
    let currentlyOpen = false;
    
    if (
      yesterday.open !== null &&
      yesterday.close !== null &&
      yesterday.close < yesterday.open &&
      currentHour < yesterday.close
    ) {
      currentlyOpen = true;
    } else if (today.open !== null && today.close !== null) {
      if (today.close > today.open) {
        if (currentHour >= today.open && currentHour < today.close) {
          currentlyOpen = true;
        }
      } else {
        if (currentHour >= today.open) {
          currentlyOpen = true;
        }
      }
    }
    
    if (currentlyOpen) {
      const closingHour =
        today.open !== null && currentHour >= today.open
          ? today.close
          : yesterday.close;
      if (
        closingHour !== null &&
        (closingHour - currentHour === 1 ||
          (closingHour < currentHour &&
            closingHour === 1 &&
            currentHour === 23))
      ) {
        setStatus({ isOpen: true, message: "Ferme bientôt" });
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
