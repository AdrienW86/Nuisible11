import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Contactez Nuisible 11</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <p className="text-slate-600 leading-relaxed">
            Une invasion de nuisibles à Narbonne ? Ne perdez pas de temps. 
            Nos experts interviennent sous 24h pour sécuriser votre domicile ou vos locaux professionnels.
          </p>
          
          <div className="space-y-6">
            <a href="tel:0743260451" className="flex items-center gap-4 text-slate-900 hover:text-red-600 transition">
              <Phone className="text-red-600" />
              <span className="text-xl font-bold">07 43 26 04 51</span>
            </a>
            <a href="mailto:contact@nuisible11.fr" className="flex items-center gap-4 text-slate-900 hover:text-red-600 transition">
              <Mail className="text-red-600" />
              <span>contact@nuisible11.fr</span>
            </a>
            <div className="flex items-center gap-4 text-slate-900">
              <MapPin className="text-red-600" />
              <span>Intervention sur Narbonne (11000) et environs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}