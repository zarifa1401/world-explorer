"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton({
  country,
}) {
  const [favorites, setFavorites] =
    useState(() => {
      if (typeof window !== "undefined") {
        return (
          JSON.parse(
            localStorage.getItem("favoriteCountries")
          ) || []
        );
      }
      return [];
    });

  const isFavorite =
    favorites.some(
      (item) => item.cca3 === country.cca3
    );

  function toggleFavorite() {
    let updated;

    if (isFavorite) {
      updated = favorites.filter(
        (item) =>
          item.cca3 !== country.cca3
      );
    } else {
      updated = [...favorites, country];
    }

    setFavorites(updated);

    localStorage.setItem(
      "favoriteCountries",
      JSON.stringify(updated)
    );
  }

  return (
    <button
      onClick={toggleFavorite}
      className="text-2xl"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}