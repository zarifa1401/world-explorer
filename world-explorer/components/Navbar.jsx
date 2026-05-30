"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  // Remove mounted state and effect

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          🌍 World Explorer
        </Link>

        <div className="flex gap-6 items-center">

          <Link href="/">
            Home
          </Link>

          <Link href="/countries">
            Countries
          </Link>

          <Link href="/search">
            Search
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/favorites">
            Favorites
          </Link>

          {typeof theme === "string" && (
            <button
              onClick={() =>
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              }
              className="px-3 py-2 rounded-lg bg-blue-600 text-white"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}