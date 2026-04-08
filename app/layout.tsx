import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taramtech",
  description:
    "Startup spécialisée dans la création de sites web et applications sur mesure au Niger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.className} scroll-smooth`}>
      <body>
        <div className="min-h-screen bg-gray-950 text-gray-100">
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
