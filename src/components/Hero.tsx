import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, TrendingUp, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-24 flex items-center overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      {/* Subtle Background Structural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05506008_1px,transparent_1px),linear-gradient(to_bottom,#05506008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* Left Column: Value Proposition */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              Estrategia de Carrera · Posicionamiento · Liderazgo
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-display text-[45px] leading-[1.12] text-midnight uppercase tracking-tight text-left">
              IMPULSA TU CARRERA CON <span className="text-teal">CLARIDAD</span>,<br />
              CONFIANZA Y PROPÓSITO
            </h1>
          </motion.div>

          {/* Strategic Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-700 max-w-xl leading-relaxed font-sans text-left"
          >
            Ayudo a profesionales y organizaciones a crecer a través de estrategia de carrera, posicionamiento profesional y desarrollo de liderazgo.
          </motion.p>

          {/* Feature Highlights — aligned with the 4 services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-4 max-w-lg text-sm text-slate-800 font-medium"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
              <span>Impulsa tu Carrera</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
              <span>Define tu Marca Profesional</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
              <span>Lidera con Confianza</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
              <span>Impulsa el Talento Organizacional</span>
            </div>
          </motion.div>

          {/* Actions & Next Session Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-2"
          >
            <a
              href="/contacto"
              className="group bg-coral text-midnight px-9 py-4 text-xs uppercase tracking-[0.25em] font-bold rounded-sm shadow-xl hover:bg-midnight hover:text-white hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
            >
              AGENDAR SESIÓN
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-3 pl-2 border-l-2 border-slate-200">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Agenda Abierta</span>
                <span className="text-xs font-semibold text-midnight">Próximos cupos: Agosto 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Trust Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg"
          >
            <div>
              <div className="serif text-2xl font-bold text-midnight">+20 Años</div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Experiencia Profesional</div>
            </div>
            <div>
              <div className="serif text-2xl font-bold text-teal">98%</div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Satisfacción de Clientes</div>
            </div>
            <div>
              <div className="serif text-2xl font-bold text-midnight">+500</div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Profesionales Impactados</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-End Strategic Editorial Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
            
            <img 
              src="/images/Alicia-4.jpg" 
              alt="Alicia Elena - Coach Profesional y Consultora de Carrera"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="absolute top-6 right-6 backdrop-blur-md bg-white/90 border border-white/50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span className="text-[11px] font-bold text-midnight tracking-wider uppercase">Certified Coach</span>
            </div>

            {/* Bottom Floating Card: Social Proof */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-midnight/85 border border-white/15 p-6 rounded-lg text-white shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Testimonio Destacado</span>
                </div>
                <span className="text-[10px] text-white/50 uppercase font-mono">Caso Real</span>
              </div>
              <p className="serif italic text-base leading-snug mb-3 text-slate-100">
                "Alicia transformó mi posicionamiento profesional. En menos de 90 días asumí la vicepresidencia regional de operaciones."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                <span className="font-semibold text-white">VP Operations</span>
                <span className="text-teal text-[11px] font-bold uppercase tracking-wider">Fortune 500 Tech</span>
              </div>
            </div>
          </div>

          {/* Secondary Floating Accent Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 hidden sm:flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-midnight uppercase tracking-wider">Metodología Propia</div>
              <div className="text-[11px] text-slate-500 font-sans">Claridad · Confianza · Propósito</div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
