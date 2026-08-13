import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <span className="serif text-5xl font-bold text-midnight tracking-tighter leading-none block">
          AE
        </span>
        <motion.div 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="absolute -bottom-1 -left-2 w-12 h-4"
        >
          <svg viewBox="0 0 100 20" className="w-full h-full">
            <motion.path 
              d="M 0 15 Q 50 0 100 15" 
              fill="none" 
              stroke="#EEA59E" 
              strokeWidth="4" 
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-1">
        <span className="serif text-2xl font-bold text-midnight tracking-[0.1em] leading-none">
          ALICIA ELENA
        </span>
        <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-teal mt-1">
          CRECIMIENTO PROFESIONAL
        </span>
      </div>
    </div>
  );
}
