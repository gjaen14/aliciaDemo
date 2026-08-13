import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Calendar, Sparkles, Building2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiryType: "csuite-1on1",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 min-h-screen bg-slate-50">
      
      {/* Header */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/5 border border-midnight/10 text-midnight text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              Contacto Directivo & Propuestas B2B
            </div>
            {/* Preserving 45px title font size requirement */}
            <h1 className="serif text-[45px] text-midnight font-bold leading-tight uppercase tracking-tight">
              AGENDA TU SESIÓN DE <span className="text-teal italic">DIAGNÓSTICO ESTRATÉGICO</span>
            </h1>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              ¿Listo para dar el siguiente paso estratégico en tu carrera o transformar la arquitectura de talento de tu organización?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Personal Card & Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Personal Welcome Card with Photo */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-md flex items-center gap-5">
              <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm flex-shrink-0 relative border border-slate-100">
                <img 
                  src="/images/Alicia-6.jpg" 
                  alt="Alicia Elena" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal block">
                  Contacto Directo
                </span>
                <h4 className="serif text-lg font-bold text-midnight leading-tight">
                  Alicia Elena
                </h4>
                <p className="text-xs italic text-slate-600 font-sans leading-snug">
                  "Estoy lista para acompañarte a definir tu siguiente gran paso. Conversemos."
                </p>
              </div>
            </div>

            <div className="bg-midnight text-white p-8 md:p-10 rounded-2xl shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block">
                  Atención Ejecutiva Directa
                </span>
                <h3 className="serif text-2xl font-bold text-white">Canales de Comunicación</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Garantizamos respuesta en menos de 24 horas hábiles bajo estricto acuerdo de confidencialidad.
                </p>
              </div>

              <div className="space-y-6 text-xs text-slate-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-teal flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Correo Corporativo</span>
                    <a href="mailto:contacto@aliciaelena.com" className="font-semibold text-white hover:text-teal text-sm">
                      contacto@aliciaelena.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-teal flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">WhatsApp Directivo</span>
                    <a href="https://wa.me/yournumber" className="font-semibold text-white hover:text-teal text-sm">
                      +52 (55) 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-teal flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Sede Principal</span>
                    <p className="font-semibold text-white">
                      Ciudad de México • Cobertura Global LatAm & EE.UU.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Acuerdo de Confidencialidad NDA disponible bajo solicitud</span>
              </div>
            </div>

            {/* Availability Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-teal" />
                <span className="text-xs font-bold text-midnight uppercase tracking-wider">Disponibilidad de Agenda</span>
              </div>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Apertura de nuevos cupos para programas individuales de mentoring directivo y consultoría B2B para el segundo semestre 2026.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl border border-slate-200/80 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="serif text-2xl font-bold text-midnight mb-2">Formulario de Solicitud Directiva</h3>
                  <p className="text-xs text-slate-500 font-sans">Completa los campos requeridos para coordinar tu sesión de diagnóstico.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ana María Gómez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Correo Corporativo *</label>
                    <input
                      type="email"
                      required
                      placeholder="ana.gomez@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Empresa / Organización *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre de la firma"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Cargo / Rol Directivo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. VP Operations / Director HR"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Servicio de Interés</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all"
                  >
                    <option value="carrera">Impulsa tu Carrera</option>
                    <option value="marca">Define tu Marca Profesional</option>
                    <option value="liderazgo">Lidera con Confianza</option>
                    <option value="organizacional">Impulsa el Talento Organizacional</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Mensaje o Contexto del Desafío</label>
                  <textarea
                    rows={4}
                    placeholder="Describe brevemente tus metas o las necesidades estratégicas de tu equipo..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-teal focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral hover:bg-midnight hover:text-white text-midnight font-bold text-xs uppercase tracking-[0.25em] py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  ENVIAR SOLICITUD DE DIAGNÓSTICO
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="serif text-3xl font-bold text-midnight">¡Solicitud Recibida!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                    Gracias por comunicarte, <span className="font-bold text-midnight">{formData.name}</span>. Un ejecutivo de nuestro equipo revisará la información de <span className="font-bold text-midnight">{formData.company}</span> y se pondrá en contacto a la brevedad.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-teal hover:text-midnight uppercase tracking-wider pt-4"
                >
                  Enviar otra consulta
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
