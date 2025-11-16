import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={`fixed top-0 w-full transition-all duration-300 z-50 
      ${
        isScrolled ? "bg-apple-dark/95 backdrop-blur-xl py-3 border-b border-apple-gray-800" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xl font-semibold bg-gradient-to-r from-white to-apple-gray-100 bg-clip-text text-transparent">
              Victor Hugo Somavilla
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("about")}>Sobre</NavLink>
            <NavLink onClick={() => scrollToSection("technologies")}>
              Tecnologias
            </NavLink>
            <NavLink onClick={() => scrollToSection("experience")}>
              Experiência
            </NavLink>
            <NavLink onClick={() => scrollToSection("projetos")}>
              Projetos
            </NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>
              Contato
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialIcon
              icon={<Github className="w-5 h-5" />}
              href="https://github.com/Victor-cmda"
            />
            <SocialIcon
              icon={<Linkedin className="w-5 h-5" />}
              href="https://www.linkedin.com/in/victorhugosomavilla"
            />
            <SocialIcon
              icon={<Mail className="w-5 h-5" />}
              href="mailto:victor.somavilla@aol.com"
            />
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-apple-gray-100"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-apple-dark/98 backdrop-blur-xl border-b border-apple-gray-800"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
                className="px-4 py-4 space-y-4"
              >
                <MobileNavLink onClick={() => scrollToSection("about")}>
                  Sobre
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("technologies")}>
                  Tecnologias
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("experience")}>
                  Experiência
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("projetos")}>
                  Projetos
                </MobileNavLink>
                <MobileNavLink onClick={() => scrollToSection("contact")}>
                  Contato
                </MobileNavLink>
                <div className="flex space-x-4 pt-4 border-t border-apple-gray-800">
                  <SocialIcon
                    icon={<Github className="w-5 h-5" />}
                    href="https://github.com/Victor-cmda"
                  />
                  <SocialIcon
                    icon={<Linkedin className="w-5 h-5" />}
                    href="https://www.linkedin.com/in/victorhugosomavilla"
                  />
                  <SocialIcon
                    icon={<Mail className="w-5 h-5" />}
                    href="mailto:victor.somavilla@aol.com"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    className="relative text-apple-gray-200 hover:text-white transition-colors duration-200 font-medium text-sm"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className="absolute -bottom-1 left-0 h-0.5 bg-apple-blue-500"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

const MobileNavLink = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    className="block w-full text-left text-apple-gray-200 hover:text-white transition-colors duration-200 font-medium py-2"
    whileHover={{ x: 5, color: "#ffffff" }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.button>
);

const SocialIcon = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-apple-gray-300 hover:text-white transition-colors duration-200"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
  >
    {icon}
  </motion.a>
);

export default NavBar;
