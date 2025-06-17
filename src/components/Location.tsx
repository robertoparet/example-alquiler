'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Car, Plane } from 'lucide-react';

interface LocationProps {
  currentLang: 'es' | 'en';
}

const Location = ({ currentLang }: LocationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    es: {
      title: 'Ubicación Privilegiada',
      subtitle: 'Estratégicamente ubicado en el corazón de la naturaleza, con fácil acceso desde las principales ciudades',
      address: 'Camino Rural 123, Valle Verde, Provincia Natural',
      howToGet: 'Cómo llegar',
      fromCity: 'Desde la ciudad',
      fromAirport: 'Desde el aeropuerto',
      byCar: 'En automóvil',
      byPlane: 'En avión',
      driveTime: '2 horas en coche',
      airportTime: '45 min al aeropuerto',
      carInstructions: 'Toma la autopista A1 hacia el norte, salida 23',
      airportInstructions: 'Aeropuerto Internacional - 35km',
      features: [
        'Acceso pavimentado hasta la puerta',
        'Estacionamiento gratuito',
        'Transporte desde el aeropuerto disponible',
        'Senderos marcados desde la propiedad'
      ]
    },
    en: {
      title: 'Privileged Location',
      subtitle: 'Strategically located in the heart of nature, with easy access from major cities',
      address: 'Rural Road 123, Green Valley, Natural Province',
      howToGet: 'How to get here',
      fromCity: 'From the city',
      fromAirport: 'From the airport',
      byCar: 'By car',
      byPlane: 'By plane',
      driveTime: '2 hours by car',
      airportTime: '45 min to airport',
      carInstructions: 'Take highway A1 north, exit 23',
      airportInstructions: 'International Airport - 35km',
      features: [
        'Paved access to the door',
        'Free parking',
        'Airport transportation available',
        'Marked trails from property'
      ]
    }
  };

  const t = translations[currentLang];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="location" className="py-20 bg-white min-h-screen force-dark-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center text-gray-800">
              <MapPin size={20} className="mr-2" />
              <span className="font-medium">{t.address}</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">            {/* Map Section */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                {/* Mapa de Google Maps embebido */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398398398398!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287734b5f1a1%3A0x44b0fb5dba86e0e8!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={currentLang === 'es' ? 'Ubicación de Refugio Natural' : 'Refugio Natural Location'}
                />
                
                {/* Overlay con información */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-forest-600" />
                    <span className="text-sm font-medium text-gray-800">
                      {currentLang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>{/* Information Section */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-6">
                {t.howToGet}
              </h3>

              <div className="space-y-6">
                {/* By Car */}
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Car size={24} className="text-forest-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.byCar}</h4>
                    <p className="text-gray-700 mb-1">{t.driveTime}</p>
                    <p className="text-sm text-gray-600">{t.carInstructions}</p>
                  </div>
                </div>

                {/* By Plane */}
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-100 p-3 rounded-full">
                    <Plane size={24} className="text-forest-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.byPlane}</h4>
                    <p className="text-gray-700 mb-1">{t.airportTime}</p>
                    <p className="text-sm text-gray-600">{t.airportInstructions}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8">
                <ul className="space-y-3">
                  {t.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="bg-forest-700 hover:bg-forest-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center space-x-2">
                  <MapPin size={20} />
                  <span>
                    {currentLang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
