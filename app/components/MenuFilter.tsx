// app/components/MenuFilter.tsx
"use client";


type FilterType = 'drinks' | 'food';

interface MenuFilterProps {
  onFilterChange: (filter: FilterType) => void;
  activeFilter: FilterType;
}

export function MenuFilter({ onFilterChange, activeFilter }: MenuFilterProps) {
  return (
    <div className="flex justify-center mb-16">
      <div className="bg-black/10 backdrop-blur-md rounded-full p-1 flex shadow-lg">
        <button
          onClick={() => onFilterChange('drinks')}
          className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 tracking-wide ${
            activeFilter === 'drinks'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Drinks
        </button>
        <button
          onClick={() => onFilterChange('food')}
          className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 tracking-wide ${
            activeFilter === 'food'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Food
        </button>
      </div>
    </div>
  );
}
