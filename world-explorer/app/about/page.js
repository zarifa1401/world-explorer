export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-5xl font-black text-center">
        About World Explorer
      </h1>

      <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-xl space-y-6">
        <p>
          World Explorer is a modern Next.js project that allows users
          to explore countries around the world using real API data.
        </p>

        <p>
          This project practices App Router, file-based routing,
          layouts, server components, client components,
          caching, dynamic rendering, and API fetching.
        </p>

        <p>
          The project uses the REST Countries API.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Technologies Used
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>REST Countries API</li>
            <li>Lucide React Icons</li>
            <li>next-themes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}