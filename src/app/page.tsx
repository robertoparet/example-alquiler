'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Accommodations from '@/components/Accommodations';
import Services from '@/components/Services';
import Location from '@/components/Location';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setCurrentLang(lang);
  };

  return (
    <main className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <Hero currentLang={currentLang} />
      <Accommodations currentLang={currentLang} />
      <Services currentLang={currentLang} />
      <Location currentLang={currentLang} />
      <Testimonials currentLang={currentLang} />
      <Contact currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  );
}
