'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

interface ContactProps {
  currentLang: 'es' | 'en';
}

const Contact = ({ currentLang }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const translations = {
    es: {
      title: 'Reserva tu escapada',
      subtitle: 'Contáctanos para consultar disponibilidad y crear tu experiencia perfecta en la naturaleza',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono (opcional)',
        checkIn: 'Fecha de llegada',
        checkOut: 'Fecha de salida',
        guests: 'Número de huéspedes',
        message: 'Mensaje (requisitos especiales)',
        send: 'Enviar consulta'
      },
      contact: {
        title: 'Información de contacto',
        whatsapp: 'WhatsApp',
        email: 'Email',
        phone: 'Teléfono',
        address: 'Dirección'
      },
      whatsappButton: 'Reservar por WhatsApp',
      calendlyButton: 'Agendar videollamada'
    },
    en: {
      title: 'Book your getaway',
      subtitle: 'Contact us to check availability and create your perfect nature experience',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone (optional)',
        checkIn: 'Check-in date',
        checkOut: 'Check-out date',
        guests: 'Number of guests',
        message: 'Message (special requirements)',
        send: 'Send inquiry'
      },
      contact: {
        title: 'Contact information',
        whatsapp: 'WhatsApp',
        email: 'Email',
        phone: 'Phone',
        address: 'Address'
      },
      whatsappButton: 'Book via WhatsApp',
      calendlyButton: 'Schedule video call'
    }
  };

  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con el backend o servicio de email
    console.log('Form submitted:', formData);
    alert(currentLang === 'es' ? 'Mensaje enviado correctamente' : 'Message sent successfully');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = currentLang === 'es' 
      ? 'Hola, me interesa hacer una reserva en Refugio Natural'
      : 'Hello, I am interested in making a reservation at Refugio Natural';
    const phoneNumber = '1234567890'; // Cambiar por el número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCalendlyClick = () => {
    // Aquí se abriría Calendly
    window.open('https://calendly.com/refugionatural', '_blank');
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
    <section id="contact" className="py-20 bg-forest-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-forest-200 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.guests}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Seleccionar</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.checkIn}
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.form.checkOut}
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-400 hover:bg-forest-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t.form.send}</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:pl-8">
              <h3 className="text-2xl font-bold font-playfair mb-8">
                {t.contact.title}
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-forest-700 p-3 rounded-full">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.whatsapp}</p>
                    <p className="text-forest-200">+1 234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-forest-700 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.email}</p>
                    <p className="text-forest-200">info@refugionatural.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-forest-700 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.phone}</p>
                    <p className="text-forest-200">+1 234 567 891</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-forest-700 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.address}</p>
                    <p className="text-forest-200">Camino Rural 123<br />Valle Verde, Provincia Natural</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>{t.whatsappButton}</span>
                </button>

                <button
                  onClick={handleCalendlyClick}
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>{t.calendlyButton}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
