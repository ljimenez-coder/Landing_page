interface FooterProps {
  setCurrentView: (view: string) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-surface-container-lowest tonal-shift">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
        <div 
          onClick={() => setCurrentView('home')}
          className="text-lg font-black text-primary font-headline uppercase tracking-tighter cursor-pointer"
        >
          HERENCIA & EVOLUCIÓN
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <button onClick={() => setCurrentView('home')} className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors duration-300">
            Consultoría
          </button>
          <button onClick={() => setCurrentView('market')} className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors duration-300">
            Logística Market Insights
          </button>
          <button onClick={() => setCurrentView('casestudies')} className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors duration-300">
            Casos de Estudio
          </button>
          <button onClick={() => setCurrentView('events')} className="font-label text-[10px] tracking-widest uppercase text-outline hover:text-secondary transition-colors duration-300">
            Calendario de Eventos
          </button>
        </div>
        <div className="font-label text-[10px] tracking-widest uppercase text-outline">
          © 2026 HERENCIA & EVOLUCIÓN. EL CURADOR DIGITAL.
        </div>
      </div>
    </footer>
  );
}
