import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-lime-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              CIPA JESSOUGNON
              <span className="block" style={{ color: '#b6d023' }}>pour tous vos espaces</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            CIPA JESSOUGNON, experte en entretien, désinfection et dératisation, compte 20 ans d'expérience, 
            un personnel qualifié et des équipements modernes. Partenaire des salons d'hygiène en Europe.
            </p>
            <div className="mt-8 space-y-4">
              {['Livraison à Domicile Rapide', 'Livraison gratuite', 'Bonne qualité de produits'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#contact" style={{ backgroundColor: '#b6d023' }}
               className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-lime-700">
                Contactez-nous
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
              alt="Professional cleaning service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}