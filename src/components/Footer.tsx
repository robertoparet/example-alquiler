'use client';

import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone } from 'lucide-react';

interface FooterProps {
  currentLang: 'es' | 'en';
}

const Footer = ({ currentLang }: FooterProps) => {
  const translations = {
    es: {
      tagline: 'Tu refugio en la naturaleza',
      quickLinks: 'Enlaces rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      legal: 'Legal',
      allRightsReserved: 'Todos los derechos reservados',
      links: {
        home: 'Inicio',
        accommodations: 'Alojamientos',
        services: 'Servicios',
        location: 'Ubicación',
        testimonials: 'Testimonios',
        contact: 'Contacto'
      },
      legalLinks: {
        privacy: 'Política de privacidad',
        terms: 'Términos y condiciones',
        cookies: 'Política de cookies'
      }
    },
    en: {
      tagline: 'Your refuge in nature',
      quickLinks: 'Quick links',
      contact: 'Contact',
      followUs: 'Follow us',
      legal: 'Legal',
      allRightsReserved: 'All rights reserved',
      links: {
        home: 'Home',
        accommodations: 'Accommodations',
        services: 'Services',
        location: 'Location',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      legalLinks: {
        privacy: 'Privacy policy',
        terms: 'Terms and conditions',
        cookies: 'Cookie policy'
      }
    }
  };

  const t = translations[currentLang];

  const quickLinks = [
    { label: t.links.home, href: '#home' },
    { label: t.links.accommodations, href: '#accommodations' },
    { label: t.links.services, href: '#services' },
    { label: t.links.location, href: '#location' },
    { label: t.links.testimonials, href: '#testimonials' },
    { label: t.links.contact, href: '#contact' },
  ];

  const legalLinks = [
    { label: t.legalLinks.privacy, href: '/privacy' },
    { label: t.legalLinks.terms, href: '/terms' },
    { label: t.legalLinks.cookies, href: '/cookies' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/refugionatural', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/refugionatural', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/refugionatural', label: 'Twitter' },
  ];

  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-playfair mb-2">
                Refugio Natural
              </h3>
              <p className="text-forest-300 text-sm">
                {t.tagline}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MessageCircle size={16} className="text-forest-400" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-forest-400" />
                <span>info@refugionatural.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-forest-400" />
                <span>+1 234 567 891</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-forest-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.contact}</h4>
            <div className="space-y-3 text-sm text-forest-300">
              <p>Camino Rural 123</p>
              <p>Valle Verde</p>
              <p>Provincia Natural</p>
              <p className="mt-4">
                <span className="block font-medium text-white mb-1">
                  {currentLang === 'es' ? 'Horario de atención:' : 'Business hours:'}
                </span>
                {currentLang === 'es' ? 'Lunes a Domingo' : 'Monday to Sunday'}<br />
                9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.followUs}</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-forest-800 hover:bg-forest-700 p-3 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <div>
              <h5 className="text-sm font-medium mb-3">{t.legal}</h5>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-forest-400 hover:text-white transition-colors duration-200 text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-forest-400 text-sm">
              © 2024 Refugio Natural. {t.allRightsReserved}
            </p>
            <p className="text-forest-400 text-xs">
              {currentLang === 'es' 
                ? 'Desarrollado con ❤️ para amantes de la naturaleza'
                : 'Developed with ❤️ for nature lovers'
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
