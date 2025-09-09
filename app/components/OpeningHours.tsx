// app/components/OpeningHours.tsx
"use client";

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

      {/* Liste compacte des horaires */}
      <div className="w-full max-w-sm space-y-1">
        {hoursData.map((item, index) => (
          <div
            key={item.day}
            className={`flex justify-between items-center py-2 px-4 rounded-md transition-colors duration-200 ${
              index === todayIndex 
                ? "border-gray-500 border" 
                : "hover:bg-gray-500/50"
            }`}
          >
            <span
              className={`text-sm font-medium ${
                index === todayIndex ? "text-white" : "text-gray-300"
              }`}
            >
              {item.day}
            </span>
            <span
              className={`text-sm ${
                index === todayIndex ? "text-white" : "text-gray-300"
              }`}
            >
              {item.open === null
                ? "Fermé"
                : `${formatTime(item.open)} - ${formatTime(item.close)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
