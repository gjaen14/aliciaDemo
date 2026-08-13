import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CheckCircle2, ArrowRight, RotateCcw, ShieldCheck, Sparkles, Building2, Target, TrendingUp } from "lucide-react";

export default function EcosystemDiagnostic() {
  const [step, setStep] = useState<number>(1);
  const [role, setRole] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const resetCalculator = () => {
    setStep(1);
    setRole("");
    setGoal("");
    setTeamSize("");
    setEmail("");
    setSubmitted(false);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal" />
            Herramienta Diagnóstica de Liderazgo & B2B
          </div>
          <h2 className="serif text-[45px] text-midnight font-bold leading-tight uppercase tracking-tight">
            EVALÚA LA <span className="text-teal italic">MATURIDAD ESTRATÉGICA</span> DE TU LIDERAZGO
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Obtén en 60 segundos una recomendación del ecosistema de crecimiento recomendado para tus metas de carrera o tu organización.
          </p>
        </div>

        {/* Diagnostic Wizard Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl relative">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-midnight uppercase tracking-wider">
              <span>Paso {step} de 3</span>
              <span className="text-slate-300">•</span>
              <span className="text-teal font-sans font-normal">
                {step === 1 && "Perfil & Rol Directivo"}
                {step === 2 && "Objetivo Estratégico Principal"}
                {step === 3 && "Diagnóstico & Recomendación"}
              </span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step ? "w-8 bg-teal" : i < step ? "w-3 bg-midnight" : "w-3 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* STEP 1: ROLE */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="serif text-2xl font-bold text-midnight">¿Cuál es tu rol actual u objetivo?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: "csuite", title: "C-Suite / VP / Director", desc: "Ejecutivo de nivel senior buscando acelerar su trayectoria" },
                        { id: "enterprise", title: "Líder de RRHH / Talent", desc: "Buscando desarrollo directivo para equipos clave" },
                        { id: "professional", title: "Manager / High-Potential", desc: "Preparando el salto a posiciones directivas" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { setRole(item.id); handleNext(); }}
                          className={`p-6 rounded-2xl border text-left transition-all ${
                            role === item.id
                              ? "bg-midnight text-white border-midnight shadow-lg scale-102"
                              : "bg-white text-slate-800 border-slate-200 hover:border-teal hover:shadow-md"
                          }`}
                        >
                          <div className="serif font-bold text-lg mb-2">{item.title}</div>
                          <p className={`text-xs ${role === item.id ? "text-slate-200" : "text-slate-500"}`}>{item.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: GOAL */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="serif text-2xl font-bold text-midnight">¿Cuál es tu prioridad estratégica número uno?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: "promotion", title: "Aceleración & Ascenso a C-Suite", desc: "Lograr un aumento de compensación y mayor nivel directivo" },
                        { id: "branding", title: "Posicionamiento de Marca Ejecutiva", desc: "Ser reconocido como referente y thought leader en el sector" },
                        { id: "team", title: "Alineación y Retención de Equipo", desc: "Fortalecer la cultura y rendimiento de directivos" },
                        { id: "transition", title: "Transición de Carrera / Retorno", desc: "Ingresar a multinacionales o firmas de Fortune 500" }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => { setGoal(item.id); handleNext(); }}
                          className={`p-6 rounded-2xl border text-left transition-all ${
                            goal === item.id
                              ? "bg-teal text-white border-teal shadow-lg"
                              : "bg-white text-slate-800 border-slate-200 hover:border-teal hover:shadow-md"
                          }`}
                        >
                          <div className="serif font-bold text-lg mb-2">{item.title}</div>
                          <p className={`text-xs ${goal === item.id ? "text-slate-100" : "text-slate-500"}`}>{item.desc}</p>
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs text-slate-500 hover:text-midnight font-bold uppercase tracking-wider"
                      >
                        ← Volver
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: RESULT & LEAD FORM */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                      <div className="flex items-center gap-3 text-teal font-bold text-xs uppercase tracking-wider">
                        <CheckCircle2 className="w-5 h-5" />
                        Diagnóstico Preliminar Completado
                      </div>
                      <h3 className="serif text-2xl font-bold text-midnight">
                        Recomendación: Ecosistema de Mentoring C-Suite & Posicionamiento
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Basado en tus selecciones, tu perfil es candidato ideal para el programa de <span className="font-bold text-midnight">Acompañamiento Estratégico Directivo 1:1</span> con proyección a resultados en 90 a 180 días.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Ingresa tu correo corporativo para recibir el reporte detallado:
                      </label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          required
                          placeholder="tu.nombre@empresa.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-xs text-slate-900 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                        />
                        <button
                          type="submit"
                          className="bg-coral hover:bg-midnight hover:text-white text-midnight text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Obtener Recomendación
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs text-slate-500 hover:text-midnight font-bold uppercase tracking-wider"
                      >
                        ← Volver
                      </button>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal" /> 100% Confidencial
                      </span>
                    </div>
                  </form>
                )}
              </motion.div>
            ) : (
              /* SUBMITTED CONFIRMATION STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="serif text-3xl font-bold text-midnight">¡Diagnóstico Registrado con Éxito!</h3>
                  <p className="text-sm text-slate-600 max-w-lg mx-auto font-sans leading-relaxed">
                    Hemos enviado la hoja de ruta estratégica preliminar a <span className="font-bold text-midnight">{email}</span>. Un consultor ejecutivo de nuestro equipo se pondrá en contacto contigo.
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={resetCalculator}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-midnight uppercase tracking-wider"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Realizar otro diagnóstico
                  </button>
                  <a
                    href="/contacto"
                    className="bg-coral text-midnight text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-midnight hover:text-white transition-all duration-300 shadow-md"
                  >
                    Ir a la Agenda Directiva
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
