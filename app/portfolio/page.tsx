// app/portfolio/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"; // Icône pour les liens externes

// Données de démo pour le portfolio (Remplacez ceci par de vraies données!)
const projects = [
  {
    id: 1,
    title: "Plateforme de Gestion SaaS B2B",
    category: "Application Web / Next.js",
    description:
      "Développement complet d'un outil interne pour l'automatisation des flux de travail et la gestion client.",
    imagePlaceholder: "bg-indigo-900/30",
    link: "#",
  },
  {
    id: 2,
    title: "Application Mobile de Fidélisation",
    category: "Mobile Cross-Platform / React Native",
    description:
      "Application intuitive pour améliorer l'engagement client et gérer les programmes de fidélité via iOS et Android.",
    imagePlaceholder: "bg-gray-800",
    link: "#",
  },
  {
    id: 3,
    title: "Site Vitrine Haute Performance",
    category: "Site Web Statique / Next.js & Tailwind",
    description:
      "Refonte complète pour un site vitrine 100% SEO-friendly, garantissant un score Lighthouse parfait.",
    imagePlaceholder: "bg-indigo-700/30",
    link: "#",
  },
];

export const metadata: Metadata = {
  title: "Nos Réalisations | Taram Tech Portfolio",
  description:
    "Découvrez nos projets récents : sites web, applications mobiles et applications web développés sur mesure pour nos clients. Expertise Next.js.",
};

const PortfolioPage = () => {
  return (
    // Le min-h-[80vh] est conservé pour assurer une hauteur suffisante
    <div className="min-h-[80vh] py-24 sm:py-32 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* En-tête de la Section */}
        <div className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-indigo-400 uppercase tracking-widest">
            Portfolio
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Projets sélectionnés avec excellence
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Notre expertise prend vie à travers ces réalisations sur mesure.
          </p>
        </div>

        {/* Grille de projets - Cartes Dark Mode Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 transition duration-300 hover:border-indigo-600/70 transform hover:scale-[1.01]"
            >
              {/* Espace Visuel du Projet */}
              <div
                className={`h-48 ${project.imagePlaceholder} flex items-center justify-center text-gray-400 text-sm border-b border-gray-800`}
              >
                {/* Utilisation de <Image> de Next.js pour le vrai logo du projet ici */}
                [Image du Projet {project.id}]
              </div>

              {/* Détails du Projet */}
              <div className="p-6">
                <p className="text-sm font-semibold text-indigo-400 mt-1 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="font-bold text-xl text-white mt-1 group-hover:text-indigo-400 transition duration-200">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-400 text-base">
                  {project.description}
                </p>

                {/* Lien vers l'étude de cas (simulé) */}
                <Link
                  href={project.link}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-white hover:text-indigo-400 transition duration-200"
                >
                  Voir l&apos;étude de cas
                  <ArrowUpRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Appel à l'action pour le contact après le portfolio */}
        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 border-2 border-indigo-600 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-xl shadow-indigo-500/30"
          >
            Commencer votre propre projet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
