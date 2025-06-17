# Deployment Guide - Refugio Natural

## 🚀 Opciones de Deployment

### 1. Vercel (Recomendado)
La opción más fácil para proyectos Next.js:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy desde la raíz del proyecto
vercel

# Seguir las instrucciones interactivas
```

**O directamente desde GitHub:**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio `example-alquiler`
4. Deploy automático

### 2. Netlify
1. Ve a [netlify.com](https://netlify.com)
2. "New site from Git"
3. Conecta GitHub y selecciona el repo
4. Build command: `npm run build`
5. Publish directory: `.next`

### 3. GitHub Pages (Estático)
```bash
# Instalar dependencias para export estático
npm install --save-dev @next/bundle-analyzer

# Modificar next.config.ts para export estático
# Luego ejecutar:
npm run build
npm run export

# Subir la carpeta 'out' a GitHub Pages
```

## ⚙️ Variables de Entorno

Crear un archivo `.env.local`:

```env
# Configuración de la aplicación
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# Email service (opcional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-password

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🛠 Configuraciones Post-Deployment

### 1. Dominio Personalizado
- Configurar DNS para apuntar a tu hosting
- Configurar SSL/HTTPS automático

### 2. Google Maps Integration
```javascript
// Reemplazar en src/components/Location.tsx
<iframe
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=tu-direccion`}
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### 3. WhatsApp Integration
```javascript
// Ya está configurado, solo cambiar el número en:
// src/components/Hero.tsx
// src/components/Contact.tsx
const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';
```

### 4. Calendly Integration
```javascript
// En src/components/Contact.tsx
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/refugionatural';
```

## 📊 Analytics y Monitoreo

### Google Analytics
```bash
npm install @next/third-parties
```

En `src/app/layout.tsx`:
```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}
```

### Performance Monitoring
- Vercel Analytics (automático)
- Google PageSpeed Insights
- GTmetrix para optimización

## 🔧 Optimizaciones de Producción

### 1. Imágenes
```bash
# Convertir imágenes a WebP
npm install sharp

# Configurar en next.config.ts
images: {
  formats: ['image/webp', 'image/avif'],
  domains: ['images.unsplash.com'],
}
```

### 2. Bundle Analysis
```bash
npm run analyze
```

### 3. SEO Adicional
- Configurar sitemap.xml
- Añadir schema.org markup
- Optimizar meta tags por página

## 🚨 Checklist Pre-Launch

- [ ] Cambiar todos los números de teléfono de ejemplo
- [ ] Configurar dominio de email real
- [ ] Reemplazar URLs de Calendly
- [ ] Añadir Google Maps real
- [ ] Configurar analytics
- [ ] Probar formularios de contacto
- [ ] Verificar responsive en dispositivos reales
- [ ] Test de velocidad (PageSpeed Insights)
- [ ] Verificar accesibilidad
- [ ] SSL/HTTPS habilitado

## 📱 Mantenimiento

### Actualizar contenido:
- Modificar precios en `src/components/Accommodations.tsx`
- Actualizar testimonios en `src/components/Testimonials.tsx`
- Añadir nuevos servicios en `src/components/Services.tsx`

### Backups:
- Código fuente: GitHub
- Base de datos: configurar backups automáticos
- Imágenes: almacenar originales por separado

## 📞 Soporte Técnico

Para dudas técnicas:
- GitHub Issues: https://github.com/robertoparet/example-alquiler/issues
- Documentación Next.js: https://nextjs.org/docs
- Documentación TailwindCSS: https://tailwindcss.com/docs

---

# Guía de Despliegue

## Despliegue en Vercel (Recomendado)

### Pasos para desplegar:

1. **Conectar repositorio:**
   - Ve a [vercel.com](https://vercel.com) y haz login
   - Haz clic en "New Project"
   - Conecta tu repositorio de GitHub: `robertoparet/example-alquiler`

2. **Configuración del proyecto:**
   - Framework Preset: `Next.js`
   - Node.js Version: `18.x` (especificado en `.nvmrc`)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables de entorno (opcionales):**
   ```
   NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-usuario
   ```

### Solución de problemas comunes:

#### Error de compilación:
- **Problema**: React 19 y Next.js 15 pueden causar conflictos
- **Solución**: Los archivos ya están configurados correctamente con:
  - `.nvmrc` especifica Node.js 18
  - `next.config.ts` optimizado para producción
  - `vercel.json` simplificado

#### Error de tipos TypeScript:
- **Problema**: Versiones incompatibles
- **Solución**: Ejecutar localmente:
  ```bash
  npm run build
  ```
  Si funciona localmente, debería funcionar en Vercel.

#### Problemas con imágenes:
- Las imágenes externas (Unsplash) están configuradas en `next.config.ts`
- Para mejor rendimiento, considera usar imágenes locales en `/public`

### Verificación del despliegue:

1. **Build exitoso**: Verifica que no hay errores en los logs de Vercel
2. **Funcionalidades**: 
   - ✅ Navegación smooth scroll
   - ✅ Cambio de idioma
   - ✅ Responsive design
   - ✅ Animaciones Framer Motion
   - ✅ Google Maps embebido
   - ✅ WhatsApp integration

## Despliegue en Netlify (Alternativo)

### Configuración:
```toml
# netlify.toml
[build]
  publish = ".next"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
