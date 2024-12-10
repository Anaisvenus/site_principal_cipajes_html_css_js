import React from 'react';
import { Facebook, MessageCircle , Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#b6d023' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              {/* <Sparkles className="h-8 w-8 " style={{ color: '#b6d023' }} /> */}
              <img
                src="../../logo.png"
                alt="CIPA JESSOUGNON Logo"
                className="h20 w-20"
              />
              <span className="ml-2 text-xl font-bold">CIPA JESSOUGNON</span>
            </div>
            <p className="mt-4 text-white">
            Nous sommes une entreprise de nettoyage professionnelle dédiée à fournir des services
            de haute qualité avec des pratiques respectueuses de l'environnement.
            </p>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Residential Cleaning</a></li>
              <li><a href="#" className="text-white hover:text-white">Commercial Cleaning</a></li>
              <li><a href="#" className="text-white hover:text-white">Industrial Cleaning</a></li>
              <li><a href="#" className="text-white hover:text-white">Special Services</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">A propos</a></li>
              <li><a href="#" className="text-white hover:text-white">Services et Produits</a></li>
              <li><a href="#" className="text-white hover:text-white">Actualités</a></li>
              <li><a href="#" className="text-white hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d" target='_blank' className="text-white hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="tel:+229 62 31 5172" target='_blank' className="text-white hover:text-white">
                <MessageCircle  className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==" target='_blank' className="text-white hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/cipa-jessougnon-sa/" target='_blank' className="text-white hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-white">
          <p>&copy; {new Date().getFullYear()} CIPA JESSOUGNON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}