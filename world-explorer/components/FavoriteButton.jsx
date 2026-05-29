"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FavoriteButton({ country }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const isFavorite = favorites.some((item) => item.cca3 === country.cca3);

  const toggleFavorite = () => {
    let updated;

    if (isFavorite) {
      updated = favorites.filter((item) => item.cca3 !== country.cca3);
    } else {
      updated = [...favorites, country];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleFavorite}
      className="absolute top-4 right-4"
    >
      <Heart
        className={`${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`}
      />
    </button>
  );
}