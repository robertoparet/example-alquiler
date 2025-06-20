'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

const Header = ({ currentLang, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    es: {
      home: 'Inicio',
      accommodations: 'Alojamientos',
      services: 'Servicios',
      location: 'Ubicación',
      contact: 'Contacto',
      testimonials: 'Testimonios'
    },
    en: {
      home: 'Home',
      accommodations: 'Accommodations',
      services: 'Services',
      location: 'Location',
      contact: 'Contact',
      testimonials: 'Testimonials'
    }
  };

  const t = translations[currentLang];

  const menuItems = [
    { label: t.home, href: '#home' },
    { label: t.accommodations, href: '#accommodations' },
    { label: t.services, href: '#services' },
    { label: t.location, href: '#location' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className={`text-2xl font-bold font-playfair transition-colors duration-200 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}
            style={!isScrolled ? { textShadow: '2px 2px 4px rgba(0,0,0,0.8)' } : {}}
            >
              Refugio Natural
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-gray-600' 
                    : 'text-white hover:text-gray-200 drop-shadow-md'
                }`}
                style={!isScrolled ? { textShadow: '1px 1px 3px rgba(0,0,0,0.8)' } : {}}
              >
                {item.label}
              </a>
            ))}
              {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Globe size={16} className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
              }`} />
              <button
                onClick={() => onLanguageChange(currentLang === 'es' ? 'en' : 'es')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-gray-600' 
                    : 'text-white hover:text-gray-200 drop-shadow-md'
                }`}
                style={!isScrolled ? { textShadow: '1px 1px 3px rgba(0,0,0,0.8)' } : {}}
              >
                {currentLang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          </div>          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10 drop-shadow-md'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg shadow-lg mt-2 p-4 animate-fade-in border border-gray-200">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t pt-3 flex items-center space-x-2">
                <Globe size={16} className="text-gray-800" />
                <button
                  onClick={() => {
                    onLanguageChange(currentLang === 'es' ? 'en' : 'es');
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  {currentLang === 'es' ? 'English' : 'Español'}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
