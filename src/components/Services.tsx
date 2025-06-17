'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wifi, Coffee, MapPin, Bike, TreePine, Camera, Car, Utensils } from 'lucide-react';

interface ServicesProps {
  currentLang: 'es' | 'en';
}

const Services = ({ currentLang }: ServicesProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    es: {
      title: 'Servicios Incluidos',
      subtitle: 'Todo lo que necesitas para una estancia perfecta está incluido',
      services: [
        {
          icon: Wifi,
          title: 'WiFi Gratuito',
          description: 'Conexión a internet de alta velocidad en todas las áreas'
        },
        {
          icon: Coffee,
          title: 'Desayuno Continental',
          description: 'Desayuno fresco con productos locales cada mañana'
        },
        {
          icon: MapPin,
          title: 'Rutas de Senderismo',
          description: 'Mapas y guías para explorar los mejores senderos'
        },        {
          icon: Bike,
          title: 'Bicicletas',
          description: 'Bicicletas gratuitas para recorrer los alrededores'
        },
        {
          icon: TreePine,
          title: 'Tours Naturales',
          description: 'Excursiones guiadas para conocer la flora y fauna local'
        },
        {
          icon: Camera,
          title: 'Spots Fotográficos',
          description: 'Los mejores lugares para capturar la belleza natural'
        },
        {
          icon: Car,
          title: 'Estacionamiento',
          description: 'Parking gratuito y seguro para todos los huéspedes'
        },
        {
          icon: Utensils,
          title: 'Cocina Equipada',
          description: 'Cocinas completamente equipadas en nuestras cabañas'
        }
      ]
    },
    en: {
      title: 'Included Services',
      subtitle: 'Everything you need for a perfect stay is included',
      services: [
        {
          icon: Wifi,
          title: 'Free WiFi',
          description: 'High-speed internet connection in all areas'
        },
        {
          icon: Coffee,
          title: 'Continental Breakfast',
          description: 'Fresh breakfast with local products every morning'
        },
        {
          icon: MapPin,
          title: 'Hiking Trails',
          description: 'Maps and guides to explore the best trails'
        },        {
          icon: Bike,
          title: 'Bicycles',
          description: 'Free bicycles to explore the surroundings'
        },
        {
          icon: TreePine,
          title: 'Nature Tours',
          description: 'Guided excursions to discover local flora and fauna'
        },
        {
          icon: Camera,
          title: 'Photo Spots',
          description: 'The best places to capture natural beauty'
        },
        {
          icon: Car,
          title: 'Parking',
          description: 'Free and secure parking for all guests'
        },
        {
          icon: Utensils,
          title: 'Equipped Kitchen',
          description: 'Fully equipped kitchens in our cabins'
        }
      ]
    }
  };

  const t = translations[currentLang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-forest-50">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.services.map((service, index) => (            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center border border-gray-100"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-forest-100 p-4 rounded-full">
                  <service.icon size={32} className="text-forest-700" />
                </div>
              </div>              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
