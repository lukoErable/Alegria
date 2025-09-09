// app/events/page.tsx
import { EventCard } from "../components/EventCard";
import { eventsData } from "../data/eventsData";

export const metadata = {
  title: "Événements - Alegria Bar",
  description:
    "Découvrez les événements à venir et passés à l'Alegria Bar à Lausanne.",
};

export default function EventsPage() {
  const now = new Date();
  // On met l'heure à 0 pour comparer uniquement les jours
  now.setHours(0, 0, 0, 0);

  // 1. Séparer les événements à venir et passés
  const upcomingEvents = eventsData
    .filter((event) => new Date(event.isoDate) >= now)
    .sort(
      (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
    );

  const pastEvents = eventsData
    .filter((event) => new Date(event.isoDate) < now)
    .sort(
      (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 sm:py-16 ">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight mt-20">
          Nos Événements
        </h1>

        {/* Grille Instagram Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isPast={false}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-xl py-12">
              Aucun événement à venir pour le moment. Revenez bientôt !
            </div>
          )}

          {/* Séparateur et affichage des événements passés */}
          {pastEvents.length > 0 && (
            <div className="col-span-full relative text-center my-12">
              <hr className="border-gray-800" />
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 px-6 text-xl font-bold text-gray-500 uppercase tracking-widest">
                Événements Passés
              </h2>
            </div>
          )}

          {pastEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              isPast={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
