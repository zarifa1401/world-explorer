import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function CountryCard({ country }) {
  return (
    <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <FavoriteButton country={country} />

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-52 object-cover"
      />

      <div className="p-6 space-y-2">
        <h2 className="text-2xl font-bold">
          {country.name.common}
        </h2>

        <p>
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0] || "No Capital"}
        </p>

        <p>
          <span className="font-semibold">Region:</span>{" "}
          {country.region}
        </p>

        <p>
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-4 bg-violet-600 text-white px-5 py-3 rounded-xl hover:bg-violet-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}