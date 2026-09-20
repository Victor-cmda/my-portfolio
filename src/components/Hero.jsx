import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Command,
  Layers,
  Terminal,
} from "lucide-react";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

export function Hero() {
  const ref = useRef(null);
  const reduced = useMotionPreferences();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const rotateX = useTransform(scrollYProgress, [0, 0.7], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.94, 1.04]);
  return (
    <section id="overview" className="hero" ref={ref}>
      <div className="hero-copy shell">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.9 }}
        >
          <p className="eyebrow hero-eyebrow">
            <span /> VICTOR SOMAVILLA · BACKEND .NET DEVELOPER
          </p>
          <h1>
            Built for scale.
            <br />
            <span className="silver-text">Engineered to last.</span>
          </h1>
          <p className="hero-description">
            C# / .NET. Distributed systems.
            <br />
            Performance and reliability, down to the details.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="#work">
              Explore my work <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#about">
              Meet the developer <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="product-stage" aria-hidden="true">
        <div className="stage-halo" />
        <div className="stage-line" />
        <motion.div
          className="product-window"
          style={reduced ? {} : { y, rotateX, scale }}
        >
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>
              <Command size={12} /> The systems behind the experience.
            </span>
            <span className="window-version">VS / 01</span>
          </div>
          <div className="window-body">
            <div className="window-preview">
              <span className="preview-label">
                BACKEND ENGINEERING / C# · .NET
              </span>
              <div className="orbital-art">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="orbit orbit-three" />
                <div className="core-mark">
                  <Braces strokeWidth={1} />
                  <span>vs.</span>
                </div>
              </div>
              <div className="preview-bottom">
                <span>
                  From the first request.
                  <br />
                  <strong>To reliable production.</strong>
                </span>
                <ArrowUpRight size={25} />
              </div>
            </div>
            <div className="window-code">
              <div className="code-tab">
                <Terminal size={13} /> DataPipeline.cs <span>●</span>
              </div>
              <div className="code-lines">
                <p>
                  <i>01</i>
                  <span className="code-purple">public async</span> Task
                  ProcessAsync(
                </p>
                <p>
                  <i>02</i> CancellationToken ct)
                </p>
                <p>
                  <i>03</i>
                  {"{"}
                </p>
                <p>
                  <i>04</i> <span className="code-purple">var</span> data ={" "}
                  <span className="code-purple">await</span> source
                </p>
                <p>
                  <i>05</i> .<span className="code-blue">ReadAsync</span>(ct);
                </p>
                <p>
                  <i>06</i>{" "}
                </p>
                <p>
                  <i>07</i> <span className="code-purple">var</span> result ={" "}
                  <span className="code-blue">Transform</span>(data);
                </p>
                <p>
                  <i>08</i> <span className="code-purple">await</span> store.
                  <span className="code-blue">SaveAsync</span>(
                </p>
                <p>
                  <i>09</i> result, ct);
                </p>
                <p>
                  <i>10</i>
                  {"}"}
                </p>
                <p>
                  <i>11</i>
                  <span className="code-green">
                    {"// Every operation matters."}
                  </span>
                </p>
              </div>
              <div className="code-status">
                <span>
                  <i /> Built with purpose
                </span>
                <Layers size={14} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-footnote shell">
        <span>ENGINEERED AT THE CORE</span>
        <div>
          <span>C# / .NET</span>
          <span>ASP.NET Core</span>
          <span>Distributed systems</span>
        </div>
        <a href="#work">
          SCROLL TO DISCOVER <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}
