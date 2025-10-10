import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({
  img,
  title,
  alt,
  live,
  code,
  description,
  fadeInUp,
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600); // resets pulse after click
  };

  return (
    <motion.section
      className={`relative rounded-2xl p-[2px] transition-all duration-500 group 
        ${clicked ? "animate-pulse-glow" : ""}
        bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500
        hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onClick={handleClick}
    >
      {/* Inner Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 h-full transition-all duration-300 group-hover:scale-[1.02]">
        <img
          src={img}
          alt={alt}
          className="rounded-xl mb-4 w-fit h-fit object-cover group-hover:brightness-110 transition"
        />
        <h3 className="text-xl font-semibold text-cyan-400 dark:text-cyan-400 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex gap-8">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-200 dark:hover:text-blue-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-all duration-300"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.section>
  );
}
