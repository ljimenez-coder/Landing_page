import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
}

export default function HomeView({ setCurrentView }: HomeViewProps) {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Form State
  const [formData, setFormData] = useState({ name: '', service: 'Logística y Transporte', email: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.length < 3 || !formData.email.includes('@')) {
      setFormStatus('error');
      return;
    }
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', service: 'Logística y Transporte', email: '' });
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row">
        <motion.div
          style={{ scale: heroScale }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.2, filter: 'grayscale(100%) blur(10px)' }}
            animate={{ scale: 1, filter: 'grayscale(100%) blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://commons.wikimedia.org/wiki/Special:FilePath/White_1990_Lamborghini_Countach_25th_Anniversary_SCD_24.jpg?width=1200"
            alt="Vintage Lamborghini Countach"
            className="w-full h-full object-cover brightness-75 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r"></div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 left-6 md:left-12"
          >
            <p className="font-label text-secondary text-xs tracking-widest uppercase mb-2">Leyenda Analógica</p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary uppercase">COUNTACH 25º ANIVERSARIO</h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale: heroScale }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.2, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/cars/Lamborghini_Countach_LPI_800-4_IMG_8019.jpg"
            alt="Modern Lamborghini Countach LPI 800-4"
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-l"></div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-12 right-6 md:right-12 text-right"
          >
            <p className="font-label text-tertiary text-xs tracking-widest uppercase mb-2">Innovación Híbrida</p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary uppercase">COUNTACH LPI 800-4</h2>
          </motion.div>
        </motion.div>

        {/* Central Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="max-w-4xl text-center space-y-6"
          >
            <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-none drop-shadow-2xl">
              COLISIÓN DE ERAS: <br />
              <motion.span
                initial={{ backgroundPosition: '200% center' }}
                animate={{ backgroundPosition: '0% center' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-tertiary bg-[length:200%_auto]"
              >
                LA EVOLUCIÓN DEL RENDIMIENTO
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-body text-base md:text-xl text-outline max-w-2xl mx-auto uppercase tracking-widest"
            >
              Un viaje curado desde leyendas analógicas hasta la innovación híbrida.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Digital Curator */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
        {/* Animated background line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent origin-left"
        />

        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-label text-secondary text-sm tracking-[0.3em] uppercase mb-8">Visión 2026</h3>
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">EL CURADOR <br />DIGITAL.</h2>
          </motion.div>
        </div>
        <div className="w-full lg:w-2/3 space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-xl md:text-3xl font-light text-on-surface-variant leading-relaxed"
          >
            Habitamos la <span className="text-on-surface font-semibold italic">Era de la Experiencia</span>. A medida que nos acercamos al 2026, la definición de superdeportivo está pasando de la potencia bruta a la narrativa del patrimonio fusionada con la transparencia técnica.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 md:pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-surface-container-low border border-outline-variant/10 group hover:border-secondary transition-all"
            >
              <span className="font-label text-tertiary text-xs tracking-widest uppercase mb-4 block group-hover:text-secondary transition-colors">Tendencia A Ansira 2026</span>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Hiper-Personalización de la Herencia. Los propietarios ya no buscan especificaciones estándar; exigen mapeo de linaje histórico para cada tejido de fibra de carbono.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-8 bg-surface-container-low border border-outline-variant/10 group hover:border-tertiary transition-all"
            >
              <span className="font-label text-secondary text-xs tracking-widest uppercase mb-4 block group-hover:text-tertiary transition-colors">Tendencia B Ansira 2026</span>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">El Valor Híbrido. El apetito del mercado gira hacia la 'Tecnología de Transición'—donde el rugido del V12 se encuentra con la precisión silenciosa del torque eléctrico.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-primary"
          >
            CASOS DE ESTUDIO
          </motion.h2>
          <div className="hidden md:block w-24 h-px bg-outline-variant"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* Lamborghini */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer"
            onClick={() => setCurrentView('countach')}
          >
            <img
              src="/cars/1990_Lamborghini_Countach_25th_Anniversary_HCC23.jpg"
              alt="Lamborghini V12"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent opacity-90">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">LAMBORGHINI: <br />LA TRANSICIÓN V12</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-secondary hover:text-background transition-all transform group-hover:translate-x-2">
                Explorar Evolución
              </button>
            </div>
          </motion.div>
          {/* Mercedes-Benz */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer"
            onClick={() => setCurrentView('mercedesbenz')}
          >
            <img
              src="/cars/Mercedes-Benz_300_SL_Gullwing_1955.jpg"
              alt="Mercedes 300 SL"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent opacity-90">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">MERCEDES-BENZ: <br />ALAS DE GAVIOTA AL EQ</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-secondary hover:text-background transition-all transform group-hover:translate-x-2">
                Explorar Evolución
              </button>
            </div>
          </motion.div>
          {/* Ford GT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group overflow-hidden aspect-[4/5] bg-surface-container-high cursor-pointer"
            onClick={() => setCurrentView('fordgt')}
          >
            <img
              src="/cars/1966_Ford_GT40_Mk_II_Goodwood__2019__01_.jpg"
              alt="Ford GT"
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100"
            />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent opacity-90">
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">FORD GT: <br />ADN LE MANS</h3>
              <button className="w-fit px-6 md:px-8 py-3 bg-primary text-on-primary font-label text-[10px] md:text-xs tracking-widest uppercase hover:bg-secondary hover:text-background transition-all transform group-hover:translate-x-2">
                Explorar Evolución
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-headline text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary tracking-tight"
            >
              TENDENCIAS DE MERCADO <br />2026.
            </motion.h2>
            <p className="font-body text-outline mb-12 text-base md:text-lg leading-relaxed">Análisis predictivo basado en el volumen actual de subastas y las carteras de pedidos de fabricantes de Nivel-1.</p>
            <div className="space-y-12 md:space-y-16">
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-label text-secondary uppercase tracking-[0.2em] text-[10px] md:text-xs">Aumento de Integración Híbrida</span>
                  <span className="font-headline text-3xl md:text-4xl font-black text-secondary">13.6%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '13.6%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-secondary shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-label text-tertiary uppercase tracking-[0.2em] text-[10px] md:text-xs">Adopción Totalmente Eléctrica</span>
                  <span className="font-headline text-3xl md:text-4xl font-black text-tertiary">7.8%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '7.8%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                    className="h-full bg-tertiary shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, rotateY: 20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 p-8 md:p-12 glass-panel border border-outline-variant/10 cursor-pointer hover:border-secondary transition-all group perspective-1000"
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
          </motion.div>
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
          <div className="w-full lg:w-1/2 relative">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center bg-surface-container-low border border-secondary/30 p-12"
                >
                  <CheckCircle2 size={48} className="text-secondary mb-6" />
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase">Solicitud Recibida</h3>
                  <p className="font-body text-on-surface-variant text-sm">Nuestro equipo de conserjería se pondrá en contacto con usted en un plazo de 24 horas a través del canal seguro.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-xs font-label uppercase tracking-widest text-secondary hover:text-white transition-colors">Volver al Formulario</button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-8" 
                  onSubmit={handleFormSubmit}
                >
                  {formStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/30 text-red-400 font-label text-[10px] uppercase tracking-widest">
                      <AlertCircle size={16} /> Por favor, proporcione un identificador válido y un correo electrónico.
                    </div>
                  )}
                  <div className={`border-b ${formStatus === 'error' && formData.name.length < 3 ? 'border-red-500' : 'border-outline-variant'} py-4 focus-within:border-secondary transition-colors`}>
                    <label className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">Identificador o Nombre Completo</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="INTRODUZCA IDENTIFICADOR" 
                      className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 placeholder:text-surface-variant focus:outline-none"
                    />
                  </div>
                  <div className={`border-b ${formStatus === 'error' && !formData.email.includes('@') ? 'border-red-500' : 'border-outline-variant'} py-4 focus-within:border-secondary transition-colors`}>
                    <label className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">Canal de Contacto Seguro (Email)</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="CLIENTE@DOMINIO.COM" 
                      className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 placeholder:text-surface-variant focus:outline-none"
                    />
                  </div>
                  <div className="border-b border-outline-variant py-4 focus-within:border-secondary transition-colors">
                    <label className="font-label text-[10px] uppercase tracking-widest text-outline block mb-2">Servicio Requerido</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-transparent border-none focus:ring-0 font-label text-base md:text-lg text-primary p-0 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option className="bg-surface text-primary">Logística y Transporte</option>
                      <option className="bg-surface text-primary">Consultoría y Adquisición</option>
                      <option className="bg-surface text-primary">Estrategia de Restauración de Patrimonio</option>
                    </select>
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full py-6 mt-8 flex justify-center items-center gap-4 bg-primary text-on-primary font-headline font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'CONSULTA PRIVADA'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
