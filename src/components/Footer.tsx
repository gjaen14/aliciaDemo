import { motion } from "motion/react";
import { Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#F9F9F9] pt-32 pb-12 border-t border-midnight/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-display text-[45px] text-midnight">
              ¿Iniciamos la <span className="italic">conversación?</span>
            </h2>
            <p className="text-midnight/70 text-lg leading-relaxed max-w-md font-sans">
              Estoy aquí para escucharte. Ya sea para una colaboración corporativa o un proceso individual de mentoring.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Linkedin />, href: "#" },
                { icon: <Instagram />, href: "#" },
                { icon: <Mail />, href: "mailto:alicia@ejemplo.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-midnight/10 flex items-center justify-center text-midnight hover:bg-midnight hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-midnight/60">Nombre completo</label>
                <input type="text" className="w-full bg-white border border-midnight/10 px-6 py-4 rounded-sm focus:outline-none focus:border-teal transition-colors font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-midnight/60">Email corporativo</label>
                <input type="email" className="w-full bg-white border border-midnight/10 px-6 py-4 rounded-sm focus:outline-none focus:border-teal transition-colors font-sans" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-midnight/60">Mensaje</label>
                <textarea rows={4} className="w-full bg-white border border-midnight/10 px-6 py-4 rounded-sm focus:outline-none focus:border-teal transition-colors resize-none font-sans"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-midnight text-white w-full py-5 text-sm uppercase tracking-widest font-bold rounded-sm hover:bg-teal transition-all flex items-center justify-center gap-3">
                  Enviar mensaje
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="pt-12 border-t border-midnight/10 flex flex-col md:row-span-1 md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl text-midnight">Alicia Elena</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-midnight/40 font-sans">
            © {new Date().getFullYear()} Alicia Elena • Liderazgo Ejecutivo de Alto Impacto
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-midnight/60 hover:text-midnight font-sans">Privacidad</a>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-midnight/60 hover:text-midnight font-sans">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
