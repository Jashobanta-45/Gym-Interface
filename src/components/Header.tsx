import { Menu, Search, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="bg-neutral-900 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-red-500 transition-colors">
              <Phone size={14} />
              <span>+123 4567 890</span>
            </a>
            <a href="mailto:info@flykit.com" className="flex items-center gap-1 hover:text-red-500 transition-colors">
              <Mail size={14} />
              <span>info@flykit.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <MapPin size={14} />
            <span>123 Gym Street, Fitness City</span>
          </div>
        </div>
      </div>

      <nav className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">FLY</span>
              <span className="text-red-500">KIT</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-red-500 transition-colors font-medium">HOME</a>
              <a href="#about" className="hover:text-red-500 transition-colors font-medium">ABOUT</a>
              <a href="#services" className="hover:text-red-500 transition-colors font-medium">SERVICES</a>
              <a href="#pages" className="hover:text-red-500 transition-colors font-medium">PAGES</a>
              <a href="#blog" className="hover:text-red-500 transition-colors font-medium">BLOG</a>
              <a href="#contact" className="hover:text-red-500 transition-colors font-medium">CONTACT</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hover:text-red-500 transition-colors">
                <Search size={20} />
              </button>
              <button className="hover:text-red-500 transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
              <button
                className="md:hidden hover:text-red-500 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#home" className="hover:text-red-500 transition-colors font-medium">HOME</a>
              <a href="#about" className="hover:text-red-500 transition-colors font-medium">ABOUT</a>
              <a href="#services" className="hover:text-red-500 transition-colors font-medium">SERVICES</a>
              <a href="#pages" className="hover:text-red-500 transition-colors font-medium">PAGES</a>
              <a href="#blog" className="hover:text-red-500 transition-colors font-medium">BLOG</a>
              <a href="#contact" className="hover:text-red-500 transition-colors font-medium">CONTACT</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

