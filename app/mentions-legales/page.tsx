import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900">Mentions Légales</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">1. Informations sur l'entreprise</h2>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, voici les informations concernant l'entreprise :
          </p>
          <ul className="mt-4 space-y-2">
            <li><strong>Nom et Prénom :</strong> GREGORY JOSE ROBLES</li>
            <li><strong>Nom commercial :</strong> EXPRESS NUISIBLES SERVICES</li>
            <li><strong>Numéro SIREN :</strong> 834 799 751</li>
            <li><strong>Code APE :</strong> 8129A</li>
            <li><strong>Siège social :</strong> 88 Cami de Las Carretas, 66380 Pia, FRANCE</li>
            <li><strong>Contact :</strong> contact@nuisible11.fr</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">2. Responsable de la publication</h2>
          <p>Le directeur de la publication est M. GREGORY ROBLES.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">3. Hébergement du site</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong>, dont le siège social est situé :<br />
            Vercel Inc. <br />
            440 N Wolfe Rd, Sunnyvale, CA 94085, USA.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">4. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-red-600">5. Données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), les informations recueillies via les formulaires de contact sont destinées exclusivement à EXPRESS NUISIBLES SERVICES pour le traitement de votre demande. Aucune donnée n'est cédée à des tiers. 
            Vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant en nous contactant à : contact@nuisible11.fr.
          </p>
        </section>
      </div>
    </div>
  );
}