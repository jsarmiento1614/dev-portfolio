# 🚀 Portafolio Personal - Jesús Sarmiento

Un portafolio moderno y dinámico desarrollado con Next.js, React y TypeScript que muestra mis habilidades como desarrollador full stack.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y minimalista con animaciones suaves
- **🌙 Modo Oscuro**: Soporte completo para tema claro y oscuro
- **📱 Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Carga rápida y optimizada con Next.js
- **🎭 Animaciones**: Efectos dinámicos y transiciones fluidas
- **🔍 SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Radix UI, Lucide React Icons
- **Animations**: CSS Animations, Intersection Observer
- **Deployment**: Vercel (recomendado)

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o pnpm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/dev-portfolio.git
   cd dev-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
dev-portfolio/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI base
│   ├── header.tsx        # Navegación principal
│   ├── hero-section.tsx  # Sección de bienvenida
│   ├── about-section.tsx # Sección sobre mí
│   ├── projects-section.tsx # Sección de proyectos
│   └── contact-section.tsx  # Sección de contacto
├── hooks/                # Hooks personalizados
│   └── use-scroll-animation.ts
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos
└── styles/               # Estilos adicionales
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Datos personales**: Edita `components/hero-section.tsx`
2. **Proyectos**: Modifica `components/projects-section.tsx`
3. **Habilidades**: Actualiza `components/about-section.tsx`
4. **Contacto**: Cambia `components/contact-section.tsx`

### Colores y Temas

Los colores principales se pueden modificar en `app/globals.css`:

```css
:root {
  --primary: #3b82f6;    /* Azul principal */
  --secondary: #8b5cf6;  /* Púrpura secundario */
  --accent: #06b6d4;     /* Cyan de acento */
}
```

### Animaciones

Las animaciones están definidas en `app/globals.css` y se pueden personalizar:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 🌐 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El deployment se realizará automáticamente

### Netlify

1. Construye el proyecto: `npm run build`
2. Sube la carpeta `out` a Netlify

### Otros

El proyecto es compatible con cualquier plataforma que soporte Node.js.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: jsarmiento1614@gmail.com
- **LinkedIn**: [Jesús Sarmiento](https://linkedin.com/in/jsarmiento1614)
- **GitHub**: [@jsarmiento1614](https://github.com/jsarmiento1614)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
