import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Braces, Database, Network, ArrowUpRight } from "lucide-react";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

export function Technologies() {
  const ref = useRef(null);
  const reduced = useMotionPreferences();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [35, 0]);
  return (
    <section id="expertise" className="expertise section-pad" ref={ref}>
      <div className="shell">
        <p className="eyebrow">BACKEND IS MY FOCUS</p>
        <motion.h2
          className="expertise-statement"
          style={reduced ? {} : { opacity, y }}
        >
          Behind every great product.
          <br />
          <span className="blue-text">A backend built to deliver.</span>
        </motion.h2>
        <p className="section-description">
          Business logic. Connected services. Data that keeps moving.
          <br className="desktop-break" /> Engineering for maintainability and
          performance in production.
        </p>
        <div className="expertise-grid">
          <div className="expertise-card">
            <Braces />
            <p className="eyebrow">01 / BACKEND ENGINEERING</p>
            <h3>Logic that holds up.</h3>
            <p>
              C#/.NET services, REST APIs, and business logic. Asynchronous
              programming and refactoring that keep complex systems
              maintainable.
            </p>
            <div className="tech-tags">
              <span>C# / .NET</span>
              <span>ASP.NET Core</span>
              <span>Entity Framework</span>
            </div>
          </div>
          <div className="expertise-card">
            <Database />
            <p className="eyebrow">02 / DATA & PERFORMANCE</p>
            <h3>Find the bottleneck.</h3>
            <p>
              Query optimization, caching, and parallel processing.
              Investigating production behavior and improving expensive
              operations.
            </p>
            <div className="tech-tags">
              <span>SQL Server</span>
              <span>Apache Cassandra</span>
              <span>Async / Parallel</span>
            </div>
          </div>
          <div className="expertise-card">
            <Network />
            <p className="eyebrow">03 / DISTRIBUTED SYSTEMS</p>
            <h3>Keep systems connected.</h3>
            <p>
              Distributed applications, data-collection integrations, and
              messaging. Reliability across services, instruments, and external
              APIs.
            </p>
            <div className="tech-tags">
              <span>Akka.NET</span>
              <span>RabbitMQ / Kafka</span>
              <span>MQTT / OPC</span>
            </div>
          </div>
        </div>
        <div className="stack-note">
          <span>Across the stack</span>
          <p>React · AngularJS · Python · PostgreSQL · MySQL · DevOps</p>
          <a href="#journey" aria-label="Explore my experience">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
