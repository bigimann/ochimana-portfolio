import { motion } from "framer-motion";
import {
  HiDesktopComputer,
  HiCode,
  HiOutlineDeviceMobile,
  HiLightningBolt,
} from "react-icons/hi";
import { RiPaintBrushFill } from "react-icons/ri";
import { TbRocket } from "react-icons/tb";

const services = [
  {
    icon: <HiCode size={42} className="text-cyan-500" />,
    title: "Frontend Engineering",
    description:
      "Building high-performance, responsive, and accessible web applications using React, Tailwind CSS, and modern JavaScript frameworks.",
    highlight: "Performance | Accessibility | Maintainability",
  },
  {
    icon: <RiPaintBrushFill size={42} className="text-cyan-500" />,
    title: "UI/UX & Interaction Design",
    description:
      "Designing intuitive user interfaces with a deep focus on clean layouts, colour harmony, and micro-interactions that make users smile.",
    highlight: "Wireframes | Prototypes | Motion Design",
  },
  {
    icon: <HiOutlineDeviceMobile size={42} className="text-cyan-500" />,
    title: "Responsive Web Design",
    description:
      "Delivering pixel-perfect experiences across all screen sizes — mobile, tablet, or desktop — using fluid grids and adaptive design systems.",
    highlight: "Mobile-first | Adaptive Layouts | TailwindCSS",
  },
  {
    icon: <TbRocket size={42} className="text-cyan-500" />,
    title: "Deployment & Optimization",
    description:
      "From local builds to global deployment — I optimize load speed, SEO, and runtime efficiency, ensuring every app feels lightning fast.",
    highlight: "Vite | Vercel | SEO Optimization",
  },
  {
    icon: <HiLightningBolt size={42} className="text-cyan-500" />,
    title: "Portfolio & Brand Design",
    description:
      "Crafting developer portfolios that merge storytelling, interactivity, and personal branding to make your digital presence unforgettable.",
    highlight: "Animations | Aesthetics | Identity",
  },
  {
    icon: <HiDesktopComputer size={42} className="text-cyan-500" />,
    title: "Full Web App Lifecycle",
    description:
      "From design to deployment — I handle the end-to-end creation of scalable, modern web applications that drive real user engagement.",
    highlight: "End-to-End | Modern Stack | Agile Workflow",
  },
];

// ✨ Framer Motion Variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 w-full border-b-2 border-b-cyan-500/50 dark:border-b-0"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h2>
        <motion.p
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I blend design intuition with clean code to craft modern, responsive,
          and efficient web applications that deliver seamless digital
          experiences.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.05,
              rotateY: 3,
              boxShadow: "0 10px 40px rgba(6,182,212,0.3)",
            }}
            className="group relative bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-slate-300/30 dark:border-slate-700/40 rounded-2xl p-6 text-center shadow-lg transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/30"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

            <div className="relative z-10 flex flex-col items-center gap-4 h-64 justify-center">
              {service.icon}
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
              <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-2">
                {service.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="#contact"
          className="inline-block px-8 py-3 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:from-cyan-600 hover:to-blue-500 hover:shadow-cyan-500/40 transition-transform transform hover:scale-105"
        >
          Let's Build Something Amazing 🚀
        </a>
      </motion.div>
    </section>
  );
}
