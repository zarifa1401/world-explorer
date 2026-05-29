import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-7xl font-black text-violet-600 mb-6">
        404
      </h1>

      <p className="text-2xl mb-8">Country Not Found</p>

      <Link
        href="/countries"
        className="bg-violet-600 text-white px-8 py-4 rounded-2xl"
      >
        Back to Countries
      </Link>
    </div>
  );
}