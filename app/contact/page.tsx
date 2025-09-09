"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    setTimeout(() => {
      setStatus("Votre message a bien été envoyé !");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(""), 5000);
    }, 2000);
  };

  return (
    <div className="bg-black text-white pt-24">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Titre de la page */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold">
            Nous <span className="text-indigo-400">Contacter</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Une question, une réservation de groupe ou une envie de privatiser ?
            N'hésitez pas à nous écrire.
          </p>
        </div>

        {/* Grille responsive : Info à gauche, formulaire à droite */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Section Formulaire */}
          <div className="w-full md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Envoyer le Message
                </button>
                {status && <p className="text-sm text-gray-400">{status}</p>}
              </div>
            </form>
          </div>

          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800 shadow-xl h-full flex flex-col">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Retrouvez-nous
              </h2>
              <ul className="space-y-6">
                {/* Item 1: Adresse */}
                <li className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-indigo-600/10 p-3 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Notre Bar</h3>
                    <p className="text-gray-400 mt-1">
                    15 Place Saint Jean, Valence<br />
                    Rhone-Alpes, France 26000
                    </p>
                  </div>
                </li>

                {/* Item 2: Email */}
                <li className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-indigo-600/10 p-3 rounded-full">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Email</h3>
                    <a
                      href="mailto:contact@alegria-bar.ch"
                      className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 border-b border-dotted border-gray-600 hover:border-indigo-400"
                    >
                      contact@alegria-bar.ch
                    </a>
                  </div>
                </li>

                {/* Item 3: Téléphone */}
                <li className="flex items-start gap-5">
                  <div className="flex-shrink-0 bg-indigo-600/10 p-3 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Téléphone</h3>
                    <a
                      href="tel:+41213456789"
                      className="text-gray-400 hover:text-indigo-300 transition-colors duration-300 border-b border-dotted border-gray-600 hover:border-indigo-400"
                    >
                      021 345 67 89
                    </a>
                  </div>
                </li>

                {/* Les items pour les réseaux sociaux ont été retirés de cette liste */}
              </ul>
            </div>

            <div className="mt-auto pt-8">
              <div className="border-t border-gray-800 pt-6 flex items-center justify-center gap-6">
                <a
                  href="https://instagram.com/alegria.bar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Instagram"
                  className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://facebook.com/alegriabar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suivez-nous sur Facebook"
                  className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaFacebookF size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
