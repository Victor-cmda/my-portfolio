import React, { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building2, Code2, MapPin, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-20">
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
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-apple-blue-500/5 blur-3xl"
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
            Experiência
            <span className="bg-gradient-to-r from-apple-blue-400 to-apple-blue-500 bg-clip-text text-transparent">
              {" "}
              Profissional
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-apple-blue-500 to-apple-blue-400"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-apple-gray-300"
          >
            Minha trajetória profissional em desenvolvimento de software e análise de sistemas
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl space-y-6"
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-apple-gray-700 bg-apple-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:border-apple-blue-500/50"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    {/* Left side - Company and Role */}
                    <div className="flex-1">
                      <div className="mb-3 flex items-start gap-3">
                        <motion.div
                          className="mt-1 rounded-xl bg-apple-blue-500/10 p-2.5"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Building2 className="h-5 w-5 text-apple-blue-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-apple-blue-400 md:text-2xl">
                            {experience.role}
                          </h3>
                          <p className="mt-1 text-base text-apple-blue-400 md:text-lg">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <motion.div
                        className="inline-flex items-center gap-2 rounded-full border border-apple-gray-700 bg-apple-gray-800/50 px-4 py-2 text-sm text-apple-gray-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="h-4 w-4" />
                        {experience.year}
                      </motion.div>
                    </div>

                    {/* Right side - Expand button */}
                    <motion.button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 rounded-full border border-apple-gray-700 bg-apple-gray-800/50 px-4 py-2 text-sm text-apple-gray-300 transition-colors hover:border-apple-blue-500/50 hover:text-apple-blue-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="hidden md:inline">
                        {expandedIndex === index ? "Menos detalhes" : "Mais detalhes"}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Description - Always visible */}
                  <p className="mt-6 text-apple-gray-300 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2 text-sm text-apple-gray-400">
                      <Code2 className="h-4 w-4" />
                      <span className="font-medium">Tecnologias utilizadas</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="rounded-full border border-apple-blue-500/20 bg-apple-blue-500/10 px-4 py-2 text-sm font-medium text-apple-blue-400"
                          whileHover={{ scale: 1.1, borderColor: "rgba(0, 122, 255, 0.5)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-apple-gray-700/50"
                    >
                      <div className="space-y-4 p-6 md:p-8">
                        <h4 className="text-lg font-semibold text-white">
                          Principais Responsabilidades
                        </h4>
                        <div className="space-y-2 text-apple-gray-300">
                          <p className="leading-relaxed">
                            • Desenvolvimento e manutenção de aplicações utilizando as tecnologias mencionadas
                          </p>
                          <p className="leading-relaxed">
                            • Colaboração com equipes multidisciplinares para entrega de soluções de qualidade
                          </p>
                          <p className="leading-relaxed">
                            • Participação em revisões de código e implementação de melhores práticas
                          </p>
                          <p className="leading-relaxed">
                            • Contribuição para a arquitetura e design de sistemas escaláveis
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover effects */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-blue-500/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-apple-blue-500 to-apple-blue-400 opacity-0 blur-lg"
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-apple-gray-700 bg-apple-gray-800/50 px-6 py-3 text-sm text-apple-gray-300"
            whileHover={{ scale: 1.05, borderColor: "rgba(0, 122, 255, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-apple-blue-500"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {EXPERIENCES.length} experiências profissionais
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
