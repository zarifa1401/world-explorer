import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: "World Explorer",
  description:
    "Explore countries around the world",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 dark:text-white">

        <ThemeProvider>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}