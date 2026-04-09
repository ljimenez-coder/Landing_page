import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function EventsView() {
  const events = [
    {
      id: 'gsh26',
      date: 'MAR 12-15, 2026',
      title: 'GOODWOOD SPEED & HERITAGE',
      location: 'Sussex, Reino Unido',
      desc: 'El primer evento en incorporar la nueva clase "Hyper-Hybrids" en la famosa colina. Acompañados de un pabellón especial de modelos GT40 originales.',
      status: 'Inscripciones Abiertas',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Goodwood_Festival_of_Speed_2010_(4803920677).jpg?width=1200'
    },
    {
      id: 'hc26',
      date: 'JUN 08-10, 2026',
      title: 'HEVENINGHAM CONCOURS',
      location: 'Suffolk, Reino Unido',
      desc: 'Un escaparate íntimo de los 50 vehículos más significativos que demuestran el salto del motor de combustión a la arquitectura combinada.',
      status: 'Solo por Invitación',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Concourse_d%27Elegance_%40_Heveningham_Hall_-_geograph.org.uk_-_5484556.jpg?width=1200'
    },
    {
      id: 'lmc26',
      date: 'JUL 02-05, 2026',
      title: 'LE MANS CLASSIC',
      location: 'Circuito de la Sarthe, Le Mans, Francia',
      desc: 'Celebración en la pista con un tributo especial al 60 aniversario del 1-2-3 de Ford y una exhibición en pista del nuevo AMG ONE frente al cronómetro.',
      status: 'Entradas Disponibles',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Le_Mans_-_The_Dunlop_Bridge_-_geograph.org.uk_-_1025066.jpg?width=1200'
    },
    {
      id: 'pbw26',
      date: 'AGO 16-23, 2026',
      title: 'SEMANA PEBBLE BEACH',
      location: 'Monterey, California, EE.UU.',
      desc: 'Nuestra firma acogerá la carpa "Evolución", exhibiendo prototipos en chasis desnudo junto a sus unidades de producción finales.',
      status: 'VIP Agotado',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pebble_Beach_Golf_Links_Hole_18.jpg?width=1200'
    }
  ];

  return (
    <div className="w-full pt-24 min-h-screen bg-surface-container-lowest">
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant/20 pb-16">
        <div>
           <div className="font-label text-tertiary uppercase tracking-[0.3em] text-xs md:text-sm mb-6">CALENDARIO GLOBAL</div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary uppercase">
            EVENTOS ESTRATÉGICOS
          </h1>
        </div>
        <div className="md:w-1/3">
          <p className="font-body text-outline leading-relaxed">
            Nuestra presencia en el circuito global de concours y subastas asegura la colocación ideal y representación de activos para nuestros clientes.
          </p>
        </div>
      </header>

      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {events.map((evt) => (
            <div key={evt.id} className="group relative overflow-hidden bg-surface flex flex-col lg:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative overflow-hidden">
                <img 
                  src={evt.img} 
                  alt={evt.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                />
                <div className="absolute top-6 left-6 bg-background/90 px-4 py-2 font-label text-[10px] uppercase tracking-widest text-primary border border-outline-variant/30 backdrop-blur-sm">
                  {evt.status}
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-outline-variant/20 relative z-10 glass-panel lg:-ml-6 mt-0 lg:my-8 bg-surface-container-low/90">
                <div className="flex items-center gap-2 font-label text-[10px] md:text-xs tracking-widest uppercase text-secondary mb-4">
                  <Calendar size={14} />
                  <span>{evt.date}</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 uppercase tracking-tight">{evt.title}</h2>
                <div className="flex items-center gap-2 font-label text-[10px] md:text-xs tracking-widest uppercase text-outline mb-8">
                  <MapPin size={14} />
                  <span>{evt.location}</span>
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed mb-10">
                  {evt.desc}
                </p>
                <div className="mt-auto flex justify-between items-center border-t border-outline-variant/20 pt-6">
                  <span className="font-headline font-bold text-xs tracking-widest uppercase text-primary">Detalles de Asistencia</span>
                  <button className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-background transition-colors duration-300">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
