# Configuración del Formulario de Contacto

## 📧 Configuración de Resend

El formulario de contacto usa **Resend** para enviar emails. Es gratuito y muy fácil de configurar.

### 1. Crear cuenta en Resend
1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener API Key
1. Ve a la sección "API Keys"
2. Crea una nueva API key
3. Copia la key (empieza con `re_`)

### 3. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=re_tu_api_key_aqui
```

### 4. Verificar dominio (opcional)
Para usar `contact@jsarmiento.dev` como remitente:
1. Ve a "Domains" en Resend
2. Agrega tu dominio `jsarmiento.dev`
3. Sigue las instrucciones de verificación DNS

### 5. Configuración alternativa
Si no tienes dominio verificado, puedes usar:
- `onboarding@resend.dev` (para pruebas)
- O verificar tu dominio personal

## 🚀 Deploy en Vercel

### 1. Configurar variables de entorno en Vercel
1. Ve a tu proyecto en Vercel
2. Settings > Environment Variables
3. Agrega `RESEND_API_KEY` con tu API key

### 2. Deploy
El formulario funcionará automáticamente después del deploy.

## 📱 Funcionalidades

- ✅ Validación de campos
- ✅ Validación de email
- ✅ Manejo de errores
- ✅ Email HTML profesional
- ✅ Reply-to configurado
- ✅ Timestamp automático
- ✅ Responsive design

## 🎨 Personalización

### Cambiar email de destino
En `app/api/contact/route.ts`, línea 25:
```typescript
to: ['tu-email@gmail.com'],
```

### Cambiar remitente
En `app/api/contact/route.ts`, línea 24:
```typescript
from: 'Tu Nombre <contact@tudominio.com>',
```

### Personalizar template de email
Modifica el HTML en `app/api/contact/route.ts`, líneas 26-65.

## 🔒 Seguridad

- ✅ Validación de entrada
- ✅ Rate limiting (configurado en Resend)
- ✅ Sanitización de datos
- ✅ Manejo seguro de errores

## 📊 Monitoreo

Puedes ver todos los emails enviados en el dashboard de Resend:
- [resend.com/emails](https://resend.com/emails)
