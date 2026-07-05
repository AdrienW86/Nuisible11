import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Search, Zap, Home, AlertTriangle, Target, Ban, Construction } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diagnostic & Traitement Termites Narbonne (11) | Protection Bâti',
  description: 'Présence de termites à Narbonne ? Protégez la structure de votre maison. Diagnostic termite professionnel, traitement anti-termites radical et suivi sur-mesure.',
};

export default function TermitesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <nav className="flex items-center text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-red-600">Accueil</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-900 font-medium">Termites</span>
        </nav>
        
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold mb-4">
            <AlertTriangle size={20} />
            <span>Expertise Termites à Narbonne (11)</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Protection contre les <span className="text-red-600">Termites</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Les termites grignotent votre patrimoine dans l'ombre. Ne laissez pas votre charpente ou vos menuiseries subir des dommages irréversibles.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Search, title: "Diagnostic Parasitaire", desc: "Inspection approfondie des zones à risque : charpentes, huisseries et sols." },
            { icon: Construction, title: "Traitement de Charpente", desc: "Injection de produits insecticides certifiés pour stopper la propagation." },
            { icon: Target, title: "Barrières Anti-Termites", desc: "Mise en place de systèmes de défense physique ou chimique pérennes." },
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
            <Home className="text-red-600" /> Pourquoi le termite est un danger majeur ?
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              Le termite est un insecte <strong>xylophage</strong> qui se nourrit de cellulose. Il travaille silencieusement à l'intérieur des bois, rendant les dégâts invisibles jusqu'à ce que la structure soit gravement fragilisée. Une charpente infestée peut perdre sa résistance mécanique, menaçant la sécurité de toute l'habitation.
            </p>
            <p>
              À Narbonne, certaines zones sont particulièrement exposées. Si vous observez des cordonnets de terre sur vos murs, des bois qui sonnent creux ou des déformations inhabituelles, il s'agit d'une <strong>urgence structurelle</strong>. Notre intervention consiste à identifier précisément la colonie et à appliquer un traitement curatif et préventif de haute technicité.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Nos protocoles de traitement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Traitement par Injection</h3>
              <p className="text-slate-600 text-sm">
                Forage des pièces de bois infestées et injection sous pression d'un produit insecticide puissant pour saturer les galeries creusées par les termites.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-red-600">Barrière de Sol (Termibarrière)</h3>
              <p className="text-slate-600 text-sm">
                Installation de barrières physico-chimiques au niveau des fondations et des passages de canalisations pour empêcher l'ascension des termites depuis le sol.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 p-10 rounded-3xl mb-16 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-red-500" /> Sécurité et Conformité
          </h2>
          <p className="leading-relaxed text-slate-300 mb-6">
            Le traitement anti-termites est une opération technique complexe soumise à des normes rigoureuses :
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Produits certifiés :</strong> Utilisation exclusive de biocides agréés pour le traitement des bois de construction.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Diagnostic précis :</strong> Rapport détaillé permettant d'évaluer la pérennité de votre charpente.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-red-600 p-1 rounded-full mt-1"><div className="w-2 h-2 bg-white rounded-full"></div></div>
              <span><strong>Respect environnemental :</strong> Méthodes de lutte ciblées limitant l'épandage inutile de produits.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}