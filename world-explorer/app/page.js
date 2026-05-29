import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">200+ Countries</h2>
          <p>Explore countries from every region of the world.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Real API Data</h2>
          <p>Data is fetched from the REST Countries API.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Modern UI</h2>
          <p>Beautiful responsive design with dark mode support.</p>
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/countries"
          className="bg-violet-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-violet-700 transition"
        >
          Start Exploring
        </Link>
      </div>
    </div>
  );
}