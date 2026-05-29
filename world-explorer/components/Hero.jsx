import Link from "next/link";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white p-10 md:p-20 text-center shadow-2xl">
      <h1 className="text-5xl md:text-7xl font-black mb-6">
        Explore the World
      </h1>

      <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10">
        Discover countries, cultures, populations, languages, currencies,
        and much more.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/countries"
          className="bg-white text-violet-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Explore Countries
        </Link>

        <Link
          href="/search"
          className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-violet-700 transition"
        >
          Search Countries
        </Link>
      </div>
    </section>
  );
}