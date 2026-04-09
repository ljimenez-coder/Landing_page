import { Quote, Settings2 } from 'lucide-react';

export default function MercedesBenzView() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
          {/* AMG ONE Image */}
          <img 
            src="/cars/Mercedes-AMG-ONE-IAA-2021.jpg" 
            alt="Mercedes-AMG ONE" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="relative z-20 max-w-5xl">
          <div className="font-label text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm mb-6">Caso de Estudio 06 / Affalterbach, Alemania</div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-primary uppercase">
            MERCEDES-BENZ: ALAS DE GAVIOTA AL E PERFORMANCE
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-12 h-[1px] bg-secondary hidden md:block mt-3"></div>
            <div className="max-w-2xl">
              <p className="font-body text-outline text-base md:text-lg leading-relaxed mb-6">
                Introducido en 1954, el Mercedes-Benz 300 SL "Alas de Gaviota" fue una prodigiosa obra maestra de la posguerra. Su inconfundible diseño era un subproducto de la necesidad técnica de su revolucionario chasis tubular rígido. Fue pionero en la carretera, convirtiéndose en el primer automóvil de producción con inyección directa, una tecnología derivada directamente de la aviación militar.
              </p>
              <p className="font-body text-outline text-base md:text-lg leading-relaxed">
                Hoy, el mandato de liderar la extrema innovación en Affalterbach recae en el asombroso AMG ONE. Este hiperdeportivo ejecuta una hazaña de ingeniería al transplantar, literalmente, la unidad de potencia V6 Turbo-Híbrida de un monoplaza de Fórmula 1 a la vía pública. Una obra de homologación salvaje que demuestra el potencial absoluto del E Performance.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Evolution & History Depth */}
      <section className="py-24 px-6 md:px-12 bg-surface max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase text-primary mb-6">Historia y Evolución: Flechas de Plata en Obras</h2>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-4xl">
            Desde su renacimiento para las competiciones internacionales inmediatamente tras la Segunda Guerra Mundial apostando por la unidad "W194", Mercedes-Benz ha forjado un legado inamovible combinando tecnología alemana de una precisión enfermiza con una ambición ilimitada. La premisa ha sido siempre unificar la cima de la transferencia balística de un Fórmula uno, para someterlo a ser útil bajando por una avenida abierta en la ciudad.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Timeline Era 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-secondary pl-8 relative">
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-secondary rounded-full"></div>
            <div className="md:col-span-4">
              <h3 className="font-headline text-2xl font-bold text-primary">La Edad de Oro: 300 SL "Gullwing" (1954)</h3>
              <span className="font-label text-xs uppercase tracking-widest text-outline block mt-2">Nacimiento del término "Supercar"</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-on-surface-variant">Un importador afincado en Nueva York, Maximilian Hoffman, visualizó con claridad en 1953 que el próspero mercado norteamericano tragaría ciegamente una versión domesticada (pero igual de ruda) del campeón W194 de competición en rutas y de la Carrera Panamericana. El apodo "Gullwing" o Alas de Gaviota jamás fue ideado por mercaderes estilistas. Surgió por desesperación de los ingenieros al emplear soldaduras en docenas y docenas de metales extruidos huecos cruzando perpendicularmente por el habitáculo como un cesto ultraligero; dichos tubos imposibilitaban cortar las bisagras tradicionalmente bajas de una puerta regular, provocando su despliegue alzándose en ángulo sobre el piloto. Debajo de sus tapas respiraba uno de los trucos de Stuttgart: Inyección Directa purificada de Messerschmitts.</p>
              <div className="bg-surface-container-low p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-4">
                <div><span className="block text-outline uppercase text-[10px] mb-1">Maquinaria Orgánica</span> <span className="font-bold text-primary">3.0L SOHC Inline-6 (M198)</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Ruptura del Paradigma</span> <span className="font-bold text-primary">Bosch Mecánica Direct Injection</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Umbral Absoluto</span> <span className="font-bold text-primary">215 CV at 5800 RPM (Dinamismo Real)</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Récord de Rango</span> <span className="font-bold text-primary">Hasta 263 km/h con relaciones custom</span></div>
              </div>
            </div>
          </div>
          
          {/* Timeline Era 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-[#00DAF3] pl-8 relative">
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-[#00DAF3] rounded-full shadow-[0_0_10px_rgba(0,218,243,0.8)]"></div>
            <div className="md:col-span-4">
              <h3 className="font-headline text-2xl font-bold text-[#00DAF3]">El Cénit: AMG ONE (2022)</h3>
              <span className="font-label text-xs uppercase tracking-widest text-outline block mt-2">Insensatez Homologada de F1</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-on-surface-variant">Ola Källenius (CEO) admitió reían borrachos el día de 2017 cuando autorizó desarrollar este prototipo. Tomar exactamente el tren dinámico que dotó de títulos F1 mundiales al híbrido del W06, y someter esa explosión neurótica y dependiente a las severas retenciones ambientales y leyes acústicas, demandó casi 6 años de horrores informáticos retrasando la planta originada en el Reino Unido. Las r.p.m se redujeron preventivamente desde el rugir en pista frenándose a tan solo 11,000 giros (y regulando el temible ralentí) antes del temblor, inyectando cuatro ejes electrificados de control y asistencia con sistemas térmicos-eléctricos MGU-K de freno de retroimpacto y sistema giratorio de compresión MGU-H.</p>
              <div className="bg-surface-container-low p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-4 border border-[#00DAF3]/20">
                <div><span className="block text-outline uppercase text-[10px] mb-1">El Sistema Matrix</span> <span className="font-bold text-[#00DAF3]">1.6L V6 E-TURBO + 4 E-Motors</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Violencia Conjunta</span> <span className="font-bold text-[#00DAF3]">1.063 CV Combinados (782 kW) / Tracción Integral</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Reducción Aerodinámica</span> <span className="font-bold text-[#00DAF3]">Sistemas DRS automáticos frontales y de alerón de aleta dorsal central</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Limites Estresantes</span> <span className="font-bold text-[#00DAF3]">Redline Fija: 11k RPM (Extendido para Vida Útil Requerida: 50.000 KM)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest flex justify-center items-center">
        <div className="max-w-4xl text-center">
          <Quote className="text-secondary w-12 h-12 md:w-16 md:h-16 mx-auto mb-8 opacity-80" strokeWidth={1} />
          <blockquote className="font-headline text-2xl md:text-4xl font-light italic text-on-surface leading-tight">
            "La idea de poner un motor de Fórmula 1 moderno en un auto de calle parecía una misión imposible. Pero la genialidad de Mercedes siempre ha sido desafiar la palabra imposible."
          </blockquote>
          <cite className="block mt-10 font-label text-[10px] md:text-xs tracking-widest uppercase text-outline not-italic">
            — Revista Técnica Motorsport
          </cite>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-16 gap-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">Divergencia Técnica</h2>
          <p className="font-label text-[10px] md:text-xs text-outline tracking-widest md:max-w-xs md:text-right uppercase">
            68 Años de Inovación / Conjunto de Datos 54-22
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* Table Header */}
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-outline">Métrica</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-secondary">1954 300 SL (W198)</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-tertiary">2022 AMG ONE</div>

          {/* Row 1: Engine */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Arquitectura del Motor</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor M198" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">3.0L M198 6-Cilindros</div>
            <div className="font-body text-base md:text-lg text-on-surface">Inyección Directa Pionera</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-AMG-ONE-IAA-2021-Side.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor F1" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">1.6L V6 + 4 Motores Eléctricos</div>
            <div className="font-body text-base md:text-lg text-on-surface">Híbrido Puro Fórmula 1</div>
          </div>

          {/* Row 2: Power */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low font-headline font-bold text-sm uppercase text-primary">Rendimiento Máximo</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-300SL-W198-Front.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Velocímetro" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV / Torque</div>
            <div className="font-body text-lg md:text-xl font-semibold text-on-surface">215 CV / 274 NM (El vehículo más rápido de su época)</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-AMG-Project-One-Interior.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Velocímetro Digital" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV Combinados</div>
            <div className="font-body text-lg md:text-xl font-semibold text-tertiary">1063 CV / Rev Limit: 11,000 RPM</div>
          </div>

          {/* Row 3: Ergonomics */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Diseño y Habitáculo</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-300SL-W198-Coupe.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Interior clásico" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Chasis tubular que obligó a usar puertas "Alas de Gaviota". Lujo analógico, cuero rico. Viseras mínimas y ventilación natural.</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Mercedes-AMG-Project-One-Frankfurt.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Interior moderno" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Monocasco de cabono, asientos fijos estilo F1. Volante rectangular con botones de E-Performance, puramente enfocado al circuito.</div>
          </div>

          {/* Row 4: Experience */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low font-headline font-bold text-sm uppercase text-primary">Perfil de Experiencia</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <div className="font-label text-[10px] text-secondary bg-secondary/10 px-2 py-1 inline-block mb-4 uppercase tracking-widest">Elegancia Cinética</div>
            <div className="font-body text-sm text-on-surface-variant leading-relaxed">Conducción purista, olor a gasolina y cuero rico. Suspensión oscilante traicionera al límite pero bellísima.</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <div className="font-label text-[10px] text-tertiary bg-tertiary/10 px-2 py-1 inline-block mb-4 uppercase tracking-widest">Fuerza G Absoluta</div>
            <div className="font-body text-sm text-on-surface-variant leading-relaxed">Arranque eléctrico silencioso seguido del aullido ensordecedor de un V6 a 11,000 RPM. Aerodinámica activa completa.</div>
          </div>
        </div>
      </section>

      {/* Interactive Detail: Engineering Deep Dive */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none w-full md:w-[800px] h-full">
          <img 
            src="/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg" 
            alt="Technical Sketch" 
            className="w-full h-full object-cover grayscale invert"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase mb-16 tracking-tighter">
            La Inyección: <span className="text-secondary">Bosch Mecánica</span> vs <span className="text-tertiary">MGU-H F1</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Bosch Section */}
            <div className="p-6 md:p-8 border-l border-secondary/30 bg-surface/50 backdrop-blur-sm">
              <div className="font-label text-[10px] md:text-xs text-secondary tracking-widest mb-4 uppercase">Archivo de Alimentación</div>
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase mb-6 text-primary">Inyección Directa Bosch</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                El 300 SL fue el primer auto de producción masiva con inyección directa de combustible. El sistema Bosch revolucionario rociaba la gasolina directamente en los cilindros, lo que le otorgó a este motor 6-en-línea casi el doble de potencia que el modelo base con carburadores.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-secondary"></div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Precisión Analógica Pre-Digital</span>
              </div>
            </div>
            {/* MGU-H Section */}
            <div className="p-6 md:p-8 border-l border-tertiary/30 bg-surface-container-high/40 glass-panel">
              <div className="font-label text-[10px] md:text-xs text-tertiary tracking-widest mb-4 uppercase">Evolución de Turbocompresor</div>
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase mb-6 text-primary">Sistema MGU-H</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                Directamente heredado del monoplaza W06 de F1. El motor generador térmico (MGU-H) elimina el turbo lag usando energía eléctrica para hacer girar el compresor casi al instante a 100,000 RPM, recuperando además energía térmica de los gases de escape.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-tertiary"></div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Eficiencia Termo-Magnética</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      </section>

      {/* Dedicated Image Gallery */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary mb-12">Galería Curada: Mercedes-Benz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-300SL-W198-Coupe.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-300SL-W198-Front.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-AMG-ONE-IAA-2021.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-AMG-ONE-IAA-2021-Side.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-AMG-Project-One-Frankfurt.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/Mercedes-AMG-Project-One-Interior.jpg" className="w-full h-80 object-cover cursor-pointer hover:scale-[1.01] transition-transform lg:col-span-3" />
          </div>
        </div>
      </section>
    </div>
  );
}
