# 🎯 Danketic - Soluciones Digitales Profesionales

Portafolio corporativo moderno y premium diseñado específicamente para empresas de habla inglesa que buscan soluciones digitales inteligentes.

## 📋 Descripción

**Danketic** es una plataforma de presentación de servicios digitales y portafolio de proyectos profesionales. Combina un diseño premium con funcionalidades prácticas para impresionar a potenciales clientes y socios comerciales.

El sitio está optimizado para ser presentado como prototipo a socios de negocio, con una interfaz limpia, profesional y totalmente funcional.

---

## ✨ Características Principales

### 🌐 Multiidioma
- **Inglés** como idioma principal (recomendado para audiencia internacional)
- **Español** como idioma secundario
- Cambio dinámico de idioma sin recarga de página
- Sistema de traducciones completo

### 🔐 Panel Administrativo
- Acceso restringido con autenticación de usuario y contraseña
- Gestión completa de proyectos del portafolio
- Agregar nuevos proyectos con imagen, descripción y categoría
- Opción de reset a proyectos por defecto

### 🎨 Diseño Premium
- Interfaz moderna con gradientes azul-turquesa
- Efecto glassmorphism en componentes principales
- Botón flotante de WhatsApp para contacto directo
- Footer profesional con branding destacado
- Responsive design para todos los dispositivos

### 📦 Formulario de Contacto Inteligente
Opciones de tipos de proyecto reales y profesionales:
- Dashboard E-commerce
- Sistema de Gestión de Inventario
- Dashboard Financiero
- Plataforma de Analítica
- Sistema CRM
- Aplicación Web Personalizada
- Aplicación Móvil
- Otro

### 🎪 Galería de Proyectos
- Carrusel interactivo de proyectos completados
- Vista detallada con categoría y descripción
- Opciones de: "Quiero una página igual" o "Quiero cambiar cosas"
- Botón CTA para solicitar proyecto similar

### 📱 Componentes Clave
- **Hero Section**: Titular atractivo con CTA principal
- **Servicios**: Tres pilares de valor
- **Proceso de Trabajo**: Diagrama de 4 pasos (Diagnóstico, Diseño, Desarrollo, Entrega)
- **Testimonios**: Casos de éxito reales
- **Portafolio**: Proyectos destacados
- **Contacto**: Formulario detallado con validaciones

---

## 🛠️ Tecnología Utilizada

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con gradientes, flexbox y grid
  - Animaciones suaves y transiciones
  - Efectos hover y focus
  - Variables CSS para temas
  - Responsive design
- **JavaScript Vanilla**: Sin dependencias externas
  - Gestión de idiomas (i18n)
  - Gestión de proyectos con localStorage
  - Validaciones de formularios
  - Interactividad dinámica

---

## 🚀 Inicio Rápido

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/kdpm1122/Monkey_y_DonK.git
cd Monkey_y_DonK
```

2. **Servir localmente**
```bash
# Con Python 3
python3 -m http.server 8000

# O con Python 2
python -m SimpleHTTPServer 8000

# O con Node.js
npx http-server
```

3. **Acceder al sitio**
```
http://localhost:8000
```

### Acceso al Panel Administrativo

1. Abre el navegador en `http://localhost:8000`
2. Haz clic en el icono de admin (esquina superior derecha)
3. **Usuario**: `admin`
4. **Contraseña**: `admin123`

---

## 📊 Estructura del Proyecto

```
Monkey_y_DonK/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica JavaScript e internacionalización
└── README.md           # Este archivo
```

### Archivos Principales

#### `index.html`
- Estructura semántica del sitio
- Secciones: Hero, Servicios, Proceso, Testimonios, Portafolio, Contacto
- Modal administrativo
- Botón flotante de WhatsApp
- Formulario de contacto

#### `styles.css`
- Sistema de diseño con variables CSS
- Componentes reutilizables
- Animaciones y efectos
- Media queries para responsiveness
- Gradientes y glassmorphism

#### `script.js`
- Sistema de internacionalización (i18n) completo
- Gestión de proyectos (CRUD) con localStorage
- Validación de formularios
- Autenticación de admin
- Carrusel de proyectos interactivo

---

## 🌍 Internacionalización

### Estructura de Traducciones

El sistema usa un objeto `translations` con claves jerárquicas:

