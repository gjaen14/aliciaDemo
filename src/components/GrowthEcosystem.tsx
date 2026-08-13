import { motion } from "motion/react";
import { BookOpen, Newspaper, Video } from "lucide-react";

export default function GrowthEcosystem() {
  const resources = [
    {
      type: "Artículos",
      title: "El Liderazgo del Futuro: Humano y Estratégico",
      icon: <Newspaper className="w-5 h-5" />
    },
    {
      type: "Masterclass",
      title: "Arquitectura de Equipos de Alto Rendimiento",
      icon: <Video className="w-5 h-5" />
    },
    {
      type: "Newsletter",
      title: "Insights Semanales para el C-Suite",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal">
              Ecosistema de Crecimiento
            </span>
            <h2 className="font-display text-[45px] text-midnight">
              Recursos para el <span className="italic">aprendizaje continuo.</span>
            </h2>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-midnight flex items-center gap-2 group hover:text-teal transition-colors pb-2 border-b border-midnight/20">
            Ver todos los recursos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 border border-midnight/5 rounded-sm hover:shadow-xl transition-all group"
            >
              <div className="text-teal mb-6 group-hover:scale-110 transition-transform origin-left">
                {res.icon}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-midnight/40 mb-3 block">
                {res.type}
              </span>
              <h3 className="font-display text-2xl text-midnight mb-8 leading-tight group-hover:text-teal transition-colors">
                {res.title}
              </h3>
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-midnight opacity-60 group-hover:opacity-100 transition-opacity">
                Leer más →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Lead Magnet */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-midnight text-white rounded-sm relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="font-display text-3xl">Únete a la Comunidad de Líderes</h3>
              <p className="text-white/70 font-sans">Recibe mensualmente reflexiones sobre liderazgo, estrategia y bienestar corporativo.</p>
            </div>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Tu email ejecutivo" 
                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 rounded-sm focus:outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-sans"
              />
              <button className="bg-coral text-midnight px-8 py-4 text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-white hover:text-midnight transition-all duration-300 shadow-md">
                Suscribirme
              </button>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
