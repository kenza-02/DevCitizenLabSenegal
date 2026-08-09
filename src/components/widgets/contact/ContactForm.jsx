import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Nom complet
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all outline-none"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Adresse email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all outline-none"
          placeholder="john.doe@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all outline-none resize-none"
          placeholder="Dites-nous comment nous pouvons vous aider..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
      >
        Envoyer le message
        <FaArrowRightLong className="w-3.5 h-3.5" />
      </button>
    </form>
  );
};

export default ContactForm;