import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  achievements,
  education,
  experience,
  focusAreas,
  heroStats,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio.js";

function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} interface screenshot`}
        className="project-card__image"
        width="1280"
        height="720"
        loading="lazy"
        fetchPriority="low"
        decoding="async"
      />
    );
  }

  return (
    <div className="project-visual" aria-label={`${project.title} project summary`}>
      <div className="project-visual__topline">
        <span>{project.visual.eyebrow}</span>
        <span>{project.visual.metric}</span>
      </div>
      <h3>{project.visual.title}</h3>
      <div className="project-visual__rows">
        {project.visual.rows.map((row) => (
          <span key={row}>{row}</span>
        ))}
      </div>
      <p>{project.visual.metricLabel}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  const mediaClassName = `project-card__media${project.image ? " project-card__media--image" : ""}`;

  return (
    <article className="project-card">
      <Link className={mediaClassName} to={`/projects/${project.slug}`}>
        <ProjectVisual project={project} />
      </Link>

      <div className="project-card__content">
        <p className="project-card__type">{project.type}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tag-row" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 6).map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            Case study
            <ArrowRight aria-hidden="true" />
          </Link>
          {project.liveUrl ? (
            <a className="text-link text-link--muted" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a className="text-link text-link--muted" href={project.repoUrl} target="_blank" rel="noreferrer">
              Code
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <MapPin aria-hidden="true" />
              {profile.location}
            </p>
            <h1>{profile.name}</h1>
            <p className="hero__title">{profile.title}</p>
            <p className="hero__lead">
              I build full-stack JavaScript systems with a strong CS base: React interfaces, Node.js
              APIs, automation pipelines, database-backed workflows, and AI-assisted data products.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View projects
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button--secondary" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                Email me
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Profile snapshot">
            <img
              src={profile.avatarImage}
              alt="Mohammad Nihal"
              className="profile-panel__avatar"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div>
              <p className="profile-panel__name">{profile.shortName}</p>
              <p>{profile.tagline}</p>
            </div>
            <dl className="stat-grid">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--compact">
        <div className="container focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-item" key={area.title}>
              <Code2 aria-hidden="true" />
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--work" id="projects">
        <div className="container">
          <SectionIntro eyebrow="Selected work" title="Projects grounded in real systems">
            These projects are not just interface exercises. They include data pipelines, APIs,
            validation logic, automation, and deployable user-facing products.
          </SectionIntro>

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline-section" id="experience">
        <div className="container resume-grid">
          <div>
            <SectionIntro eyebrow="Experience" title="Recent work and education">
              A compact view of the work behind the portfolio: internship delivery, event ownership,
              and the CS foundation I am building at NIT Srinagar.
            </SectionIntro>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-item__icon">
                  <Briefcase aria-hidden="true" />
                </div>
                <div>
                  <p className="timeline-item__period">{item.period}</p>
                  <h3>{item.company}</h3>
                  <p className="timeline-item__role">
                    {item.role} - {item.location}
                  </p>
                  <ul className="detail-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <article className="timeline-item">
              <div className="timeline-item__icon">
                <GraduationCap aria-hidden="true" />
              </div>
              <div>
                <p className="timeline-item__period">{education.period}</p>
                <h3>{education.school}</h3>
                <p className="timeline-item__role">
                  {education.degree} - {education.detail}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about__grid">
          <div>
            <SectionIntro eyebrow="Skills" title="A practical full-stack toolkit">
              I am strongest where computer science fundamentals meet product engineering: clean
              APIs, reliable data models, responsive UI, and enough algorithmic discipline to keep
              systems efficient.
            </SectionIntro>

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-row">
                    {group.items.map((skill) => (
                      <span className="tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="achievement-panel" aria-labelledby="achievement-heading">
            <Award aria-hidden="true" />
            <h2 id="achievement-heading">Achievements</h2>
            <ul className="detail-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
