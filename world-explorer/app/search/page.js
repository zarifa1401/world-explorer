import CountrySearch from "../../components/CountrySearch";

export default async function SearchPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all",
    {
      cache: "force-cache",
    }
  );

  const countries = await res.json();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">
        Search Countries
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Search, filter, and sort countries
        around the world.
      </p>

      <CountrySearch countries={countries} />
    </main>
  );
}