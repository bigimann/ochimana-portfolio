import { motion } from "framer-motion";

export default function SkillsCard({ img, title, alt }) {
  return (
    <motion.section
      id="skill-res"
      className="relative group w-full sm:w-44 md:w-52 lg:w-64 h-48 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg dark:bg-slate-800/50 border border-white/20 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-fuchsia-500 transition-all duration-500"
      whileHover={{
        scale: 1.08,
        rotateY: 10,
        rotateX: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-2xl transition-opacity duration-500"></div>

      {/* Image section */}
      <div className="flex-1 h-2/3 flex items-center justify-center bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm">
        <img
          src={img}
          alt={alt}
          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title section */}
      <div className="h-1/3 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-500 dark:to-blue-600">
        <h1 className="text-white font-semibold text-base tracking-wide transition-all duration-300 group-hover:text-lg">
          {title}
        </h1>
      </div>
    </motion.section>
  );
}
