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
      <body
        className={
          "bg-gradient-to-r from-black  via-blue-950  to-black text-white"
          // "bg-gradient-to-r from-orange-300 to-rose-300 text-black"
          // "bg-gradient-to-r from-gray-100 to-gray-300"
        }
      >
        {children}
      </body>
    </html>
  );
}
