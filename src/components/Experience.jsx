import { Plus, ArrowUpRight } from "lucide-react";
import { EXPERIENCES, CONTACT } from "../constants";

export function Experience() {
  return (
    <section id="journey" className="journey section-pad shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE JOURNEY SO FAR</p>
          <h2>
            Always building.
            <br />
            <span>Always moving forward.</span>
          </h2>
        </div>
        <p className="journey-intro">
          Different teams. New challenges.
          <br />
          Backend engineering, with experience across the stack.
        </p>
      </div>
      <div className="experience-list">
        {EXPERIENCES.map((experience) => (
          <details
            key={`${experience.company}-${experience.year}`}
            className="experience"
            open={experience.current ? true : undefined}
          >
            <summary>
              <span className="experience-year">{experience.year}</span>
              <span
                className={`brand-tile experience-brand ${experience.brand.dark ? "brand-tile-dark" : ""}`}
              >
                <img
                  src={experience.brand.logo}
                  style={{ objectFit: experience.brand.fit || "contain" }}
                  alt=""
                  width="100"
                  height="40"
                  loading="lazy"
                />
              </span>
              <span className="experience-title">
                <strong>{experience.company}</strong>
                <span>{experience.role}</span>
              </span>
              {experience.current && (
                <span className="current-label">CURRENT</span>
              )}
              <Plus className="experience-plus" size={19} />
            </summary>
            <div className="experience-details">
              {experience.positions && (
                <ol className="role-progression">
                  {experience.positions.map((position) => (
                    <li key={position.period}>
                      <strong>{position.role}</strong>
                      <span>{position.period}</span>
                    </li>
                  ))}
                </ol>
              )}
              <p>{experience.description}</p>
              {experience.highlights && (
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="tech-tags">
                {experience.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                className="company-link text-link"
                href={experience.brand.url}
                target="_blank"
                rel="noreferrer"
              >
                Company website <ArrowUpRight size={12} />
              </a>
            </div>
          </details>
        ))}
      </div>
      <a
        className="text-link journey-link"
        href={CONTACT.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        The full story on LinkedIn <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
