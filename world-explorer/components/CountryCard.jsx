import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold mb-4">
          {country.name.common}
        </h2>

        <div className="space-y-2 text-sm">

          <p>
            <span className="font-semibold">
              Capital:
            </span>{" "}
            {country.capital?.[0] || "No Capital"}
          </p>

          <p>
            <span className="font-semibold">
              Region:
            </span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-semibold">
              Population:
            </span>{" "}
            {country.population.toLocaleString()}
          </p>

        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="block text-center mt-5 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}