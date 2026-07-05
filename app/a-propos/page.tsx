import React from 'react';
import { ShieldCheck, Target, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">À propos de Nuisible 11</h1>
      
      <div className="prose prose-slate max-w-none space-y-12">
        {/* Introduction */}
        <section>
          <p className="text-lg text-slate-600 leading-relaxed">
            Basé au cœur de Narbonne, <strong>Nuisible 11</strong> est né d'une volonté simple : apporter une expertise professionnelle et réactive aux particuliers et aux entreprises du département de l'Aude confrontés à des problèmes d'invasion.
          </p>
        </section>

        {/* Valeurs */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
            <ShieldCheck className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">Expertise Certifiée</h3>
            <p className="text-sm text-slate-600">Interventions réalisées dans le strict respect des normes Certibiocide.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
            <Target className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">Approche Ciblée</h3>
            <p className="text-sm text-slate-600">Des solutions sur-mesure adaptées à chaque type de nuisible et d'environnement.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center">
            <Clock className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="font-bold text-slate-900 mb-2">Réactivité Express</h3>
            <p className="text-sm text-slate-600">Une intervention rapide pour limiter les dégâts et retrouver la tranquillité.</p>
          </div>
        </section>
      </div>
    </div>
  );
}