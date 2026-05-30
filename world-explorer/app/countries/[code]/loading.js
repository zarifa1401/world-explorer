export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-8">
        Loading Countries...
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-slate-700 rounded-2xl h-80 animate-pulse"
          />
        ))}

      </div>

    </main>
  );
}