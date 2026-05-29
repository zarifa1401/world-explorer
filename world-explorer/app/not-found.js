import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-black text-violet-600 mb-6">
        404
      </h1>

      <p className="text-2xl mb-8 dark:text-slate-300">
        Page Not Found
      </p>

      <Link
        href="/"
        className="bg-violet-600 text-white px-8 py-4 rounded-2xl hover:bg-violet-700 transition"
      >
        Back Home
      </Link>
    </div>
  );
}