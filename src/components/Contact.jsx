import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

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

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
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
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-apple-blue-500/5 blur-3xl"
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
            Entre em
            <span className="bg-gradient-to-r from-apple-blue-400 to-apple-blue-500 bg-clip-text text-transparent">
              {" "}
              Contato
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
            Vamos conversar sobre seu projeto? Estou sempre aberto a novas
            oportunidades e parcerias interessantes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-apple-gray-700 bg-apple-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-apple-blue-500/50"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-4 inline-flex rounded-xl bg-apple-blue-500/10 p-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="h-6 w-6 text-apple-blue-400" />
            </motion.div>
            <h3 className="mb-2 text-lg font-medium text-white">
              Localização
            </h3>
            <p className="text-apple-gray-300">{CONTACT.address}</p>
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-blue-500/10 via-transparent to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-apple-blue-500 to-apple-blue-400 opacity-0 blur-lg"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: -1 }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl border border-apple-gray-700 bg-apple-gray-800/30 p-6 backdrop-blur-sm transition-colors hover:border-apple-blue-500/50"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mb-4 inline-flex rounded-xl bg-apple-blue-500/10 p-3"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="h-6 w-6 text-apple-blue-400" />
            </motion.div>
            <h3 className="mb-2 text-lg font-medium text-white">Email</h3>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="text-apple-gray-300 transition-colors hover:text-apple-blue-400"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {CONTACT.email}
            </motion.a>
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-apple-blue-500/10 via-transparent to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-apple-blue-500 to-apple-blue-400 opacity-0 blur-lg"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-apple-gray-300">
            Ou me encontre nas redes sociais
          </p>
          <div className="flex justify-center gap-4">
            {[
              { icon: Github, href: CONTACT.github, label: "Github" },
              { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full border border-apple-gray-700 bg-apple-gray-800/50 p-3 transition-colors hover:border-apple-blue-500/50"
                aria-label={social.label}
                whileHover={{ scale: 1.15, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <social.icon className="h-5 w-5 text-apple-gray-300 transition-colors group-hover:text-apple-blue-400" />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-apple-blue-500 to-apple-blue-400 opacity-0 blur"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
