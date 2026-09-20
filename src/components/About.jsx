import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profile from "../assets/PictureProfileVictor.png";
import { CONTACT } from "../constants";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

export function About() {
  const reduced = useMotionPreferences();
  return (
    <section id="about" className="about section-pad">
      <motion.div
        className="about-layout shell"
        initial={reduced ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0 : 0.8 }}
      >
        <div className="about-portrait">
          <img
            src={profile}
            alt="Victor Hugo Somavilla"
            width="500"
            height="500"
            loading="lazy"
          />
          <span className="portrait-caption">
            THE ENGINEER BEHIND THE SYSTEMS
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">HELLO, I’M VICTOR.</p>
          <h2>
            A developer’s mind.
            <br />
            <span>A maker’s curiosity.</span>
          </h2>
          <p>
            I’m a backend .NET developer and Systems Analyst based in Foz do
            Iguaçu, Brazil. My focus is C#/.NET, system integrations,
            distributed applications, and performance in production.
          </p>
          <p>
            I value practical engineering: understanding the problem, evaluating
            trade-offs, and measuring the impact of changes. My experience with
            React and frontend development helps me troubleshoot across the
            application stack.
          </p>
          <div className="education-note">
            <span>EDUCATION</span>
            <strong>Bachelor’s degree in Information Technology</strong>
            <p>UDC Faculdades · 2020–2025</p>
          </div>
          <a
            className="text-link"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            More about me on LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
