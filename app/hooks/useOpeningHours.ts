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
  const [status, setStatus] = useState({ isOpen: false, message: "", nextInfo: "" });
  const [todayIndex, setTodayIndex] = useState(0);

  useEffect(() => {
    const now = new Date();
    const currentDayIndex = now.getDay();
    const currentHour = now.getHours();
    
    let actualDayIndex = currentDayIndex;
    if (currentHour >= 0 && currentHour < 2) {
      actualDayIndex = (currentDayIndex - 1 + 7) % 7;
    }
    
    setTodayIndex(actualDayIndex);
    const today = hoursData[actualDayIndex];
    let currentlyOpen = false;
    
    if (today.open !== null && today.close !== null) {
      if (today.close > today.open) {
        if (currentHour >= today.open && currentHour < today.close) {
          currentlyOpen = true;
        }
      } else {
        if (currentHour >= today.open || currentHour < today.close) {
          currentlyOpen = true;
        }
      }
    }
    
    if (currentlyOpen) {
      const closingHour = today.close;
      if (closingHour !== null) {
        const closingTime = formatTime(closingHour);
        if (today.close > today.open) {
          if (closingHour - currentHour === 1) {
            setStatus({ 
              isOpen: true, 
              message: "Ferme bientôt", 
              nextInfo: `Fermeture à ${closingTime}` 
            });
          } else {
            setStatus({ 
              isOpen: true, 
              message: "Ouvert Actuellement", 
              nextInfo: `Fermeture à ${closingTime}` 
            });
          }
        } else {
          if (currentHour >= today.open && closingHour - currentHour === 1) {
            setStatus({ 
              isOpen: true, 
              message: "Ferme bientôt", 
              nextInfo: `Fermeture à ${closingTime}` 
            });
          } else if (currentHour < today.close && currentHour === today.close - 1) {
            setStatus({ 
              isOpen: true, 
              message: "Ferme bientôt", 
              nextInfo: `Fermeture à ${closingTime}` 
            });
          } else {
            setStatus({ 
              isOpen: true, 
              message: "Ouvert Actuellement", 
              nextInfo: `Fermeture à ${closingTime}` 
            });
          }
        }
      } else {
        setStatus({ 
          isOpen: true, 
          message: "Ouvert Actuellement", 
          nextInfo: "" 
        });
      }
    } else {
      let nextOpenDay = null;
      let nextOpenTime = null;
      
      for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (actualDayIndex + i) % 7;
        const nextDay = hoursData[nextDayIndex];
        
        if (nextDay.open !== null) {
          nextOpenDay = nextDay.day;
          nextOpenTime = formatTime(nextDay.open);
          break;
        }
      }
      
      if (nextOpenDay && nextOpenTime) {
        setStatus({ 
          isOpen: false, 
          message: "Fermé Actuellement", 
          nextInfo: `Réouverture ${nextOpenDay} à ${nextOpenTime}` 
        });
      } else {
        setStatus({ 
          isOpen: false, 
          message: "Fermé Actuellement", 
          nextInfo: "" 
        });
      }
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
