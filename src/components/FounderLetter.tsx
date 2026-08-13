import { motion } from "motion/react";

export default function FounderLetter() {
  const stats = [
    { value: "20+", label: "Años en C-Suite" },
    { value: "500+", label: "Líderes Impactados" },
    { value: "Fortune", label: "Global Presence" },
    { value: "100%", label: "Confidencialidad" }
  ];

  return (
    <section id="sobre-mi" className="py-32 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] relative border-4 border-white/10 p-4"
            >
              <img 
                src="/images/Alicia-2.jpg" 
                alt="Alicia Elena - Editorial"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/90 -z-10" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-coral">
                Detrás de la visión
              </span>
              <h2 className="font-display text-[45px] leading-tight">
                Una carrera dedicada a elevar el <span className="italic">potencial humano</span> en el mundo corporativo.
              </h2>
              <div className="w-20 h-1 bg-coral" />
            </div>

            <div className="space-y-6 text-white/80 font-sans leading-relaxed text-lg italic">
              <p>
                "Después de dos décadas navegando las complejidades de organizaciones globales, entendí que el verdadero liderazgo no reside en los procesos, sino en la capacidad de conectar con nuestra propia autenticidad."
              </p>
              <p className="not-italic">
                Mi enfoque combina la rigurosidad estratégica del mundo Fortune 500 con una profunda empatía humana. No busco solo mejores KPIs, busco líderes que dejen una huella positiva y sostenible en sus ecosistemas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-display text-3xl font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
