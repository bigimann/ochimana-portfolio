import { motion } from "framer-motion";

export default function About({ fadeInUp }) {
  return (
    <section
      id="about"
      className="lg:min-h-screen lg:text-center pt-20 pb-8 px-6 mx-auto dark:bg-slate-800 w-full border-b-2 border-b-cyan-500/50 dark:border-b-0"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-cyan-500 dark:text-cyan-400 text-left max-md:text-center lg:pl-8 pb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <div className="md:flex gap-10 items-center">
        <motion.img
          src="./Eneojo.jpg"
          alt="profile"
          className="rounded-full w-60 h-60 mx-auto md:mx-0 shadow-lg hover:shadow-cyan-700/50 dark:hover:shadow-cyan-500/30 cursor-pointer"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        />
        <motion.p
          className="mt-6 md:mt-0 text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center pb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          I'm Eneojo God'swill Ochimana. A frontend software developer from
          Nigeria with a strong background in JavaScript, React.js, and Tailwind
          CSS. I also have experience with frameworks like Express.js & Node.js.
          I have been using my expertise to develop scalable modern web
          applications.
        </motion.p>
      </div>
    </section>
  );
}