```javascript
{
  'en': {
    'hero.title': 'Título en inglés',
    'hero.subtitle': 'Subtítulo en inglés',
    // ...
  },
  'es': {
    'hero.title': 'Título en español',
    'hero.subtitle': 'Subtítulo en español',
    // ...
  }
}
```

### Agregar Nuevas Traducciones

1. Abre `script.js`
2. Busca el objeto `translations`
3. Agrega las claves en ambos idiomas
4. En HTML, usa `data-i18n="clave.subkey"`

---

## 🔧 Funcionalidades Avanzadas

### Gestión de Proyectos

**Proyectos Por Defecto:**
```javascript
[
  {
    id: 1,
    title: 'Ecommerce Dashboard',
    category: 'Ecommerce',
    image: 'URL imagen',
    description: 'A panel to visualize sales, products, customers and KPIs'
  },
  // ... más proyectos
]
```

### Almacenamiento Local

Los proyectos se guardan en `localStorage` con la clave `'danketic-projects'`:
- Los datos persisten entre sesiones
- Se pueden resetear a valores por defecto
- No requiere backend

### Validaciones

- **Formulario de Contacto**: Campos requeridos, email válido
- **Admin Panel**: Username y password requeridos
- **Proyectos**: Nombre, categoría, descripción e imagen obligatorios

---

## 🎨 Customización

### Colores Principales
```css
--primary: #2563eb      /* Azul principal */
--secondary: #0ea5e9    /* Azul cielo */
--accent: #4fd1c5       /* Turquesa */
--text: #ffffff         /* Texto principal */
--muted: rgba(255, 255, 255, 0.6)  /* Texto secundario */
```

### Cambiar Número de WhatsApp

En `index.html`, línea ~336:
```html
<a class="whatsapp-float" href="https://wa.me/[TU_NÚMERO_AQUÍ]">
```

### Cambiar Credenciales de Admin

En `script.js`, líneas ~8-9:
```javascript
const ADMIN_USERNAME = 'tu_usuario';
const ADMIN_PASSWORD = 'tu_contraseña';
```

---

## 📱 Responsiveness

El sitio es completamente responsive:
- ✅ Desktop (1920px+)
- ✅ Laptop (1280px - 1920px)
- ✅ Tablet (768px - 1280px)
- ✅ Mobile (320px - 768px)

Breakpoints principales en CSS:
```css
@media (max-width: 1200px) { /* Tablets */ }
@media (max-width: 768px) { /* Mobile */ }
```

---

## 🚀 Despliegue

### Opciones de Hosting

1. **GitHub Pages** (Recomendado para proyectos estáticos)
```bash
git push origin main
```

2. **Netlify**
- Conecta tu repositorio de GitHub
- Deploy automático en cada push

3. **Vercel**
- Importa el repositorio
- Deploy en segundos

4. **Firebase Hosting**
- CLI: `firebase deploy`

---

## 📝 Commits Realizados

### Commit Más Reciente: Refinamiento UI/UX Premium

**Cambios Principales:**
- ✨ Mejora de botón WhatsApp: Cambio de icono a texto "WhatsApp" limpio
- ✨ Eliminación de duplicación en logo (DKDK → DK)
- 🎨 Formulario de contacto: Nuevos estilos con gradientes turquesa-azul
- 🎨 Efectos glassmorphism en componentes principales
- 📦 Opciones de proyecto tipo realistas y alineadas con portafolio
- 🌍 Traducciones actualizadas inglés/español
- ✅ Focus states mejorados para accesibilidad
- 🎯 Diseño optimizado para empresas inglesas

---

## 🔗 Enlaces Rápidos

- **WhatsApp**: [Contacto Directo](https://wa.me/573028051687)
- **Admin**: http://localhost:8000 (usuario: admin, contraseña: admin123)

---

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados © 2026 Danketic.

---

## 👥 Autor

**Danketic Team**
- Soluciones digitales para empresas y negocios que quieren crecer con tecnología inteligente

---

## 🎯 Próximas Mejoras

- [ ] Backend para gestión de formularios
- [ ] Envío de emails automático
- [ ] Dashboard analytics avanzado
- [ ] Sistema de blog integrado
- [ ] Integración con CRM
- [ ] PWA (Progressive Web App)
- [ ] Dark mode toggle

---

## 📞 Soporte

Para reportar issues o sugerencias, contacta a través de WhatsApp o el formulario de contacto en el sitio.

---

**Versión**: 1.0.0  
**Última actualización**: Agosto 2026  
**Estado**: ✅ Listo para presentación a socios