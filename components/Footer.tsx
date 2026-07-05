import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Bloc 1 : Identité & Confiance */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Nuisible 11</h3>
            <p className="text-sm leading-relaxed">
              Expert en dératisation et désinsectisation à Narbonne. Nous intervenons rapidement pour protéger votre domicile ou votre entreprise.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck size={20} />
              <span>Certifié Certibiocide</span>
            </div>
          </div>

          {/* Bloc 2 : Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/deratisation" className="hover:text-red-500">Dératisation</Link></li>
              <li><Link href="/services/desinsectisation" className="hover:text-red-500">Désinsectisation</Link></li>
              <li><Link href="/services/puces-punaises-lit" className="hover:text-red-500">Punaises de lit</Link></li>
              <li><Link href="/services/depigeonage" className="hover:text-red-500">Dépigeonnage</Link></li>
              <li><Link href="/services/cafards" className="hover:text-red-500">Cafards</Link></li>
              <li><Link href="/services/termites" className="hover:text-red-500">Termites</Link></li>
            </ul>
          </div>

          {/* Bloc 3 : Contact & Localisation */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Contact</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={20} className="text-red-600 flex-shrink-0" />
              <span>Intervention sur Narbonne et son agglomération (11100)</span>
            </div>
            <a href="tel:04XXXXXXXX" className="flex items-center gap-3 text-sm hover:text-red-500 transition">
              <Phone size={20} className="text-red-600" />
              <span>07 43 26 04 51</span>
            </a>
            <a href="mailto:contact@nuisible11.fr" className="flex items-center gap-3 text-sm hover:text-red-500 transition">
              <Mail size={20} className="text-red-600" />
              <span>contact@nuisible11.fr</span>
            </a>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nuisible 11 - Tous droits réservés.</p>
          <p className="mt-2">
             <Link href="/mentions-legales" className="hover:underline">Mentions Légales</Link> | 
             <Link href="/politique-confidentialite" className="hover:underline ml-2">Politique de confidentialité</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;