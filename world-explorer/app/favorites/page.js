"use client";

import { useEffect, useState } from "react";
import CountryCard from "@/components/CountryCard";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-black mb-10 text-center">
        Favorite Countries
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-slate-500">
          No favorite countries yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
        </div>
      )}
    </div>
  );
}