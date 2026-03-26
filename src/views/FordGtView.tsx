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
          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-[1px] bg-secondary hidden md:block"></div>
            <p className="font-body text-outline max-w-xl text-base md:text-lg leading-relaxed">
              Desde el final 1-2-3 de 1966 hasta la era moderna EcoBoost, el Ford GT sigue siendo el arma de resistencia definitiva de Estados Unidos.
            </p>
          </div>
        </div>
      </header>

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
    </div>
  );
}
