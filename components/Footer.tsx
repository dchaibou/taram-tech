// components/Footer.tsx
import Link from "next/link";
// Icônes sociales : nous utiliserons les icônes remplies (solid) pour plus de visibilité sur fond sombre
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import {
  XMarkIcon as TwitterIcon, // Renommer pour éviter le conflit
  UserIcon as LinkedInIcon, // Placeholder pour un réseau social
} from "@heroicons/react/24/outline";

// Mise à jour des liens pour pointer vers les pages au lieu des ancres
const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    // Fond plus foncé pour un meilleur contraste avec le contenu des pages (qui est gris/noir)
    <footer className="bg-gray-950 text-white border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Grille de 4 colonnes, s'adaptant à 2 colonnes sur mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {/* Col 1: Marque & Slogan */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-light tracking-wider text-indigo-400 mb-4 inline-block"
            >
              Taram Tech
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Startup innovante spécialisée dans le développement de solutions
              technologiques sur mesure.
            </p>
            <p className="text-indigo-400 text-xs mt-4 italic">
              Ensemble, façonnons l&apos;avenir.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-lg font-bold mb-5 text-white border-b border-indigo-700/50 pb-1">
              Navigation
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm font-light flex items-center group"
                  >
                    {link.name}
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition duration-300">
                      <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h5 className="text-lg font-bold mb-5 text-white border-b border-indigo-700/50 pb-1">
              Contact
            </h5>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                Adresse : Niamey - Niger
              </p>
              <a
                href="mailto:contact@taramtech.com"
                className="text-indigo-400 text-sm hover:text-indigo-300 transition duration-150 flex items-center"
              >
                contact@taramtech.com
              </a>
            </div>
          </div>

          {/* Col 4: Suivez-nous */}
          <div>
            <h5 className="text-lg font-bold mb-5 text-white border-b border-indigo-700/50 pb-1">
              Réseaux
            </h5>
            <div className="flex space-x-4">
              {/* Icônes Sociales (utilisant des placeholders) */}
              <a
                href="#"
                aria-label="Notre page X (Twitter)"
                className="text-gray-400 hover:text-indigo-400 transition duration-150 p-1 bg-gray-800 rounded-full"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Notre page LinkedIn"
                className="text-gray-400 hover:text-indigo-400 transition duration-150 p-1 bg-gray-800 rounded-full"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de copyright - Séparateur fin */}
        <div className="mt-16 border-t border-gray-800/50 pt-8">
          <p className="text-center text-xs text-gray-500 font-light">
            &copy; {new Date().getFullYear()} Taram Tech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
