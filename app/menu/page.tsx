// app/menu/page.tsx
import { MenuCategory } from "../components/MenuCategory";
import { menuData } from "../data/menuData";

export default function MenuPage() {
  return (
    <div className="bg-black pt-24">
      {" "}
      {/* pt-24 pour passer sous la navbar */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center text-white mb-16">
          Notre <span className="text-indigo-400">Carte</span>
        </h1>
        {menuData.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
}
