import { ThemeProvider } from "@/lib/providers";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "Giorgi Kalatozi | Developer",
  description: "Giorgi Kalatozishvili's Developer Porfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={
            "bg-gradient-to-r from-black  via-blue-950  to-black text-white dark:bg-gradient-to-r dark:from-orange-300 dark:to-rose-300 dark:text-black"
            // "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
            // "bg-gradient-to-r from-orange-300 to-rose-300 text-black"
            // "bg-gradient-to-r from-gray-100 to-gray-300"
          }
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
