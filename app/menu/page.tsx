// app/menu/page.tsx
"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { MenuCategory } from "../components/MenuCategory";
import { MenuFilter } from "../components/MenuFilter";
import { menuData } from "../data/menuData";

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<'drinks' | 'food'>('drinks');
  const [viewedCategories, setViewedCategories] = useState<Set<'drinks' | 'food'>>(new Set(['drinks']));
  const [scrollPositions, setScrollPositions] = useState<{ [key: string]: number }>({});
  const contentRef = useRef<HTMLDivElement>(null);
  
  const filteredCategories = useMemo(() => 
    menuData.filter(category => category.type === activeFilter),
    [activeFilter]
  );

  const handleFilterChange = useCallback((filter: 'drinks' | 'food') => {
    // Sauvegarder la position de scroll actuelle avant de changer
    setScrollPositions(prev => ({
      ...prev,
      [activeFilter]: window.scrollY
    }));
    
    setActiveFilter(filter);
    
    // Si c'est la première fois qu'on regarde cette catégorie, scroll vers le haut
    if (!viewedCategories.has(filter)) {
      setViewedCategories(prev => new Set([...prev, filter]));
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      // Si on revient à une catégorie déjà visitée, restaurer la position
      const savedPosition = scrollPositions[filter] || 0;
      window.scrollTo({ top: savedPosition, behavior: 'auto' });
    }
  }, [activeFilter, viewedCategories, scrollPositions]);

  return (
    <div className="bg-black overflow-hidden">
      {/* MenuFilter fixe en haut */}
      <div className="fixed -bottom-8 left-0 right-0 z-40 bg-black/0">
        <div className="container mx-auto pt-32">
          <MenuFilter 
            onFilterChange={handleFilterChange} 
            activeFilter={activeFilter} 
          />
        </div>
      </div>
      
      {/* Contenu du menu avec marge pour le filtre fixe */}
      <div ref={contentRef} className="pt-28">
        {filteredCategories.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
