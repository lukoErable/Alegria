// app/components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-white">ALEGRÍA</h3>
          <p className="text-gray-400 mt-1">Bar - Bar à cocktails - Grignotages</p>
          <p className="text-gray-400 mt-1">15 Place Saint Jean, Valence, Rhone-Alpes, France 26000</p>
   
        </div>
        <div className="flex space-x-6">
          <Link 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="h-6 w-6" />
          </Link>
          <Link 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="bg-black text-center py-2 w-fit items-center justify-center mx-auto">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Alegria. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
