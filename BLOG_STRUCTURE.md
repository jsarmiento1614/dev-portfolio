# Estructura del Blog

Este documento describe la organización de todos los archivos relacionados con el blog del portfolio.

## 📁 Estructura de Carpetas

```
├── components/blog/           # Componentes específicos del blog
│   ├── index.ts              # Exportaciones centralizadas
│   ├── hero-buttons.tsx      # Botones del hero del blog
│   ├── stats.tsx             # Estadísticas del blog
│   ├── categories.tsx        # Categorías y tags
│   ├── newsletter.tsx        # Componente de newsletter
│   ├── breadcrumbs.tsx       # Navegación de breadcrumbs
│   └── scroll-animations.tsx # Animaciones de scroll
├── lib/blog/                 # Utilidades y funciones del blog
│   ├── index.ts              # Exportaciones centralizadas
│   └── mdx.ts                # Funciones para manejar MDX
├── hooks/blog/               # Hooks específicos del blog
│   ├── index.ts              # Exportaciones centralizadas
│   ├── use-blog-posts.ts     # Hook para manejar posts
│   ├── use-blog-search.ts    # Hook para búsqueda
│   └── use-blog-analytics.ts # Hook para analytics
└── content/blog/             # Contenido MDX del blog
    ├── angular-vs-react.mdx
    ├── nextjs-performance.mdx
    └── react-tips.mdx
```

## 🧩 Componentes del Blog

### `components/blog/`

- **`hero-buttons.tsx`**: Botones de llamada a la acción en el hero
- **`stats.tsx`**: Estadísticas animadas del blog (posts, categorías, etc.)
- **`categories.tsx`**: Componente para mostrar categorías y TagCloud
- **`newsletter.tsx`**: Formulario de suscripción al newsletter
- **`breadcrumbs.tsx`**: Navegación de breadcrumbs
- **`scroll-animations.tsx`**: Componentes de animación (ScrollAnimations, AnimatedCard, etc.)

## 🔧 Utilidades del Blog

### `lib/blog/`

- **`mdx.ts`**: Funciones para leer y procesar archivos MDX
  - `getAllPosts()`: Obtiene todos los posts
  - `getPostBySlug()`: Obtiene un post específico por slug
  - Interface `Post`: Tipo para los posts

## 🎣 Hooks del Blog

### `hooks/blog/`

- **`use-blog-posts.ts`**: Hook para manejar posts con filtros
- **`use-blog-search.ts`**: Hook para funcionalidad de búsqueda y filtros
- **`use-blog-analytics.ts`**: Hook para tracking de analytics específicos del blog

## 📝 Uso

### Importar componentes:
```typescript
import { 
  BlogHeroButtons, 
  BlogStats, 
  BlogCategories,
  BlogNewsletter,
  BlogBreadcrumbs 
} from '@/components/blog'
```

### Importar utilidades:
```typescript
import { getAllPosts, getPostBySlug } from '@/lib/blog'
```

### Importar hooks:
```typescript
import { useBlogPosts, useBlogSearch, useBlogAnalytics } from '@/hooks/blog'
```

## 🎯 Beneficios de esta Estructura

1. **Organización clara**: Todo lo relacionado con el blog está agrupado
2. **Fácil mantenimiento**: Cambios específicos del blog están centralizados
3. **Reutilización**: Componentes y hooks pueden ser reutilizados fácilmente
4. **Escalabilidad**: Fácil agregar nuevas funcionalidades al blog
5. **Separación de responsabilidades**: Cada carpeta tiene un propósito específico

## 🔄 Migración Completada

- ✅ Componentes movidos a `components/blog/`
- ✅ Utilidades movidas a `lib/blog/`
- ✅ Hooks creados en `hooks/blog/`
- ✅ Importaciones actualizadas en todas las páginas
- ✅ Archivos originales eliminados
- ✅ Exportaciones centralizadas con archivos `index.ts`
