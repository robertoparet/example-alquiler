'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  currentLang: 'es' | 'en';
}

const Testimonials = ({ currentLang }: TestimonialsProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    es: {
      title: 'Lo que dicen nuestros huéspedes',
      subtitle: 'Experiencias reales de quienes han vivido la magia de nuestro refugio natural',
      testimonials: [
        {
          name: 'María González',
          location: 'Madrid, España',
          rating: 5,
          text: 'Una experiencia increíble. El lugar es exactamente como en las fotos, pero aún más hermoso en persona. La tranquilidad y la conexión con la naturaleza fueron exactamente lo que necesitábamos.',
          date: 'Marzo 2024'
        },
        {
          name: 'James Wilson',
          location: 'Londres, Reino Unido',
          rating: 5,
          text: 'Refugio Natural superó todas nuestras expectativas. Las cabañas son cómodas, limpias y con vistas espectaculares. El personal fue muy amable y nos ayudó a planificar rutas de senderismo.',
          date: 'Febrero 2024'
        },
        {
          name: 'Ana Rodríguez',
          location: 'Barcelona, España',
          rating: 5,
          text: 'Perfecto para desconectar del estrés de la ciudad. Los desayunos eran deliciosos y las actividades en la naturaleza, inolvidables. Definitivamente volveremos.',
          date: 'Enero 2024'
        },
        {
          name: 'Michael Brown',
          location: 'Nueva York, Estados Unidos',
          rating: 5,
          text: 'Un oasis de paz en medio de la naturaleza. Las instalaciones están impecables y la atención al detalle es excepcional. Recomendado 100%.',
          date: 'Diciembre 2023'
        }
      ]
    },
    en: {
      title: 'What our guests say',
      subtitle: 'Real experiences from those who have lived the magic of our natural refuge',
      testimonials: [
        {
          name: 'María González',
          location: 'Madrid, Spain',
          rating: 5,
          text: 'An incredible experience. The place is exactly like in the photos, but even more beautiful in person. The tranquility and connection with nature were exactly what we needed.',
          date: 'March 2024'
        },
        {
          name: 'James Wilson',
          location: 'London, United Kingdom',
          rating: 5,
          text: 'Refugio Natural exceeded all our expectations. The cabins are comfortable, clean and with spectacular views. The staff was very friendly and helped us plan hiking routes.',
          date: 'February 2024'
        },
        {
          name: 'Ana Rodríguez',
          location: 'Barcelona, Spain',
          rating: 5,
          text: 'Perfect for disconnecting from city stress. The breakfasts were delicious and the nature activities, unforgettable. We will definitely be back.',
          date: 'January 2024'
        },
        {
          name: 'Michael Brown',
          location: 'New York, United States',
          rating: 5,
          text: 'An oasis of peace in the middle of nature. The facilities are impeccable and the attention to detail is exceptional. 100% recommended.',
          date: 'December 2023'
        }
      ]
    }
  };

  const t = translations[currentLang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === t.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [t.testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === t.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? t.testimonials.length - 1 : prev - 1
    );
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-white min-h-screen force-dark-text">
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
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="relative">              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden border border-gray-100">
                <div className="absolute top-6 left-6 text-forest-200">
                  <Quote size={48} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {[...Array(t.testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>                  <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-8 font-light italic">
                    &ldquo;{t.testimonials[currentTestimonial].text}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {t.testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {t.testimonials[currentTestimonial].location}
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {t.testimonials[currentTestimonial].date}
                    </div>
                  </div>
                </div>
              </div>              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl border border-gray-200"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl border border-gray-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {t.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-forest-600' 
                      : 'bg-forest-300 hover:bg-forest-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
