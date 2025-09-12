// app/components/EventCard.tsx
"use client";

import {
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Event } from "../data/eventsData";

interface EventCardProps {
  event: Event;
  index: number;
  isPast: boolean;
}

export function EventCard({ event, index, isPast }: EventCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${5 + index * 1}%`, `${5 + index * 1}%`]
  );

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer w-full max-w-sm mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 ${
        isPast ? "opacity-70" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Badge "Terminé" pour les événements passés */}
      {isPast && (
        <div className="absolute top-3 right-3 bg-red-900/90 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider z-10 backdrop-blur-sm">
          Terminé
        </div>
      )}

      {/* Image Instagram Style */}
      <div
        className={`relative w-full h-96 overflow-hidden ${
          isPast ? "grayscale" : ""
        }`}
      >
        <motion.div className="absolute inset-0" style={{ y, scale: 1.05 }}>
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center"
            priority={index === 0 && !isPast}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Titre sur l'image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold drop-shadow-lg leading-tight">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Contenu Instagram Style */}
      <div className="p-4 space-y-3">
        {/* Date et heure */}
        <div className="flex items-center text-gray-400 text-sm">
          <CalendarDaysIcon className="h-4 w-4 mr-2 text-white" />
          <span className="font-medium">{event.date}</span>
          <span className="mx-2">•</span>
          <span>{event.time}</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* Bouton d'action */}
        {event.buttonText && event.buttonLink && (
          <Link
            href={isPast ? "#" : event.buttonLink}
            className={`block w-full text-center px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              isPast
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-500 text-white hover:scale-105"
            }`}
            aria-disabled={isPast}
            onClick={(e) => isPast && e.preventDefault()}
          >
            {event.buttonText}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
