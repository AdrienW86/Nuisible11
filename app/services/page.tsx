import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Bug, Home, BedDouble, Construction, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Dératisation",
    desc: "Élimination radicale des rats et souris. Protection de votre patrimoine et de votre santé.",
    icon: Zap,
    href: "/services/deratisation",
    color: "text-orange-600"
  },
  {
    title: "Cafards & Blattes",
    desc: "Traitement spécialisé contre les blattes germaniques et orientales. Cycle de reproduction stoppé.",
    icon: Bug,
    href: "/services/cafards-blattes",
    color: "text-emerald-600"
  },
  {
    title: "Punaises de lit",
    desc: "Expertise en éradication de punaises de lit. Intervention discrète et radicale.",
    icon: BedDouble,
    href: "/services/puces-punaises-lit",
    color: "text-red-600"
  },
  {
    title: "Désinsectisation",
    desc: "Fourmis, araignées et insectes rampants. Retrouvez un intérieur sain et serein.",
    icon: ShieldCheck,
    href: "/services/desinsectisation",
    color: "text-blue-600"
  },
  {
    title: "Termites",
    desc: "Diagnostic et traitement des bois. Protection structurelle contre les insectes xylophages.",
    icon: Construction,
    href: "/services/termites",
    color: "text-amber-700"
  },
  {
    title: "Dépigeonnage",
    desc: "Protection aviaire durable pour vos bâtiments. Solutions discrètes et efficaces.",
    icon: Home,
    href: "/services/depigeonnage",
    color: "text-slate-600"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
       <header className="relative text-center py-24 mb-16 rounded-3xl overflow-hidden shadow-lg">
  {/* Image de fond */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/services.png')" }} // Remplacez par votre chemin d'image
  />
  
  {/* Overlay sombre pour la lisibilité */}
  <div className="absolute inset-0 bg-slate-900/70" />

  {/* Contenu */}
  <div className="relative z-10 px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
      Nos Solutions <span className="text-red-500">Nuisibles</span>
    </h1>
    <p className="text-xl text-slate-200 max-w-2xl mx-auto">
      Expertise professionnelle en lutte antiparasitaire à Narbonne et ses environs. 
      Découvrez nos protocoles adaptés à chaque situation.
    </p>
  </div>
</header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group flex flex-col">
              <div className={`${service.color} mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center`}>
                <service.icon size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{service.desc}</p>
              
              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-4 transition-all"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}