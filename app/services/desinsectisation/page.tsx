import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Bug, Target, Ban, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Désinsectisation Narbonne (11) | Fourmis, Araignées & Insectes',
  description: 'Invasion de fourmis, araignées ou insectes rampants à Narbonne ? Solutions de désinsectisation efficaces et durables pour retrouver un intérieur sain.',
};

export default function DesinsectisationPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Désinsectisation</span>
        </nav>
        
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Traitement tous insectes à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Services de <span className="text-red-600">Désinsectisation</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des invasions de fourmis dans la cuisine aux araignées dans les angles, 
            nous vous aidons à assainir votre domicile avec des traitements ciblés et durables.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Identification", desc: "Analyse de l'espèce nuisible et détermination de son origine (intérieur ou extérieur)." },
            { icon: Target, title: "Traitement Localisé", desc: "Application de produits spécifiques aux zones de passage et nids identifiés." },
            { icon: Layers, title: "Effet Rémanent", desc: "Action longue durée pour empêcher toute nouvelle intrusion dans vos espaces de vie." },
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
            <Home className="text-red-600" /> Pourquoi faire appel à un professionnel ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              Si les <strong>fourmis</strong> (Lasius niger) sont surtout une nuisance gênante par leur présence en colonie, d'autres insectes peuvent dégrader les structures ou piquer. Les traitements "grand public" (bombes aérosols) sont souvent temporaires car ils ne traitent pas le nid source.
            </p>
            <p>
              Notre expertise nous permet d'appliquer des solutions de <strong>lutte intégrée</strong>. Nous ne nous contentons pas d'éliminer les insectes visibles : nous sécurisons vos zones sensibles (garde-manger, plaintes, menuiseries) pour garantir la tranquillité de votre foyer à long terme.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos champs d'intervention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Insectes Rampants</h3>
              <p className="text-slate-600 text-sm">
                Traitement contre les fourmis, poissons d'argent, araignées et autres coléoptères qui trouvent refuge dans les zones humides ou sombres de votre habitat.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Barrières Extérieures</h3>
              <p className="text-slate-600 text-sm">
                Application de produits barrières sur les seuils, fenêtres et périmètres de la maison pour bloquer l'intrusion des insectes avant qu'ils ne s'installent.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Sécurité et Tranquillité
          </h2>
          <p className="leading-relaxed text-slate-300 mb-6">
            Votre sérénité est notre engagement. Nous intervenons en toute sécurité :
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Produits ciblés :</strong> Action sélective pour limiter l'exposition à votre famille et vos animaux.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Action rémanente :</strong> Protection durable qui reste active après le passage du technicien.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Conseils prévention :</strong> Nous vous aidons à identifier les causes d'attraction pour éviter le retour des insectes.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}