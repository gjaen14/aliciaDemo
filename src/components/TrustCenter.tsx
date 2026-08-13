import { motion } from "motion/react";
import { Quote, ArrowUpRight, ShieldCheck, Building2, Award } from "lucide-react";

export default function TrustCenter() {
  const testimonials = [
    {
      quote: "Alicia posee una capacidad sobresaliente para descifrar dinámicas corporativas complejas. Su intervención fue el catalizador definitivo que nuestro comité directivo necesitaba para alinearse y acelerar el crecimiento regional.",
      author: "Director General",
      company: "Multinacional Farmacéutica",
      impact: "Alineación de C-Suite"
    },
    {
      quote: "El acompañamiento estratégico de Alicia no solo aceleró mi transición a VP de Operaciones, sino que estructuró mi narrativa ejecutiva para influir en la junta directiva global con total autoridad.",
      author: "VP de Operaciones LatAm",
      company: "Fortune 500 Technology",
      impact: "Ascenso a VP"
    }
  ];

  return (
    <section className="py-28 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-teal" />
              Respaldado por Resultados C-Suite
            </div>

            <h2 className="serif text-[45px] text-midnight font-bold leading-tight uppercase tracking-tight">
              CONFIANZA GANADA EN LA <span className="text-teal italic">PRIMERA LÍNEA</span> EJECUTIVA
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-sans">
              Líderes de organizaciones Fortune 500, empresas multilatinas y startups en rápida expansión confían en nuestra arquitectura de desarrollo directivo.
            </p>
            
            <div className="flex flex-col gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <span className="text-xs font-bold text-midnight uppercase tracking-wider">4.9 / 5.0 Índice de Excelencia Directiva</span>
              </div>

              <div>
                <a
                  href="/testimonios"
                  className="inline-flex items-center gap-2 bg-midnight hover:bg-teal text-white text-xs font-bold uppercase tracking-[0.2em] px-7 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  VER TODOS LOS CASOS DE ÉXITO
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <Quote className="absolute -top-10 -left-8 w-24 h-24 text-teal/10 -z-10" />
            
            <div className="space-y-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-teal/10 text-teal rounded-full">
                      {t.impact}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Verified C-Suite Review</span>
                  </div>

                  <p className="font-display text-xl text-midnight leading-relaxed italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                    <div className="w-8 h-8 rounded-full bg-midnight/10 text-midnight flex items-center justify-center font-bold text-xs">
                      <Building2 className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <h4 className="serif text-sm font-bold text-midnight">{t.author}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
