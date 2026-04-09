import { ArrowUpRight } from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
}

export default function HomeView({ setCurrentView }: HomeViewProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full group">
          <img 
            src="https://commons.wikimedia.org/wiki/Special:FilePath/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg?width=1200" 
            alt="Vintage Lamborghini Countach" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r"></div>
          <div className="absolute bottom-12 left-6 md:left-12">
            <p className="font-label text-secondary text-xs tracking-widest uppercase mb-2">Leyenda Analógica</p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">COUNTACH 25º ANIVERSARIO</h2>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full group">
          <img 
            src="/cars/Lamborghini_Countach_LPI_800-4_IMG_8019.jpg" 
            alt="Modern Lamborghini Countach LPI 800-4" 
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-l"></div>
          <div className="absolute bottom-12 right-6 md:right-12 text-right">
            <p className="font-label text-tertiary text-xs tracking-widest uppercase mb-2">Innovación Híbrida</p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">COUNTACH LPI 800-4</h2>
          </div>
        </div>
        {/* Central Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-none">
              COLISIÓN DE ERAS: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary">LA EVOLUCIÓN DEL RENDIMIENTO</span>
            </h1>
            <p className="font-body text-base md:text-xl text-outline max-w-2xl mx-auto uppercase tracking-widest">
              Un viaje curado desde leyendas analógicas hasta la innovación híbrida.
            </p>
          </div>
        </div>
      </section>

      {/* The Digital Curator */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          <h3 className="font-label text-secondary text-sm tracking-[0.3em] uppercase mb-8">Visión 2026</h3>
          <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">EL CURADOR <br/>DIGITAL.</h2>
        </div>
        <div className="w-full lg:w-2/3 space-y-12">
          <p className="font-body text-xl md:text-3xl font-light text-on-surface-variant leading-relaxed">
            Habitamos la <span className="text-on-surface font-semibold italic">Era de la Experiencia</span>. A medida que nos acercamos al 2026, la definición de superdeportivo está pasando de la potencia bruta a la narrativa del patrimonio fusionada con la transparencia técnica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 md:pt-12">
            <div className="p-8 bg-surface-container-low border border-outline-variant/10">
              <span className="font-label text-tertiary text-xs tracking-widest uppercase mb-4 block">Tendencia A Ansira 2026</span>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Hiper-Personalización de la Herencia. Los propietarios ya no buscan especificaciones estándar; exigen mapeo de linaje histórico para cada tejido de fibra de carbono.</p>
            </div>
            <div className="p-8 bg-surface-container-low border border-outline-variant/10">
              <span className="font-label text-secondary text-xs tracking-widest uppercase mb-4 block">Tendencia B Ansira 2026</span>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">El Valor Híbrido. El apetito del mercado gira hacia la 'Tecnología de Transición'—donde el rugido del V12 se encuentra con la precisión silenciosa del torque eléctrico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-primary">CASOS DE ESTUDIO</h2>
          <div className="hidden md:block w-24 h-px bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* Lamborghini */}
          <div className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer" onClick={() => setCurrentView('countach')}>
            <img 
              src="/cars/1990_Lamborghini_Countach_25th_Anniversary_HCC23.jpg" 
              alt="Lamborghini V12" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">LAMBORGHINI: <br/>LA TRANSICIÓN V12</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-white transition-colors">
                Explorar Evolución
              </button>
            </div>
          </div>
          {/* Mercedes-Benz */}
          <div className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer" onClick={() => setCurrentView('mercedesbenz')}>
            <img 
              src="/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg" 
              alt="Mercedes 300 SL" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">MERCEDES-BENZ: <br/>ALAS DE GAVIOTA AL EQ</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-white transition-colors">
                Explorar Evolución
              </button>
            </div>
          </div>
          {/* Ford GT */}
          <div className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer" onClick={() => setCurrentView('fordgt')}>
            <img 
              src="/cars/1966_Ford_GT40_Mk_II_Goodwood__2019__01_.jpg" 
              alt="Ford GT" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">FORD GT: <br/>ADN LE MANS</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-white transition-colors">
                Explorar Evolución
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-container-low">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary tracking-tight">TENDENCIAS DE MERCADO <br/>2026.</h2>
            <p className="font-body text-outline mb-12 text-base md:text-lg leading-relaxed">Análisis predictivo basado en el volumen actual de subastas y las carteras de pedidos de fabricantes de Nivel-1.</p>
            <div className="space-y-12 md:space-y-16">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-label text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs">Aumento de Integración Híbrida</span>
                  <span className="font-headline text-3xl md:text-4xl font-black text-secondary">13.6%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="w-[13.6%] h-full bg-secondary"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-label text-tertiary uppercase tracking-[0.2em] text-[10px] md:text-xs">Adopción Totalmente Eléctrica</span>
                  <span className="font-headline text-3xl md:text-4xl font-black text-tertiary">7.8%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="w-[7.8%] h-full bg-tertiary"></div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="w-full lg:w-1/2 p-8 md:p-12 glass-panel border border-outline-variant/10 cursor-pointer hover:border-secondary transition-colors group"
            onClick={() => setCurrentView('market')}
          >
            <span className="font-label text-primary text-[10px] tracking-widest uppercase mb-8 block">Dato de Interés // Insight-ID: 8092X</span>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8">
              "El mercado secundario está valorando el <span className="text-tertiary underline decoration-tertiary/30 underline-offset-8">puente híbrido</span> por encima de la electrificación pura. El origen del rendimiento ahora está ligado a la efectividad con la que una marca traduce su alma de combustión a un futuro digital."
            </p>
            <div className="flex items-center gap-4 group-hover:text-secondary text-primary transition-colors">
              <div className="w-10 h-px bg-secondary"></div>
              <span className="font-label text-[10px] md:text-xs uppercase tracking-widest">Reporte de Valoración de Patrimonio 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Events */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-16 md:mb-24 text-center tracking-tighter">EVENTOS ESTRATÉGICOS 2026</h2>
          <div className="grid grid-cols-1 divide-y divide-outline-variant/20 border-y border-outline-variant/20">
            {[
              { date: 'MAR 12-15', title: 'GOODWOOD SPEED & HERITAGE', loc: 'Sussex, Reino Unido' },
              { date: 'JUN 08-10', title: 'HEVENINGHAM CONCOURS', loc: 'Suffolk, Reino Unido' },
              { date: 'JUL 02-05', title: 'LE MANS CLASSIC', loc: 'Le Mans, Francia' },
              { date: 'AGO 16-23', title: 'SEMANA PIBBLE BEACH', loc: 'California, EE.UU.' }
            ].map((event, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentView('events')}
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 md:py-12 px-4 md:px-6 hover:bg-surface-container-low transition-colors duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                  <span className="font-label text-outline text-sm md:text-lg w-32">{event.date}</span>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{event.title}</h3>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4 font-label text-[10px] md:text-xs tracking-widest text-outline uppercase">
                  <span>{event.loc}</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Services */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tighter">SERVICIOS A MEDIDA.</h2>
            <p className="font-body text-outline text-base md:text-lg mb-12 leading-relaxed">Gestión inigualable de colecciones de nivel mundial. Nuestros equipos de logística y consultoría operan con precisión quirúrgica.</p>
            <ul className="space-y-6 font-label text-[10px] md:text-xs tracking-[0.2em] uppercase text-primary">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-secondary"></span>
                Logística Global de Activos
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-tertiary"></span>
                Auditoría de Orígenes Históricos
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-secondary"></span>
                Representación en Subastas Privadas
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-outline-variant py-4 focus-within:border-secondary transition-colors">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">Nombre de la Colección / Contacto</label>
                <input 
                  type="text" 
                  placeholder="INTRODUZCA IDENTIFICADOR" 
                  className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 placeholder:text-surface-variant focus:outline-none"
                />
              </div>
              <div className="border-b border-outline-variant py-4 focus-within:border-secondary transition-colors">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">Servicio Requerido</label>
                <select className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-surface text-primary">Logística y Transporte</option>
                  <option className="bg-surface text-primary">Consultoría y Adquisición</option>
                  <option className="bg-surface text-primary">Estrategia de Restauración de Patrimonio</option>
                </select>
              </div>
              <button className="w-full py-6 mt-8 bg-primary text-on-primary font-headline font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                CONSULTA PRIVADA
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
