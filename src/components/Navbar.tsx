import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/sobre-mi" },
    { name: "Trabajemos Juntos", href: "/trabajemos-juntos" },
    { name: "Testimonios", href: "/testimonios" },
    { name: "Recursos", href: "/recursos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <NavLink to="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => `
                relative py-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-slate-700 transition-colors hover:text-teal
                ${isActive ? "text-teal font-bold" : ""}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-teal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/contacto"
            className="flex items-center gap-2 bg-coral text-midnight hover:bg-midnight hover:text-white px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-xl transition-all duration-300"
          >
            AGENDA C-SUITE
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-midnight p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white border-b border-slate-200 px-6 py-8 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => `
                serif text-xl tracking-wide transition-colors
                ${isActive ? "text-teal font-bold" : "text-midnight"}
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/contacto"
            className="bg-coral text-midnight px-6 py-4 text-center text-xs font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 shadow-xl hover:bg-midnight hover:text-white transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            AGENDA C-SUITE
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
