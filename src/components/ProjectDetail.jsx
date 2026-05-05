import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Code2, Layers, Target } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio.js";

function getProjectVisual(project) {
  return (
    project.visual ?? {
      eyebrow: project.type,
      title: project.title,
      rows: project.stack.slice(0, 4),
      metric: project.metrics?.[0]?.value ?? "Build",
      metricLabel: project.metrics?.[0]?.label ?? project.role,
    }
  );
}

function CaseLink({ href, children, variant = "primary" }) {
  if (!href) return null;

  return (
    <a className={`button button--${variant}`} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

function CaseVisual({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} project screenshot`} />;
  }

  const visual = getProjectVisual(project);

  return (
    <div className="case-visual" aria-label={`${project.title} visual summary`}>
      <p>{visual.eyebrow}</p>
      <h2>{visual.title}</h2>
      <div>
        {visual.rows.map((row) => (
          <span key={row}>{row}</span>
        ))}
      </div>
      <strong>{visual.metric}</strong>
      <small>{visual.metricLabel}</small>
    </div>
  );
}

function CaseMetrics({ metrics = [] }) {
  if (!metrics.length) return null;

  return (
    <dl className="case-metrics" aria-label="Project outcomes">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`}>
          <dt>{metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseSectionHeading({ eyebrow, title, icon: Icon }) {
  return (
    <div className="case-section__heading">
      <span className="case-section__icon" aria-hidden="true">
        <Icon />
      </span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="missing-page" id="main-content">
        <div className="container">
          <p className="eyebrow">Case study not found</p>
          <h1>That project is not in the portfolio.</h1>
          <Link className="button button--primary" to="/#projects">
            Back to work
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const caseStudy = project.caseStudy ?? {};
  const approach = caseStudy.approach ?? project.overview ?? [];
  const decisions = caseStudy.decisions ?? project.highlights ?? [];
  const figureClassName = `case-hero__image${project.image ? " case-hero__image--screenshot" : ""}`;

  return (
    <main className="case-study" id="main-content">
      <section className="case-hero">
        <div className="container case-hero__grid">
          <div className="case-hero__copy">
            <Link className="back-link" to="/#projects">
              <ArrowLeft aria-hidden="true" />
              Back to selected work
            </Link>
            <p className="eyebrow">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__lead">{project.summary}</p>
            <CaseMetrics metrics={project.metrics} />
            <div className="case-hero__actions">
              <CaseLink href={project.liveUrl}>Open live project</CaseLink>
              <CaseLink href={project.repoUrl} variant="secondary">
                <Code2 aria-hidden="true" />
                Source code
              </CaseLink>
            </div>
          </div>

          <figure className={figureClassName}>
            <CaseVisual project={project} />
            <figcaption>{project.role}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section case-body">
        <div className="container case-body__grid">
          <aside className="case-meta" aria-label="Project details">
            <div className="case-meta__block">
              <h2>Role</h2>
              <p>{project.role}</p>
            </div>
            <div className="case-meta__block">
              <h2>Project type</h2>
              <p>{project.type}</p>
            </div>
            <div className="case-meta__block">
              <h2>Stack</h2>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="case-narrative">
            <section className="case-section case-section--lead">
              <CaseSectionHeading eyebrow="Challenge" title="The problem I solved" icon={Target} />
              {caseStudy.problem ? <p>{caseStudy.problem}</p> : null}
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            <section className="case-section">
              <CaseSectionHeading eyebrow="Approach" title="How the system comes together" icon={Layers} />
              <div className="case-step-list">
                {approach.map((step, index) => (
                  <article className="case-step" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section case-section--split">
              <article>
                <CaseSectionHeading eyebrow="Build details" title="Implementation choices" icon={CheckCircle2} />
                <ul className="detail-list">
                  {decisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </article>

              <article>
                <CaseSectionHeading eyebrow="Outcome" title="What it proves" icon={ArrowUpRight} />
                {caseStudy.impact ? <p>{caseStudy.impact}</p> : null}
                <ul className="detail-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            </section>

            <div className="next-project">
              <span>Next case study</span>
              <Link to={`/projects/${nextProject.slug}`}>
                {nextProject.title}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
