// app/services/page.tsx
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos Services | Taram Tech",
  description:
    "Développement de sites internets, applications mobiles et applications web sur mesure avec l'expertise Next.js.",
};

const servicesData = [
  {
    icon: GlobeAltIcon,
    title: "Développement de sites internets (Next.js)",
    description:
      "Conception de plateformes vitrines ou d'entreprise ultra-rapides, optimisées pour le SEO grâce au Server-Side Rendering et à la Static Generation.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Applications Mobiles (Cross-Platform)",
    description:
      "Création d'applications intuitives et performantes pour iOS et Android (React Native/Flutter). Une solution unique pour toucher tous vos utilisateurs.",
  },
  {
    icon: CodeBracketIcon,
    title: "Applications Web Sur Mesure (SaaS)",
    description:
      "Développement de solutions complexes (ERP, CRM, Plateformes SaaS) robustes, sécurisées, et parfaitement adaptées à la croissance de votre startup.",
  },
];

const ServicesPage = () => {
  return (
    // Utilisation du fond sombre (bg-gray-950) défini dans le Root Layout
    <div className="py-24 sm:py-32 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* En-tête de la Section */}
        <div className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-indigo-400 uppercase tracking-widest">
            Notre expertise
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Des solutions conçues pour l&apos;avenir
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            L&apos;excellence technique est notre standard, la performance votre
            avantage.
          </p>
        </div>

        {/* Grille des services - Cartes élégantes en Dark Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 transition duration-300 hover:border-indigo-600/70 hover:shadow-indigo-500/10 transform hover:scale-[1.01] flex flex-col h-full"
            >
              {/* Icône du service - Accentuation Indigo */}
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-indigo-400 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base grow">
                {service.description}
              </p>

              {/* Lien d'action en bas de carte */}
              <div className="mt-6 pt-4 border-t border-gray-800/50">
                <Link
                  href="/contact"
                  className="text-indigo-400 font-medium text-sm hover:text-indigo-300 transition duration-200 flex items-center"
                >
                  Discuter de ce service →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bloc d'information/CTA complémentaire */}
        <div className="mt-20 p-8 bg-gray-900 rounded-xl border border-indigo-700/50 text-center">
          <p className="text-2xl font-semibold text-white">
            Besoin d&apos;une solution sur mesure ne figurant pas ci-dessus ?
          </p>
          <p className="mt-3 text-lg text-gray-400">
            Notre équipe d&apos;architecture logicielle est prête à relever votre
            défi unique.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 border-2 border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Contacter un expert
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
