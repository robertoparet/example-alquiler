# Refugio Natural - Página Web de Alquiler de Cabañas Rurales

Una página web minimalista, elegante y moderna para un negocio turístico que alquila cabañas y habitaciones rurales en una zona de naturaleza.

## 🌟 Características

- **Diseño 100% Responsive** - Perfectamente optimizada para todos los dispositivos
- **Minimalista y Elegante** - Diseño limpio con colores naturales
- **Multi-idioma** - Soporte para Español e Inglés
- **Optimizada para SEO** - Meta tags completos y estructura semántica
- **Animaciones Suaves** - Efectos visuales con Framer Motion
- **Rápida y Ligera** - Construida con Next.js 15 y TailwindCSS

## 🎨 Características de Diseño

### Colores
- **Paleta Natural**: Tonos tierra, verdes suaves, blanco, beige
- **Esquema de Colores**: 
  - Forest (Bosque): #607760, #4b5f4b, #3d4e3d
  - Nature (Naturaleza): #a18856, #8d764a, #73603e
  - Earth (Tierra): #a89878, #978268, #7d6a57

### Tipografías
- **Playfair Display**: Para títulos principales
- **Lora**: Para contenido editorial
- **Inter**: Para texto general y UI

### Animaciones
- Fade-in al hacer scroll
- Slide-up para elementos
- Hover effects suaves
- Transiciones fluidas

## 📱 Secciones

1. **Hero/Portada**
   - Imagen a pantalla completa
   - Frase impactante: "Escápate del ruido. Vive la tranquilidad."
   - Botones de acción (WhatsApp y Ver disponibilidad)

2. **Alojamientos**
   - Galería de imágenes por cabaña
   - Información detallada (precio, huéspedes, comodidades)
   - Sistema de carrusel/modal para fotos

3. **Servicios**
   - Iconos y descripción de servicios incluidos
   - WiFi, desayuno, senderismo, bicicletas, etc.

4. **Ubicación**
   - Mapa interactivo (placeholder para Google Maps)
   - Instrucciones de llegada
   - Información de transporte

5. **Testimonios**
   - Carrusel automático de reseñas
   - Calificaciones con estrellitas
   - Información del huésped

6. **Contacto**
   - Formulario de consulta/reserva
   - Información de contacto
   - Integración con WhatsApp y Calendly

7. **Footer**
   - Enlaces rápidos
   - Redes sociales
   - Información legal

## 🚀 Tecnologías

- **Next.js 15** - Framework React para producción
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos SVG
- **React Intersection Observer** - Detección de scroll

## 🛠 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd example-alquiler

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y fuentes
├── components/
│   ├── Header.tsx          # Navegación y cambio de idioma
│   ├── Hero.tsx            # Sección de portada
│   ├── Accommodations.tsx  # Sección de alojamientos
│   ├── Services.tsx        # Sección de servicios
│   ├── Location.tsx        # Sección de ubicación
│   ├── Testimonials.tsx    # Sección de testimonios
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
public/
├── images/                 # Imágenes del sitio
└── ...                     # Otros assets estáticos
```

## 🌐 Funcionalidades

### Multi-idioma
- Cambio dinámico entre Español e Inglés
- Todas las secciones traducidas
- SEO optimizado para ambos idiomas

### Integración WhatsApp
- Botones directos para WhatsApp
- Mensajes pre-configurados
- Número de teléfono personalizable

### SEO Optimizado
- Meta tags completos
- Open Graph para redes sociales
- Datos estructurados
- URLs semánticas
- Sitemap automático

### Performance
- Imágenes optimizadas (recomendado formato .webp)
- Lazy loading
- Code splitting automático
- CSS optimizado

## 🎯 Personalización

### Cambiar Información de Contacto
Editar los siguientes archivos:
- `src/components/Header.tsx` - Número de WhatsApp
- `src/components/Contact.tsx` - Datos de contacto
- `src/components/Footer.tsx` - Información de pie de página

### Cambiar Colores
Editar `tailwind.config.ts` para modificar la paleta de colores.

### Añadir/Modificar Alojamientos
Editar el array `accommodations` en `src/components/Accommodations.tsx`.

### Integrar Google Maps
Reemplazar el placeholder en `src/components/Location.tsx` con el embed de Google Maps.

### Integrar Calendly
Cambiar la URL en `src/components/Contact.tsx` por tu enlace de Calendly.

## 📈 Mejoras Futuras

1. **Sistema de Reservas**
   - Integración con sistemas de booking
   - Calendario de disponibilidad
   - Pagos online

2. **CMS**
   - Panel administrativo
   - Gestión de contenido dinámico
   - Upload de imágenes

3. **Analytics**
   - Google Analytics
   - Tracking de conversiones
   - Métricas de performance

4. **PWA**
   - Instalación como app
   - Funcionalidad offline
   - Push notifications

## 📞 Soporte

Para soporte y consultas:
- Email: info@refugionatural.com
- WhatsApp: +1 234 567 890

## 📄 Licencia

Este proyecto está desarrollado para uso comercial del negocio turístico Refugio Natural.

---

**Desarrollado con ❤️ para amantes de la naturaleza**
