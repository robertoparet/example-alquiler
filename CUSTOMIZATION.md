# 🎨 Guía de Personalización - Refugio Natural

## 📋 Checklist de Personalización

### 1. 📞 Información de Contacto

#### Cambiar números de WhatsApp:
**Archivos a modificar:**
- `src/components/Hero.tsx` (línea ~34)
- `src/components/Contact.tsx` (línea ~112)
- `src/components/Footer.tsx` (línea ~89)

```javascript
// Cambiar este número:
const phoneNumber = '1234567890'; // ← Tu número real sin espacios ni símbolos
```

#### Cambiar emails:
- `src/components/Footer.tsx` (línea ~94)
- `src/components/Contact.tsx` (información de contacto)

```javascript
// Cambiar estos emails:
'info@refugionatural.com' → 'tu-email@tudominio.com'
```

### 2. 🏠 Personalizar Alojamientos

**Archivo:** `src/components/Accommodations.tsx`

```javascript
const accommodations = [
  {
    id: 1,
    name: currentLang === 'es' ? 'TU CABAÑA 1' : 'YOUR CABIN 1',
    description: 'Tu descripción aquí...',
    price: 85, // ← Tu precio por noche
    guests: 4,  // ← Capacidad
    bedrooms: 2, // ← Número de habitaciones
    bathrooms: 1, // ← Número de baños
    images: [
      'URL_DE_TU_IMAGEN_1.jpg', // ← Tus imágenes reales
      'URL_DE_TU_IMAGEN_2.jpg',
      'URL_DE_TU_IMAGEN_3.jpg'
    ],
    // ... rest of config
  }
  // Añadir más alojamientos aquí
];
```

### 3. 🛎️ Servicios Incluidos

**Archivo:** `src/components/Services.tsx`

Personalizar la lista de servicios en las líneas 19-70:

```javascript
services: [
  {
    icon: Wifi,
    title: 'Tu Servicio',
    description: 'Descripción de tu servicio'
  },
  // Añadir más servicios...
]
```

### 4. 📍 Ubicación

**Archivo:** `src/components/Location.tsx`

```javascript
// Líneas 25-35, cambiar:
address: 'Tu dirección real',
driveTime: 'X horas en coche desde tu ciudad',
airportTime: 'X min al aeropuerto más cercano',
carInstructions: 'Instrucciones reales de llegada',
airportInstructions: 'Aeropuerto real - XXkm',
```

#### Integrar Google Maps real:
```javascript
// Reemplazar el div placeholder (línea ~100) con:
<iframe
  src="https://www.google.com/maps/embed?pb=TU_CODIGO_DE_EMBED_AQUI"
  width="100%"
  height="384"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### 5. ⭐ Testimonios

**Archivo:** `src/components/Testimonials.tsx`

Reemplazar testimonios de ejemplo (líneas 25-65):

```javascript
testimonials: [
  {
    name: 'Nombre Real del Cliente',
    location: 'Ciudad, País',
    rating: 5,
    text: 'Testimonio real de tu cliente...',
    date: 'Mes Año'
  },
  // Más testimonios reales...
]
```

### 6. 🎨 Colores y Branding

**Archivo:** `tailwind.config.ts`

```javascript
// Personalizar paleta de colores (líneas 12-45):
colors: {
  nature: {
    // Tus colores personalizados
    500: '#TU_COLOR_PRINCIPAL',
  },
  forest: {
    // Tus verdes personalizados
    700: '#TU_VERDE_PRINCIPAL',
  },
  earth: {
    // Tus tonos tierra personalizados
    500: '#TU_MARRON_PRINCIPAL',
  }
}
```

### 7. 📝 Textos y Nombre del Negocio

#### Cambiar nombre del negocio:
**Archivos a modificar:**
- `src/components/Header.tsx` (línea 58): `"Refugio Natural"`
- `src/components/Footer.tsx` (línea 67): `"Refugio Natural"`
- `src/app/layout.tsx` (línea 15): Title y description

#### Cambiar frase principal:
`src/components/Hero.tsx` (líneas 14-16):
```javascript
es: {
  tagline: 'Tu frase impactante aquí.',
  subtitle: 'Tu descripción extendida...',
}
```

### 8. 🖼️ Imágenes

#### Subir tus propias imágenes:
1. Añadir imágenes a `public/images/`
2. Actualizar URLs en:
   - `src/components/Hero.tsx` (imagen de fondo)
   - `src/components/Accommodations.tsx` (fotos de cabañas)

#### Para imágenes optimizadas:
```javascript
// Usar Next.js Image component:
import Image from 'next/image';

<Image
  src="/images/tu-imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
  priority // Para imagen principal
/>
```

### 9. 🌐 SEO y Metadata

**Archivo:** `src/app/layout.tsx`

```javascript
export const metadata = {
  title: "Tu Negocio - Tu Descripción",
  description: "Tu descripción SEO optimizada...",
  keywords: "tus, palabras, clave, turismo, rural",
  // ...
  openGraph: {
    title: "Tu Negocio",
    description: "Tu descripción para redes sociales",
    url: 'https://tu-dominio.com',
    siteName: 'Tu Negocio',
  },
}
```

### 10. 🔗 Enlaces Externos

#### Calendly:
`src/components/Contact.tsx` (línea ~124):
```javascript
window.open('https://calendly.com/TU-USUARIO', '_blank');
```

#### Redes Sociales:
`src/components/Footer.tsx` (líneas 85-88):
```javascript
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/TU-PAGINA', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/TU-USUARIO', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/TU-USUARIO', label: 'Twitter' },
];
```

## 🚀 Después de Personalizar

1. **Probar localmente:**
   ```bash
   npm run dev
   ```

2. **Hacer commit de cambios:**
   ```bash
   git add .
   git commit -m "Personalización inicial con datos reales"
   git push
   ```

3. **Deploy automático:** Si usas Vercel/Netlify, el deploy será automático.

## ⚠️ Importante

- ✅ Siempre hacer backup antes de cambios grandes
- ✅ Probar en móvil después de cambios
- ✅ Verificar que todos los enlaces funcionen
- ✅ Comprobar que los formularios envíen emails
- ✅ Test de velocidad después de añadir imágenes

---

**¡Con estos cambios tu sitio web será 100% tuyo y profesional!** 🎉
