// app/components/MenuCategory.tsx
"use client";
import { useRef } from "react";
import type { MenuCategory as MenuCategoryType } from "../data/menuData";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const categoryImages: { [key: string]: string } = {
  "Cocktails Classiques": "/images/bar-4.jpg",
  "Cocktails Signature": "/images/bar-1.jpg",
  "Bières": "/images/bar-8.jpg",
  "Cocktails Sans Alcool": "/images/bar-5.jpg",
  "Vins au Verre": "/images/bar-7.jpg",
  "Planches à Partager": "/images/jambon.jpg",
  "Softs & Boissons Chaudes": "/images/bar-10.jpg"
};

export function MenuCategory({ category }: MenuCategoryProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  
  const selectedImage = categoryImages[category.title] || "/images/bar-1.jpg";

  return (
    <div className="relative overflow-hidden rounded-lg z-20">
      {selectedImage && (
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      )}
      
      {/* Overlay avec dégradé parfaitement lisse */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/10 to-black/100"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/10 to-black/100"></div>
      
      {/* Contenu de la catégorie */}
      <div className="relative z-10 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white border-b border-gray-400/50 pb-2 mb-6 tracking-wide" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(255,255,255,0.3)',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.7))'
        }}>
          {category.title}
        </h2>
        <div className="space-y-4 h-screen">
          {category.items.map((item, index) => (
            <div key={index} className="flex justify-between  items-start border-b border-gray-600/50 pb-3 px-3 -mx-3 ">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 tracking-wide" style={{
                  textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(255,255,255,0.1)'
                }}>{item.name}</h3>
                {item.description && (
                  <p className="text-gray-400 max-w-md leading-relaxed text-sm" style={{
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                  }}>{item.description}</p>
                )}
              </div>
              <p className="text-lg font-bold text-white pl-4 tracking-wide" style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
              }}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
