import React, { useState } from "react";
import { ABOUT_TEXT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Rocket, 
  Users, 
  Award, 
  Target,
  ChevronDown,
  Sparkles,
  Zap,
  Heart
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento Full Stack",
    description: "Experiência sólida em desenvolvimento de aplicações completas, desde o backend até interfaces de usuário modernas e responsivas.",
    details: [
      "Backend com C#, .NET e Node.js",
      "Frontend com React, Angular e tecnologias modernas",
      "APIs RESTful e GraphQL",
      "Arquitetura de microsserviços"
    ],
    color: "apple-blue"
  },
  {
    icon: Brain,
    title: "Big Data & Sistemas Distribuídos",
    description: "Especialização em processamento de grandes volumes de dados e arquiteturas distribuídas escaláveis.",
    details: [
      "Apache Kafka e RabbitMQ para mensageria",
      "Cassandra, PostgreSQL e MySQL",
      "Pipeline de dados e ETL",
      "Otimização de performance e escalabilidade"
    ],
    color: "apple-blue"
  },
  {
    icon: Rocket,
    title: "Análise de Sistemas",
    description: "Transformo requisitos de negócio em soluções técnicas eficientes, com foco em qualidade e manutenibilidade.",
    details: [
      "Levantamento e análise de requisitos",
      "Modelagem de dados e processos",
      "Documentação técnica detalhada",
      "Gestão de projetos e metodologias ágeis"
    ],
    color: "apple-blue"
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Experiência em colaboração com equipes multidisciplinares, code reviews e mentoria de desenvolvedores.",
    details: [
      "Comunicação efetiva com stakeholders",
      "Revisão de código e pair programming",
      "Compartilhamento de conhecimento",
      "Adaptação a diferentes culturas organizacionais"
    ],
    color: "apple-blue"
  }
];

const achievements = [
  { icon: Award, label: "Anos de Experiência", value: "4+", color: "from-apple-blue-500 to-apple-blue-400" },
  { icon: Target, label: "Projetos Concluídos", value: "50+", color: "from-apple-blue-400 to-apple-blue-500" },
  { icon: Sparkles, label: "Tecnologias", value: "12+", color: "from-apple-blue-500 to-apple-blue-600" },
  { icon: Zap, label: "Empresas", value: "6", color: "from-apple-blue-400 to-apple-blue-500" }
];

export const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-apple-blue-500/5 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-white">
            Sobre{" "}
            <span className="bg-gradient-to-r from-apple-blue-400 to-apple-blue-600 bg-clip-text text-transparent">
              Mim
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-apple-blue-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-apple-gray-300"
          >
            Conheça mais sobre minha jornada, habilidades e o que me motiva
          </motion.p>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-4xl mb-16"
        >
          <div className="rounded-2xl border border-apple-gray-700 bg-apple-gray-800/30 backdrop-blur-sm p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="rounded-xl bg-apple-blue-500/10 p-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="h-6 w-6 text-apple-blue-400" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Olá! Prazer em conhecê-lo
                </h3>
                <p className="text-lg leading-relaxed text-apple-gray-200">
                  {ABOUT_TEXT}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-5xl mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <motion.div
                  className="rounded-2xl border border-apple-gray-700 bg-apple-gray-800/30 backdrop-blur-sm p-6 text-center hover:border-apple-blue-500/50 transition-colors"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-apple-blue-500/10 mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="h-6 w-6 text-apple-blue-400" />
                  </motion.div>
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.value}
                  </div>
                  <div className="text-xs md:text-sm text-apple-gray-300 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Principais Habilidades
            </h3>
            <p className="text-apple-gray-300">
              Áreas de conhecimento e expertise
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <motion.div
                  className="relative h-full rounded-2xl border border-apple-gray-700 bg-apple-gray-800/30 backdrop-blur-sm overflow-hidden hover:border-apple-blue-500/50 transition-colors"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="rounded-xl bg-apple-blue-500/10 p-3"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <skill.icon className="h-6 w-6 text-apple-blue-400" />
                      </motion.div>
                      
                      <motion.button
                        onClick={() => toggleExpand(index)}
                        className="rounded-full border border-apple-gray-700 bg-apple-gray-800/50 p-2 text-apple-gray-300 hover:border-apple-blue-500/50 hover:text-apple-blue-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </motion.button>
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-apple-blue-400 transition-colors">
                      {skill.title}
                    </h4>
                    
                    <p className="text-apple-gray-300 leading-relaxed">
                      {skill.description}
                    </p>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-6 pt-6 border-t border-apple-gray-700/50"
                        >
                          <div className="space-y-2">
                            {skill.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: detailIndex * 0.05 }}
                                className="flex items-start gap-2 text-apple-gray-300"
                              >
                                <span className="text-apple-blue-400 mt-1">•</span>
                                <span>{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-blue-500/10 via-transparent to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-apple-blue-500 px-8 py-4 text-lg font-semibold text-white hover:bg-apple-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos trabalhar juntos
            <motion.svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};