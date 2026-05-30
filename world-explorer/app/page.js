import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      <div className="flex justify-center gap-4 mt-8">

  <Link
    href="/countries"
    className="bg-blue-600 text-white px-8 py-4 rounded-xl"
  >
    Explore Countries
  </Link>

  <Link
    href="/search"
    className="border border-blue-600 px-8 py-4 rounded-xl"
  >
    Search Countries
  </Link>

</div>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h1 className="text-6xl font-bold mb-6">
            🌍 World Explorer
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">

            Explore countries around the world and
            learn about their flags, capitals,
            populations, currencies,
            languages, and cultures.

          </p>

          <Link
            href="/countries"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Explore Countries
          </Link>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-3xl font-bold">
              250+
            </h3>
            <p>Countries</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-3xl font-bold">
              5
            </h3>
            <p>Regions</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-3xl font-bold">
              100+
            </h3>
            <p>Languages</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h3 className="text-3xl font-bold">
              24
            </h3>
            <p>Time Zones</p>
          </div>

        </div>

      </section>

      {/* MAP PLACEHOLDER */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Interactive World Map
        </h2>

        <div className="bg-white dark:bg-slate-800 h-[500px] rounded-3xl shadow flex items-center justify-center">

          <p className="text-2xl">
            🌎 World Map Coming Soon
          </p>

        </div>

      </section>

    </main>
  );
}