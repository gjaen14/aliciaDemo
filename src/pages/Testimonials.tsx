import { motion, AnimatePresence } from "motion/react";
import { 
  Quote, Star, Award, TrendingUp, ShieldCheck, CheckCircle2, 
  Building2, Briefcase, Filter, ArrowUpRight, Search, Sparkles, Play, X
} from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyType: string;
  avatar: string;
  content: string;
  fullCaseStudy: {
    challenge: string;
    solution: string;
    results: string[];
    timeline: string;
  };
  category: "csuite" | "transition" | "team" | "branding";
  impact: string;
  metrics: string;
  featured?: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "penelope-herrera",
    name: "Penelope Herrera",
    role: "Director of Creative Experience",
    company: "Global Creative Studio",
    companyType: "Multinacional",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    content: "Trabajar con Alicia ha sido un antes y un después en mi carrera directiva. Llegué sintiéndome estancada frente a la dinámica corporativa. Con su estrategia de posicionamiento y liderazgo, construimos un plan alineado a mis metas. En menos de 6 meses logré mi ascenso a Directora Regional y consolidé un equipo de alto rendimiento.",
    fullCaseStudy: {
      challenge: "Inseguridad en la mesa directiva y estancamiento profesional de 3 años.",
      solution: "Programa de Mentoring Directivo 1:1, reestructuración de marca ejecutiva y entrenamiento en negociación C-Suite.",
      results: [
        "Promoción directa a Directora de Experiencia Creativa Regional",
        "Aumento salarial del 42%",
        "Liderazgo consolidado sobre un equipo multidisciplinario de 28 personas"
      ],
      timeline: "6 Meses"
    },
    category: "csuite",
    impact: "Promoción Directiva Regional",
    metrics: "+42% Incremento Salarial",
    featured: true
  },
  {
    id: "alanis-braddick",
    name: "Alanis Braddick",
    role: "Senior VP of Strategy",
    company: "Fortune 500 Financial Group",
    companyType: "Fortune 500",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300",
    content: "El nivel de sofisticación estratégica de Alicia es sobresaliente. Las sesiones de preparación ejecutiva me permitieron proyectar autoridad en la mesa directiva y afrontar las entrevistas para la C-Suite con total aplomo. Su acompañamiento me llevó directo a incorporarme a una de las firmas financieras más importantes del mundo.",
    fullCaseStudy: {
      challenge: "Proceso de contratación altamente competitivo para puesto directivo C-Level en el sector bancario global.",
      solution: "Ecosistema de Posicionamiento C-Suite, simulación de entrevistas de junta directiva y narrativa de liderazgo B2B.",
      results: [
        "Contratación directa como Senior VP of Strategy",
        "Negociación exitosa de paquete de compensación ejecutivo",
        "Integración expedita al comité estratégico regional"
      ],
      timeline: "90 Días"
    },
    category: "transition",
    impact: "Ingreso en Fortune 500",
    metrics: "Ingreso en C-Suite",
    featured: true
  },
  {
    id: "carlos-mendoza",
    name: "Carlos Mendoza",
    role: "VP de Operaciones LatAm",
    company: "Tech Logistics Corp",
    companyType: "Enterprise Tech",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    content: "La metodología de Alicia combina rigurosidad analítica con inteligencia emocional ejecutiva. Ha sido la clave para cohesionar a nuestro comité de operaciones en un periodo crítico de reestructuración y fusión internacional.",
    fullCaseStudy: {
      challenge: "Falta de alineación en el comité directivo tras un proceso de adquisición corporativa.",
      solution: "Programa de Alineación Directiva B2B, talleres de comunicación estratégica y mentoring individual para VPs.",
      results: [
        "Incremento del 35% en el índice de cohesión del C-Suite",
        "Reducción del 50% en tiempos de toma de decisiones estratégicas",
        "Implementación fluida de la nueva cultura organizacional"
      ],
      timeline: "4 Meses"
    },
    category: "team",
    impact: "Alineación de C-Suite",
    metrics: "+35% Cohesión Directiva"
  },
  {
    id: "elena-rodriguez",
    name: "Dra. Elena Rodríguez",
    role: "Director de Innovación & Salud",
    company: "Pharma Innovation Hub",
    companyType: "Pharma & Life Sciences",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    content: "Un acompañamiento excepcional para quienes lideramos la transformación en industrias de alto nivel de exigencia. Alicia no solo te guía para alcanzar objetivos de negocio, sino que eleva tu visibilidad pública como referente en el sector.",
    fullCaseStudy: {
      challenge: "Baja visibilidad internacional a pesar de dirigir proyectos de innovación millonarios.",
      solution: "Ecosistema de Marca Ejecutiva, publicaciones estratégicas y posicionamiento como Speaker Internacional.",
      results: [
        "Participación en 4 foros globales de salud e innovación",
        "Nombramiento en el consejo directivo de la asociación del sector",
        "Crecimiento exponencial en red de contactos C-Level"
      ],
      timeline: "8 Meses"
    },
    category: "branding",
    impact: "Posicionamiento Institucional",
    metrics: "4 Keynotes Globales"
  },
  {
    id: "marcelo-vargas",
    name: "Marcelo Vargas",
    role: "Chief Commercial Officer",
    company: "Multilatina Retail Enterprise",
    companyType: "Retail Enterprise",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    content: "La claridad estratégica de Alicia para desbloquear oportunidades de negocio y crecimiento profesional no tiene comparación. Sus metodologías se traducen inmediatamente en resultados medibles para la organización.",
    fullCaseStudy: {
      challenge: "Estancamiento en la expansión de cuentas clave B2B y transición al rol de CCO.",
      solution: "Acompañamiento ejecutivo en estrategia comercial y negociación de alto impacto.",
      results: [
        "Cierre de alianzas comerciales por más de $15M USD",
        "Acreditación de programa de liderazgo directivo",
        "Reestructuración de la fuerza de ventas ejecutiva"
      ],
      timeline: "5 Meses"
    },
    category: "csuite",
    impact: "Expansión Comercial $15M+",
    metrics: "Ascenso a CCO"
  }
];

