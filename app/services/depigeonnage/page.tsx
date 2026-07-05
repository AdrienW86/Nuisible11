import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Bird, Building, Trash2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Dépigeonnage Narbonne (11) | Protection Aviaire Expert',
  description: 'Besoin de dépigeonnage à Narbonne ? Expert en protection aviaire, nous protégeons vos bâtiments contre les nuisances des pigeons avec des solutions durables et discrètes.',
};

export default function DepigeonnagePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Dépigeonnage</span>
        </nav>
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Expertise dépigeonnage à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Dépigeonnage et <span className="text-red-600">Protection Aviaire</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Protégez vos bâtiments contre les nuisances des pigeons. Solutions d'exclusion durables, respectueuses des oiseaux et de l'esthétique de votre patrimoine.
          </p>
        </header>

        {/* Section Technique */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Audit de site", desc: "Identification des zones de nidification et des axes de vol préférentiels." },
            { icon: Building, title: "Dispositifs d'Exclusion", desc: "Pose de pics, filets, ou systèmes électro-répulsifs discrets et efficaces." },
            { icon: Trash2, title: "Nettoyage & Désinfection", desc: "Élimination des fientes et décontamination des surfaces souillées." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-500 transition-all">
              <item.icon className="text-red-600 mb-4" size={40} />
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Section SEO */}
        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Home className="text-red-600" /> Pourquoi agir contre les pigeons ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              La prolifération des <strong>pigeons bisets</strong> (Columba livia) en milieu urbain à Narbonne engendre des nuisances majeures. Au-delà du bruit, les fientes sont hautement <strong>corrosives</strong> : elles dégradent la pierre, les façades, les toitures et les gouttières, occasionnant des frais de rénovation importants.
            </p>
            <p>
              Sanitairement, les pigeons sont vecteurs de <strong>parasites</strong> (tiques, poux) et de maladies transmissibles à l'homme (cryptococcose, histoplasmose). Notre mission est de restaurer la salubrité de votre bâtiment tout en évitant le retour des colonies par des barrières physiques inviolables.
            </p>
          </div>
        </section>

        {/* Section Méthodes d'exclusion */}
        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos solutions de protection aviaire</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Dispositifs de picots et filets</h3>
              <p className="text-slate-600 text-sm">
                Installation de systèmes mécaniques (pics) en inox ou pose de filets tendus pour empêcher physiquement l'atterrissage sur les corniches, rebords de fenêtres et accès aux toits.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Systèmes de répulsion haute technologie</h3>
              <p className="text-slate-600 text-sm">
                Utilisation de fils tendus ou de dispositifs de répulsion électro-répulsifs basse tension, totalement inoffensifs pour l'oiseau mais dissuasifs, garantissant la tranquillité de vos façades.
              </p>
            </div>
          </div>
        </section>

        {/* Section Sécurité */}
        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Engagement Qualité et Hygiène
          </h2>
          <p className="leading-relaxed text-slate-300 mb-6">
            Nous intervenons avec le plus grand respect des normes d'hygiène et de sécurité, particulièrement lors de la phase cruciale de nettoyage des zones infectées :
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Décontamination totale :</strong> Utilisation de produits biocides pour détruire les bactéries présentes dans les fientes.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Respect du patrimoine :</strong> Installations discrètes et non invasives pour vos structures architecturales.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Gestion des déchets :</strong> Traitement et évacuation des fientes selon les protocoles sanitaires en vigueur.</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}