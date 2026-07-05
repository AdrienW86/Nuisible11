import Banner from "@/components/Banner";
import { ShieldCheck, Target, Clock } from 'lucide-react';
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    // On retire le flex et le centrage ici pour laisser la bannière occuper toute la largeur
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <main className="flex-1">
        <Banner />
        
        {/* Exemple pour vos futures sections (Services, À propos, etc.) */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Pourquoi choisir Nuisible 11 ?
          </h2>
          {/* Contenu à venir... */}
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
        <ServicesSection />
      </main>
    </div>
  );
}