const stats = [
  { icon: <TrendingUp className="w-5 h-5 text-teal" />, label: "Crecimiento Salarial / Compensación", value: "+38%" },
  { icon: <Award className="w-5 h-5 text-gold" />, label: "Tasa de Promoción a Puestos C-Level", value: "85%" },
  { icon: <Building2 className="w-5 h-5 text-midnight" />, label: "Empresas Fortune 500 y Multilatinas", value: "+40" },
  { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, label: "Confidencialidad & Rigor Ejecutivo", value: "100%" },
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Testimonial | null>(null);

  const filteredTestimonials = testimonialsData.filter((t) => {
    const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;
    const matchesSearch = 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-nude/15 text-slate-900 font-sans pt-28 pb-32">
      
      {/* Editorial Luxury Header */}
      <section className="relative py-20 bg-gradient-to-b from-white via-nude/10 to-nude/20 border-b border-midnight/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              Ecosistema de Impacto & Testimonios
            </div>
            
            {/* Preserving Title font-size 45px requirement */}
            <h1 className="serif text-[45px] text-midnight leading-tight mb-6 uppercase tracking-tight font-bold">
              HISTORIAS DE ÉXITO & <span className="text-teal italic">TRANSFORMACIÓN DIRECTIVA</span>
            </h1>
            
            <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-3xl">
              Casos reales de directivos, ejecutivos C-Suite y organizaciones globales que han redefinido su posicionamiento, acelerado su crecimiento profesional e impulsado resultados extraordinarios.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Corporate Metrics Ribbon */}
      <section className="bg-midnight text-white py-12 shadow-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-5 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="serif text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-300 font-medium mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video / Highlight Case Study */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal block mb-1">
              Testimonio Destacado
            </span>
            <h2 className="serif text-2xl font-bold text-midnight">Caso de Transformación Ejecutiva</h2>
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
            Verified B2B Case Study
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-midnight/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Profile Block */}
          <div className="lg:col-span-5 relative bg-slate-900 min-h-[380px] flex items-end p-8 text-white">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900" 
              alt="Caso Destacado"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-widest">
                <Star className="w-3 h-3 fill-gold" /> C-Suite Leadership Transition
              </div>
              <h3 className="serif text-2xl font-bold text-white">Penelope Herrera</h3>
              <p className="text-xs uppercase tracking-wider text-teal font-semibold">Director of Creative Experience • Global Creative Studio</p>
              
              <div className="pt-3 border-t border-white/20 flex gap-6 text-xs text-slate-200 font-mono">
                <div>
                  <span className="text-[10px] text-white/50 block">Impacto</span>
                  <span className="font-bold text-emerald-400">+42% Salario</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block">Tiempo</span>
                  <span className="font-bold text-teal">6 Meses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
            <div className="space-y-6">
              <Quote className="w-10 h-10 text-teal/20" />
              <p className="font-display text-2xl leading-relaxed text-midnight italic">
                "Trabajar con Alicia ha sido un antes y un después en mi carrera directiva. Con su estrategia de posicionamiento y liderazgo, pasé de sentirme estancada a liderar un equipo multidisciplinario regional con un incremento salarial del 42%."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>Alineación de marca ejecutiva con metas de C-Suite</span>
                </div>
                <div className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span>Estrategia de negociación directiva y compensación</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck className="w-4 h-4 text-teal" />
                Caso Verificado por Comité Directivo
              </div>
              <button 
                onClick={() => setActiveCaseStudy(testimonialsData[0])}
                className="bg-midnight hover:bg-teal text-white text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                Ver Caso Completo
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-midnight/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            {[
              { id: "all", label: "Todos los Casos" },
              { id: "csuite", label: "C-Suite & VP" },
              { id: "transition", label: "Transición Ejecutiva" },
              { id: "team", label: "Alineación de Equipos" },
              { id: "branding", label: "Marca Ejecutiva" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-midnight text-white shadow-md scale-102"
                    : "bg-white border border-midnight/10 text-midnight/80 hover:bg-nude/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por rol, empresa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-midnight/10 rounded-full pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all"
            />
          </div>

        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-midnight/10 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-teal/30"
            >
              <div className="space-y-6">
                
                {/* Header Tag & Stars */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-teal/10 text-teal">
                    {t.companyType}
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                {/* Main Quote */}
                <p className="text-slate-700 text-sm leading-relaxed font-sans italic">
                  "{t.content}"
                </p>

                {/* Key Metric Badge */}
                <div className="p-3 bg-nude/20 rounded-xl border border-nude/30 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">Impacto Medible</span>
                  <span className="font-bold text-midnight">{t.metrics}</span>
                </div>

              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-midnight/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="serif text-base font-bold text-midnight leading-snug">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{t.company}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveCaseStudy(t)}
                  title="Ver caso de estudio"
                  className="w-9 h-9 rounded-full bg-nude/30 text-midnight/80 hover:bg-midnight hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-midnight/10">
            <p className="text-slate-500 text-sm">No se encontraron testimonios que coincidan con la búsqueda.</p>
          </div>
        )}
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative border border-midnight/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-nude/30 text-midnight/80 hover:bg-midnight hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={activeCaseStudy.avatar} 
                    alt={activeCaseStudy.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal">{activeCaseStudy.companyType}</span>
                    <h3 className="serif text-2xl font-bold text-midnight">{activeCaseStudy.name}</h3>
                    <p className="text-xs text-slate-600">{activeCaseStudy.role} • {activeCaseStudy.company}</p>
                  </div>
                </div>

                <div className="bg-nude/25 p-4 rounded-xl border border-nude/30 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Resultado Clave</span>
                    <span className="font-bold text-teal text-sm">{activeCaseStudy.impact}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Duración del Programa</span>
                    <span className="font-bold text-midnight text-sm">{activeCaseStudy.fullCaseStudy.timeline}</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <div>
                    <h4 className="font-bold text-midnight text-xs uppercase tracking-wider mb-1">El Desafío Inicial</h4>
                    <p className="bg-amber-50/60 p-3 rounded-lg border border-amber-100 text-amber-900 text-xs">
                      {activeCaseStudy.fullCaseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-midnight text-xs uppercase tracking-wider mb-1">Solución Estratégica Implementada</h4>
                    <p className="bg-slate-100 p-3 rounded-lg text-slate-800 text-xs">
                      {activeCaseStudy.fullCaseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-midnight text-xs uppercase tracking-wider mb-2">Resultados Medibles</h4>
                    <ul className="space-y-2">
                      {activeCaseStudy.fullCaseStudy.results.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-50"
                  >
                    Cerrar
                  </button>
                  <a
                    href="/contacto"
                    className="px-6 py-2.5 rounded-lg bg-midnight text-white text-xs font-bold uppercase tracking-wider hover:bg-teal transition-colors flex items-center gap-2"
                  >
                    Solicitar Propuesta Similar
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* High-Ticket Enterprise Conversion CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-28">
        <div className="bg-gradient-to-r from-midnight via-[#03303B] to-midnight text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold block">
              Ecosistema de Crecimiento para Organizaciones
            </span>
            <h2 className="serif text-[45px] text-white leading-tight font-bold">
              ¿LISTO PARA ELEVAR EL RENDIMIENTO DE TU <span className="text-teal italic">EQUIPO DIRECTIVO</span>?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              Estructuramos programas a medida de Mentoring, Alineación de C-Suite y Marca Ejecutiva para firmas de alto nivel. Conversemos sobre tu visión estratégica.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contacto"
                className="bg-gold text-midnight hover:bg-white text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl shadow-xl transition-all flex items-center gap-3"
              >
                AGENDAR SESIÓN DE DIAGNÓSTICO
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl backdrop-blur-md transition-all"
              >
                HABLAR POR WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
