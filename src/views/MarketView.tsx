import { TrendingUp, BarChart3, Database } from 'lucide-react';

export default function MarketView() {
  return (
    <div className="w-full pt-24 min-h-screen bg-surface">
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary uppercase mb-6">
          Análisis de Mercado 2026
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
          <div className="w-12 h-[1px] bg-tertiary"></div>
          <p className="font-body text-xl text-outline max-w-3xl leading-relaxed">
            Inteligencia de coleccionistas y proyecciones de valoración en la era de la transición tecnológica.
          </p>
        </div>
      </header>

      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/20">
            <div className="flex items-center gap-4 mb-8 text-secondary">
              <TrendingUp size={28} />
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">Prima de Transición</h2>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed text-lg mb-8">
              El mercado secundario ha mostrado un incremento sin precedentes en la valoración de vehículos que actúan como "puentes" entre la combustión analógica y la electrificación digital. Los superdeportivos híbridos V12 han visto una prima de subasta del 13.6% sobre sus equivalentes únicamente de combustión del periodo 2015-2020.
            </p>
            <div className="h-64 w-full bg-surface-container-high rounded-md relative overflow-hidden p-6 flex flex-col justify-end">
              {/* Fake Graph */}
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
            <div className="flex justify-between mt-4 font-label text-[10px] uppercase text-outline tracking-widest">
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span className="text-secondary">2026 (Proy.)</span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/20">
             <div className="flex items-center gap-4 mb-8 text-tertiary">
              <Database size={28} />
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">Métricas de Adopción EV</h2>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6">
              La adopción de hiperdeportivos puramente eléctricos sigue siendo calculada. El crecimiento interanual se sitúa en un conservador 7.8%, con coleccionistas favoreciendo fuertemente las arquitecturas de 800V que pueden sostener un rendimiento de pista sin degradación térmica.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-low p-8 glass-panel border border-secondary/20">
            <span className="font-label text-[10px] text-secondary tracking-widest uppercase mb-6 block">Resumen Ejecutivo</span>
            <ul className="space-y-6">
               <li className="border-b border-outline-variant/20 pb-4">
                <span className="block text-2xl font-bold text-primary mb-1">$4.2B+</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Volumen Subastado Q1-Q3</span>
               </li>
               <li className="border-b border-outline-variant/20 pb-4">
                <span className="block text-2xl font-bold text-primary mb-1">94%</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Tasa de Venta Hyper-Hybrids</span>
               </li>
               <li>
                <span className="block text-2xl font-bold text-primary mb-1">11.2 Años</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Retención Promedio Coleccionista</span>
               </li>
            </ul>
             <button className="w-full mt-8 py-4 bg-transparent border border-secondary text-secondary font-headline font-bold text-xs tracking-widest uppercase hover:bg-secondary hover:text-background transition-all">
                SOLICITAR REPORTE COMPLETO
              </button>
          </div>
          
          <div className="bg-surface-container-low p-8 glass-panel border border-outline-variant/10">
            <BarChart3 className="text-outline w-10 h-10 mb-6" strokeWidth={1} />
            <h3 className="font-headline text-xl font-bold text-primary mb-4">Servicios de Datos</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
              Los clientes tienen acceso al registro de transacciones de subastas privadas que no aparecen en registros públicos. Nuestros algoritmos asisten en el timing de adquisición y liquidación.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
