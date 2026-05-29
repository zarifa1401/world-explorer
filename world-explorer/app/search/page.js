import CountrySearch from "@/components/CountrySearch";

export default function SearchPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black mb-4">
          Search Countries
        </h1>

        <p className="text-slate-500 text-lg">
          Find countries instantly.
        </p>
      </div>

      <CountrySearch />
    </div>
  );
}