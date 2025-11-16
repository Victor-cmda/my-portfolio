import React from "react";
import { RiReactjsLine, RiNodejsLine, RiAngularjsFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { TbBrandCSharp, TbDatabase } from "react-icons/tb";
import { SiMongodb, SiNestjs, SiRabbitmq, SiApachekafka, SiMysql, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { icon: TbBrandCSharp, name: "C#", color: "text-apple-blue-500", delay: 0.1 },
  { icon: AiOutlineDotNet, name: ".NET", color: "text-apple-blue-400", delay: 0.2 },
  { icon: RiReactjsLine, name: "React.js", color: "text-apple-blue-400", delay: 0.3 },
  { icon: RiAngularjsFill, name: "AngularJS", color: "text-red-500", delay: 0.4 },
  { icon: DiMsqlServer, name: "SQL Server", color: "text-red-600", delay: 0.5 },
  {
    icon: DiPostgresql,
    name: "PostgreSQL",
    color: "text-apple-blue-400",
    delay: 0.6,
  },
  { icon: SiMysql, name: "MySQL", color: "text-apple-blue-500", delay: 0.7 },
  { icon: TbDatabase, name: "Cassandra", color: "text-apple-gray-300", delay: 0.8 },
  { icon: SiRabbitmq , name: "RabbitMQ", color: "text-orange-500", delay: 0.9 },
  { icon: SiApachekafka, name: "Kafka", color: "text-apple-gray-200", delay: 1.0 },
  { icon: RiNodejsLine, name: "Node.js", color: "text-green-500", delay: 1.1 },
  { icon: SiPython, name: "Python", color: "text-apple-blue-400", delay: 1.2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    y: -12,
    scale: 1.08,
    rotate: [0, -5, 5, 0],
    transition: {
      y: { type: "spring", stiffness: 300, damping: 10 },
      scale: { duration: 0.2 },
      rotate: { duration: 0.3 },
    },
  },
};

export const Technologies = () => {
  return (
    <section className="pb-24 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-apple-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-apple-blue-500/5 rounded-full blur-3xl"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-semibold text-center mb-20 bg-gradient-to-r from-white to-apple-gray-300 bg-clip-text text-transparent"
        >
          Tecnologias
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-apple-gray-800/30 backdrop-blur-sm border border-apple-gray-700 hover:border-apple-blue-500/50 transition-colors duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-apple-blue-500/0 group-hover:bg-apple-blue-500/10 transition-colors duration-300"></div>
                  
                  <div className="relative flex flex-col items-center gap-3">
                    <IconComponent className={`text-5xl ${tech.color}`} />
                    <span className="text-xs md:text-sm font-medium text-apple-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
