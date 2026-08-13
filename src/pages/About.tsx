import FounderLetter from "../components/FounderLetter";
import { motion } from "motion/react";
import { ShieldCheck, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Briefcase className="w-5 h-5 text-teal" />,
      title: "Trayectoria Corporativa",
      desc: "Más de 20 años en posiciones directivas y de alta dirección en organizaciones multinacionales y comités ejecutivos globales."
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-teal" />,
      title: "Credenciales Ejecutivas",
      desc: "Certificada en metodologías avanzadas de coaching ejecutivo de alto nivel, alineación de comités de dirección y dinámicas B2B."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal" />,
      title: "Rigor y Confidencialidad",
      desc: "Experiencia probada bajo estrictos estándares de confidencialidad para directores, VPs y presidentes de compañías Fortune 500."
    },
    {
      icon: <Award className="w-5 h-5 text-teal" />,
      title: "Impacto Comprobado",
      desc: "Acompañamiento en más de 500 procesos de transición de carrera hacia la C-Suite con un promedio de aumento en compensación del 38%."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <FounderLetter />
      
      {/* Editorial Trayectoria Section */}
      <section className="py-32 bg-nude/20 border-t border-midnight/5 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Heading and intro narrative */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal block">
                Arquitectura de Liderazgo
              </span>
              <h2 className="serif text-[45px] text-midnight font-bold leading-tight uppercase tracking-tight">
                MI <span className="text-teal italic">TRAYECTORIA</span>
              </h2>
              <div className="w-20 h-1 bg-coral mt-4" />
              <p className="text-base text-slate-700 leading-relaxed font-sans pt-4">
                Mi trayectoria no se mide en años, sino en la solidez de las transiciones y la claridad con la que acompaño a directivos a consolidar su espacio de influencia.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Habiendo gestionado comités estratégicos en entornos de alta presión, conozco de primera mano el lenguaje, los códigos y los desafíos invisibles del liderazgo corporativo internacional.
              </p>
            </div>

            {/* Right side: 4 pillars grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl border border-midnight/5 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-teal/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-nude/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform origin-left">
                    {pillar.icon}
                  </div>
                  <h3 className="serif text-xl font-bold text-midnight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
