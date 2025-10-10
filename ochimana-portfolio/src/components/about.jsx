import { motion } from "framer-motion";

export default function About({ fadeInUp }) {
  return (
    <section
      id="about"
      className="lg:min-h-screen pt-20 pb-16 px-6 mx-auto w-full border-b-2 border-b-cyan-500/50 dark:border-b-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-600 dark:to-slate-700"
    >
      {/* Section Title*/}
      <motion.h2
        className="

text-3xl font-bold mb-6 text-cyan-500 dark:text-cyan-400 text-left max-md:text-center lg:pl-8 pb-8 lg:ml-40"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        About Me
        <span className="absolute left-0 -bottom-2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-full transition-all duration-700" />
      </motion.h2>

      {/* Content Wrapper */}
      <div className="md:flex gap-10 items-center justify-center">
        {/* Profile Image with Glow and Hover Tilt */}
        <motion.div
          className="relative mx-auto md:mx-0 w-60 h-60 group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Gradient Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-40 blur-2xl animate-pulse"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Profile Image */}
          <motion.img
            src="./Eneojo.jpg"
            alt="profile"
            className="relative z-10 rounded-full w-60 h-60 object-cover shadow-lg hover:shadow-cyan-600/40 dark:hover:shadow-cyan-400/30 transition-transform duration-500 ease-out cursor-pointer"
            whileHover={{
              rotateY: 5,
              rotateX: -5,
              scale: 1.05,
            }}
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="mt-8 md:mt-0 md:max-w-xl text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-cyan-500 dark:text-cyan-400">
              Eneojo God'swill Ochimana
            </span>
            , a passionate{" "}
            <span className="font-semibold text-cyan-500 dark:text-cyan-400">
              Frontend Software Developer
            </span>{" "}
            from Nigeria. I specialize in creating modern, performant, and
            visually engaging web applications using{" "}
            <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and{" "}
            <span className="font-semibold">Node.js</span>.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            My goal is to combine clean code with stunning design — developing
            digital experiences that are intuitive, fast, and user-focused. I'm
            continuously learning and pushing my boundaries to stay ahead in the
            ever-evolving web ecosystem.
          </p>

          <motion.a
            href="#projects"
            className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-cyan-500/40 transition-transform duration-300"
            whileHover={{ y: -3 }}
          >
            Explore My Work 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
