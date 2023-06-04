import { ThemeProvider } from "@/lib/providers";
import "./globals.css";

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
            "dark:bg-gradient-to-r dark:from-black  dark:via-blue-950  dark:to-black dark:text-white bg-gradient-to-r from-orange-300 to-rose-300 text-black px-7"
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
