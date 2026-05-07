# Documentación técnica de la Landing Page

## Índice

1. [Instrucciones de inicio/ejecución de la web](#1-instrucciones-de-inicioejecución-de-la-web-obligatorio)
2. [Enumeración de las funcionalidades más importantes implementadas](#2-enumeración-de-al-menos-las-5-funcionalidades-más-importantes-implementadas-obligatorio)
3. [Funcionalidad 1: navegación interna tipo SPA](#3-funcionalidad-1-obligatorio)
4. [Funcionalidad 2: hero visual animado y experiencia de entrada](#4-funcionalidad-2-obligatorio)
5. [Funcionalidad 3: casos de estudio interactivos](#5-funcionalidad-3-obligatorio)
6. [Funcionalidad 4: calendario de eventos con filtrado](#6-funcionalidad-4-obligatorio)
7. [Funcionalidad 5: formulario de consulta con validación](#7-funcionalidad-5-obligatorio)
8. [Funcionalidades adicionales](#8-funcionalidades-adicionales-opcional)
9. [Funcionalidad Backend](#9-funcionalidad-backend-obligatorio-sólo-si-no-lo-habéis-explicado-antes)
10. [Responsividad](#10-responsividad-obligatorio)

---

# 1. Instrucciones de inicio/ejecución de la web (Obligatorio)

## 1.1. Descripción general del proyecto

El proyecto es una **Landing Page desarrollada con React, TypeScript, Vite y Tailwind CSS**. La temática principal de la web es una experiencia digital de curaduría automovilística llamada **"Herencia & Evolución"**, centrada en la comparación entre vehículos clásicos, hiperdeportivos modernos, casos de estudio, tendencias de mercado y eventos estratégicos.

La aplicación está estructurada como una **Single Page Application** o SPA. Esto significa que no utiliza varias páginas HTML independientes, sino una única entrada principal (`index.html`) donde React renderiza dinámicamente diferentes vistas según el estado interno de la aplicación. La navegación entre secciones no recarga la página completa, sino que cambia el componente visible en pantalla.

Los archivos principales del frontend son:

- `index.html`: documento HTML base donde se monta la aplicación.
- `src/main.tsx`: punto de entrada de React.
- `src/App.tsx`: componente raíz que controla la vista activa.
- `src/components/Navbar.tsx`: barra superior de navegación.
- `src/components/Footer.tsx`: pie de página con accesos de navegación.
- `src/views/HomeView.tsx`: página principal de la landing.
- `src/views/CaseStudiesView.tsx`: vista general de casos de estudio.
- `src/views/CountachView.tsx`: caso de estudio Lamborghini Countach.
- `src/views/MercedesBenzView.tsx`: caso de estudio Mercedes-Benz.
- `src/views/FordGtView.tsx`: caso de estudio Ford GT.
- `src/views/MarketView.tsx`: vista de análisis de mercado.
- `src/views/EventsView.tsx`: calendario de eventos con filtros.
- `src/index.css`: estilos globales, tema visual, fuentes y utilidades CSS.
- `vite.config.ts`: configuración del proyecto Vite.
- `RepoBBDD/`: carpeta independiente con scripts SQL de base de datos Oracle.

## 1.2. Requisitos previos

Para ejecutar la web localmente se necesita tener instalado:

- **Node.js** en una versión actual. Se recomienda Node.js 20 o superior.
- **npm**, que normalmente viene instalado junto con Node.js.
- Un editor de código como Visual Studio Code.
- Navegador web moderno: Chrome, Edge, Firefox o similar.

El proyecto usa Vite como servidor de desarrollo. Vite permite levantar la aplicación rápidamente y actualizar la interfaz al modificar los archivos fuente.

## 1.3. Instalación de dependencias

Desde la carpeta raíz del proyecto se debe ejecutar:

```bash
npm install
```

Este comando lee el archivo `package.json` y descarga las dependencias necesarias indicadas en el proyecto. Entre las dependencias principales se encuentran:

- `react`: biblioteca principal para construir la interfaz.
- `react-dom`: integración de React con el DOM del navegador.
- `vite`: servidor de desarrollo y herramienta de empaquetado.
- `typescript`: lenguaje usado para añadir tipado estático.
- `tailwindcss`: framework de estilos basado en clases de utilidad.
- `@vitejs/plugin-react`: plugin que permite usar React dentro de Vite.
- `motion`: biblioteca usada para animaciones.
- `lucide-react`: biblioteca de iconos usada en botones, navegación, eventos y tarjetas.

Fragmento relevante de `package.json`:

```json
{
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "vite": "^6.2.0",
    "tailwindcss": "^4.1.14",
    "motion": "^12.23.24",
    "lucide-react": "^0.546.0"
  }
}
```

El bloque `scripts` define los comandos principales que se ejecutan desde terminal. El comando `npm run dev` arranca la aplicación en modo desarrollo. El comando `npm run build` genera una versión optimizada para producción dentro de la carpeta `dist`. El comando `npm run preview` permite previsualizar localmente la versión compilada.

## 1.4. Configuración de variables de entorno

El proyecto incluye un archivo `.env.example` con variables de ejemplo:

```env
GEMINI_API_KEY="MY_GEMINI_API_KEY"
APP_URL="MY_APP_URL"
```

Para un entorno real, se recomienda crear un archivo `.env.local` tomando como base `.env.example`:

```bash
cp .env.example .env.local
```

Después se pueden sustituir los valores de ejemplo por los valores reales. En la versión actual del frontend no se observa una llamada directa a Gemini desde los componentes de React, pero `vite.config.ts` prepara la variable `GEMINI_API_KEY` para que pueda estar disponible en el proceso de construcción.

Fragmento relevante de `vite.config.ts`:

```ts
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
```

Este archivo configura Vite para usar React y Tailwind. También carga variables de entorno con `loadEnv`. La clave `define` reemplaza referencias a `process.env.GEMINI_API_KEY` durante el empaquetado. El bloque `resolve.alias` crea el alias `@`, que puede utilizarse para importar archivos desde la raíz del proyecto con rutas más limpias. El bloque `server.hmr` controla si se activa o no el Hot Module Replacement, que permite refrescar partes de la aplicación sin recargar toda la página.

## 1.5. Ejecución en modo desarrollo

Para iniciar la landing page se ejecuta:

```bash
npm run dev
```

Según el `package.json`, este comando ejecuta:

```bash
vite --port=3000 --host=0.0.0.0
```

Esto significa que Vite arranca el servidor de desarrollo en el puerto `3000` y escucha en `0.0.0.0`, por lo que puede estar disponible tanto desde `localhost` como desde otras interfaces de red si el sistema lo permite.

La URL habitual para acceder será:

```text
http://localhost:3000
```

## 1.6. Generación de versión de producción

Para crear una versión final optimizada se usa:

```bash
npm run build
```

Este comando ejecuta Vite en modo construcción y genera los archivos estáticos finales dentro de la carpeta:

```text
dist/
```

La carpeta `dist` contiene HTML, JavaScript, CSS y assets listos para desplegar en un servidor web estático.

## 1.7. Previsualización de la versión compilada

Después de ejecutar `npm run build`, se puede comprobar la versión compilada con:

```bash
npm run preview
```

Este comando sirve localmente la carpeta `dist` para validar que la web funciona igual que en desarrollo.

## 1.8. Comprobación de TypeScript

El proyecto incluye el script:

```bash
npm run lint
```

Este comando ejecuta:

```bash
tsc --noEmit
```

`tsc --noEmit` revisa errores de TypeScript sin generar archivos de salida. Es útil para detectar errores de tipado, problemas de sintaxis JSX/TSX y usos incorrectos de props.

## 1.9. Observación técnica detectada

En `src/views/CountachView.tsx` aparece un pequeño detalle de sintaxis JSX:

```tsx
<span class="block text-outline uppercase text-[10px] mb-1">Top Speed</span>
```

En React/JSX debe usarse `className` en lugar de `class`. La forma correcta sería:

```tsx
<span className="block text-outline uppercase text-[10px] mb-1">Top Speed</span>
```

Esto no cambia la documentación funcional, pero conviene corregirlo antes de entregar o compilar el proyecto para evitar advertencias o errores.

---

# 2. Enumeración de al menos las 5 funcionalidades más importantes implementadas (Obligatorio)

Las cinco funcionalidades principales implementadas en la landing page son:

1. **Navegación interna tipo SPA mediante estado React**, con cambio dinámico entre vistas sin recarga completa de página.
2. **Hero visual animado y experiencia de entrada**, con imágenes, animaciones de aparición, efectos de scroll y diseño dividido entre vehículo clásico y moderno.
3. **Sistema de casos de estudio interactivos**, con tarjetas navegables y vistas específicas para Lamborghini, Mercedes-Benz y Ford GT.
4. **Calendario de eventos con filtrado por ubicación**, que permite mostrar todos los eventos o solo los de Reino Unido, Francia o Estados Unidos.
5. **Formulario de consulta privada con validación visual y estados de interacción**, incluyendo error, carga, éxito y reinicio del formulario.

El backend se explica de forma separada en el punto 9 porque está incluido en una carpeta independiente llamada `RepoBBDD` y no aparece conectado directamente al frontend React mediante API.

---

# 3. Funcionalidad 1 (Obligatorio)

## 3.1. Descripción por escrito del comportamiento de la funcionalidad 1 (Qué hace)

La primera funcionalidad principal es la **navegación interna tipo SPA**. La aplicación permite moverse entre diferentes secciones de la landing page sin cargar páginas HTML nuevas. En lugar de utilizar rutas tradicionales del navegador, la web guarda en un estado de React cuál es la vista activa y muestra el componente correspondiente.

El usuario puede navegar desde:

- la barra superior (`Navbar`),
- el menú desplegable de apartados,
- las tarjetas de la página principal,
- la vista general de casos de estudio,
- el pie de página (`Footer`).

Las vistas principales que se pueden activar son:

- `home`: vista principal o landing inicial.
- `countach`: caso de estudio Lamborghini Countach.
- `fordgt`: caso de estudio Ford GT.
- `mercedesbenz`: caso de estudio Mercedes-Benz.
- `casestudies`: vista general de casos de estudio.
- `market`: análisis de mercado.
- `events`: calendario de eventos.

Cuando el usuario pulsa un botón de navegación, la aplicación cambia el valor del estado `currentView`. Ese cambio provoca que React vuelva a renderizar el componente correspondiente. Además, cada vez que cambia la vista activa, la página se desplaza automáticamente al inicio para que la nueva sección empiece desde arriba.

## 3.2. Explicación del funcionamiento de la funcionalidad 1 (Cómo lo hace)

La funcionalidad se basa en tres elementos técnicos:

1. Un estado global dentro de `App.tsx` llamado `currentView`.
2. Una función modificadora llamada `setCurrentView`.
3. Renderizado condicional de componentes según el valor de `currentView`.

En React, `useState` permite declarar un estado. En este caso, se inicializa con el valor `'home'`, por lo que al abrir la web por primera vez se muestra la página principal. La función `setCurrentView` se pasa como prop a los componentes que necesitan cambiar de sección.

El componente `Navbar` recibe dos props: `currentView` y `setCurrentView`. La primera sirve para saber qué vista está activa y poder marcar visualmente el botón correspondiente. La segunda sirve para cambiar de vista cuando el usuario pulsa un botón.

El componente `Footer` también recibe `setCurrentView` para permitir navegación desde la parte inferior de la web.

La navegación no usa enlaces `<a href="...">`, sino botones con eventos `onClick`. Esto evita recargas de página y permite mantener el comportamiento de SPA.

## 3.3. Fragmentos de código más relevantes de la funcionalidad 1 y explicación concreta, precisa y rigurosa

### Fragmento 1: estado principal y renderizado condicional

Archivo relacionado: `src/App.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import CountachView from './views/CountachView';
import FordGtView from './views/FordGtView';
import MercedesBenzView from './views/MercedesBenzView';
import CaseStudiesView from './views/CaseStudiesView';
import MarketView from './views/MarketView';
import EventsView from './views/EventsView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
        {currentView === 'countach' && <CountachView />}
        {currentView === 'fordgt' && <FordGtView />}
        {currentView === 'mercedesbenz' && <MercedesBenzView />}
        {currentView === 'casestudies' && <CaseStudiesView setCurrentView={setCurrentView} />}
        {currentView === 'market' && <MarketView />}
        {currentView === 'events' && <EventsView />}
      </main>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}
```

Explicación:

- `useState('home')` crea una variable de estado llamada `currentView` y una función para modificarla llamada `setCurrentView`.
- El valor inicial `'home'` hace que la landing page se abra en la vista principal.
- `useEffect(() => { window.scrollTo(0, 0); }, [currentView]);` ejecuta un efecto secundario cada vez que cambia `currentView`. Su función es llevar el scroll al inicio al entrar en una nueva vista.
- `Navbar` recibe `currentView` para saber qué botón debe aparecer como activo.
- `Navbar` y `Footer` reciben `setCurrentView` para poder cambiar la vista activa.
- Dentro de `<main>` se usa renderizado condicional. Por ejemplo, `{currentView === 'market' && <MarketView />}` significa: si `currentView` vale `'market'`, entonces se renderiza `MarketView`.
- Esta técnica evita usar varias páginas HTML y centraliza la navegación en el estado del componente raíz.

Archivos afectados o relacionados:

- `src/App.tsx`: controla el estado global de navegación.
- `src/components/Navbar.tsx`: modifica la vista desde la barra superior.
- `src/components/Footer.tsx`: modifica la vista desde el pie.
- `src/views/*.tsx`: son las vistas que se renderizan condicionalmente.

### Fragmento 2: botones de navegación en Navbar

Archivo relacionado: `src/components/Navbar.tsx`

```tsx
<button
  onClick={() => setCurrentView('market')}
  className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 ${currentView === 'market' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-outline hover:text-secondary'}`}
>
  Mercado 2026
</button>
```

Explicación:

- `onClick={() => setCurrentView('market')}` define el comportamiento del botón. Al pulsarlo, se cambia la vista activa a `market`.
- La clase CSS se construye con una plantilla literal de JavaScript. Dentro de `${...}` se evalúa una condición.
- Si `currentView === 'market'`, el botón se pinta con `text-secondary`, borde inferior y padding inferior. Esto indica visualmente que la sección está activa.
- Si la vista activa no es `market`, se aplican estilos secundarios: color `text-outline` y cambio de color al pasar el cursor con `hover:text-secondary`.

### Fragmento 3: menú desplegable de apartados

Archivo relacionado: `src/components/Navbar.tsx`

```tsx
<div className="relative group py-2">
  <button
    className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 flex items-center gap-1 ${['casestudies', 'countach', 'mercedesbenz', 'fordgt'].includes(currentView) ? 'text-secondary' : 'text-outline hover:text-secondary'}`}
  >
    Apartados <span className="text-[10px] opacity-60">▼</span>
  </button>
  <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block z-50">
    <div className="bg-background/95 backdrop-blur-xl border border-outline-variant/30 py-2 shadow-2xl">
      <button onClick={() => setCurrentView('countach')}>Lamborghini</button>
      <button onClick={() => setCurrentView('mercedesbenz')}>Mercedes-Benz</button>
      <button onClick={() => setCurrentView('fordgt')}>Ford GT</button>
      <button onClick={() => setCurrentView('casestudies')}>Visión General</button>
    </div>
  </div>
</div>
```

Explicación:

- `relative group` permite crear un contenedor que controla el estado hover de sus elementos hijos.
- `hidden group-hover:block` mantiene oculto el menú y lo muestra cuando el usuario pasa el cursor por el grupo.
- El array `['casestudies', 'countach', 'mercedesbenz', 'fordgt']` agrupa las vistas relacionadas con apartados o casos de estudio.
- `.includes(currentView)` comprueba si la vista actual pertenece a ese conjunto. Si pertenece, el botón principal del menú se marca como activo.
- Cada opción interna llama a `setCurrentView(...)` con una vista distinta.

---

# 4. Funcionalidad 2 (Obligatorio)

## 4.1. Descripción por escrito del comportamiento de la funcionalidad 2 (Qué hace)

La segunda funcionalidad principal es el **hero visual animado de la página principal**. Esta zona actúa como primera impresión de la landing page. Ocupa toda la altura de la pantalla y divide el espacio en dos mitades: una representa la era clásica o analógica y otra representa la era moderna o híbrida.

El hero muestra:

- una imagen de un Lamborghini Countach clásico,
- una imagen de un Lamborghini Countach moderno,
- textos superpuestos en cada mitad,
- un título central con efecto visual degradado,
- animaciones de entrada,
- efecto de escala controlado por el scroll,
- transición de imagen en blanco y negro a imagen con más presencia visual al pasar el cursor.

Su objetivo es presentar la idea central de la web: la comparación entre herencia automovilística y evolución tecnológica. Desde el punto de vista de experiencia de usuario, el hero no solo informa, sino que introduce una narrativa visual.

## 4.2. Explicación del funcionamiento de la funcionalidad 2 (Cómo lo hace)

La funcionalidad se implementa en `HomeView.tsx` mediante la biblioteca `motion`. Se utilizan hooks de animación como `useScroll` y `useTransform`.

El comportamiento principal es:

1. `useScroll()` obtiene el progreso vertical del scroll de la página.
2. `useTransform()` transforma ese progreso en un valor de escala para el hero.
3. Los componentes `motion.div`, `motion.img` y `motion.p` permiten aplicar animaciones declarativas.
4. Las clases de Tailwind definen layout, posición absoluta, gradientes, brillo, escala, textos y adaptación a distintos tamaños de pantalla.

El hero se divide con `flex flex-col md:flex-row`. En pantallas pequeñas, las dos imágenes se colocan una encima de otra. En pantallas medianas o superiores, se colocan en dos columnas horizontales.

## 4.3. Fragmentos de código más relevantes de la funcionalidad 2 y explicación concreta, precisa y rigurosa

### Fragmento 1: hooks de scroll y transformación

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

export default function HomeView({ setCurrentView }: HomeViewProps) {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
```

Explicación:

- `useScroll()` devuelve información sobre el desplazamiento vertical de la página.
- `scrollYProgress` representa el progreso del scroll como un valor entre 0 y 1.
- `useTransform(scrollYProgress, [0, 0.2], [1, 1.1])` transforma el rango inicial del scroll en una escala visual.
- Cuando el usuario está al principio de la página, la escala vale aproximadamente `1`.
- Cuando el scroll avanza hasta el 20% inicial, la escala aumenta hasta `1.1`.
- El resultado `heroScale` se aplica después al estilo de los contenedores animados.

### Fragmento 2: sección hero y primera imagen animada

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">
  <motion.div
    style={{ scale: heroScale }}
    className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden"
  >
    <motion.img
      initial={{ scale: 1.2, filter: 'grayscale(100%) blur(10px)' }}
      animate={{ scale: 1, filter: 'grayscale(100%) blur(0px)' }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      src="https://commons.wikimedia.org/wiki/Special:FilePath/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg?width=1200"
      alt="Vintage Lamborghini Countach"
      className="w-full h-full object-cover brightness-75 group-hover:grayscale-0 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r"></div>
  </motion.div>
</section>
```

Explicación:

- `<section className="relative h-screen ...">` crea una sección de altura completa de pantalla.
- `overflow-hidden` evita que las imágenes desbordadas se vean fuera del hero.
- `flex flex-col md:flex-row` define comportamiento responsivo: en móvil, columnas verticales; desde `md`, columnas horizontales.
- `motion.div` permite animar el contenedor. La propiedad `style={{ scale: heroScale }}` vincula la escala al scroll.
- `motion.img` permite animar la imagen desde un estado inicial a un estado final.
- `initial` define el estado inicial: imagen ampliada, en escala de grises y desenfocada.
- `animate` define el estado final: escala normal, escala de grises mantenida y sin desenfoque.
- `transition` establece duración y tipo de aceleración.
- `object-cover` hace que la imagen cubra todo el contenedor sin deformarse.
- `group-hover:grayscale-0` elimina la escala de grises al pasar el cursor por el grupo.
- El `div` con `absolute inset-0` añade un gradiente encima de la imagen para mejorar la legibilidad del texto superpuesto.

### Fragmento 3: título central animado

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<motion.div
  initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 1.2, ease: "circOut" }}
  className="max-w-4xl text-center space-y-6"
>
  <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-none drop-shadow-2xl">
    COLISIÓN DE ERAS: <br />
    <motion.span
      initial={{ backgroundPosition: '200% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary bg-[length:200%_auto]"
    >
      LA EVOLUCIÓN DEL RENDIMIENTO
    </motion.span>
  </h1>
</motion.div>
```

Explicación:

- El `motion.div` aparece progresivamente con `opacity`, desplazamiento vertical (`y`) y desenfoque (`filter`).
- `text-4xl md:text-6xl lg:text-8xl` ajusta el tamaño del título según el ancho de pantalla.
- `motion.span` anima la posición del fondo degradado.
- `text-transparent bg-clip-text` hace que el texto no tenga color propio, sino que muestre el degradado de fondo dentro de las letras.
- `repeat: Infinity` hace que la animación del degradado se repita indefinidamente.

Archivos relacionados:

- `src/views/HomeView.tsx`: contiene el hero, las imágenes y las animaciones.
- `src/index.css`: define fuentes, colores globales y clases personalizadas.
- `public/cars/`: contiene imágenes locales utilizadas por otras partes de la landing.

---

# 5. Funcionalidad 3 (Obligatorio)

## 5.1. Descripción por escrito del comportamiento de la funcionalidad 3 (Qué hace)

La tercera funcionalidad principal es el **sistema de casos de estudio interactivos**. La landing no se limita a mostrar información estática, sino que permite explorar diferentes expedientes automovilísticos. Cada caso de estudio presenta una marca o modelo emblemático y permite acceder a una vista específica con información ampliada.

Los casos de estudio implementados son:

- Lamborghini Countach.
- Mercedes-Benz 300 SL / AMG ONE.
- Ford GT / GT40.

La vista general `CaseStudiesView` funciona como un índice visual. Cada tarjeta contiene:

- imagen representativa,
- título,
- subtítulo,
- descripción,
- número de expediente,
- llamada a la acción.

Al pulsar una tarjeta, el sistema cambia la vista activa y muestra el componente de detalle correspondiente.

## 5.2. Explicación del funcionamiento de la funcionalidad 3 (Cómo lo hace)

La funcionalidad se basa en una estructura de datos local llamada `cases`. Es un array de objetos. Cada objeto representa un caso de estudio y contiene los datos necesarios para pintar una tarjeta:

- `id`: identificador interno de la vista a la que debe navegar.
- `title`: título del caso.
- `subtitle`: subtítulo descriptivo.
- `desc`: descripción amplia.
- `img`: ruta de la imagen.

React recorre este array con `.map()` y genera una tarjeta por cada objeto. Esto evita repetir manualmente la misma estructura JSX tres veces. Además, el `id` de cada caso se usa como argumento de `setCurrentView`, conectando los datos con el sistema de navegación explicado en la funcionalidad 1.

## 5.3. Fragmentos de código más relevantes de la funcionalidad 3 y explicación concreta, precisa y rigurosa

### Fragmento 1: definición del array de casos

Archivo relacionado: `src/views/CaseStudiesView.tsx`

```tsx
const cases = [
  {
    id: 'countach',
    title: 'LAMBORGHINI: LA TRANSICIÓN V12',
    subtitle: 'De carburadores Weber a supercondensadores de 48V.',
    desc: 'Un análisis exhaustivo de cómo la icónica silueta de cuña de Marcello Gandini ha evolucionado no solo en forma, sino en la entrega fundamental de potencia, redefiniendo el núcleo visceral de Sant\'Agata.',
    img: '/cars/1990_Lamborghini_Countach_25th_Anniversary_HCC23.jpg'
  },
  {
    id: 'mercedesbenz',
    title: 'MERCEDES-BENZ: ALAS DE GAVIOTA AL E PERFORMANCE',
    subtitle: 'El pináculo del gran turismo se encuentra con la Fórmula 1.',
    desc: 'Explorando la trayectoria desde el chasis tubular revolucionario del 300 SL hasta la integración directa de un tren motriz híbrido MGU-H ganador del campeonato mundial en el AMG ONE.',
    img: '/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg'
  },
  {
    id: 'fordgt',
    title: 'FORD GT: ADN LE MANS',
    subtitle: '50 años de búsqueda implacable de rendimiento aerodinámico.',
    desc: 'La venganza de Henry Ford II materializada en el Mk II de 1966, evolucionada hasta el monstruo EcoBoost V6 de 2016 con aerodinámica activa y contrafuertes volantes. El arma americana definitiva.',
    img: '/cars/1966_Ford_GT40_Mk_II_Goodwood__2019__01_.jpg'
  }
];
```

Explicación:

- `cases` es un array de objetos JavaScript.
- Cada objeto contiene información textual y visual de un caso.
- `id` no se muestra directamente al usuario, pero es esencial porque coincide con los valores que entiende `App.tsx`: `countach`, `mercedesbenz` y `fordgt`.
- `img` apunta a imágenes ubicadas en la carpeta pública `public/cars`. En Vite, los archivos situados en `public` pueden referenciarse desde la raíz mediante rutas como `/cars/nombre.jpg`.
- Esta estructura mejora la mantenibilidad. Si se quisiera añadir otro caso de estudio, bastaría con añadir un nuevo objeto al array y crear la vista correspondiente.

### Fragmento 2: generación de tarjetas con map

Archivo relacionado: `src/views/CaseStudiesView.tsx`

```tsx
<section className="px-6 md:px-12 pb-32 max-w-screen-2xl mx-auto flex flex-col gap-12">
  {cases.map((study, idx) => (
    <div 
      key={idx} 
      className="group flex flex-col lg:flex-row bg-surface-container-low border border-outline-variant/20 hover:border-secondary/50 transition-all duration-500 cursor-pointer overflow-hidden"
      onClick={() => setCurrentView(study.id)}
    >
      <div className="w-full lg:w-3/5 h-[400px] overflow-hidden relative">
        <img 
          src={study.img} 
          alt={study.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
      </div>
      <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-surface-container-lowest lg:-ml-12 z-10 glass-panel border-l border-outline-variant/30">
        <span className="font-label text-[10px] md:text-xs text-secondary tracking-widest uppercase mb-6">
          Expediente {String(idx + 1).padStart(2, '0')}
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{study.title}</h2>
        <h3 className="font-body text-lg italic text-on-surface-variant mb-6">{study.subtitle}</h3>
        <p className="font-body text-outline leading-relaxed mb-12">{study.desc}</p>
      </div>
    </div>
  ))}
</section>
```

Explicación:

- `cases.map((study, idx) => (...))` recorre todos los casos y devuelve JSX para cada uno.
- `study` representa el objeto actual del array.
- `idx` representa la posición dentro del array y se utiliza para generar el número de expediente.
- `key={idx}` ayuda a React a identificar cada tarjeta en la lista. En un proyecto más grande sería preferible usar `key={study.id}` porque el identificador es más estable.
- `onClick={() => setCurrentView(study.id)}` conecta la tarjeta con la navegación SPA.
- `String(idx + 1).padStart(2, '0')` transforma el número de expediente en formato de dos dígitos: `01`, `02`, `03`.
- `group-hover:scale-105` y `group-hover:opacity-100` aplican efectos visuales cuando el usuario pasa el cursor por la tarjeta.
- `lg:flex-row` cambia la composición de vertical a horizontal en pantallas grandes.

### Fragmento 3: vistas de detalle conectadas desde App

Archivo relacionado: `src/App.tsx`

```tsx
{currentView === 'countach' && <CountachView />}
{currentView === 'fordgt' && <FordGtView />}
{currentView === 'mercedesbenz' && <MercedesBenzView />}
{currentView === 'casestudies' && <CaseStudiesView setCurrentView={setCurrentView} />}
```

Explicación:

- Cada caso de estudio tiene su propia vista de detalle.
- Cuando el usuario pulsa una tarjeta, `setCurrentView(study.id)` actualiza el estado.
- Si el identificador es `countach`, React renderiza `CountachView`.
- Si el identificador es `fordgt`, React renderiza `FordGtView`.
- Si el identificador es `mercedesbenz`, React renderiza `MercedesBenzView`.

Archivos relacionados:

- `src/views/CaseStudiesView.tsx`: vista general y tarjetas.
- `src/views/CountachView.tsx`: detalle Lamborghini.
- `src/views/MercedesBenzView.tsx`: detalle Mercedes-Benz.
- `src/views/FordGtView.tsx`: detalle Ford GT.
- `src/App.tsx`: renderizado condicional de las vistas.

---

# 6. Funcionalidad 4 (Obligatorio)

## 6.1. Descripción por escrito del comportamiento de la funcionalidad 4 (Qué hace)

La cuarta funcionalidad principal es el **calendario de eventos con filtrado por ubicación**. La vista de eventos muestra una agenda global de eventos estratégicos relacionados con automovilismo, concursos, subastas y experiencias de alto nivel.

El usuario puede filtrar los eventos mediante botones:

- `Todos`
- `Reino Unido`
- `Francia`
- `EE.UU.`

Cuando se pulsa un filtro, la lista se actualiza y solo se muestran los eventos cuya ubicación contiene el texto del filtro seleccionado. Si se selecciona `Todos`, se muestran todos los eventos.

Cada evento muestra:

- fecha,
- título,
- ubicación,
- descripción,
- estado del evento,
- imagen representativa,
- botón de detalles.

## 6.2. Explicación del funcionamiento de la funcionalidad 4 (Como lo hace)

La funcionalidad se implementa en `EventsView.tsx`. El componente declara un estado llamado `filter` mediante `useState`. El estado inicial es `'Todos'`, por lo que se muestran todos los eventos al abrir la vista.

Los eventos están definidos en un array local llamado `events`. Cada evento es un objeto con propiedades como `id`, `date`, `title`, `location`, `desc`, `status` e `img`.

Los botones de filtro se generan recorriendo un array de categorías. Al pulsar uno, se llama a `setFilter(cat)` y se actualiza el estado. La lista de eventos se obtiene aplicando `.filter()` al array `events`.

Además, se usa `AnimatePresence` y `motion.div` para animar la entrada y salida de los eventos cuando cambia el filtro.

## 6.3. Fragmentos de código más relevantes de la funcionalidad 4 y explicación concreta, precisa y rigurosa

### Fragmento 1: estado y datos de eventos

Archivo relacionado: `src/views/EventsView.tsx`

```tsx
import { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EventsView() {
  const [filter, setFilter] = useState('Todos');

  const events = [
    {
      id: 'gsh26',
      date: 'MAR 12-15, 2026',
      title: 'GOODWOOD SPEED & HERITAGE',
      location: 'Sussex, Reino Unido',
      desc: 'El primer evento en incorporar la nueva clase "Hyper-Hybrids" en la famosa colina. Acompañados de un pabellón especial de modelos GT40 originales.',
      status: 'Inscripciones Abiertas',
      img: '/images/goodwood.png'
    },
    {
      id: 'lmc26',
      date: 'JUL 02-05, 2026',
      title: 'LE MANS CLASSIC',
      location: 'Circuito de la Sarthe, Le Mans, Francia',
      desc: 'Celebración en la pista con un tributo especial al 60 aniversario del 1-2-3 de Ford y una exhibición en pista del nuevo AMG ONE frente al cronómetro.',
      status: 'Entradas Disponibles',
      img: '/images/lemans.png'
    }
  ];
```

Explicación:

- `filter` guarda la categoría actualmente seleccionada.
- `setFilter` permite cambiar la categoría desde los botones.
- `events` funciona como fuente de datos local de la vista.
- Cada evento tiene un `id` único, útil para que React y Motion gestionen correctamente la animación y el renderizado.
- `MapPin`, `Calendar` y `ArrowRight` son iconos de `lucide-react` usados para reforzar visualmente la información.

### Fragmento 2: generación de botones de filtro

Archivo relacionado: `src/views/EventsView.tsx`

```tsx
<div className="flex flex-wrap gap-4 mb-16">
  {['Todos', 'Reino Unido', 'Francia', 'EE.UU.'].map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-6 py-3 font-label text-[10px] tracking-widest uppercase transition-colors duration-300 ${
        filter === cat 
          ? 'bg-secondary text-background font-bold' 
          : 'bg-transparent border border-outline-variant/30 text-outline hover:text-primary hover:border-outline'
      }`}
    >
      {cat}
    </button>
  ))}
</div>
```

Explicación:

- Se crea un array de categorías directamente en JSX.
- `.map((cat) => (...))` genera un botón por cada categoría.
- `key={cat}` da a React una clave única para cada botón.
- `onClick={() => setFilter(cat)}` actualiza el filtro activo.
- La clase CSS cambia dependiendo de si `filter === cat`.
- Si el botón representa el filtro activo, aparece con fondo `bg-secondary`, texto oscuro y negrita.
- Si no está activo, se muestra como botón transparente con borde y efecto hover.

### Fragmento 3: filtrado y animación de eventos

Archivo relacionado: `src/views/EventsView.tsx`

```tsx
<AnimatePresence mode="popLayout">
  {events.filter(evt => filter === 'Todos' || evt.location.includes(filter)).map((evt) => (
    <motion.div 
      key={evt.id} 
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden bg-surface flex flex-col lg:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative overflow-hidden">
        <img 
          src={evt.img} 
          alt={evt.title} 
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
        />
      </div>
    </motion.div>
  ))}
</AnimatePresence>
```

Explicación:

- `.filter(evt => filter === 'Todos' || evt.location.includes(filter))` decide qué eventos se muestran.
- Si `filter` es `'Todos'`, la condición siempre es verdadera.
- Si el filtro es otro, se comprueba si `evt.location` contiene el texto de ese filtro.
- `.map((evt) => (...))` genera la tarjeta de cada evento filtrado.
- `AnimatePresence` permite animar componentes que entran o salen del DOM.
- `motion.div` define las animaciones.
- `initial` establece el estado inicial de entrada.
- `animate` establece el estado visible.
- `exit` establece la animación de salida.
- `layout` permite animar reorganizaciones de layout al cambiar el conjunto filtrado.

Archivos relacionados:

- `src/views/EventsView.tsx`: contiene toda la lógica de eventos y filtros.
- `public/images/`: contiene imágenes de eventos como `goodwood.png`, `lemans.png`, `pebble.png` y `heveningham.png`.
- `src/App.tsx`: activa la vista de eventos cuando `currentView === 'events'`.
- `src/components/Navbar.tsx` y `src/components/Footer.tsx`: permiten acceder a la vista de eventos.

---

# 7. Funcionalidad 5 (Obligatorio)

## 7.1. Descripción por escrito del comportamiento de la funcionalidad 5 (Qué hace)

La quinta funcionalidad principal es el **formulario de consulta privada con validación y estados visuales**. Está situado en la sección de servicios a medida de la página principal. Su objetivo es simular una solicitud de contacto o consulta para servicios de logística, adquisición o restauración de patrimonio automovilístico.

El formulario permite introducir:

- identificador o nombre completo,
- correo electrónico,
- servicio requerido.

La funcionalidad valida que:

- el nombre tenga al menos tres caracteres,
- el correo electrónico contenga el carácter `@`.

Si los datos no son válidos, se muestra un mensaje de error y se resaltan visualmente los campos incorrectos. Si los datos son válidos, el formulario pasa a estado de carga durante 1,5 segundos y después muestra un mensaje de éxito. También se limpia el formulario y se permite volver a él mediante un botón.

## 7.2. Explicación del funcionamiento de la funcionalidad 5 (Como lo hace)

Esta funcionalidad se implementa con dos estados de React:

- `formData`: almacena los valores escritos por el usuario.
- `formStatus`: almacena el estado del formulario.

`formData` es un objeto con tres propiedades:

- `name`
- `service`
- `email`

`formStatus` puede tener cuatro valores:

- `'idle'`: estado inicial, formulario visible y sin error.
- `'loading'`: se está simulando el envío.
- `'success'`: la solicitud se ha recibido correctamente.
- `'error'`: los datos introducidos no cumplen la validación.

Cuando se envía el formulario, se ejecuta `handleFormSubmit`. Este método llama a `e.preventDefault()` para impedir la recarga de página. Después comprueba los datos. Si fallan, establece el estado `error`. Si pasan, establece el estado `loading`, espera 1,5 segundos con `setTimeout` y finalmente marca `success` y limpia los campos.

## 7.3. Fragmentos de código más relevantes de la funcionalidad 5 y explicación concreta, precisa y rigurosa

### Fragmento 1: estados del formulario

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
const [formData, setFormData] = useState({
  name: '',
  service: 'Logística y Transporte',
  email: ''
});

const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
```

Explicación:

- `formData` guarda los valores actuales de los campos.
- `setFormData` actualiza el objeto del formulario.
- El valor inicial de `service` es `'Logística y Transporte'`, por lo que el selector aparece con esa opción seleccionada.
- `formStatus` está tipado con una unión literal de TypeScript: `'idle' | 'loading' | 'success' | 'error'`.
- Esta unión limita los valores posibles y evita asignar estados no previstos.
- El valor inicial `'idle'` representa el formulario listo para usar.

### Fragmento 2: función de envío y validación

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (formData.name.length < 3 || !formData.email.includes('@')) {
    setFormStatus('error');
    return;
  }
  setFormStatus('loading');
  setTimeout(() => {
    setFormStatus('success');
    setFormData({ name: '', service: 'Logística y Transporte', email: '' });
  }, 1500);
};
```

Explicación:

- `e: React.FormEvent` indica que la función recibe un evento de formulario de React.
- `e.preventDefault()` evita el comportamiento normal del formulario HTML, que sería recargar la página al enviar.
- `formData.name.length < 3` comprueba que el nombre tenga al menos tres caracteres.
- `!formData.email.includes('@')` comprueba de forma básica que el correo incluya `@`.
- Si alguna validación falla, se ejecuta `setFormStatus('error')` y después `return`, lo que corta la ejecución.
- Si los datos son válidos, se cambia el estado a `loading`.
- `setTimeout(..., 1500)` simula una operación asíncrona de envío.
- Tras 1,5 segundos, el estado pasa a `success` y se limpian los campos.

### Fragmento 3: renderizado condicional del éxito o formulario

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<AnimatePresence mode="wait">
  {formStatus === 'success' ? (
    <motion.div 
      key="success"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center bg-surface-container-low border border-secondary/30 p-12"
    >
      <CheckCircle2 size={48} className="text-secondary mb-6" />
      <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase">Solicitud Recibida</h3>
      <p className="font-body text-on-surface-variant text-sm">
        Nuestro equipo de conserjería se pondrá en contacto con usted en un plazo de 24 horas a través del canal seguro.
      </p>
      <button onClick={() => setFormStatus('idle')}>Volver al Formulario</button>
    </motion.div>
  ) : (
    <motion.form 
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8" 
      onSubmit={handleFormSubmit}
    >
      {/* Campos del formulario */}
    </motion.form>
  )}
</AnimatePresence>
```

Explicación:

- Se usa un operador ternario para decidir qué mostrar.
- Si `formStatus === 'success'`, se muestra el panel de éxito.
- Si no, se muestra el formulario.
- `AnimatePresence` anima la sustitución entre el formulario y el panel de éxito.
- `key="success"` y `key="form"` ayudan a Motion a diferenciar ambos elementos animados.
- El botón `Volver al Formulario` ejecuta `setFormStatus('idle')`, lo que devuelve el componente al formulario inicial.

### Fragmento 4: campos controlados

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<input 
  type="text" 
  value={formData.name}
  onChange={(e) => setFormData({...formData, name: e.target.value})}
  placeholder="INTRODUZCA IDENTIFICADOR" 
  className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 placeholder:text-surface-variant focus:outline-none"
/>
```

Explicación:

- Es un campo controlado por React porque su valor depende de `formData.name`.
- `onChange` actualiza el estado cada vez que el usuario escribe.
- `{...formData, name: e.target.value}` usa el operador spread para copiar el objeto anterior y modificar solo la propiedad `name`.
- Esto evita perder los valores de `email` y `service` al actualizar el nombre.
- El patrón se repite en el campo de correo y en el selector de servicio.

Archivos relacionados:

- `src/views/HomeView.tsx`: contiene toda la lógica del formulario.
- `lucide-react`: aporta iconos `CheckCircle2`, `AlertCircle` y `Loader2`.
- `motion/react`: anima el cambio entre formulario y mensaje de éxito.

---

# 8. Funcionalidades adicionales (Opcional)

## 8.1. Descripción por escrito del comportamiento de la funcionalidad adicional (Qué hace)

Además de las cinco funcionalidades obligatorias, el proyecto incorpora varias funcionalidades adicionales que enriquecen la landing page. Las más relevantes son:

1. **Vista de análisis de mercado 2026**.
2. **Diseño visual avanzado mediante sistema de tema personalizado**.
3. **Galerías visuales en las páginas de detalle**.
4. **Tarjetas de métricas y comparativas técnicas**.
5. **Uso de iconografía profesional con `lucide-react`**.

La más representativa como funcionalidad adicional es la **vista de análisis de mercado** (`MarketView.tsx`). Esta sección presenta información de valoración, adopción EV, resumen ejecutivo, volumen subastado, tasa de venta y servicios de datos. Aunque los datos aparecen representados de forma estática, la sección simula un panel de inteligencia de mercado con diseño de dashboard.

## 8.2. Explicación del funcionamiento de la funcionalidad adicional (Como lo hace)

La vista `MarketView` se renderiza cuando `currentView` vale `'market'`. Su estructura se basa en un layout de CSS Grid con dos zonas principales:

- una columna amplia con análisis y gráfico visual,
- una columna lateral con resumen ejecutivo y servicios de datos.

El gráfico se construye con `divs` estilizados mediante Tailwind. No se utiliza una librería de gráficos externa. Cada barra es un `div` con altura proporcional expresada en clases como `h-[30%]`, `h-[85%]` o `h-[100%]`. Esto permite simular visualmente una gráfica de evolución sin dependencia adicional.

## 8.3. Fragmentos de código más relevantes de la funcionalidad adicional y explicación concreta, precisa y rigurosa

### Fragmento 1: estructura general de MarketView

Archivo relacionado: `src/views/MarketView.tsx`

```tsx
export default function MarketView() {
  return (
    <div className="w-full pt-24 min-h-screen bg-surface">
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary uppercase mb-6">
          Análisis de Mercado 2026
        </h1>
      </header>

      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Bloques principales de análisis */}
        </div>
        <div className="space-y-8">
          {/* Resumen ejecutivo y servicios */}
        </div>
      </section>
    </div>
  );
}
```

Explicación:

- `pt-24` deja espacio superior para compensar la barra de navegación fija.
- `min-h-screen` garantiza que la vista ocupe al menos toda la altura de la pantalla.
- `grid grid-cols-1 lg:grid-cols-3` define una sola columna en móviles y tres columnas en pantallas grandes.
- `lg:col-span-2` hace que el bloque principal ocupe dos de las tres columnas en escritorio.
- Esta organización permite una estructura tipo dashboard: contenido principal a la izquierda y resumen ejecutivo a la derecha.

### Fragmento 2: gráfico simulado con barras

Archivo relacionado: `src/views/MarketView.tsx`

```tsx
<div className="h-64 w-full bg-surface-container-high rounded-md relative overflow-hidden p-6 flex flex-col justify-end">
  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent"></div>
  <div className="flex items-end justify-between h-full gap-2 relative z-10 w-full opacity-80">
    <div className="w-1/6 bg-outline-variant/50 h-[30%] hover:h-[35%] transition-all"></div>
    <div className="w-1/6 bg-outline-variant/60 h-[45%] hover:h-[50%] transition-all"></div>
    <div className="w-1/6 bg-outline-variant/70 h-[40%] hover:h-[45%] transition-all"></div>
    <div className="w-1/6 bg-outline-variant/80 h-[65%] hover:h-[70%] transition-all"></div>
    <div className="w-1/6 bg-secondary/80 h-[85%] hover:h-[90%] transition-all"></div>
    <div className="w-1/6 bg-secondary h-[100%] shadow-[0_0_15px_rgba(255,181,160,0.5)]"></div>
  </div>
</div>
```

Explicación:

- El contenedor tiene altura fija `h-64` y fondo oscuro.
- `relative overflow-hidden` permite colocar capas internas y evitar desbordamientos.
- El primer `div` interno genera un gradiente de fondo.
- El segundo `div` usa `flex items-end` para alinear todas las barras abajo.
- Cada barra tiene anchura `w-1/6`, por lo que seis barras ocupan el ancho de forma equilibrada.
- La altura de cada barra se define con clases arbitrarias de Tailwind como `h-[30%]`.
- Los `hover:h-[...]` modifican la altura al pasar el cursor, generando una microinteracción.
- La última barra usa `bg-secondary` y sombra para destacar la proyección de 2026.

### Fragmento 3: tema visual global

Archivo relacionado: `src/index.css`

```css
@theme {
  --color-background: #131313;
  --color-surface: #131313;
  --color-surface-container-lowest: #0e0e0e;
  --color-surface-container-low: #1c1b1b;
  --color-surface-container-high: #2a2a2a;
  --color-primary: #c6c6ce;
  --color-secondary: #ffb5a0;
  --color-tertiary: #00daf3;
  --color-outline: #8f9194;
  --color-on-surface: #e5e2e1;

  --font-headline: 'Manrope', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-label: 'Space Grotesk', sans-serif;
}
```

Explicación:

- `@theme` define variables de tema para Tailwind CSS.
- Los colores se nombran semánticamente: `background`, `surface`, `primary`, `secondary`, `tertiary`, etc.
- Esto permite usar clases como `bg-background`, `text-secondary` o `bg-surface-container-low` en los componentes React.
- Las fuentes también se centralizan: `font-headline`, `font-body` y `font-label`.
- Esta técnica mejora la coherencia visual de la landing y evita repetir valores hexadecimales en cada componente.

Archivos relacionados:

- `src/views/MarketView.tsx`: vista de mercado.
- `src/index.css`: tema global.
- `src/App.tsx`: renderiza `MarketView` cuando corresponde.
- `src/components/Navbar.tsx` y `src/components/Footer.tsx`: enlazan hacia la vista de mercado.

---

# 9. Funcionalidad Backend (Obligatorio sólo si no lo habéis explicado antes)

## 9.1. Descripción por escrito del comportamiento de la funcionalidad backend (Qué hace)

El proyecto incluye una carpeta independiente llamada `RepoBBDD`, que contiene scripts SQL para una base de datos Oracle de temática Pokémon. Esta parte funciona como backend de datos o módulo de base de datos, aunque en la versión actual no aparece conectado directamente con el frontend React mediante una API HTTP.

La funcionalidad backend permite:

- verificar conexión con Oracle,
- crear tablas principales,
- crear relaciones entre tablas,
- aplicar restricciones de integridad,
- insertar datos,
- ejecutar consultas SQL,
- limpiar la base de datos para empezar desde cero.

Las entidades principales del modelo son:

- `TIPOS`
- `HABILIDADES`
- `MAPA`
- `POKEMON`
- `MOVIMIENTOS`
- `OBJETOS`
- `ENTRENADOR`
- `POKEMON_MOVIMIENTO`
- `ENTRENADOR_POKEMON`
- `ENTRENADOR_OBJETO`

Las tablas intermedias permiten representar relaciones muchos a muchos, por ejemplo:

- un Pokémon puede aprender varios movimientos,
- un movimiento puede ser aprendido por varios Pokémon,
- un entrenador puede tener varios Pokémon,
- un Pokémon puede estar asociado a varios entrenadores,
- un entrenador puede tener varios objetos,
- un objeto puede estar en el inventario de varios entrenadores.

## 9.2. Explicación del funcionamiento de la funcionalidad backend (Como lo hace)

La carpeta `RepoBBDD` se organiza por fases:

```text
RepoBBDD/
├── 00-inicio/
│   └── conectar.sql
├── 01-crear-tablas/
│   └── BBDD-EXAMEN.sql
├── 02-insertar-borrar-actualizar-datos/
│   └── BBDD_Pokemon_datos.sql
├── 03-consultas/
│   ├── Consultas_parte1.sql
│   └── Consultas_parte2.sql
└── 04-limpieza/
    └── drop-all.sql
```

El flujo lógico del backend es:

1. Ejecutar `00-inicio/conectar.sql` para comprobar conexión y listar tablas existentes.
2. Ejecutar `01-crear-tablas/BBDD-EXAMEN.sql` para crear la estructura relacional.
3. Ejecutar scripts de `02-insertar-borrar-actualizar-datos/` para poblar la base de datos.
4. Ejecutar consultas de `03-consultas/` para obtener información.
5. Ejecutar `04-limpieza/drop-all.sql` solo si se desea eliminar todo y empezar de nuevo.

El script principal de creación elimina primero las tablas existentes en orden correcto y después crea tablas principales e intermedias. También define claves primarias, claves foráneas, restricciones `CHECK`, restricciones `UNIQUE` y políticas de borrado como `ON DELETE CASCADE` y `ON DELETE SET NULL`.

## 9.3. Fragmentos de código más relevantes de la funcionalidad backend y explicación concreta, precisa y rigurosa

### Fragmento 1: comprobación de conexión

Archivo relacionado: `RepoBBDD/00-inicio/conectar.sql`

```sql
SELECT USER as "Usuario Actual", 
       SYS_CONTEXT('USERENV', 'SESSION_USER') as "Sesión"
FROM DUAL;

SELECT table_name as "Mis Tablas" 
FROM user_tables 
ORDER BY table_name;

SET SERVEROUTPUT ON;

SELECT '✓ Conexión exitosa a Oracle!' as "Estado" FROM DUAL;
```

Explicación:

- `SELECT USER` muestra el usuario actual de Oracle.
- `SYS_CONTEXT('USERENV', 'SESSION_USER')` obtiene información de contexto de la sesión activa.
- `FROM DUAL` se usa en Oracle para consultas que no necesitan una tabla real.
- `user_tables` es una vista del diccionario de datos de Oracle que lista las tablas del usuario actual.
- `SET SERVEROUTPUT ON` activa la salida de mensajes generados con `DBMS_OUTPUT`.
- El último `SELECT` sirve como confirmación visual de que la conexión funciona.

### Fragmento 2: creación de tabla principal POKEMON

Archivo relacionado: `RepoBBDD/01-crear-tablas/BBDD-EXAMEN.sql`

```sql
CREATE TABLE POKEMON(
    COD_POKEMON NUMBER(4),
    NOMBRE VARCHAR2(50) NOT NULL,
    PS_BASE NUMBER(3) NOT NULL,
    ATAQUE_BASE NUMBER(3) NOT NULL,
    DEFENSA_BASE NUMBER(3) NOT NULL,
    VELOCIDAD_BASE NUMBER(3) NOT NULL,
    COD_TIPO_1 NUMBER(3) NOT NULL,
    COD_TIPO_2 NUMBER(3),
    COD_HABILIDAD NUMBER(4) NOT NULL,
    COD_ZONA NUMBER(4),
    CONSTRAINT PK_POKEMON PRIMARY KEY (COD_POKEMON),
    CONSTRAINT UQ_POKEMON_NOMBRE UNIQUE (NOMBRE),
    CONSTRAINT CHK_PS_BASE CHECK (PS_BASE > 0),
    CONSTRAINT CHK_ATAQUE_BASE CHECK (ATAQUE_BASE > 0),
    CONSTRAINT CHK_DEFENSA_BASE CHECK (DEFENSA_BASE > 0),
    CONSTRAINT CHK_VELOCIDAD_BASE CHECK (VELOCIDAD_BASE > 0),
    CONSTRAINT FK_POKEMON_TIPO1 FOREIGN KEY (COD_TIPO_1) 
        REFERENCES TIPOS(COD_TIPO),
    CONSTRAINT FK_POKEMON_TIPO2 FOREIGN KEY (COD_TIPO_2) 
        REFERENCES TIPOS(COD_TIPO) ON DELETE SET NULL,
    CONSTRAINT FK_POKEMON_HABILIDAD FOREIGN KEY (COD_HABILIDAD) 
        REFERENCES HABILIDADES(COD_HABILIDAD),
    CONSTRAINT FK_POKEMON_ZONA FOREIGN KEY (COD_ZONA) 
        REFERENCES MAPA(COD_ZONA) ON DELETE SET NULL
);
```

Explicación:

- `CREATE TABLE POKEMON` crea la tabla principal de Pokémon.
- `COD_POKEMON NUMBER(4)` define un código numérico de hasta cuatro dígitos.
- `NOMBRE VARCHAR2(50) NOT NULL` obliga a que cada Pokémon tenga nombre.
- `PS_BASE`, `ATAQUE_BASE`, `DEFENSA_BASE` y `VELOCIDAD_BASE` almacenan estadísticas base.
- `COD_TIPO_1` es obligatorio y representa el tipo principal.
- `COD_TIPO_2` es opcional y representa el tipo secundario.
- `PK_POKEMON` define la clave primaria.
- `UQ_POKEMON_NOMBRE` evita nombres duplicados.
- Las restricciones `CHECK` garantizan que las estadísticas sean positivas.
- `FK_POKEMON_TIPO1` conecta la tabla `POKEMON` con `TIPOS`.
- `FK_POKEMON_TIPO2 ... ON DELETE SET NULL` significa que, si se borra un tipo secundario, el campo se pone a `NULL` en lugar de borrar el Pokémon.
- `FK_POKEMON_ZONA ... ON DELETE SET NULL` permite borrar una zona sin borrar los Pokémon relacionados.

### Fragmento 3: relación muchos a muchos entre Pokémon y movimientos

Archivo relacionado: `RepoBBDD/01-crear-tablas/BBDD-EXAMEN.sql`

```sql
CREATE TABLE POKEMON_MOVIMIENTO(
    COD_POKEMON NUMBER(4) NOT NULL,
    COD_MOVIMIENTO NUMBER(4) NOT NULL,
    NIVEL_APRENDIZAJE NUMBER(3) NOT NULL,
    CONSTRAINT PK_POKEMON_MOVIMIENTO PRIMARY KEY (COD_POKEMON, COD_MOVIMIENTO),
    CONSTRAINT CHK_PM_NIVEL CHECK (NIVEL_APRENDIZAJE BETWEEN 1 AND 100),
    CONSTRAINT FK_PM_POKEMON FOREIGN KEY (COD_POKEMON) 
        REFERENCES POKEMON(COD_POKEMON) ON DELETE CASCADE,
    CONSTRAINT FK_PM_MOVIMIENTO FOREIGN KEY (COD_MOVIMIENTO) 
        REFERENCES MOVIMIENTOS(COD_MOVIMIENTO) 
);
```

Explicación:

- Esta tabla intermedia resuelve la relación muchos a muchos entre `POKEMON` y `MOVIMIENTOS`.
- La clave primaria está compuesta por `COD_POKEMON` y `COD_MOVIMIENTO`, por lo que un mismo Pokémon no puede tener duplicado el mismo movimiento.
- `NIVEL_APRENDIZAJE` indica en qué nivel aprende ese movimiento.
- `CHECK (NIVEL_APRENDIZAJE BETWEEN 1 AND 100)` impide niveles fuera del rango válido.
- `ON DELETE CASCADE` en `FK_PM_POKEMON` significa que, si se borra un Pokémon, se borran automáticamente sus relaciones con movimientos.
- La clave foránea hacia `MOVIMIENTOS` no tiene cascada, protegiendo movimientos que puedan estar en uso.

### Fragmento 4: relación entre entrenador y Pokémon

Archivo relacionado: `RepoBBDD/01-crear-tablas/BBDD-EXAMEN.sql`

```sql
CREATE TABLE ENTRENADOR_POKEMON(
    COD_ENTRENADOR NUMBER(6) NOT NULL,
    COD_POKEMON NUMBER(4) NOT NULL,
    APODO VARCHAR2(50),
    NIVEL NUMBER(3) NOT NULL,
    PS_ACTUAL NUMBER(4) NOT NULL,
    EXPERIENCIA NUMBER(8) DEFAULT 0 NOT NULL,
    ESTADO VARCHAR2(15) DEFAULT 'ACTIVO' NOT NULL,
    FECHA_CAPTURA DATE DEFAULT SYSDATE NOT NULL,
    CONSTRAINT PK_ENTRENADOR_POKEMON PRIMARY KEY (COD_ENTRENADOR, COD_POKEMON),
    CONSTRAINT CHK_EP_NIVEL CHECK (NIVEL BETWEEN 1 AND 100),
    CONSTRAINT CHK_EP_PS CHECK (PS_ACTUAL >= 0),
    CONSTRAINT CHK_EP_EXPERIENCIA CHECK (EXPERIENCIA >= 0),
    CONSTRAINT CHK_EP_ESTADO CHECK (UPPER(ESTADO) IN ('ACTIVO', 'DEBILITADO', 'EN_PC')),
    CONSTRAINT FK_EP_ENTRENADOR FOREIGN KEY (COD_ENTRENADOR) 
        REFERENCES ENTRENADOR(COD_ENTRENADOR) ON DELETE CASCADE,
    CONSTRAINT FK_EP_POKEMON FOREIGN KEY (COD_POKEMON) 
        REFERENCES POKEMON(COD_POKEMON) 
);
```

Explicación:

- Esta tabla representa los Pokémon capturados por entrenadores.
- Incluye datos propios de la relación, como `APODO`, `NIVEL`, `PS_ACTUAL`, `EXPERIENCIA`, `ESTADO` y `FECHA_CAPTURA`.
- `DEFAULT 0` asigna experiencia inicial cero.
- `DEFAULT 'ACTIVO'` establece el estado inicial del Pokémon capturado.
- `DEFAULT SYSDATE` registra automáticamente la fecha de captura.
- `CHECK (UPPER(ESTADO) IN (...))` limita los estados posibles a `ACTIVO`, `DEBILITADO` o `EN_PC`.
- `ON DELETE CASCADE` en entrenador significa que, si se elimina un entrenador, se elimina también su equipo.

### Fragmento 5: consulta con agrupación

Archivo relacionado: `RepoBBDD/03-consultas/Consultas_parte2.sql`

```sql
SELECT COD_TIPO_1, COUNT(*) AS CANTIDAD
FROM POKEMON
GROUP BY COD_TIPO_1
ORDER BY CANTIDAD DESC;
```

Explicación:

- Esta consulta cuenta cuántos Pokémon hay de cada tipo principal.
- `COUNT(*)` cuenta filas.
- `GROUP BY COD_TIPO_1` agrupa los Pokémon por tipo principal.
- `ORDER BY CANTIDAD DESC` ordena los resultados de mayor a menor.
- Es un ejemplo de consulta analítica básica sobre la base de datos.

### Fragmento 6: limpieza total de tablas

Archivo relacionado: `RepoBBDD/04-limpieza/drop-all.sql`

```sql
BEGIN
   FOR t IN (SELECT table_name FROM user_tables) LOOP
      EXECUTE IMMEDIATE 'DROP TABLE ' || t.table_name || ' CASCADE CONSTRAINTS';
   END LOOP;
   DBMS_OUTPUT.PUT_LINE('✓ Todas las tablas han sido eliminadas');
END;
/

SELECT COUNT(*) as "Tablas Restantes" FROM user_tables;
```

Explicación:

- Es un bloque PL/SQL.
- `FOR t IN (...) LOOP` recorre todas las tablas del usuario actual.
- `EXECUTE IMMEDIATE` ejecuta dinámicamente una sentencia SQL construida como texto.
- `DROP TABLE ... CASCADE CONSTRAINTS` elimina cada tabla y sus restricciones asociadas.
- `DBMS_OUTPUT.PUT_LINE` imprime un mensaje de confirmación.
- La última consulta cuenta cuántas tablas quedan después de la limpieza.

Archivos relacionados:

- `RepoBBDD/00-inicio/conectar.sql`
- `RepoBBDD/01-crear-tablas/BBDD-EXAMEN.sql`
- `RepoBBDD/02-insertar-borrar-actualizar-datos/BBDD_Pokemon_datos.sql`
- `RepoBBDD/03-consultas/Consultas_parte1.sql`
- `RepoBBDD/03-consultas/Consultas_parte2.sql`
- `RepoBBDD/04-limpieza/drop-all.sql`

Observación importante: el frontend React no realiza actualmente llamadas a esta base de datos. Para conectar ambos mundos sería necesario añadir una API intermedia, por ejemplo con Express, Spring Boot, FastAPI o Supabase, que exponga endpoints HTTP consumibles desde React.

---

# 10. Responsividad (Obligatorio)

## 10.1. Descripción por escrito del comportamiento de la responsividad (Qué hace)

La landing page está diseñada para adaptarse a diferentes tamaños de pantalla. La responsividad permite que el contenido sea legible y usable en móviles, tablets y escritorio.

Los comportamientos responsivos principales son:

- El hero cambia de distribución vertical en móvil a distribución horizontal en pantallas medianas.
- Las tarjetas de casos de estudio pasan de una columna a varias columnas según el ancho.
- La navegación principal se oculta en móvil y se muestra en pantallas medianas.
- Los textos aumentan de tamaño en pantallas mayores.
- Los espacios laterales y verticales crecen progresivamente en tablet y escritorio.
- Las secciones de detalle usan grids que pasan de una columna a varias columnas.
- El calendario de eventos muestra tarjetas verticales en móvil y composición horizontal en escritorio.
- El footer pasa de distribución vertical a horizontal.

## 10.2. Explicación del funcionamiento de la responsividad (Como lo hace)

La responsividad se implementa principalmente con clases de Tailwind CSS. Tailwind permite aplicar estilos condicionales según breakpoints. En el proyecto se usan especialmente:

- `md:` para pantallas medianas o superiores.
- `lg:` para pantallas grandes o superiores.

Por ejemplo:

- `flex flex-col md:flex-row` significa que el elemento usa columna en móvil y fila desde tamaño mediano.
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` significa una columna en móvil, dos en tablet y tres en escritorio.
- `text-4xl md:text-6xl lg:text-8xl` aumenta el tamaño del texto según el dispositivo.
- `px-6 md:px-12 lg:px-24` incrementa el padding horizontal en pantallas grandes.
- `hidden md:flex` oculta un elemento en móvil y lo muestra como flex desde tamaño mediano.

Esta estrategia permite diseñar primero para móvil y añadir mejoras progresivas para pantallas más grandes.

## 10.3. Fragmentos de código más relevantes de la responsividad y explicación concreta, precisa y rigurosa

### Fragmento 1: hero adaptable

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">
  <motion.div
    style={{ scale: heroScale }}
    className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden"
  >
    {/* Imagen izquierda */}
  </motion.div>

  <motion.div
    style={{ scale: heroScale }}
    className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden"
  >
    {/* Imagen derecha */}
  </motion.div>
</section>
```

Explicación:

- `flex flex-col` hace que en móvil las dos mitades del hero se coloquen una encima de otra.
- `md:flex-row` cambia la orientación a fila desde pantallas medianas.
- `w-full md:w-1/2` indica que cada bloque ocupa todo el ancho en móvil y la mitad en pantallas medianas.
- `h-1/2 md:h-full` reparte la altura del hero en móvil y permite que cada mitad ocupe toda la altura en escritorio.

### Fragmento 2: navegación visible solo en pantallas medianas

Archivo relacionado: `src/components/Navbar.tsx`

```tsx
<div className="hidden md:flex items-center space-x-10">
  <button onClick={() => setCurrentView('home')}>Evolución</button>
  <button onClick={() => setCurrentView('market')}>Mercado 2026</button>
  <button onClick={() => setCurrentView('events')}>Eventos</button>
</div>
```

Explicación:

- `hidden` oculta el bloque por defecto en pantallas pequeñas.
- `md:flex` lo muestra como contenedor flex desde pantallas medianas.
- Esta solución evita que una navegación horizontal larga rompa el diseño en móvil.
- Actualmente no hay menú hamburguesa alternativo para móvil; la marca y el icono de usuario sí permanecen visibles. Como mejora futura, se podría implementar un menú móvil desplegable.

### Fragmento 3: grid de casos de estudio en HomeView

Archivo relacionado: `src/views/HomeView.tsx`

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
  {/* Lamborghini */}
  {/* Mercedes-Benz */}
  {/* Ford GT */}
</div>
```

Explicación:

- `grid-cols-1` muestra una tarjeta por fila en móvil.
- `md:grid-cols-2` muestra dos columnas en tablet.
- `lg:grid-cols-3` muestra tres columnas en escritorio.
- Este patrón permite que las tarjetas mantengan tamaño legible en todos los dispositivos.

### Fragmento 4: tarjetas de eventos adaptables

Archivo relacionado: `src/views/EventsView.tsx`

```tsx
<motion.div 
  className="group relative overflow-hidden bg-surface flex flex-col lg:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
>
  <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative overflow-hidden">
    <img className="w-full h-full object-cover" />
  </div>
  <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l">
    {/* Contenido del evento */}
  </div>
</motion.div>
```

Explicación:

- En móvil, `flex-col` coloca imagen y texto en vertical.
- Desde `lg`, `lg:flex-row` coloca imagen y texto en horizontal.
- `w-full lg:w-1/2` hace que cada bloque ocupe todo el ancho en móvil y media tarjeta en escritorio.
- `h-[300px] lg:h-[450px]` aumenta la altura de imagen en pantallas grandes.
- `border-t lg:border-t-0 lg:border-l` cambia el borde separador de horizontal a vertical según el layout.

### Fragmento 5: tabla comparativa adaptable

Archivo relacionado: `src/views/CountachView.tsx`, `src/views/MercedesBenzView.tsx` y `src/views/FordGtView.tsx`

```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline-variant/20 border border-outline-variant/20">
  <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-outline">
    Métrica
  </div>
  <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest">
    {/* Columna clásica */}
  </div>
  <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest">
    {/* Columna moderna */}
  </div>
</div>
```

Explicación:

- `grid-cols-1` apila los bloques en móvil.
- `lg:grid-cols-12` crea una rejilla de doce columnas en escritorio.
- `lg:col-span-4` reparte cada bloque en cuatro columnas, formando tres columnas equilibradas.
- `hidden lg:block` oculta cabeceras técnicas en móvil y las muestra en escritorio.
- Esta solución evita tablas rígidas difíciles de leer en pantallas pequeñas.

### Fragmento 6: footer adaptable

Archivo relacionado: `src/components/Footer.tsx`

```tsx
<footer className="w-full py-16 px-6 md:px-12 bg-surface-container-lowest tonal-shift">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
    <div>HERENCIA & EVOLUCIÓN</div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
      {/* Botones de navegación */}
    </div>
    <div>© 2026 HERENCIA & EVOLUCIÓN. EL CURADOR DIGITAL.</div>
  </div>
</footer>
```

Explicación:

- `flex-col` organiza el footer verticalmente en móvil.
- `md:flex-row` lo convierte en una fila desde pantallas medianas.
- `flex-wrap` permite que los botones del footer salten de línea si no caben.
- `gap-8 md:gap-12` ajusta el espacio entre elementos según el tamaño de pantalla.

## 10.4. Valoración técnica de la responsividad

La responsividad está correctamente planteada porque usa un enfoque mobile-first. La mayoría de clases base se aplican a móvil y después se amplían con `md:` y `lg:`. Esto permite que la web no dependa de un ancho fijo y que los contenidos principales sigan siendo accesibles en diferentes dispositivos.

Como mejora futura, se recomienda añadir un menú móvil real en `Navbar`, porque actualmente la navegación completa se oculta en pantallas pequeñas mediante `hidden md:flex`. La aplicación sigue siendo usable si el usuario navega por las tarjetas y enlaces internos visibles, pero una barra móvil con botón hamburguesa mejoraría la accesibilidad y la navegación directa.

---

# Conclusión técnica

La landing page está construida con una arquitectura moderna basada en React, TypeScript, Vite y Tailwind CSS. Su funcionamiento principal se apoya en componentes reutilizables, estado interno de React, renderizado condicional, animaciones con Motion y diseño responsive mediante clases de utilidad.

Las funcionalidades más importantes son la navegación SPA, el hero animado, los casos de estudio, el calendario filtrable y el formulario validado. Además, el proyecto incorpora una vista de mercado, galerías visuales, comparativas técnicas y una base de datos Oracle separada en `RepoBBDD`.

Desde el punto de vista técnico, el frontend está bien organizado en componentes y vistas. La parte backend existe como conjunto de scripts SQL, aunque no está integrada todavía con el frontend mediante una API. Para una evolución futura del proyecto, el siguiente paso lógico sería conectar la landing con un backend real que permitiera guardar consultas del formulario, recuperar eventos desde base de datos y alimentar dinámicamente los casos de estudio.
