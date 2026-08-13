import { motion } from "motion/react";
import { Compass, Target, Users, Zap, CheckCircle2, ArrowRight, Shield, Award, Sparkles } from "lucide-react";
import { useState } from "react";

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<number>(0);

  const services = [
    {
      id: "carrera",
      title: "Impulsa tu Carrera",
      subtitle: "Estrategia y Aceleración Profesional",
      icon: <Compass className="w-6 h-6 text-white" />,
      color: "bg-midnight",
      badge: "Impulsa tu Carrera",
      tag: "Para Profesionales en Crecimiento",
      deliverables: [
        "Plan de desarrollo de carrera a 12 meses",
        "Estrategia de ascenso y negociación salarial",
        "Claridad de propósito y dirección profesional",
        "Acompañamiento en procesos de transición"
      ],
      impactMetrics: "+38% Incremento de Compensación",
      timeline: "3 a 6 Meses",
      description: "Acompañamiento personalizado para profesionales que buscan acelerar su crecimiento, superar el estancamiento y tomar decisiones de carrera con claridad y propósito."
    },
    {
      id: "marca",
      title: "Define tu Marca Profesional",
      subtitle: "Posicionamiento y Visibilidad Profesional",
      icon: <Target className="w-6 h-6 text-white" />,
      color: "bg-teal",
      badge: "Define tu Marca Profesional",
      tag: "Para Visibilidad e Influencia",
      deliverables: [
        "Auditoría y rediseño de perfil en LinkedIn",
        "Narrativa de valor y pitch profesional",
        "Estrategia de contenidos y thought leadership",
        "Posicionamiento como referente en tu industria"
      ],
      impactMetrics: "3x Mayor Visibilidad Profesional",
      timeline: "60 a 90 Días",
      description: "Construimos tu presencia profesional de forma estratégica para que seas reconocido como un referente en tu campo y generes oportunidades de forma orgánica."
    },
    {
      id: "liderazgo",
      title: "Lidera con Confianza",
      subtitle: "Desarrollo de Liderazgo y Presencia Ejecutiva",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-midnight",
      badge: "Lidera con Confianza",
      tag: "Para Líderes y Directivos",
      deliverables: [
        "Desarrollo de inteligencia emocional y liderazgo auténtico",
        "Comunicación ejecutiva de alto impacto",
        "Gestión de equipos y dinámicas de confianza",
        "Toma de decisiones estratégicas bajo presión"
      ],
      impactMetrics: "85% Mejora en Efectividad del Equipo",
      timeline: "3 a 6 Meses",
      description: "Fortalece tu presencia como líder, desarrolla la confianza para influir en tu entorno y construye equipos cohesionados que ejecutan con excelencia."
    },
    {
      id: "organizacional",
      title: "Impulsa el Talento Organizacional",
      subtitle: "Desarrollo de Equipos y Cultura de Alto Rendimiento",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-teal",
      badge: "Impulsa el Talento Organizacional",
      tag: "Para Organizaciones y RRHH",
      deliverables: [
        "Diagnóstico y mapeo de talento clave",
        "Programas de desarrollo directivo a medida",
        "Planes de sucesión y retención de talento",
        "Cultura organizacional de alto rendimiento"
      ],
      impactMetrics: "92% Retención de Talento Clave",
      timeline: "6 a 12 Meses",
      description: "Diseñamos e implementamos programas corporativos que convierten el talento de tu organización en una ventaja competitiva sostenible y diferenciadora."
    }
  ];

  return (
    <section id="servicios" className="py-28 bg-[#031920] text-white relative overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-midnight/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-gold text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Estrategia de Carrera · Marca · Liderazgo · Talento
          </div>
          {/* Title - Preserving 45px requirement */}
          <h2 className="serif text-[45px] text-white leading-tight font-bold uppercase tracking-tight">
            SOLUCIONES PARA CRECER CON <span className="text-teal italic">CLARIDAD Y PROPÓSITO</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed font-sans">
            Programas a medida para profesionales y organizaciones que buscan acelerar su crecimiento, fortalecer su liderazgo y dejar una huella positiva en su entorno.
          </p>
        </div>

        {/* Interactive Solution Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setSelectedSolution(index)}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                selectedSolution === index
                  ? "bg-teal border-teal text-white shadow-lg shadow-teal/20 scale-105"
                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${selectedSolution === index ? "bg-white" : "bg-teal"}`} />
              {service.badge}
            </button>
          ))}
        </div>

        {/* Active Solution Focus Showcase */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/20 text-teal border border-teal/30 text-[10px] font-bold uppercase tracking-widest">
              {services[selectedSolution].tag}
            </div>

            <h3 className="serif text-3xl md:text-4xl font-bold text-white leading-tight">
              {services[selectedSolution].title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-sans">
              {services[selectedSolution].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Entregables Clave del Ecosistema</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services[selectedSolution].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 border border-white/15 p-8 rounded-xl space-y-6 backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-teal text-white">
                  {services[selectedSolution].icon}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Indicador de ROI</span>
                  <span className="serif text-xl font-bold text-white">{services[selectedSolution].impactMetrics}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Duración Estimada:</span>
                <span className="font-bold text-white">{services[selectedSolution].timeline}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-300">
                <span>Modalidad:</span>
                <span className="font-bold text-white">Presencial & Virtual C-Suite</span>
              </div>
              <div className="flex justify-between text-xs text-slate-300">
                <span>Garantía de Proceso:</span>
                <span className="font-bold text-gold">Confidencialidad 100%</span>
              </div>
            </div>

            <a
              href="/contacto"
              className="w-full bg-coral hover:bg-white text-midnight font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              SOLICITAR INFORMACIÓN
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Secondary Grid View of All 4 Ecosystems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedSolution(index)}
              className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                selectedSolution === index
                  ? "bg-white/15 border-teal shadow-xl"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/10 text-teal">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{service.badge}</span>
                </div>
                <h4 className="serif text-lg font-bold text-white mb-2 leading-snug">{service.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-3 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-teal">
                <span>Explorar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
