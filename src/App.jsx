import { useState } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import NavBar from "./components/NavBar";
import { Impact } from "./components/Impact";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { MotionPreferences } from "./hooks/useMotionPreferences";

export default function App() {
  const systemReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const reduced = Boolean(systemReducedMotion || paused);
  return (
    <MotionPreferences.Provider value={reduced}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>
        <div className={reduced ? "site reduce-motion" : "site"}>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <NavBar />
          <main id="main">
            <Hero />
            <Impact />
            <Projects />
            <Technologies />
            <About />
            <Experience />
            <Contact />
          </main>
          <footer className="footer shell">
            <a href="#overview" className="wordmark">
              vs<span>.</span>
            </a>
            <p>© {new Date().getFullYear()} Victor Hugo Somavilla</p>
            <button
              className="motion-toggle"
              onClick={() => setPaused(!paused)}
              disabled={Boolean(systemReducedMotion)}
              aria-pressed={reduced}
            >
              {reduced ? <Play size={13} /> : <Pause size={13} />}
              {systemReducedMotion
                ? "Reduced motion enabled"
                : paused
                  ? "Play animations"
                  : "Pause animations"}
            </button>
            <a href="#overview">Back to top ↑</a>
          </footer>
        </div>
      </MotionConfig>
    </MotionPreferences.Provider>
  );
}
