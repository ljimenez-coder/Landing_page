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
          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-[1px] bg-secondary hidden md:block"></div>
            <p className="font-body text-outline max-w-xl text-base md:text-lg leading-relaxed">
              Del nacimiento del deportivo de la posguerra hasta llevar un motor pura sangre de Fórmula 1 a la calle. Una clase maestra en ingeniería alemana aplicada.
            </p>
          </div>
        </div>
      </header>

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

      {/* Visual Asymmetry Grid */}
      <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface">
        <div className="md:col-span-2 relative h-[400px] md:h-[600px] overflow-hidden group">
          <img 
            src="/cars/Mercedes-AMG-Project-One-Interior.jpg" 
            alt="Detalle de Ruedas" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 bg-background/80 backdrop-blur-md max-w-xs border border-outline-variant/20">
            <div className="font-label text-[10px] text-tertiary uppercase tracking-widest mb-3">Conocimiento Técnico</div>
            <p className="font-body text-sm text-primary leading-relaxed">Aerodinámica forjada en las pistas bajo presión incesante.</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6 h-[600px]">
          <div className="relative overflow-hidden bg-surface-container group">
            <img 
              src="/cars/Mercedes-AMG-ONE-IAA-2021-Side.jpg" 
              alt="Detalle faro" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10 bg-surface-container-low border-t border-secondary/20">
            <Settings2 className="text-outline mb-6 w-8 h-8" strokeWidth={1.5} />
            <h4 className="font-headline font-bold uppercase text-lg md:text-xl mb-4 text-primary">Integridad de Construcción</h4>
            <p className="font-body text-xs md:text-sm text-outline leading-relaxed">
              Las exigencias termales del motor V6 turbo F1 requerían un diseño completamente distinto de refrigeración manteniendo sus estándares legales de calle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
