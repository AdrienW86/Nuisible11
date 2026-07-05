"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react'; // Installez lucide-react pour les icônes

const services = [
  { name: 'Dératisation', href: '/services/deratisation' },
  { name: 'Dépigeonnage', href: '/services/depigeonnage' },
  { name: 'Cafards et blattes', href: '/services/cafards-blattes' },
  { name: 'Désinsectisation', href: '/services/desinsectisation' },
  { name: 'Puces et punaises de lits', href: '/services/puces-punaises-lit' },
  { name: 'Termites', href: '/services/termites' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-16 h-16">
                <Image 
                  src="/logo.png" 
                  alt="Logo Nuisible 11" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 200px" 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-slate-900 sm:block">
                Nuisible <span className="text-red-600">11</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-red-600 font-medium transition">
              Accueil
            </Link>
            
            <Link href="/a-propos" className="text-slate-700 hover:text-red-600 font-medium transition">
              À propos
            </Link>

            {/* Remplacement du button par un Link */}
            <div className="relative group">
              <Link 
                href="/services"
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center text-slate-700 hover:text-red-600 font-medium transition py-8"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              
              <div 
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute left-0 mt-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-lg py-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-slate-700 hover:text-red-600 font-medium transition">
              Contact
            </Link>

            <a 
              href="tel:0743260451" 
              className="bg-red-600 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200"
            >
              <Phone size={18} /> Urgence Narbonne
            </a>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-red-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

    <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          <Link href="/" className="block px-3 py-4 text-lg font-semibold text-slate-900 border-b border-slate-50">
            Accueil
          </Link>
          <Link href="/a-propos" className="block px-3 py-4 text-lg font-semibold text-slate-900 border-b border-slate-50">
            À propos
          </Link>
          
          {/* Bloc Services unique et fonctionnel */}
          <div className="py-2 flex items-center border-b border-slate-50">
            <Link 
              href="/services" 
              className="flex-grow px-3 py-4 text-lg font-semibold text-slate-900"
            >
              Services
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsServicesOpen(!isServicesOpen);
              }}
              className="p-4 text-slate-900"
            >
              <ChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {isServicesOpen && (
            <div className="bg-slate-50 rounded-lg mt-2 mb-4">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-6 py-3 text-slate-700 hover:text-red-600 border-b border-white last:border-0"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" className="block px-3 py-4 text-lg font-semibold text-slate-900 border-b border-slate-50">
            Contact
          </Link>
          
          <div className="pt-6">
            <a 
              href="tel:0743260451" 
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-xl"
            >
              <Phone fill="white" /> Appeler 
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;