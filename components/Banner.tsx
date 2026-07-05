import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const Banner = () => {
  return (
    // Conteneur principal qui force le ratio 16:9
    <section className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 font-sans shadow-xl">
      
      {/* 1. L'IMAGE D'ARRIÈRE-PLAN (Nettoyée) */}
      {/* Nous utilisons Fill pour que l'image s'adapte parfaitement au conteneur 16:9 */}
      <Image
        src="/banner.png" // Chemin vers votre image dans /public
        alt="Dératiseur à Narbonne - Nuisible 11"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 2. LE CONTENU (Overlay) */}
      {/* Un conteneur flex pour positionner le texte et le bouton sur la droite, comme sur l'image d'origine */}
      <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 md:px-16 lg:px-24">
        
        {/* Espacement pour compenser le logo en haut si nécessaire, sinon justify-center suffit */}
        
        {/* Titre principal */}
        

       

        {/* 3. LE BOUTON CLIQUABLE (Ajouté en code) */}
        {/* Un bouton rouge vif, centré sur la zone de droite, facile à cliquer sur mobile */}
        <div className="mt-10 md:mt-16 w-full flex justify-end">
         <a
  href="tel:04XXXXXXXX"
  className="absolute bottom-[10px] right-[10px] flex items-center gap-3 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105 z-10"
>
  <Phone size={16} />
  <div>
    <span className="block text-[10px] uppercase opacity-90">Urgence</span>
    <span className="text-base font-bold">07 43 26 04 51</span>
  </div>
</a>
        </div>

      </div>

    </section>
  );
};

export default Banner; 