import Header from "@/app/components/Header";
import "./globals.css";

export const metadata = {
  title: "Giorgi Kalatozi | Developer",
  description: "Giorgi Kalatozishvili Developer Porfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-black  via-blue-950  to-black text-white ">
        <Header />
        {children}
      </body>
    </html>
  );
}
