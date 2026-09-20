import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { CONTACT } from "../constants";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

export function Contact() {
  const reduced = useMotionPreferences();
  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-glow" aria-hidden="true" />
      <motion.div
        className="shell contact-content"
        initial={reduced ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduced ? 0 : 0.8 }}
      >
        <p className="eyebrow">GREAT THINGS START WITH A CONVERSATION.</p>
        <h2>
          What can we
          <br />
          <span className="silver-text">build together?</span>
        </h2>
        <p>
          A new service. A complex integration. A performance challenge.
          <br />
          I’d love to hear what you have in mind.
        </p>
        <a className="button button-blue" href={`mailto:${CONTACT.email}`}>
          Let’s make it happen <ArrowUpRight size={17} />
        </a>
        <a className="contact-email" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
        <div className="contact-socials">
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub <ArrowUpRight size={12} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
