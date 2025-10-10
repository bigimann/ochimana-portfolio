import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactCard({ fadeInUp }) {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => setStatus("error")
      );
  };

  const links = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:eneojogoswill@email.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/bigimann",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eneojo",
    },
  ];

  return (
    <motion.div
      className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[50%] mx-auto bg-white dark:bg-slate-800 rounded-3xl 
      shadow-2xl p-6 sm:p-8 relative overflow-hidden border border-transparent 
      hover:border-cyan-500 transition-all duration-500 hover:shadow-cyan-500/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-cyan-400 dark:text-cyan-400">
        Contact <span className="text-fuchsia-500">Me</span>
      </h2>
      <p className="text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6">
        Let's build something amazing together 💬
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* Name Field */}
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
          bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm sm:text-base"
        />

        {/* Email Field */}
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
          bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm sm:text-base"
        />

        {/* Title Field */}
        <input
          type="text"
          name="title"
          placeholder="Subject / Title"
          required
          className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
          bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-sm sm:text-base"
        />

        {/* Message Field */}
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
          bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 
          focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none text-sm sm:text-base"
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
          className={`mt-4 px-6 py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition duration-300
            ${
              status === "sending"
                ? "bg-cyan-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/30"
            }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-500 mt-4 text-center font-medium text-sm sm:text-base">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4 text-center font-medium text-sm sm:text-base">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>

      <motion.p
        className="text-slate-700 dark:text-slate-300 my-8 font-bold text-lg"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        You can also reach me via:
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl 
            backdrop-blur-xl bg-white/10 dark:bg-slate-800/40 border border-white/20 
            shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 
            hover:border-cyan-400 text-slate-700 dark:text-slate-200 group"
          >
            <div className="text-3xl sm:text-4xl text-cyan-400 group-hover:text-cyan-300 transition">
              {link.icon}
            </div>
            <span className="mt-2 font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
