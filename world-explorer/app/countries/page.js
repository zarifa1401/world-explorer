import CountryCard from "../../components/CountryCard";

// This page can be statically rendered and cached.

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all",
    {
      cache: "force-cache",
    }
  );

  const countries = await res.json();

  const sortedCountries = countries
    .sort((a, b) =>
      a.name.common.localeCompare(
        b.name.common
      )
    )
    .slice(0, 50);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-4">
        Explore Countries
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Browse countries around the world
        and discover useful information.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {sortedCountries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}

      </div>

    </main>
  );
}