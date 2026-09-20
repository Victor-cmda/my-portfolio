import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Plus,
  X,
  Database,
  Server,
  Cpu,
  Check,
  Workflow,
  ShoppingBag,
  LayoutDashboard,
} from "lucide-react";
import { PROJECTS, CONTACT } from "../constants";
import { useMotionPreferences } from "../hooks/useMotionPreferences";

function projectArt(type) {
  if (type === "network")
    return (
      <div className="network-art">
        <div className="network-orbit" />
        <div className="network-orbit second" />
        <span className="network-center">
          <Cpu size={44} strokeWidth={1} />
        </span>
        <span className="network-node node-one">
          <Database />
        </span>
        <span className="network-node node-two">
          <Server />
        </span>
        <span className="network-node node-three">
          <Database />
        </span>
        <span className="network-node node-four">
          <Server />
        </span>
        <span className="network-label">CONNECTED BY DESIGN</span>
      </div>
    );
  if (type === "workflow")
    return (
      <div className="workflow-art">
        <div>
          <span>
            <Workflow /> Capture
          </span>
          <i />
          <span>
            <Cpu /> Process
          </span>
          <i />
          <span>
            <Check /> Complete
          </span>
        </div>
        <p>Let the workflow do the work.</p>
      </div>
    );
  return (
    <div className={`dashboard-art ${type === "pos" ? "pos-art" : ""}`}>
      <div className="dashboard-sidebar">
        <span className="dashboard-logo">
          {type === "pos" ? <ShoppingBag size={19} /> : "L"}
        </span>
        <LayoutDashboard size={14} />
        <Database size={14} />
        <Workflow size={14} />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-heading">
          <span>
            {type === "pos" ? "Sales overview" : "Operations overview"}
          </span>
          <span className="dashboard-avatar">VS</span>
        </div>
        <div className="dashboard-stats">
          <div>
            <small>{type === "pos" ? "Sales" : "Operations"}</small>
            <b>Overview</b>
            <em>↗ All in one place</em>
          </div>
          <div>
            <small>Inventory</small>
            <b>Connected</b>
            <em>● Synchronized</em>
          </div>
        </div>
        <div className="dashboard-chart">
          <span>
            {type === "pos" ? "Sales activity" : "Operational activity"}
          </span>
          <div className="chart-bars">
            {[30, 44, 35, 57, 43, 66, 60, 80, 72, 92, 84, 100].map(
              (height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ),
            )}
          </div>
        </div>
        <div className="dashboard-table">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const reduced = useMotionPreferences();
  const gallery = useRef(null);
  const dialog = useRef(null);
  const [selected, setSelected] = useState(null);
  const [position, setPosition] = useState({ start: true, end: false });
  useEffect(() => {
    const element = gallery.current;
    const update = () =>
      setPosition({
        start: element.scrollLeft < 8,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 8,
      });
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (selected === null) return;
    const element = dialog.current;
    element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);
  const move = (direction) => {
    const element = gallery.current;
    element.scrollBy({
      left:
        direction *
        (element.firstElementChild.getBoundingClientRect().width + 24),
      behavior: reduced ? "instant" : "smooth",
    });
  };
  return (
    <section id="work" className="work section-pad">
      <div className="section-heading shell">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Systems that deliver.
            <br />
            <span>From data to impact.</span>
          </h2>
        </div>
        <a
          className="text-link"
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
        >
          Explore GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      <div
        className="project-gallery"
        ref={gallery}
        aria-label="Selected projects"
        tabIndex={0}
      >
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${project.className}`}
            initial={reduced ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduced ? 0 : 0.65 }}
          >
            <div className="project-copy">
              <div className="project-brand-row">
                {project.brand ? (
                  <span className="brand-tile project-brand">
                    <img
                      src={project.brand.logo}
                      alt={project.brand.name}
                      width="90"
                      height="36"
                      loading="lazy"
                    />
                  </span>
                ) : (
                  <span className="project-symbol" aria-hidden="true">
                    <ShoppingBag size={22} />
                  </span>
                )}
                <p className="eyebrow">{project.category}</p>
              </div>
              <h3>{project.headline}</h3>
            </div>
            <div className="project-art" aria-hidden="true">
              {projectArt(project.art)}
            </div>
            <div className="project-card-footer">
              <div>
                <h4>{project.title}</h4>
                <span className="project-owner">{project.brandContext}</span>
                <p>{project.technologies.slice(0, 3).join(" · ")}</p>
              </div>
              <button
                className="round-button project-open"
                aria-label={`Learn more about ${project.title}`}
                onClick={() => setSelected(index)}
              >
                <Plus size={20} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="gallery-controls shell">
        <span>Different challenges. The same attention to detail.</span>
        <div>
          <button
            className="round-button"
            disabled={position.start}
            onClick={() => move(-1)}
            aria-label="Previous projects"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            className="round-button"
            disabled={position.end}
            onClick={() => move(1)}
            aria-label="Next projects"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close();
        }}
        aria-labelledby="project-dialog-title"
      >
        {selected !== null && (
          <div className="dialog-content">
            <button
              autoFocus
              className="round-button dialog-close"
              aria-label="Close project details"
              onClick={() => dialog.current.close()}
            >
              <X size={20} />
            </button>
            {PROJECTS[selected].brand && (
              <a
                className="dialog-brand"
                href={PROJECTS[selected].brand.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="brand-tile">
                  <img
                    src={PROJECTS[selected].brand.logo}
                    alt={PROJECTS[selected].brand.name}
                    width="100"
                    height="40"
                  />
                </span>
                <span>
                  {PROJECTS[selected].brandContext} <ArrowUpRight size={12} />
                </span>
              </a>
            )}
            <p className="eyebrow">{PROJECTS[selected].category}</p>
            <h2 id="project-dialog-title">{PROJECTS[selected].title}</h2>
            <p className="dialog-intro">{PROJECTS[selected].description}</p>
            <p>{PROJECTS[selected].detail}</p>
            <div className="tech-tags">
              {PROJECTS[selected].technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <p className="visual-note">
              Card illustrations are interface concepts, not product
              screenshots.
            </p>
            <a href={`mailto:${CONTACT.email}`} className="text-link">
              Let’s talk about this work <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </dialog>
    </section>
  );
}
