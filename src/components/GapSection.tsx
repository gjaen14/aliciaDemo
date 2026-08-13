import { motion } from "motion/react";

export default function GapSection() {
  const painPoints = [
    {
      title: "Techo de Cristal Invisible",
      description: "Sientes que has llegado a un punto donde tu esfuerzo ya no se traduce en avance estratégico."
    },
    {
      title: "Soledad del Líder",
      description: "Tener el peso de las decisiones críticas sin un espacio seguro para cuestionar, dudar o crecer."
    },
    {
      title: "Desgaste por Éxito",
      description: "Resultados brillantes a costa de tu bienestar personal y el de tu equipo."
    }
  ];

  return (
    <section id="filosofia" className="py-32 bg-nude">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-[45px] text-midnight leading-tight">
              Reconoces <span className="italic text-teal">la brecha</span> entre dónde estás y dónde podrías liderar.
            </h2>
            <p className="text-lg text-midnight/80 font-sans leading-relaxed">
              El liderazgo en el nivel ejecutivo no se trata de trabajar más duro, sino de operar desde una arquitectura mental diferente.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-sm p-8 rounded-sm border border-midnight/5 hover:bg-white/60 transition-colors"
              >
                <h3 className="font-display text-2xl text-midnight mb-3">{point.title}</h3>
                <p className="text-midnight/70 font-sans leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
