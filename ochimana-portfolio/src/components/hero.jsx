import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex flex-col justify-center items-center text-center px-6
        bg-gradient-to-br from-white via-cyan-100 to-blue-50
        dark:from-slate-950 dark:via-slate-900 dark:to-cyan-900
        overflow-hidden transition-colors duration-700
      "
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl bg-cyan-400/30 dark:bg-cyan-500/30"
          animate={{
            x: ["-20%", "20%", "-10%"],
            y: ["-10%", "30%", "-20%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl right-0 bottom-0 bg-blue-400/20 dark:bg-purple-500/20"
          animate={{
            x: ["10%", "-20%", "15%"],
            y: ["20%", "-10%", "25%"],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Hero text */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-cyan-500 dark:text-cyan-400">Eneojo</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Frontend Software Developer | React & Node.js
      </motion.p>

      <motion.p
        className="mt-4 text-base md:text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I create scalable and modern{" "}
        <span className="text-cyan-500 dark:text-cyan-400 text-lg lg:text-2xl">
          web applications
        </span>{" "}
        with smooth user experiences. My journey as a developer has just begun,
        but the drive is endless.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-transform hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-500 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 hover:bg-cyan-500/10 rounded-full transition-transform hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 text-cyan-500 dark:text-cyan-400 text-sm animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
