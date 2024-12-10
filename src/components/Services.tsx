import React from 'react';
import { Home, Building2, Factory, Check  } from 'lucide-react';

const services = [
  {
    title: 'Entretien et Nettoyage de Bâtiment',
    icon: Building2,
    description: "Nettoyage approfondi des sols pour garantir un espace de travail propre et sûr.",
    features: []
  },
  {
    title: 'Nettoyage de façades des bâtiments(vitrées, carrelées, allucobonds)',
    icon: Building2,
    description: 'Service de nettoyage des surfaces extérieures des bâtiments, y compris les fenêtres et les murs en carrelage ou en allucobonds, pour maintenir une apparence professionnelle.',
    features: []
  },
  {
    title: 'Entretien phytosanitaire (dératisation, désinsectisation, vidange de fosse)',
    icon: Factory,
    description: 'Solutions de contrôle des nuisibles, y compris la dératisation et la désinsectisation, ainsi que le nettoyage des fosses septiques pour assurer un environnement sain.',
    features: []
  },
  {
    title: 'Entretien et nettoyage Industriel',
    icon: Factory,
    description: "Nettoyage approfondi des installations industrielles, des machines et des sols pour garantir un espace de travail propre et sûr.",
    features: []
  },
  {
    title: 'Décontamination et désinfection de locaux, espaces publics et hospitaliers',
    icon: Factory ,
    description: "Service de désinfection et décontamination pour réduire la propagation des germes dans les hôpitaux et les espaces publics, assurant ainsi un environnement sûr.",
    features: []
  },
  {
    title: 'Ventes de matériels et produits de désinfection',
    icon: Factory,
    description: "Fourniture de produits et matériels de désinfection de haute qualité pour aider à maintenir des normes d'hygiène.",
    features: []
  },
  {
    title: 'Installation et entretien d’espaces Verts',
    icon: Home,
    description: "Création et entretien d'espaces verts, y compris jardins et pelouses, pour un environnement agréable.",
    features: []
  },
  {
    title: 'Désherbage mécanique, chimique et Bio',
    icon: Building2,
    description: "Contrôle des mauvaises herbes par des méthodes mécaniques, chimiques ou écologiques pour garder les espaces extérieurs propres.",
    features: []
  },
  {
    title: 'Formation pratique en hygiène domestique, communautaire et hospitalière',
    icon: Factory,
    description: "Formation pratique sur les bonnes pratiques d'hygiène pour les ménages, les communautés et les établissements de santé.",
    features: []
  },
  {
    title: 'Consultation et Expertise en Hygiène',
    icon: Factory,
    description: "Conseils d'experts sur les pratiques d'hygiène, y compris des évaluations et des recommandations pour améliorer la propreté.",
    features: []
  }
];

export function Services() {
  return (
    <section>
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Nos Services</h2>
            {/* <p className="mt-4 text-xl text-gray-600">Comprehensive cleaning solutions for every need</p> */}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: '#b6d023' }}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Nos Produits</h2>
            {/* <p className="mt-4 text-xl text-gray-600">Comprehensive cleaning solutions for every need</p> */}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ backgroundColor: '#b6d023' }}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}