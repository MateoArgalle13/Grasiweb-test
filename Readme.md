# Shopify Theme Customization – Footer & UI Components

Este proyecto corresponde a una prueba técnica desarrollada con el simulador de Shopify de Gradiweb. A continuación se detalla la implementación y configuración de los principales componentes personalizados, respetando accesibilidad AAA y diseño responsive.


## 🧩 Componentes desarrollados

### 🔻 Footer

- Componente responsive alineado a la izquierda en desktop.
- En móviles, el contenido se apila verticalmente manteniendo alineación central, pero con íconos de pago e información alineados horizontalmente sin desbordar.
- Estilos definidos en `footer.scss`.
- Configurado dinámicamente desde `settings_data.json`.
- Accesibilidad AAA cumplida.

### 🔺 Topbar

- Barra superior animada con mensaje deslizante:  
  **"FREE SHIPPING FOR ORDERS OVER $100"**  
- Desplazamiento automático tipo slider.
- Implementado con SCSS + animación CSS.

### 🎯 Hero Banner

- Banner principal configurable desde `settings_data.json`.
- Botón con texto y link editables.
- Totalmente responsive, siguiendo el diseño entregado.

### 🛒 Product Carousel

- Carrusel con:
  - 4 productos visibles inicialmente.
  - Botón `VIEW ALL` que revela 4 más.
  - Lazy loading/infinite scroll para cargar más al hacer scroll.
- Fichas de producto incluyen:
  - Imagen con efecto hover.
  - Nombre, precio y tags.
- Sección de colecciones:
  - Solo muestra colecciones creadas después del 1 de enero de 2025.

## ⚙️ Configuración dinámica

Los componentes obtienen su contenido desde el archivo `settings_data.json`, lo cual permite:

- Cambiar textos del hero banner.
- Cargar íconos de métodos de pago en el footer.
- Definir colecciones y productos del carrusel.

## ♿ Accesibilidad

Todos los elementos visuales cumplen con los estándares de accesibilidad AAA:

- Contrastes de color adecuados.
- Navegación clara.
- Etiquetas `alt` en imágenes.
- Textos legibles y responsivos.

## 📱 Responsive Design

El diseño fue pensado mobile-first. Se usaron `media queries` para adaptar el layout de cada componente según el dispositivo.  
- **Mobile**: columnas apiladas, tipografías ajustadas, elementos centrados.  
- **Desktop**: distribución horizontal, más espacio entre bloques, elementos alineados a la izquierda.

## 🔧 Tecnologías utilizadas

| Herramienta      | Uso                              |
|------------------|----------------------------------|
| HTML / Liquid     | Estructura de componentes        |
| Sass (SCSS)       | Estilos personalizados           |
| Webpack           | Empaquetador y configuración     |
| JavaScript (Vanilla) | Interactividad básica        |
| JSON              | Configuración dinámica (`settings_data.json`) |


## 🧪 Pruebas

- Se realizaron pruebas de visualización en Chrome, Firefox y Safari.
- Comprobación de comportamiento responsive en múltiples resoluciones (360px, 768px, 1280px).
- Validación de accesibilidad con herramientas como Lighthouse.


## 📦 Build y desarrollo

El entorno se configuró con Webpack y loaders para:

- Sass.
- Archivos de imagen.
- HTML.
- Archivos estáticos.

Para iniciar el proyecto:

```bash
npm install
npm run dev

