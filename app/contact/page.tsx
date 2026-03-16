import { Metadata } from "next";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "contact@taramtech.com",
    href: "mailto:contact@taramtech.com",
  },
  {
    icon: PhoneIcon,
    label: "Téléphone",
    value: "+227 98 56 34 82",
    href: "tel:+22798563482",
  },
  {
    icon: MapPinIcon,
    label: "Adresse (Niger)",
    value: "Niamey, Niger",
    href: "#",
  },
];

export const metadata: Metadata = {
  title: "Contactez-nous | Taram Tech",
  description: "Prenez contact avec l'équipe Taram Tech pour discuter de votre projet de développement web ou mobile. Devis gratuit.",
};

const ContactPage = () => {
  return (
    <div className="py-24 sm:py-32 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <p className="text-base font-semibold leading-7 text-indigo-400 uppercase tracking-widest">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Démarrons votre projet
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Informations directes
            </h2>
            <p className="text-gray-400 text-lg">
              Notre équipe est disponible pour répondre à toutes vos questions.
              N&apos;hésitez pas à nous joindre via les canaux suivants.
            </p>

            <div className="space-y-6 pt-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                  <div className="ml-4">
                    <dt className="text-lg font-semibold text-white"> {item.label} </dt>
                    <dd className="mt-1 text-gray-400">
                      <a href={item.href} className="hover:text-indigo-400 transition"> {item.value} </a>
                    </dd>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
