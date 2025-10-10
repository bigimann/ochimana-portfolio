import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme, setMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-md dark:shadow-white/20">
      {/* Logo */}
      <h1 className="font-extrabold text-xl text-cyan-500 tracking-widest cursor-pointer">
        ENEOJO
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "About", "Services", "Skills", "Projects"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-slate-700 dark:text-slate-200 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition "
            >
              {item}
            </a>
          )
        )}

        <a
          href="#contact"
          className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-md hover:shadow-cyan-500/30"
        >
          Reach Out
        </a>

        {/* Dark mode button (desktop) */}
        <button
          onClick={setMode}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-110 transition"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={setMode}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-110 transition"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-110 transition"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex flex-col items-center py-6 space-y-5 md:hidden"
          >
            {["Home", "About", "Services", "Skills", "Projects"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleLinkClick} //  closes menu after click
                  className="text-slate-700 dark:text-slate-200 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-lg w-full text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}

            <motion.a
              href="#contact"
              onClick={handleLinkClick} //  closes menu after click
              className="mt-3 inline-block px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition shadow-md hover:shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reach Out
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
