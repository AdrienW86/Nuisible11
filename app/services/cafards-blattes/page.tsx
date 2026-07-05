import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Bug, Target, Ban } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Désinsectisation Cafards & Blattes Narbonne (11) | Expert Anti-Nuisibles',
  description: 'Invasion de cafards ou blattes à Narbonne ? Nous éliminons radicalement les infestations avec des traitements professionnels ciblés. Intervention rapide et discrète.',
};

export default function CafardsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Cafards et Blattes</span>
        </nav>
        
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Éradication garantie à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Désinsectisation <span className="text-red-600">Cafards et Blattes</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Vous avez aperçu une blatte dans votre cuisine ? N'attendez pas l'infestation. 
            Nos protocoles professionnels stoppent le cycle de reproduction immédiatement.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Audit d'Infestation", desc: "Localisation des nids (points chauds) et évaluation du niveau de prolifération." },
            { icon: Target, title: "Traitement par Gel", desc: "Application de gel insecticide haute performance, sélectif et sans odeur." },
            { icon: Ban, title: "Barrière de Protection", desc: "Mise en place de mesures pour bloquer les voies de passage entre appartements." },
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
            <Home className="text-red-600" /> Pourquoi les blattes reviennent ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              La <strong>Blatte germanique</strong> (Blattella germanica) et la <strong>Blatte orientale</strong> (Blatta orientalis) sont des insectes extrêmement résistants. Une femelle peut engendrer des centaines de descendants en quelques mois. L'utilisation d'aérosols du commerce est souvent inefficace, car ils ne traitent pas le foyer de l'infestation, cachée dans les moteurs d'appareils électroménagers ou les faux plafonds.
            </p>
            <p>
              Nos interventions professionnelles ciblent la source. Nous utilisons des méthodes de <strong>lutte intégrée</strong> qui interrompent le cycle biologique, assurant une éradication complète là où les solutions classiques échouent.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos méthodes d'intervention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Gel Inodore Haute Performance</h3>
              <p className="text-slate-600 text-sm">
                Application précise de gouttelettes de gel appétant. Les blattes le consomment et le rapportent au nid, créant un effet domino qui élimine la colonie en profondeur.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Pulvérisation de barrière</h3>
              <p className="text-slate-600 text-sm">
                Pour les infestations massives, nous combinons le gel avec des traitements de contact sur les zones de passage, créant une barrière létale durable pour tout insecte entrant.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Sécurité et Discrétion
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Zéro résidu aérien :</strong> Nos gels ne nécessitent pas de quitter les lieux lors de l'application.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Protocole discret :</strong> Interventions professionnelles sans enseigne voyante sur le véhicule.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Hygiène renforcée :</strong> Traitement spécifique pour les zones de préparation alimentaire (cuisine, garde-manger).</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}