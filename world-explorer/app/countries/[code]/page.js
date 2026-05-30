import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`
  );

  const data = await res.json();

  const country = data[0];

  return {
    title: `${country.name.common} | World Explorer`,
    description: `Learn about ${country.name.common}`,
  };
};

export default async function CountryDetailsPage({
  params,
}) {
  const { code } = params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ")
    : "N/A";

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      {/* Back Button */}

      <Link
        href="/countries"
        className="inline-block mb-8 bg-slate-200 dark:bg-slate-700 px-5 py-2 rounded-lg hover:opacity-80"
      >
        ← Back to Countries
      </Link>

      {/* Main Card */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">

        {/* Flag */}

        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-bold mb-3">
            {country.name.common}
          </h1>

          <p className="text-lg text-gray-500 mb-8">
            {country.name.official}
          </p>

          {/* Details Grid */}

          <div className="grid md:grid-cols-2 gap-6 text-lg">

            <div>
              <strong>Capital:</strong>{" "}
              {country.capital?.[0] || "N/A"}
            </div>

            <div>
              <strong>Region:</strong>{" "}
              {country.region}
            </div>

            <div>
              <strong>Subregion:</strong>{" "}
              {country.subregion || "N/A"}
            </div>

            <div>
              <strong>Population:</strong>{" "}
              {country.population.toLocaleString()}
            </div>

            <div>
              <strong>Languages:</strong>{" "}
              {languages}
            </div>

            <div>
              <strong>Currencies:</strong>{" "}
              {currencies}
            </div>

            <div>
              <strong>Time Zones:</strong>{" "}
              {country.timezones.join(", ")}
            </div>

            <div>
              <strong>Country Code:</strong>{" "}
              {country.cca3}
            </div>

          </div>

          {/* Google Maps */}

          <div className="mt-10">

            <a
              href={country.maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              📍 View on Google Maps
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}