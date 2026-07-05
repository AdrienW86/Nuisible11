import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Bug, BedDouble } from 'lucide-react';

const mainServices = [
  {
    title: "Dératisation",
    desc: "Élimination radicale des rats et souris.",
    icon: Zap,
    href: "/services/deratisation"
  },
  {
    title: "Punaises de lit",
    desc: "Expertise en éradication de punaises de lit.",
    icon: BedDouble,
    href: "/services/puces-punaises-lit"
  },
  {
    title: "Cafards & Blattes",
    desc: "Stop immédiat au cycle de reproduction.",
    icon: Bug,
    href: "/services/cafards-blattes"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Nos interventions prioritaires
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            Des solutions professionnelles pour assainir votre logement rapidement et durablement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-xl transition-all duration-300 bg-slate-50">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-red-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm">{service.desc}</p>
              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-4 transition-all"
              >
                Découvrir <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-red-600 transition shadow-lg"
          >
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  );
}