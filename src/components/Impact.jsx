import { motion } from "framer-motion";
import { ArrowUpRight, Timer } from "lucide-react";
import { BRANDS } from "../constants";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

export function Impact() {
  const reduced = useMotionPreferences();
  return (
    <section
      className="impact section-pad"
      id="impact"
      aria-labelledby="impact-title"
    >
      <div className="shell impact-layout">
        <div className="impact-copy">
          <p className="eyebrow">PERFORMANCE, MEASURED.</p>
          <h2 id="impact-title">
            Less waiting.
            <br />
            <span>Better engineering.</span>
          </h2>
          <p>
            A dashboard that took 46 minutes to load. A processing path worth
            rethinking.
          </p>
          <p>
            At IntellTech, I refactored dashboard processing using affine
            transformations, bringing loading time down to 26 seconds.
          </p>
          <a href="#journey" className="text-link">
            Explore the experience <ArrowUpRight size={16} />
          </a>
        </div>
        <motion.div
          className="impact-panel"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduced ? 0 : 0.7 }}
        >
          <div className="impact-panel-top">
            <span className="brand-tile">
              <img
                src={BRANDS.intelltech.logo}
                alt="IntellTech"
                width="100"
                height="40"
                loading="lazy"
              />
            </span>
            <span>
              <Timer size={14} /> DASHBOARD LOADING TIME
            </span>
          </div>
          <div className="impact-number">
            <span>
              46 <small>min</small>
            </span>
            <span className="impact-arrow">→</span>
            <strong>
              26 <small>sec</small>
            </strong>
          </div>
          <div className="impact-comparison" aria-hidden="true">
            <div>
              <span>BEFORE</span>
              <i />
            </div>
            <div>
              <span>AFTER</span>
              <i />
            </div>
          </div>
          <div className="impact-panel-bottom">
            <span>
              One bottleneck.
              <br />
              <strong>A measurable difference.</strong>
            </span>
            <span className="impact-method">
              AFFINE TRANSFORMATIONS
              <br />
              PROCESSING REFACTOR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
