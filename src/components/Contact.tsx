import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contactez-nous</h2>
          {/* <p className="mt-4 text-xl text-gray-600">Get in touch for a free quote</p> */}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Type de service</label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Industrial Cleaning</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit" style={{ backgroundColor: '#b6d023' }}
                className="w-full text-white py-2 px-4 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Phone className="h-6 w-6 "  style={{ color: '#b6d023' }}/>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="mt-1 text-gray-600">+229 016 231 5172</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6" style={{ color: '#b6d023' }} />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">jessougnoncipa2@yahoo.fr</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 " style={{ color: '#b6d023' }} />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Localisation</h3>
                <p className="mt-1 text-gray-600">9F74+4QM, Rue 1682B, Cotonou, Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}