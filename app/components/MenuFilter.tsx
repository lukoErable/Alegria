// app/components/MenuFilter.tsx
"use client";


type FilterType = 'drinks' | 'food';

interface MenuFilterProps {
  onFilterChange: (filter: FilterType) => void;
  activeFilter: FilterType;
}

export function MenuFilter({ onFilterChange, activeFilter }: MenuFilterProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-800 rounded-full p flex">
        <button
          onClick={() => onFilterChange('drinks')}
          className={`px-8 py-1 rounded-full font-semibold transition-all duration-300 ${
            activeFilter === 'drinks'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          Drinks
        </button>
        <button
          onClick={() => onFilterChange('food')}
          className={`px-8  rounded-full font-semibold transition-all duration-300 ${
            activeFilter === 'food'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          Food
        </button>
      </div>
    </div>
  );
}
