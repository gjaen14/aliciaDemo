import { motion } from "motion/react";
import { Compass, Target, Users, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function SolutionsTeaser() {
  const services = [
    {
      icon: <Compass className="w-6 h-6 text-teal" />,
      title: "Impulsa tu Carrera",
      subtitle: "Estrategia & Aceleración",
      desc: "Acompañamiento personalizado para acelerar tu crecimiento y superar el estancamiento profesional."
    },
    {
      icon: <Target className="w-6 h-6 text-teal" />,
      title: "Define tu Marca Profesional",
      subtitle: "Posicionamiento & Visibilidad",
      desc: "Construimos tu presencia ejecutiva para que seas reconocido como un referente en tu industria."
    },
    {
      icon: <Users className="w-6 h-6 text-teal" />,
      title: "Lidera con Confianza",
      subtitle: "Desarrollo de Liderazgo",
      desc: "Fortalece tu presencia directiva, desarrolla la confianza para influir y lidera equipos de alto impacto."
    },
    {
      icon: <Zap className="w-6 h-6 text-teal" />,
      title: "Impulsa el Talento Organizacional",
      subtitle: "Soluciones Corporativas",
      desc: "Programas a medida para empresas que buscan potenciar el rendimiento y la retención de su talento."
    }
  ];

  return (
    <section className="py-24 bg-midnight text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-gold text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Estrategia · Marca · Liderazgo · Talento
          </div>
          <h2 className="serif text-[45px] text-white leading-tight font-bold uppercase tracking-tight">
            NUESTROS <span className="text-teal italic">SERVICIOS</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-sans">
            Soluciones diseñadas para impulsar el crecimiento de profesionales y la competitividad de organizaciones.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-teal/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-midnight border border-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="serif text-xl font-bold text-white group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center text-xs font-semibold text-teal group-hover:text-white transition-colors">
                <span>Saber más</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button to WorkTogether Page */}
        <div className="text-center">
          <Link
            to="/trabajemos-juntos"
            className="inline-flex items-center gap-3 bg-coral hover:bg-white text-midnight font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            VER DETALLE DE TRABAJEMOS JUNTOS
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
