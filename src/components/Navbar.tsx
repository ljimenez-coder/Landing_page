import { UserCircle } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md transition-colors duration-500 border-b border-transparent">
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 w-full">
        <div 
          className="text-xl font-black tracking-tighter text-primary font-headline uppercase cursor-pointer"
          onClick={() => setCurrentView('home')}
        >
          HERENCIA & EVOLUCIÓN
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <button 
            onClick={() => setCurrentView('home')}
            className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 ${currentView === 'home' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-outline hover:text-secondary'}`}
          >
            Evolución
          </button>
          <div className="relative group py-2">
            <button 
              className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 flex items-center gap-1 ${['casestudies', 'countach', 'mercedesbenz', 'fordgt'].includes(currentView) ? 'text-secondary' : 'text-outline hover:text-secondary'}`}
            >
              Apartados <span className="text-[10px] opacity-60">▼</span>
            </button>
            <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block z-50">
              <div className="bg-background/95 backdrop-blur-xl border border-outline-variant/30 py-2 shadow-2xl">
                <button 
                  onClick={() => setCurrentView('countach')}
                  className="w-full text-left px-4 py-3 font-label text-[10px] uppercase tracking-widest text-primary hover:bg-surface-container-low hover:text-secondary transition-colors"
                >
                  Lamborghini
                </button>
                <button 
                  onClick={() => setCurrentView('mercedesbenz')}
                  className="w-full text-left px-4 py-3 font-label text-[10px] uppercase tracking-widest text-primary hover:bg-surface-container-low hover:text-secondary transition-colors"
                >
                  Mercedes-Benz
                </button>
                <button 
                  onClick={() => setCurrentView('fordgt')}
                  className="w-full text-left px-4 py-3 font-label text-[10px] uppercase tracking-widest text-primary hover:bg-surface-container-low hover:text-secondary transition-colors"
                >
                  Ford GT
                </button>
                <div className="h-px bg-outline-variant/10 my-1"></div>
                <button 
                  onClick={() => setCurrentView('casestudies')}
                  className="w-full text-left px-4 py-3 font-label text-[10px] uppercase tracking-widest text-primary hover:bg-surface-container-low hover:text-secondary transition-colors"
                >
                  Visión General
                </button>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentView('market')}
            className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 ${currentView === 'market' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-outline hover:text-secondary'}`}
          >
            Mercado 2026
          </button>
          <button 
            onClick={() => setCurrentView('events')}
            className={`font-headline tracking-tight font-bold uppercase text-xs transition-colors duration-300 ${currentView === 'events' ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-outline hover:text-secondary'}`}
          >
            Eventos
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-white transition-colors duration-200">
            <UserCircle size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}
