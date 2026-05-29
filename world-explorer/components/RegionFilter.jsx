"use client";

export default function RegionFilter({ selected, onChange }) {
  const regions = [
    "All",
    "Africa",
    "Asia",
    "Europe",
    "Americas",
    "Oceania",
  ];

  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 rounded-xl border dark:bg-slate-900"
    >
      {regions.map((region) => (
        <option key={region}>{region}</option>
      ))}
    </select>
  );
}