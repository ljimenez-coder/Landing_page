import { Quote, Settings2 } from 'lucide-react';

export default function CountachView() {
  return (
    <div className="w-full pt-24">
      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-24 pt-32 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
          <img 
            src="/cars/1990_Lamborghini_Countach_25th_Anniversary_HCC23.jpg" 
            alt="Lamborghini Countach" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
        </div>
        <div className="relative z-20 max-w-5xl">
          <div className="font-label text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm mb-6">Caso de Estudio 04 / Sant'Agata Bolognese</div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-primary uppercase">
            LAMBORGHINI COUNTACH: DE "WUFFLE" A SUPERCONDENSADOR
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-[1px] bg-secondary hidden md:block"></div>
            <p className="font-body text-outline max-w-xl text-base md:text-lg leading-relaxed">
              Un análisis arquitectónico de la silueta de cuña que definió una era y su resurrección a través de la hibridación.
            </p>
          </div>
        </div>
      </header>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest flex justify-center items-center">
        <div className="max-w-4xl text-center">
          <Quote className="text-secondary w-12 h-12 md:w-16 md:h-16 mx-auto mb-8 opacity-80" strokeWidth={1} />
          <blockquote className="font-headline text-2xl md:text-4xl font-light italic text-on-surface leading-tight">
            "El coche original es aquel que no puedes dejar de mirar, a pesar de sus fallos ergonómicos..."
          </blockquote>
          <cite className="block mt-10 font-label text-[10px] md:text-xs tracking-widest uppercase text-outline not-italic">
            — Mike Duff, Historiador Automotriz
          </cite>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-16 gap-8">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary">Divergencia Técnica</h2>
          <p className="font-label text-[10px] md:text-xs text-outline tracking-widest md:max-w-xs md:text-right uppercase">
            32 Años de Ingeniería Evolutiva / Conjunto de Datos 90-22
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* Table Header */}
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-outline">Métrica</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-secondary">25º Aniversario 1990</div>
          <div className="hidden lg:block lg:col-span-4 p-8 bg-surface-container-low font-label text-[10px] uppercase tracking-widest text-tertiary">LPI 800-4 2022</div>

          {/* Row 1: Engine */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Arquitectura del Motor</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor Countach V12" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">5.2L V12</div>
            <div className="font-body text-base md:text-lg text-on-surface">Aspiración Natural</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Lamborghini_Countach_LPI_800-4_IMG_8019.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Motor Countach LPI 800-4" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">6.5L V12 + Motor Eléctrico 48V</div>
            <div className="font-body text-base md:text-lg text-on-surface">Supercondensador Híbrido</div>
          </div>

          {/* Row 2: Power */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low font-headline font-bold text-sm uppercase text-primary">Rendimiento Máximo</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/1990_Lamborghini_Countach_25th_Anniversary_HCC23.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Countach Speed" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV / Torque</div>
            <div className="font-body text-lg md:text-xl font-semibold text-on-surface">455 CV / 500 NM</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <img src="/cars/Lamborghini_Countach_LPI_800-4_IMG_8034.jpg" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Countach LPI 800-4 Power" />
            <div className="font-label text-[10px] md:text-xs text-outline mb-2 uppercase">CV Combinados</div>
            <div className="font-body text-lg md:text-xl font-semibold text-tertiary">814 CV / 720 NM</div>
          </div>

          {/* Row 3: Ergonomics */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest font-headline font-bold text-sm uppercase text-primary">Ergonomía</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg?width=800" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Interior clásico Countach" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Pedales desplazados, entrada lateral alta, espejo retrovisor solo para fines decorativos.</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-lowest border-t lg:border-t-0 border-outline-variant/10">
            <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Countach_LPI_800-4_IMG_8009.jpg?width=800" className="w-full h-32 object-cover rounded-md mb-4 brightness-75 grayscale" alt="Interior moderno Countach LPI" />
            <div className="font-body text-sm leading-relaxed text-on-surface-variant">Monocasco de fibra de carbono, cabina digital, visibilidad funcional de 360°.</div>
          </div>

          {/* Row 4: Experience */}
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low font-headline font-bold text-sm uppercase text-primary">Perfil de Experiencia</div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <div className="font-label text-[10px] text-secondary bg-secondary/10 px-2 py-1 inline-block mb-4 uppercase tracking-widest">Crudeza Analógica</div>
            <div className="font-body text-sm text-on-surface-variant leading-relaxed">Visceral, embrague sumamente pesado, asalto olfativo de gasolina pura.</div>
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 bg-surface-container-low border-t lg:border-t-0 border-outline-variant/10">
            <div className="font-label text-[10px] text-tertiary bg-tertiary/10 px-2 py-1 inline-block mb-4 uppercase tracking-widest">Precisión Digital</div>
            <div className="font-body text-sm text-on-surface-variant leading-relaxed">Relleno instantáneo de torque, fluidez con paletas de cambio y arranque silencioso.</div>
          </div>
        </div>
      </section>

      {/* Interactive Detail: Engineering Deep Dive */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none w-full md:w-[800px] h-full">
          <img 
            src="/cars/Lamborghini_Countach_25th_Anniversary_IMG_2994.jpg" 
            alt="Detalle Técnico" 
            className="w-full h-full object-cover grayscale invert"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold uppercase mb-16 tracking-tighter">
            El Pulso: <span className="text-secondary">Weber</span> vs <span className="text-tertiary">Supercondensador</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Weber Section */}
            <div className="p-6 md:p-8 border-l border-secondary/30 bg-surface/50 backdrop-blur-sm">
              <div className="font-label text-[10px] md:text-xs text-secondary tracking-widest mb-4 uppercase">Archivo Mécánico</div>
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase mb-6 text-primary">Carburadores Weber 44 DCNF</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                El corazón del Quattrovalvole original. Seis masivos carburadores de doble cuerpo sentados sobre el V12, exigiendo una sincronización meticulosa. Un coro mecánico que convertía combustible en ruido y calor con una hermosa ineficiencia.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-secondary"></div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Inducción Atmosférica</span>
              </div>
            </div>
            {/* Supercapacitor Section */}
            <div className="p-6 md:p-8 border-l border-tertiary/30 bg-surface-container-high/40 glass-panel">
              <div className="font-label text-[10px] md:text-xs text-tertiary tracking-widest mb-4 uppercase">Evolución de Energía Central</div>
              <h3 className="font-headline text-xl md:text-2xl font-bold uppercase mb-6 text-primary">Tecnología de Supercondensador 48V</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                Tres veces más potente que una batería del mismo peso. Integrado directamente en la caja de cambios, proporciona torque inmediato para rellenar los vacíos en la curva de potencia del V12, recargándose al frenar sin generar calor químico.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-tertiary"></div>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Entrega de Par Electrónica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Asymmetry Grid */}
      <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface">
        <div className="md:col-span-2 relative h-[400px] md:h-[600px] overflow-hidden group">
          <img 
            src="/cars/1989_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg" 
            alt="Engine Detail" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 bg-background/80 backdrop-blur-md max-w-xs border border-outline-variant/20">
            <div className="font-label text-[10px] text-tertiary uppercase tracking-widest mb-3">Estudio Visual</div>
            <p className="font-body text-sm text-primary leading-relaxed">La textura del aluminio forjado en frío contra el moderno tejido de carbono.</p>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6 h-[600px]">
          <div className="relative overflow-hidden bg-surface-container group">
            <img 
              src="https://commons.wikimedia.org/wiki/Special:FilePath/1988_Lamborghini_Countach_25th_Anniversary_Silver.jpg?width=800" 
              alt="Tail Light Detail" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10 bg-surface-container-low border-t border-secondary/20">
            <Settings2 className="text-outline mb-6 w-8 h-8" strokeWidth={1.5} />
            <h4 className="font-headline font-bold uppercase text-lg md:text-xl mb-4 text-primary">Integridad de Ensamblaje</h4>
            <p className="font-body text-xs md:text-sm text-outline leading-relaxed">
              Cada unidad del LPI 800-4 se cruza con las hojas de construcción originales de la fábrica de 1974 para la alineación visual del ADN.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
