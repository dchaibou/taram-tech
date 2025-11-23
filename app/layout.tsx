import "./globals.css"; // Votre fichier Tailwind CSS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google"; // Utilisation d'une police moderne (Inter est recommandée par Next.js)

// Configuration de la police
const inter = Inter({ subsets: ["latin"] });

// Métadonnées (pour le SEO)
export const metadata = {
  title: "Taram Tech | Développement Web & App",
  description:
    "Startup spécialisée dans la création de sites web et applications sur mesure avec Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Application de la police Inter et d'un défilement doux
    <html lang="fr" className={`${inter.className} scroll-smooth`}>
      <body>
        {/* Changement de la couleur de fond pour le style Dark Mode Pro */}
        <div className="min-h-screen bg-gray-950 text-gray-100">
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
