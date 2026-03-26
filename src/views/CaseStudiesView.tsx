import { ArrowUpRight } from 'lucide-react';

interface CaseStudiesViewProps {
  setCurrentView: (view: string) => void;
}

export default function CaseStudiesView({ setCurrentView }: CaseStudiesViewProps) {
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

  return (
    <div className="w-full pt-24 min-h-screen bg-background">
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary uppercase mb-6">
          Casos de Estudio
        </h1>
        <div className="w-24 h-[1px] bg-secondary mb-8"></div>
        <p className="font-body text-xl md:text-2xl text-outline max-w-3xl leading-relaxed">
          Nuestra curaduría digital profundiza en las historias de evolución automotriz más significativas del último siglo. Analizamos la transición desde la potencia analógica pura hasta el futuro de precisión híbrida.
        </p>
      </header>
      
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
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            </div>
            <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-surface-container-lowest lg:-ml-12 z-10 glass-panel border-l border-outline-variant/30">
              <span className="font-label text-[10px] md:text-xs text-secondary tracking-widest uppercase mb-6">Expediente {String(idx + 1).padStart(2, '0')}</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">{study.title}</h2>
              <h3 className="font-body text-lg italic text-on-surface-variant mb-6">{study.subtitle}</h3>
              <p className="font-body text-outline leading-relaxed mb-12">{study.desc}</p>
              
              <div className="flex items-center gap-4 mt-auto group-hover:text-secondary text-primary transition-colors">
                <span className="font-headline font-bold text-xs tracking-widest uppercase">Iniciar Inmersión</span>
                <ArrowUpRight size={20} className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
