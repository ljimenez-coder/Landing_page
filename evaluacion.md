**Evaluación: Luis Jiménez / Landing_page**

**Estado:** Evaluable con incumplimiento de requisito obligatorio

**Nota:** 5.60/10

**Desglose:**
- Ejecución y estabilidad: 13/20
- Front-end: 10/15
- Back-end: 0/15
- Funcionalidades: 10/20
- Responsive: 8/10
- Tipografías: 5/5
- Animación: 4/5
- Documentación: 4/10
- Repositorio: 2/5

**Funcionalidades indicadas:**
- SPA en React con navegación interna sin recarga.
- Hero dividido con animaciones de entrada y escala por scroll.
- Casos de estudio interactivos de vehículos.
- Vistas detalladas para Lamborghini, Mercedes-Benz y Ford GT.
- Vista de análisis de mercado tipo dashboard.
- Calendario de eventos con filtros por país.
- Formulario de consulta con validación, carga y estado de éxito.
- Animaciones con `motion/react`.

**Resumen técnico:**
El proyecto está hecho con React, TypeScript, Vite, Tailwind y Motion. La web se ha podido levantar en local y el build de producción con `pnpm run build` funciona correctamente. Visualmente tiene una composición bastante cuidada, buena selección de imágenes, tono premium y una navegación tipo SPA clara.

El frontend está bien trabajado y tiene más ambición que una landing estática. Destacan el hero, los casos de estudio, las transiciones, el calendario filtrable y el dashboard de mercado. Enhorabuena por la dirección visual: la página tiene una estética muy definida y bastante elegante.

La parte más débil es el backend. La documentación menciona una carpeta `RepoBBDD`, pero en el repositorio actual no existe. También hay dependencias como Supabase, Express o Gemini, pero no se ve uso real conectado al frontend. El formulario solo simula el envío con estado local, así que no hay persistencia ni API real. Esto incumple el requisito obligatorio de back-end funcional y también genera incoherencia entre documentación y código.

**Puntos fuertes:**
Muy buen diseño visual, uso correcto de React para separar vistas y animaciones bien integradas. La experiencia se siente moderna y coherente.

**Aspectos a mejorar:**
Corregir el error de TypeScript en `HomeView.tsx` (`React.FormEvent` sin importar React como namespace), limpiar dependencias no usadas, añadir backend real o retirar esa promesa de la documentación.

**Retroalimentación:**
Buen trabajo visual. La web tiene presencia y se nota esfuerzo en la experiencia. La bajada viene porque la rúbrica exige backend funcional y aquí no está. Para subir más la nota, necesita un backend real o eliminar esa parte de la documentación y dejar claro que el formulario es solo simulado.