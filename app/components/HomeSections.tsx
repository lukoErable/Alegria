"use client";
import { ImageTextSplit } from './ImageTextSplit';
import { Map } from './Map';
import { OpeningHours } from './OpeningHours';

export function HomeSections() {
  return (
    <>
      <section id="next-section">
        <ImageTextSplit
          imageUrl="/images/restau.jpg"
          title="Une Ambiance Unique"
          description="Plongez dans un décor à la fois chic et intimiste. Le lieu idéal pour vos soirées, où chaque détail a été pensé pour votre confort et votre plaisir."
        />
      </section>

      <ImageTextSplit
        imageUrl="/images/bar-1.jpg"
        title="Cocktails Création"
        description="Laissez-vous surprendre par notre carte de cocktails. Des grands classiques revisités aux créations exclusives de nos barmans, chaque verre est une invitation au voyage."
        buttonText="Voir la carte"
        buttonLink="/menu"
        reverse={true}
      />

      <ImageTextSplit
        imageUrl="/images/jambon.jpg"
        title="Gourmandises à Partager"
        description="Nos planches généreuses sont préparés avec des produits frais et locaux. L'accompagnement parfait pour vos boissons favorites."
      />

      <ImageTextSplit
        imageUrl="/images/bar-4.jpg"
        title="Votre Nouveau QG"
        description="Plus qu'un bar, un lieu de vie et de rencontres. Participez à nos événements et créez des souvenirs mémorables avec nous."
        buttonText="Nous Contacter"
        buttonLink="/contact"
        reverse={true}
      />
      <ImageTextSplit
        imageUrl="/images/bar-5.jpg"
        title="Happy Hour Quotidien"
        description="Chaque jour de 17h à 19h, profitez de nos cocktails à prix réduits. L'occasion parfaite de découvrir nos créations ou de retrouver vos classiques préférés dans une ambiance détendue."
        buttonText="Voir les horaires"
        buttonLink="#"
        onButtonClick={() => {
          const hoursSection = document.querySelector('[data-hours-section]');
          if (hoursSection) {
            hoursSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <ImageTextSplit
        imageUrl="/images/bar-6.jpg"
        title="Soirées Thématiques"
        description="Découvrez nos événements ponctuels : soirées à thème, musique live, DJ sets, dégustations spéciales. Des moments uniques et des expériences mémorables vous attendent."
        buttonText="Découvrir les événements"
        buttonLink="/events"
        reverse={true}
      />
      <ImageTextSplit
        imageUrl="/images/bar-7.jpg"
        title="Terrasse d'Été"
        description="Dès les beaux jours, notre terrasse s'ouvre pour vous offrir un moment de détente en plein air. Cocktails frais, planches apéritives et ambiance conviviale dans le cœur de Lausanne."
        buttonText="Réserver une table"
        buttonLink="/contact"
      />

      {/* Section avec Map à la place de l'image */}
      <section className="flex flex-col md:flex-row-reverse">
        {/* Map à la place de l'image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[600px]">
          <Map />
        </div>
        
        {/* Carré noir avec horaires */}
        <div 
          className="w-full md:w-1/2 h-[300px] md:h-[600px] bg-black flex items-center justify-center p-4 md:p-8"
          data-hours-section
        >
          <OpeningHours />
        </div>
      </section>
    </>
  );
}
