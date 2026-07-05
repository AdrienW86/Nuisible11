import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Bird, Building, Trash2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dératisation Narbonne (11) | Expert Rat & Souris',
  description: 'Besoin de dératiser à Narbonne ? Expertise professionnelle pour l\'élimination durable des rats et souris. Intervention rapide, sécurisée pour vos animaux et efficace.',
};

export default function DeratisationPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">


        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Dératisation</span>
        </nav>
        
        {/* Header avec impact visuel */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Intervention Rapide à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Expert <span className="text-red-600">Dératisation</span> : Stop aux rongeurs
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vous entendez des bruits dans vos combles ? Des traces d'excréments ? 
            Protégez votre patrimoine et votre santé avec des solutions de lutte antiparasitaire certifiées.
          </p>
        </header>

        {/* Section Technique avec Icônes */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Diagnostic Précis", desc: "Inspection thermique et recherche des points d'entrée (fissures, bouches d'aération)." },
            { icon: Zap, title: "Traitement Radical", desc: "Utilisation de produits rodenticides de qualité professionnelle homologués." },
            { icon: ShieldCheck, title: "Protection Durable", desc: "Mise en place de mesures d'exclusion et suivi pour prévenir toute réinfestation." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-500 transition-all">
              <item.icon className="text-red-600 mb-4" size={40} />
              <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Section SEO enrichie */}
        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Home className="text-red-600" /> Pourquoi choisir Nuisible 11 ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              La prolifération des <strong>rats bruns</strong> (Rattus norvegicus) et des <strong>souris domestiques</strong> (Mus musculus) à Narbonne n'est pas une fatalité. Nos protocoles de <strong>lutte raisonnée</strong> respectent l'environnement tout en garantissant une efficacité maximale.
            </p>
            <p>
              Au-delà de la simple dératisation, nous assurons une mission de <strong>sécurisation des bâtiments</strong>. Les rongeurs sont vecteurs de pathologies graves (leptospirose, salmonellose) et causent des dégâts structurels par la mastication de câbles électriques (risque d'incendie) et de l'isolation thermique.
            </p>
          </div>
        </section>
          {/* Section Méthodes de Traitement */}
        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos méthodes de lutte contre les rongeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Lutte Mécanique</h3>
              <p className="text-slate-600 text-sm">
                Utilisation de pièges haute performance et de dispositifs de capture vivante pour une élimination ciblée sans aucun recours aux substances chimiques. Idéal pour les zones sensibles ou les petites infestations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Lutte Chimique Raisonnée</h3>
              <p className="text-slate-600 text-sm">
                Application de rodenticides anticoagulants de nouvelle génération, placés exclusivement dans des <strong>postes d'appâtage sécurisés</strong> et inviolables, empêchant tout accès accidentel.
              </p>
            </div>
          </div>
        </section>

        {/* Section Sécurité & Environnement */}
        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Sécurité, Famille et Environnement
          </h2>
          <p className="leading-relaxed text-slate-300 mb-6">
            Votre sécurité est notre priorité absolue. Nous appliquons des protocoles rigoureux pour garantir que nos interventions n'ont aucun impact sur les occupants de votre foyer :
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Produits homologués :</strong> Usage exclusif de solutions certifiées sans danger pour les animaux de compagnie (sous conditions).</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Sécurisation totale :</strong> Postes d'appâtage verrouillés à clé, inaccessibles aux enfants.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Approche éco-responsable :</strong> Minimisation des substances actives et respect de la biodiversité locale.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}