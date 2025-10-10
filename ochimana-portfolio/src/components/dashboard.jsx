import { motion } from "framer-motion";
import useDarkMode from "./useDarkmode";
import { skills } from "./skillsData";
import { projects } from "./projectsData";
import SkillsCard from "./skills";
import ProjectCard from "./projects";
import ContactCard from "./contactCard";
import Navbar from "./navbar";
import ServicesSection from "./services";
import Hero from "./hero";
import About from "./about";

function Dashboard() {
  const [theme, setTheme] = useDarkMode();

  function setMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillsElement = skills.map((skill, index) => (
    <SkillsCard
      key={index}
      img={skill.img}
      alt={skill.alt}
      title={skill.title}
      fadeInUp={fadeInUp}
    />
  ));

  const projectElements = projects.map((project, index) => (
    <ProjectCard
      key={index}
      img={project.img}
      alt={project.alt}
      description={project.description}
      title={project.title}
      live={project.live}
      code={project.code}
      fadeInUp={fadeInUp}
    />
  ));

  return (
    <div className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 w-full">
      <Navbar theme={theme} setMode={setMode} />

      <div id="home"></div>

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About fadeInUp={fadeInUp} />

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="pb-16 dark:pt-8 bg-slate-200 dark:bg-slate-800 px-6 transition-colors flex flex-col items-center pt-16"
      >
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-cyan-500 dark:text-cyan-400"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center mx-auto max-w-5xl w-full">
          {skillsElement}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <p className="text-center text-md sm:text-base text-slate-600 dark:text-slate-400 m-8">
          Like I mention earlier, I'm just getting started on my programming
          career. These projects are from my learning journey. I'll be glad to
          work together with you on real life applications.
        </p>
        <div className="grid md:grid-cols-2 gap-8">{projectElements}</div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-16 px-6 text-center bg-slate-200 dark:bg-slate-800 transition-colors"
      >
        <ContactCard fadeInUp={fadeInUp} />
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
        © 2025 Eneojo God'swill Ochimana | Built with React + Tailwind + Framer
        Motion
      </footer>
    </div>
  );
}

export default Dashboard;
