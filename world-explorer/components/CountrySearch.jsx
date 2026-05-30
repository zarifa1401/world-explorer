"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");

  let filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All"
        ? true
        : country.region === region;

    return matchesSearch && matchesRegion;
  });

  filteredCountries.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.common.localeCompare(
          b.name.common
        );

      case "name-desc":
        return b.name.common.localeCompare(
          a.name.common
        );

      case "population-high":
        return b.population - a.population;

      case "population-low":
        return a.population - b.population;

      default:
        return 0;
    }
  });

  return (
    <div>
      {/* Search Input */}

      <input
        type="text"
        placeholder="Search a country..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 mb-6"
      />

      {/* Search Examples */}

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() =>
            setSearch("Afghanistan")
          }
          className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200"
        >
          Afghanistan
        </button>

        <button
          onClick={() => setSearch("Japan")}
          className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200"
        >
          Japan
        </button>

        <button
          onClick={() =>
            setSearch("Germany")
          }
          className="px-4 py-2 rounded-full bg-blue-100 hover:bg-blue-200"
        >
          Germany
        </button>
      </div>

      {/* Filters */}

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          value={region}
          onChange={(e) =>
            setRegion(e.target.value)
          }
          className="p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800"
        >
          <option value="All">All Regions</option>

          <option value="Africa">
            Africa
          </option>

          <option value="Americas">
            Americas
          </option>

          <option value="Asia">
            Asia
          </option>

          <option value="Europe">
            Europe
          </option>

          <option value="Oceania">
            Oceania
          </option>
        </select>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800"
        >
          <option value="name-asc">
            Name A-Z
          </option>

          <option value="name-desc">
            Name Z-A
          </option>

          <option value="population-high">
            Population High → Low
          </option>

          <option value="population-low">
            Population Low → High
          </option>
        </select>
      </div>

      {/* Results Count */}

      <p className="mb-6 text-gray-500">
        Found {filteredCountries.length} countries
      </p>

      {/* Results */}

      {filteredCountries.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.map(
            (country) => (
              <Link
                key={country.cca3}
                href={`/countries/${country.cca3}`}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow hover:shadow-xl transition hover:-translate-y-2">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      {country.name.common}
                    </h3>

                    <p className="mt-2 text-sm">
                      Capital:{" "}
                      {country.capital?.[0] ||
                        "N/A"}
                    </p>

                    <p className="text-sm">
                      Region:{" "}
                      {country.region}
                    </p>

                    <p className="text-sm">
                      Population:{" "}
                      {country.population.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 text-center shadow">
          <h2 className="text-2xl font-bold">
            No Countries Found
          </h2>

          <p className="mt-3 text-gray-500">
            Try another search term.
          </p>
        </div>
      )}
    </div>
  );
}