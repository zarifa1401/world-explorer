import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "World Explorer",
  description: "Explore countries around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}