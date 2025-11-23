// components/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      // Appel à l'API Route de Next.js
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(
          () => setFormData({ nom: "", email: "", message: "" }),
          3000
        );
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // Détermination de la couleur du bouton
  const buttonClasses =
    status === "loading"
      ? "bg-indigo-700 disabled:opacity-70 cursor-not-allowed"
      : status === "success"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-indigo-600 hover:bg-indigo-700";

  return (
    // Bloc Formulaire stylisé pour le Dark Mode
    <div className="bg-gray-900 p-8 md:p-12 rounded-xl shadow-2xl border border-indigo-900/50">
      <h2 className="text-3xl font-bold text-white mb-8">
        Envoyez-nous un message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-300"
          >
            Nom complet
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom ou nom d'entreprise"
            className="mt-1 block w-full border border-gray-700 bg-gray-800 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Adresse email professionnelle
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="contact@exemple.com"
            className="mt-1 block w-full border border-gray-700 bg-gray-800 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Votre projet ou question
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez brièvement votre besoin..."
            className="mt-1 block w-full border border-gray-700 bg-gray-800 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Bouton d'Envoi et Status */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full inline-flex items-center justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-base font-semibold text-white transition duration-300 ${buttonClasses}`}
          >
            {status === "loading" ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Envoi en cours...
              </span>
            ) : status === "success" ? (
              "Message Envoyé !"
            ) : (
              <span className="flex items-center">
                Envoyer le message
                <PaperAirplaneIcon className="h-5 w-5 ml-2" />
              </span>
            )}
          </button>
        </div>

        {/* Messages de statut */}
        {status === "success" && (
          <p className="mt-4 text-center text-sm font-medium text-green-400">
            Merci ! Votre message a été reçu avec succès.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-sm font-medium text-red-400">
            Oups ! Une erreur s&apos;est produite lors de l&apos;envoi.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
