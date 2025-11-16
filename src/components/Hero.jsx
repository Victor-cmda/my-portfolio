import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/PictureProfileVictor.png";
import { motion } from "framer-motion";

const fadeInUp = (delay) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
});

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] py-12 md:py-16 overflow-hidden">
      {/* Animated background elements - Apple style */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 h-96 w-96 rounded-full bg-apple-blue-500/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-apple-gray-300/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:gap-12">
          <motion.div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp(0.2)} className="space-y-4">
              <motion.h1
                className="bg-gradient-to-r from-white via-apple-gray-50 to-apple-gray-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Victor Hugo Somavilla
              </motion.h1>
            </motion.div>

            <motion.div variants={fadeInUp(0.4)} className="mt-4 md:mt-6">
              <motion.span
                className="bg-gradient-to-r from-apple-blue-400 to-apple-blue-600 bg-clip-text text-xl font-medium tracking-tight text-transparent sm:text-2xl md:text-3xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Analista de Sistemas
              </motion.span>
            </motion.div>

            <motion.p
              variants={fadeInUp(0.6)}
              className="mt-6 max-w-xl text-base font-normal leading-relaxed text-apple-gray-200 md:mt-8 md:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeInUp(0.8)}
              className="mt-8 flex gap-4 md:mt-10"
            >
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-apple-blue-500 px-8 py-3.5 text-white font-medium shadow-lg transition-all hover:bg-apple-blue-600"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 122, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Entre em contato</span>
              </motion.a>
              <motion.a
                href="#projetos"
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-apple-gray-600 bg-apple-gray-800/30 backdrop-blur-sm px-8 py-3.5 text-apple-gray-50 font-medium transition-all hover:border-apple-gray-400 hover:bg-apple-gray-700/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Ver projetos</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-64 shrink-0 md:w-80 lg:w-96"
          >
            <motion.div
              {...floatingAnimation}
              className="relative overflow-hidden rounded-full"
            >
              <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-tr from-apple-blue-500/20 via-transparent to-apple-gray-300/10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src={profilePic}
                alt="Victor Hugo Somavilla"
                className="relative z-0 w-full transform rounded-full bg-gradient-to-b from-apple-gray-800 to-black object-cover shadow-2xl shadow-apple-blue-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                }}
              />
              {/* Glow effect - Apple style */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-apple-blue-500/20 to-apple-gray-300/10 opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-apple-gray-700 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform"
      >
        <motion.svg
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-6 w-6 text-apple-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
};
