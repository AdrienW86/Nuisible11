import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Bug, Target, Ban, BedDouble } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Désinsectisation Punaises de Lit Narbonne (11) | Éradication Rapide',
  description: 'Invasion de punaises de lit à Narbonne ? Expertise professionnelle pour une éradication rapide, discrète et radicale. Retrouvez enfin un sommeil réparateur.',
};

export default function PunaisesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Punaises de lit</span>
        </nav>
        
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Urgence Punaises de lit à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Éradication <span className="text-red-600">Punaises de Lit</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vous vous faites piquer la nuit ? Ne laissez pas l'infestation se propager. 
            Nous intervenons avec des méthodes de pointe pour vous libérer durablement des punaises de lit.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Détection Canine", desc: "Recherche précise des nids, même dans les endroits les plus inaccessibles." },
            { icon: Target, title: "Traitement Radical", desc: "Combinaison de techniques thermiques et chimiques professionnelles." },
            { icon: BedDouble, title: "Suivi Post-Traitement", desc: "Contrôle et sécurisation pour garantir l'absence totale de réinfestation." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-500 transition-all">
              <item.icon className="text-red-600 mb-4" size={40} />
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Home className="text-red-600" /> Pourquoi agir vite ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              La punaise de lit (Cimex lectularius) est un <strong>nuisible extrêmement invasif</strong>. Une seule femelle peut pondre jusqu'à 500 œufs dans sa vie. Les traitements "maison" sont quasiment toujours inefficaces car les punaises développent des résistances et se cachent dans les structures invisibles (sommiers, prises électriques, plinthes).
            </p>
            <p>
              Outre les démangeaisons et les réactions allergiques, les punaises de lit génèrent un stress psychologique important. Notre approche professionnelle vise à <strong>détruire l'ensemble du cycle biologique</strong> (œufs, nymphes, adultes) pour stopper l'invasion dès la première intervention.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos méthodes d'intervention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Traitement Thermique</h3>
              <p className="text-slate-600 text-sm">
                Utilisation de la chaleur extrême pour neutraliser les œufs et les adultes sans ajout de produit chimique inutile dans votre chambre.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Traitement Biocide Ciblé</h3>
              <p className="text-slate-600 text-sm">
                Application de produits homologués longue durée sur les zones de passage, garantissant une protection rémanente pendant plusieurs semaines.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Discrétion et Sécurité
          </h2>
          <p className="leading-relaxed text-slate-300 mb-6">
            Nous comprenons la sensibilité de cette situation. La discrétion est au cœur de notre service :
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Véhicules banalisés :</strong> Intervention sans signe extérieur distinctif pour respecter votre vie privée.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Sécurité des occupants :</strong> Protocoles validés pour les environnements avec enfants ou personnes fragiles.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Conseils de préparation :</strong> Accompagnement complet pour préparer votre logement avant et après l'intervention.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}