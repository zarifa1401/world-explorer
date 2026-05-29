"use client";

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }

    fetchCountries();
  }, []);

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-2xl border dark:bg-slate-900 text-lg"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </div>
  );
}