import CountryCard from "@/components/CountryCard";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all",
    {
      cache: "force-cache",
    }
  );

  const countries = await res.json();

  // Make sure countries is an array
  const countriesArray = Array.isArray(countries)
    ? countries
    : [];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black mb-4">
          Explore Countries
        </h1>

        <p className="text-slate-500 text-lg">
          Browse countries from around the world.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {countriesArray
          .sort((a, b) => b.population - a.population)
          .slice(0, 24)
          .map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
            />
          ))}
      </div>
    </div>
  );
}