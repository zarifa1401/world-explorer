import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Country Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        The country you are looking for
        does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>

    </main>
  );
}