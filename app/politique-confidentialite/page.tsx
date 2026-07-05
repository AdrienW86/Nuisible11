import React from 'react';

export default function Confidentialite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Politique de Confidentialité</h1>

      <div className="space-y-8 leading-relaxed">
        <section>
          <p className="text-slate-600 italic">Dernière mise à jour : 05 juillet 2026</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">1. Collecte des données</h2>
          <p>
            Dans le cadre de votre activité, EXPRESS NUISIBLES SERVICES est amené à collecter des données personnelles par le biais de votre site internet. 
            Les informations recueillies (nom, adresse e-mail, téléphone, adresse postale) sont strictement nécessaires au traitement de vos demandes de devis ou d'intervention.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">2. Finalité du traitement</h2>
          <p>
            Les données collectées sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Répondre à vos demandes de renseignements ou de devis.</li>
            <li>Assurer le suivi administratif et technique de nos interventions.</li>
            <li>Vous contacter pour confirmer un rendez-vous.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">3. Conservation des données</h2>
          <p>
            Vos données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées. 
            Les données relatives aux devis non transformés en commandes sont supprimées au bout de 24 mois.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">4. Sécurité</h2>
          <p>
            EXPRESS NUISIBLES SERVICES s'engage à prendre toutes les précautions utiles pour préserver la sécurité de vos données et notamment pour empêcher qu'elles soient déformées, endommagées, ou que des tiers non autorisés y aient accès.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">5. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Droit d'accès et de rectification.</li>
            <li>Droit à l'effacement (droit à l'oubli).</li>
            <li>Droit de retrait de votre consentement.</li>
          </ul>
          <p className="mt-4">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@nuisible11.fr</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">6. Cookies</h2>
          <p>
            Le site utilise uniquement des cookies nécessaires au fonctionnement technique (type de navigation, etc.). 
            Aucun cookie de suivi publicitaire ou comportemental n'est déposé sans votre consentement.
          </p>
        </section>
      </div>
    </div>
  );
}