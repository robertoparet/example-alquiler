'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';

interface HeroProps {
  currentLang: 'es' | 'en';
}

const Hero = ({ currentLang }: HeroProps) => {
  const translations = {
    es: {
      tagline: 'Escápate del ruido. Vive la tranquilidad.',
      subtitle: 'Descubre nuestras cabañas y habitaciones rurales en plena naturaleza. Un refugio perfecto para reconectar contigo mismo.',
      whatsappButton: 'Reservar por WhatsApp',
      bookButton: 'Ver disponibilidad',
      scrollText: 'Descubre más'
    },
    en: {
      tagline: 'Escape the noise. Live the tranquility.',
      subtitle: 'Discover our cabins and rural rooms in the heart of nature. A perfect refuge to reconnect with yourself.',
      whatsappButton: 'Book via WhatsApp',
      bookButton: 'Check availability',
      scrollText: 'Discover more'
    }
  };

  const t = translations[currentLang];

  const handleWhatsAppClick = () => {
    const message = currentLang === 'es' 
      ? 'Hola, me interesa hacer una reserva en Refugio Natural'
      : 'Hello, I am interested in making a reservation at Refugio Natural';
    const phoneNumber = '1234567890'; // Cambiar por el número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair mb-6 leading-tight text-white drop-shadow-lg"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
        >
          {t.tagline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl mb-8 font-light leading-relaxed text-white max-w-3xl mx-auto drop-shadow-md"
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={20} />
            <span>{t.whatsappButton}</span>
          </button>
          
          <a
            href="#accommodations"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-white/30 hover:border-white/50"
          >
            <Calendar size={20} />
            <span>{t.bookButton}</span>
          </a>
        </motion.div>
      </div>      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center drop-shadow-md"
        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
      >
        <p className="text-sm mb-2 font-light">{t.scrollText}</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-white mx-auto drop-shadow-md"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
