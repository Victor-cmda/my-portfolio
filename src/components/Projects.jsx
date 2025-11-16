import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Folder,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const Projects = () => {
  return (
    <section id="projetos" className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-apple-blue-500/5 via-transparent to-transparent"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-apple-blue-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Projetos
            <span className="bg-gradient-to-r from-apple-blue-400 to-apple-blue-500 bg-clip-text text-transparent">
              {" "}
              Destacados
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-apple-blue-500 to-apple-blue-400"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-apple-gray-700 bg-apple-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-apple-blue-500/50">
                <div className="mb-4 flex items-start justify-between">
                  <motion.div
                    className="rounded-xl bg-apple-blue-500/10 p-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Folder className="h-6 w-6 text-apple-blue-400" />
                  </motion.div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-apple-gray-300 transition-colors hover:bg-apple-gray-700 hover:text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-apple-gray-300 transition-colors hover:bg-apple-gray-700 hover:text-white"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-medium text-white transition-colors group-hover:text-apple-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-sm text-apple-gray-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-2 flex items-center gap-2 text-xs text-apple-gray-400">
                    <Code2 className="h-4 w-4" />
                    Tecnologias
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="rounded-full border border-apple-blue-500/20 bg-apple-blue-500/10 px-3 py-1 text-xs font-medium text-apple-blue-400"
                        whileHover={{ scale: 1.1, borderColor: "rgba(0, 122, 255, 0.5)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-blue-500/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute right-4 top-4 text-apple-blue-400 opacity-0"
                  whileHover={{ opacity: 1, x: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-apple-blue-500 to-apple-blue-400 opacity-0 blur-lg"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Victor-cmda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-apple-gray-700 bg-apple-gray-800/50 px-6 py-3 text-sm text-apple-gray-300 transition-colors hover:border-apple-blue-500/50 hover:text-apple-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4" />
            Ver mais projetos no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
