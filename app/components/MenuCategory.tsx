// app/components/MenuCategory.tsx
import type { MenuCategory as MenuCategoryType } from "../data/menuData";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-indigo-400 border-b-2 border-indigo-500 pb-2 mb-6">
        {category.title}
      </h2>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              {item.description && (
                <p className="text-gray-400 max-w-md">{item.description}</p>
              )}
            </div>
            <p className="text-lg font-semibold text-white pl-4">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
