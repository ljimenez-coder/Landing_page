import { Quote, Settings2 } from 'lucide-react';

export default function FordGtView() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
          <img 
            src="/cars/2017_Ford_GT__94302_.jpg" 
            alt="Ford GT" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="relative z-20 max-w-5xl">
          <div className="font-label text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm mb-6">Caso de Estudio 05 / Dearborn, Michigan</div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-primary uppercase">
            FORD GT: ADN LE MANS
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-12 h-[1px] bg-secondary hidden md:block mt-3"></div>
            <div className="max-w-2xl">
              <p className="font-body text-outline text-base md:text-lg leading-relaxed mb-6">
                Nacido de una vendetta legendaria, el Ford GT40 Mk II fue construido en secreto con un solo propósito: destronar a Scuderia Ferrari en las 24 Horas de Le Mans. Y lo logró en 1966 con un inolvidable final 1-2-3 impulsado por la fuerza brutal de su V8 de 7.0L.
              </p>
              <p className="font-body text-outline text-base md:text-lg leading-relaxed">
                Medio siglo después, el nuevo Ford GT repitió la historia ganando su clase en su retorno a Le Mans. Atrás quedó la filosofía del acero pesado; el superdeportivo moderno fue esculpido en el túnel de viento, aprovechando un chasis monocasco de fibra de carbono ultra-rígido y la eficiencia explosiva de un V6 EcoBoost Bi-Turbo de 3.5 litros montado en posición central.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Evolution & History Depth */}
      <section className="py-24 px-6 md:px-12 bg-surface max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase text-primary mb-6">Historia y Evolución: Sangre y Asfalto</h2>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-4xl">
            Todo comenzó como una disputa comercial en 1963. Henry Ford II intentó, sin éxito, comprar la compañía de Enzo Ferrari; la negativa irritó tanto a Detroit que Ford firmó un cheque sin fondo a Carroll Shelby, Ken Miles, Bruce McLaren y un consorcio de astutos ingenieros británicos y americanos (basados inicialmente en un diseño de Lola). Su única misión dictada por decreto corporativo: aniquilar a Ferrari en su propio terreno dominado, la prestigiosa pista de las 24 Horas de Le Mans.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Timeline Era 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-secondary pl-8 relative">
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-secondary rounded-full"></div>
            <div className="md:col-span-4">
              <h3 className="font-headline text-2xl font-bold text-primary">El Rey de Le Mans: GT40 Mk II (1966)</h3>
              <span className="font-label text-xs uppercase tracking-widest text-outline block mt-2">La Gran Fuerza Bruta Americana</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-on-surface-variant">Tras frustrantes abandonos por problemas de caja de cambios aerodinámica en el programa original del Mk I (1964-65), Ford decidió que la solución no era sutileza sino apabullamiento. Encajaron un motor "FE" de 7.0 litros masivo originado para competir en NASCAR, reforzado internamente, dentro del ligero marco del GT. El famoso número de placa "GT40" dictaba su asfixiante y aerodinámica altura: 40 valiosas pulgadas desde el suelo. El coche rompió por fin el invicto italiano, finalizando los tres líderes americanos cruzando contiguos la meta en 1966.</p>
              <div className="bg-surface-container-low p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-4">
                <div><span className="block text-outline uppercase text-[10px] mb-1">Génesis Motor</span> <span className="font-bold text-primary">7.0L (427cu) V8 Aspirado</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Rendimiento</span> <span className="font-bold text-primary">485 CV Constantes</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Relaciones</span> <span className="font-bold text-primary">Kar Kraft 4-Velocidades Manual</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Estructura</span> <span className="font-bold text-primary">Monocoche Semi-Acero Inglés</span></div>
              </div>
            </div>
          </div>

          {/* Timeline Era 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-primary pl-8 relative">
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-primary rounded-full"></div>
            <div className="md:col-span-4">
              <h3 className="font-headline text-2xl font-bold text-primary">El Homenaje Centenario: Ford GT V8 (2005)</h3>
              <span className="font-label text-xs uppercase tracking-widest text-outline block mt-2">Retrofuturismo Sobrealimentado</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-on-surface-variant">Develado a las puertas de celebrar el año centenario de la marca automovilística como empresa, Camilo Pardo dirigió la reanimación visual que en proporciones era prácticamente idéntico al ganador de carreras originario de los 60s, si bien su chasis ahora se fabricaba esculpido desde aleaciones extruídas con prensas "superplásticas" (superplastic-forming). Esta vez el poder venía gritando de un sobrealimentador masivo que chillaba a revoluciones asombrosas montado sobre un bloque modular.</p>
              <div className="bg-surface-container-low p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-4">
                <div><span className="block text-outline uppercase text-[10px] mb-1">Corazón</span> <span className="font-bold text-primary">5.4L Supercharged Modular V8</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Estadística Pico</span> <span className="font-bold text-primary">550 CV / 678 Nm Torque</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Medición Balística</span> <span className="font-bold text-primary">330 km/h (Elect. Limitada)</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Purismo</span> <span className="font-bold text-primary">Caja de cambios Ricardo de 6 veloc.</span></div>
              </div>
            </div>
          </div>
          
          {/* Timeline Era 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-l border-[#00DAF3] pl-8 relative">
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-[#00DAF3] rounded-full shadow-[0_0_10px_rgba(0,218,243,0.8)]"></div>
            <div className="md:col-span-4">
              <h3 className="font-headline text-2xl font-bold text-[#00DAF3]">El Caza Táctico: Ford GT (2017)</h3>
              <span className="font-label text-xs uppercase tracking-widest text-outline block mt-2">Fibra y Aerodinámica Computacional</span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-on-surface-variant">Con una visión de desarrollo oculta herméticamente temporal bajo el disfraz del proyecto "Silver", Ford no creó un automóvil para la carretera, sino un purasangre de circuito con apenas intermitentes para ser legal. Para 2016 debían ganar Le Mans en clase, repitiendo exactamente los 50 años de triunfo. Esto requirió un sacrificio enorme para los más puristas del músculo americano: despedir el enorme Motor V8. Reemplazado por un empaquetadísimo motor 3.5L EcoBoost Bi-Turbo, su sección trasera se estrechó de manera insana originando conductos eólico-aceleradores por puentes o alas tipo "botarel". Ford dominó, ganó y humilló una vez más demostrando destreza aero-hidráulica computacional total.</p>
              <div className="bg-surface-container-low p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mt-4 border border-[#00DAF3]/20">
                <div><span className="block text-outline uppercase text-[10px] mb-1">Manejo de Combustión</span> <span className="font-bold text-[#00DAF3]">3.5L Twin-Turbo EcoBoost V6</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Impacto Final</span> <span className="font-bold text-[#00DAF3]">660 CV de Fuerza</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Sistemas Activos</span> <span className="font-bold text-[#00DAF3]">Alerón auto-adaptable, Quiebros Hidráulicos (-50mm)</span></div>
                <div><span className="block text-outline uppercase text-[10px] mb-1">Naturaleza Esquelética</span> <span className="font-bold text-[#00DAF3]">Bañera íntegra de Fibra Carbono</span></div>
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
            "No lo construimos para que fuera un coche retro. Lo construimos para volver a ganar Le Mans."
          </blockquote>
          <cite className="block mt-10 font-label text-[10px] md:text-xs tracking-widest uppercase text-outline not-italic">
            — Equipo de Ingeniería Ford Performance
          </cite>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-16 gap-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">Divergencia Técnica</h2>
          <p className="font-label text-[10px] md:text-xs text-outline tracking-widest md:max-w-xs md:text-right uppercase">
            50 Años de Ingeniería Evolutiva / Conjunto de Datos 66-16
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* Table Header */}
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-outline">Métrica</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-secondary">GT40 Mk II 1966</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-tertiary">Ford GT 2016</div>

          {/* Row 1: Engine */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Arquitectura del Motor</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/1966_Ford_GT40_Mk_II_Goodwood__2019__01_.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor GT40 V8" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">7.0L FE V8</div>
            <div className="font-body text-base md:text-lg text-on-surface">Aspiración Natural</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/2017_Ford_GT__94302_.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor Ford GT EcoBoost" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">3.5L EcoBoost V6</div>
            <div className="font-body text-base md:text-lg text-on-surface">Doble Turbocompresor</div>
          </div>

          {/* Row 2: Power */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low font-headline font-bold text-sm uppercase text-primary">Rendimiento Máximo</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/1966_Ford_GT40_MK_II.jpg?width=800" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Velocidad GT40" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV / Torque</div>
            <div className="font-body text-lg md:text-xl font-semibold text-on-surface">485 CV / 475 NM</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/2017_Ford_GT__94302_.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Velocidad Ford GT 2016" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV / Torque</div>
            <div className="font-body text-lg md:text-xl font-semibold text-tertiary">647 CV / 550 NM</div>
          </div>

          {/* Row 3: Aerodynamics */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Aerodinámica</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
             <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Ford_GT40_Mk_II_Le_Mans_1966_Tech_Info_noBG.jpg?width=800" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Aerodinámica GT40 Mk II" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Alerón trasero fijo, deflector de aire frontal, diseñado para estabilidad a alta velocidad en Mulsanne.</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
             <img src="https://commons.wikimedia.org/wiki/Special:FilePath/2017_Ford_GT_rear.JPG?width=800" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Aerodinámica Ford GT 2016" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Alerón trasero activo, contrafuertes volantes, fuselaje en forma de lágrima para carga aerodinámica óptima.</div>
          </div>
        </div>
      </section>

      {/* Dedicated Image Gallery */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary mb-12">Galería Curada: Ford GT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="/cars/1966_Ford_GT40_Mk_II_Goodwood__2019__01_.jpg" className="w-full h-96 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
            <img src="/cars/2017_Ford_GT__94302_.jpg" className="w-full h-96 object-cover cursor-pointer hover:scale-[1.01] transition-transform" />
          </div>
        </div>
      </section>
    </div>
  );
}
