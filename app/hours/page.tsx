"use client";

import { useOpeningHours } from "../hooks/useOpeningHours";

export default function HoursPage() {
  const { status, todayIndex, hoursData, formatTime } = useOpeningHours();

  return (
    <div className="bg-black text-white relative -z-10">
      {/* Background Image fixe */}
      <div 
        className="fixed  inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bar-1.jpg')",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" />
      
      {/* Content centré */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-4xl text-center">
          {/* Status */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div
                className={`w-3 h-3 rounded-full mr-3 ${
                  status.isOpen 
                    ? status.message === "Ferme bientôt" 
                      ? "bg-orange-400" 
                      : "bg-green-400"
                    : "bg-red-500"
                }`}
              />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                {status.message}
              </h2>
            </div>

            {status.nextInfo && (
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-6 sm:mb-8 px-4">
                {status.nextInfo}
              </p>
            )}
          </div>

          {/* Tableau des horaires */}
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto ">
            <div className="space-y-1 sm:space-y-2">
              {hoursData.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6 w-full rounded-lg ${
                    index === todayIndex 
                      ? "text-green-400 font-semibold " 
                      : "text-white font-semibold "
                  }`}
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold">
                    {item.day}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-right">
                    {item.open === null
                      ? "Fermé"
                      : `${formatTime(item.open)} - ${formatTime(item.close)}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}