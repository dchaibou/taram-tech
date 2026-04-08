import {
  BriefcaseIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notre ADN | Taramtech",
  description: "Découvrez notre équipe passionnée et notre mission en développement web et applications au Niger.",
};


const stats = [
  { name: "Années d'expérience", value: "2+", icon: BriefcaseIcon },
  { name: "Projets livrés", value: "5+", icon: ClockIcon },
  { name: "Taux de satisfaction", value: "98%", icon: UsersIcon },
];

const AboutPage = () => {

  return (
    <div className="py-24 sm:py-32 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-indigo-400 uppercase tracking-widest"> À propos de nous </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"> L&apos;excellence façonnée par la passion </h1>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center bg-gray-900 p-10 md:p-16 rounded-xl shadow-2xl border border-indigo-900/50">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl"> Notre ADN </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Taramtech est une startup dynamique et innovante. Nous sommes spécialisés dans l&apos;architecture
              logicielle moderne pour développer des <b>solutions technologiques sur mesure</b> : sites web
              ultra performants et applications mobiles/web évolutives.
            </p>
            <p className="mt-4 text-indigo-400 font-semibold italic"> Notre mission : Transformer vos idées en projets concrets et efficaces. </p>
          </div>

          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-indigo-900/40 flex items-center justify-center text-xl text-indigo-200">
              [Image of Taramtech Team or Development concept]
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center text-3xl font-bold text-white mb-12"> Les chiffres qui parlent pour nous </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3 text-center">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 transition duration-300 hover:border-indigo-600/70">
                <stat.icon className="h-10 w-10 text-indigo-400 mb-4" />
                <dd className="order-first text-5xl font-extrabold tracking-tight text-white"> {stat.value} </dd>
                <dt className="mt-2 text-lg leading-7 text-gray-400 font-semibold"> {stat.name} </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24 text-center">
          <p className="text-xl text-gray-300"> Prêt à travailler avec une équipe passionnée et expérimentée ? </p>
          <Link href="/contact" className="mt-6 inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-500/30">
            Contactez notre équipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
