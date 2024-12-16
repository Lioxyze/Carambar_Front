"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Blague } from "../Utils/types";
import { fetchAllBlagues } from "../Services/Blague";

export default function Home() {
  const [blagues, setBlagues] = useState<Blague[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [randomBlague, setRandomBlague] = useState<Blague | null>(null);

  // Fonction pour récupérer toutes les blagues
  const handleFetchAllBlagues = async () => {
    setLoading(true);
    try {
      const fetchedBlagues = await fetchAllBlagues(); // Appel de la fonction de l'API
      setBlagues(fetchedBlagues);
    } catch (error) {
      console.error("Error fetching blagues:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour récupérer une blague aléatoire
  const handleFetchRandomBlague = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/random-blague"); // End-point API pour récupérer une blague aléatoire
      const fetchedRandomBlague = await response.json();
      setRandomBlague(fetchedRandomBlague);
    } catch (error) {
      console.error("Error fetching random blague:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-200">
      <Head>
        <title>Carambar Landing Page</title>
        <meta name="description" content="Malabar - La page officielle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/malabar-background.png"
          alt="Fond Malabar"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="opacity-20"
        />
      </div>

      {/* Contenu principal */}
      <main className="relative z-10 text-center w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        {/* Logo Malabar */}
        <div className="mb-6">
          <Image
            src="/malabar-logo.png"
            alt="Logo Malabar"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* Titre */}
        <h1 className="text-4xl font-bold text-pink-700 mb-6">
          Bienvenue sur la page Carambar !
        </h1>

        {/* Bouton pour récupérer les blagues */}
        <button
          onClick={handleFetchAllBlagues} // Appel de la fonction dans l'événement onClick
          className="px-6 py-3 bg-pink-600 text-white rounded-full text-lg hover:bg-pink-700 transition mb-6"
        >
          Obtenir toutes les blagues
        </button>

        {/* Bouton pour récupérer une blague aléatoire */}
        <button
          onClick={handleFetchRandomBlague} // Appel de la fonction pour la blague aléatoire
          className="px-6 py-3 bg-pink-600 text-white rounded-full text-lg hover:bg-pink-700 transition mb-6"
        >
          Obtenir une blague aléatoire
        </button>

        {/* Affichage des blagues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-xl text-gray-500">Chargement...</p>
          ) : (
            <>
              {randomBlague && (
                <div className="bg-pink-100 p-4 rounded-lg shadow-md mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-pink-700">
                    {randomBlague.blagues}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {randomBlague.reponse}
                  </p>
                </div>
              )}
              {blagues.map((blague) => (
                <div
                  key={blague.id}
                  className="bg-pink-100 p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-2 text-pink-400">
                    {blague.blagues}
                  </h2>
                  <p className="text-lg text-gray-600">{blague.reponse}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
