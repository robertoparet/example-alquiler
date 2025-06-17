'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Bed, Bath, Wifi, Coffee, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';

interface AccommodationProps {
  currentLang: 'es' | 'en';
}

const Accommodations = ({ currentLang }: AccommodationProps) => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    es: {
      title: 'Nuestros Alojamientos',
      subtitle: 'Cada espacio ha sido diseñado para ofrecerte el máximo confort en armonía con la naturaleza',
      viewGallery: 'Ver galería',
      bookNow: 'Reservar ahora',
      pricePerNight: 'por noche',
      guests: 'huéspedes',
      bedrooms: 'habitaciones',
      bathrooms: 'baños',
      amenities: 'Comodidades',
      closeGallery: 'Cerrar galería'
    },
    en: {
      title: 'Our Accommodations',
      subtitle: 'Each space has been designed to offer you maximum comfort in harmony with nature',
      viewGallery: 'View gallery',
      bookNow: 'Book now',
      pricePerNight: 'per night',
      guests: 'guests',
      bedrooms: 'bedrooms',
      bathrooms: 'bathrooms',
      amenities: 'Amenities',
      closeGallery: 'Close gallery'
    }
  };

  const t = translations[currentLang];

  const accommodations = [
    {
      id: 1,
      name: currentLang === 'es' ? 'Cabaña del Bosque' : 'Forest Cabin',
      description: currentLang === 'es' 
        ? 'Una acogedora cabaña rodeada de árboles centenarios, perfecta para una escapada romántica o familiar.'
        : 'A cozy cabin surrounded by century-old trees, perfect for a romantic or family getaway.',
      price: 85,
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      images: [
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: [
        { icon: Wifi, label: 'WiFi' },
        { icon: Coffee, label: currentLang === 'es' ? 'Desayuno' : 'Breakfast' },
        { icon: Mountain, label: currentLang === 'es' ? 'Vista montaña' : 'Mountain view' }
      ]
    },
    {
      id: 2,
      name: currentLang === 'es' ? 'Suite Panorámica' : 'Panoramic Suite',
      description: currentLang === 'es'
        ? 'Habitación espaciosa con vistas espectaculares al valle y todas las comodidades modernas.'
        : 'Spacious room with spectacular valley views and all modern amenities.',
      price: 120,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: [
        { icon: Wifi, label: 'WiFi' },
        { icon: Coffee, label: currentLang === 'es' ? 'Desayuno' : 'Breakfast' },
        { icon: Mountain, label: currentLang === 'es' ? 'Vista panorámica' : 'Panoramic view' }
      ]
    },
    {
      id: 3,
      name: currentLang === 'es' ? 'Casa del Río' : 'River House',
      description: currentLang === 'es'
        ? 'Casa completa junto al río con terraza privada y acceso directo a senderos naturales.'
        : 'Complete house by the river with private terrace and direct access to nature trails.',
      price: 150,
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      amenities: [
        { icon: Wifi, label: 'WiFi' },
        { icon: Coffee, label: currentLang === 'es' ? 'Cocina completa' : 'Full kitchen' },
        { icon: Mountain, label: currentLang === 'es' ? 'Acceso al río' : 'River access' }
      ]
    }
  ];

  const openGallery = (accommodationId: number) => {
    setSelectedAccommodation(accommodationId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedAccommodation(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAccommodation) {
      const accommodation = accommodations.find(acc => acc.id === selectedAccommodation);
      if (accommodation) {
        setCurrentImageIndex((prev) => 
          prev === accommodation.images.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedAccommodation) {
      const accommodation = accommodations.find(acc => acc.id === selectedAccommodation);
      if (accommodation) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? accommodation.images.length - 1 : prev - 1
        );
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="accommodations" className="py-20 bg-gradient-to-b from-earth-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {accommodations.map((accommodation) => (            <motion.div
              key={accommodation.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={accommodation.images[0]}
                  alt={accommodation.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => openGallery(accommodation.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-forest-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200"
                >
                  {t.viewGallery}
                </button>
                <div className="absolute bottom-4 left-4 bg-forest-800 text-white px-3 py-1 rounded-full">
                  <span className="text-lg font-bold">${accommodation.price}</span>
                  <span className="text-sm ml-1">{t.pricePerNight}</span>
                </div>
              </div>              <div className="p-6">
                <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-3">
                  {accommodation.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {accommodation.description}
                </p>

                <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{accommodation.guests} {t.guests}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bed size={16} />
                    <span>{accommodation.bedrooms} {t.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath size={16} />
                    <span>{accommodation.bathrooms} {t.bathrooms}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{t.amenities}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-forest-100 text-forest-700 px-2 py-1 rounded-full text-xs"
                      >
                        <amenity.icon size={12} />
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-forest-700 hover:bg-forest-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  {t.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gallery Modal */}
      {selectedAccommodation && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <span className="sr-only">{t.closeGallery}</span>
              ✕
            </button>
            
            <div className="relative">
              <img
                src={accommodations.find(acc => acc.id === selectedAccommodation)?.images[currentImageIndex]}
                alt=""
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {accommodations.find(acc => acc.id === selectedAccommodation)?.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accommodations;
