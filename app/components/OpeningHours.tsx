// app/components/OpeningHours.tsx
"use client";

import { motion } from "framer-motion";
import { useOpeningHours } from "../hooks/useOpeningHours";

export function OpeningHours() {
  const { status, todayIndex, hoursData, formatTime } = useOpeningHours();

  // Design sobre et compact
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-6">
      {/* Status compact */}
      <div className="flex items-center mb-12">
        <div
          className={`w-3 h-3 rounded-full mr-3 ${
            status.isOpen ? "bg-green-400" : "bg-red-500"
          }`}
        ></div>
        <p
          className={`text-lg font-medium ${
            status.isOpen ? "text-green-400" : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      </div>

      {/* Liste compacte des horaires avec animation */}
      <div className="w-full max-w-sm space-y-1">
        {hoursData.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              x: 5,
              transition: { duration: 0.2 }
            }}
            className={`flex justify-between items-center py-2 px-4 rounded-md transition-colors duration-200 ${
              index === todayIndex 
                ? "border-gray-500 border shadow-lg shadow-gray-500/20" 
                : ""
            }`}
          >
            <motion.span
              className={`text-sm font-medium ${
                index === todayIndex ? "text-white" : "text-gray-300"
              }`}
              animate={index === todayIndex ? { 
                color: "#ffffff",
                fontWeight: 600
              } : {}}
            >
              {item.day}
            </motion.span>
            <motion.span
              className={`text-sm ${
                index === todayIndex ? "text-white" : "text-gray-300"
              }`}
              animate={index === todayIndex ? { 
                color: "#ffffff"
              } : {}}
            >
              {item.open === null
                ? "Fermé"
                : `${formatTime(item.open)} - ${formatTime(item.close)}`}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
