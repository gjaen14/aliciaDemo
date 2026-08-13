import SolutionsSection from "../components/SolutionsSection";
import EcosystemDiagnostic from "../components/EcosystemDiagnostic";
import { motion } from "motion/react";
import { Sparkles, Building2, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function WorkTogether() {
  return (
    <div className="pt-28 min-h-screen bg-slate-50">
      {/* Editorial B2B Header */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              Carrera · Marca · Liderazgo · Talento
            </div>

            {/* Preserving 45px title font size requirement */}
            <h1 className="serif text-[45px] text-midnight leading-tight font-bold uppercase tracking-tight">
              CRECE CON <span className="text-teal italic">CLARIDAD, CONFIANZA</span> Y PROPÓSITO
            </h1>

            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              Programas a medida para profesionales y organizaciones que quieren acelerar su crecimiento, definir su marca, fortalecer su liderazgo e impulsar el talento de sus equipos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Core */}
      <SolutionsSection />

      {/* Diagnostic Interactive Tool */}
      <EcosystemDiagnostic />
    </div>
  );
}
