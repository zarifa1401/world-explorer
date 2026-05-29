"use client";

export default function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-3 rounded-xl border dark:bg-slate-900"
    >
      <option value="az">A-Z</option>
      <option value="za">Z-A</option>
      <option value="high">Population High-Low</option>
      <option value="low">Population Low-High</option>
    </select>
  );