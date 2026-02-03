import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/index.json";

export default function CaseStudy() {
    const { id } = useParams();
    const project = useMemo(
        () => data?.portfolio?.find((item) => String(item.id) === String(id)),
        [id]
    );
    const tools = project?.tools
        ? project.tools.split(",").map((tool) => tool.trim()).filter(Boolean)
        : [];

    if (!project) {
        return (
            <section className="case-study case-study--not-found">
                <h2>Case study not found</h2>
                <Link className="case-study__back" to="/">Back to Home</Link>
            </section>
        );
    }

    return (
        <section className="case-study case-study--centered">
            <div className="case-study__wrap">
                <header className="case-study__header">
                    {project.tags?.length ? (
                        <div className="case-study__tag-row case-study__tag-row--top">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="case-study__tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <h1 className="case-study__title">{project.title}</h1>
                    <div className="case-study__meta-box">
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Role</span>
                            <span className="case-study__meta-value">{project.role || "UX/UI Designer, Frontend"}</span>
                        </div>
                        <div className="case-study__meta-divider"></div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Team</span>
                            <span className="case-study__meta-value">{project.team || "Solo"}</span>
                        </div>
                        <div className="case-study__meta-divider"></div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Timeline</span>
                            <span className="case-study__meta-value">{project.timeline || "4 weeks"}</span>
                        </div>
                    </div>
                </header>

                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img src={project.src} alt={`${project.title} preview`} />
                    </div>
                    {project.visuals ? (
                        <p className="case-study__note case-study__note--hero">{project.visuals}</p>
                    ) : null}
                </div>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Overview</h3>
                    </div>
                    <p>{project.overview || "Short overview of the challenge and the product context."}</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>What was the problem?</h3>
                    </div>
                    <p>{project.problem || "What was broken or missing, and who it affected."}</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Solution</h3>
                    </div>
                    <p>{project.solution || "The approach, design decisions, and build strategy."}</p>
                    {project.highlights?.length ? (
                        <ul className="case-study__list case-study__list--highlights">
                            {project.highlights.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Outcome</h3>
                    </div>
                    <p>{project.outcome || "Result, impact, and what you learned."}</p>
                    {project.impactLearnings?.length ? (
                        <ul className="case-study__list">
                            {project.impactLearnings.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </section>

                {(project.uxDecision || project.reflection) ? (
                    <div className="case-study__callout-row">
                        {project.uxDecision ? (
                            <section className="case-study__callout">
                                <p>{project.uxDecision}</p>
                            </section>
                        ) : null}
                        {project.reflection ? (
                            <section className="case-study__callout case-study__callout--subtle">
                                <p>{project.reflection}</p>
                            </section>
                        ) : null}
                    </div>
                ) : null}

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Portfolio Additions</h3>
                    </div>
                    <div className="case-study__tiles">
                        {project.persona ? (
                            <div className="case-study__tile">
                                <h4>Persona</h4>
                                <div className="case-study__card">
                                    <p className="case-study__card-title">{project.persona.name}</p>
                                    <p className="case-study__card-text">
                                        {project.persona.age} - {project.persona.role}
                                    </p>
                                    <p className="case-study__card-text">{project.persona.note}</p>
                                </div>
                            </div>
                        ) : null}

                        {project.beforeAfter ? (
                            <div className="case-study__tile">
                                <h4>{project.beforeAfter.title}</h4>
                                <p>{project.beforeAfter.note}</p>
                            </div>
                        ) : null}

                        {project.collaboration ? (
                            <div className="case-study__tile">
                                <h4>Collaboration</h4>
                                <p>{project.collaboration}</p>
                            </div>
                        ) : null}
                    </div>
                </section>

                {project.processGallery?.length ? (
                    <section className="case-study__section">
                        <div className="case-study__section-title">
                            <h3>Process Gallery</h3>
                        </div>
                        <div className="case-study__gallery">
                            {project.processGallery.map((item, index) => (
                                <figure key={index} className="case-study__placeholder">
                                    <img src={item.src} alt={item.label} />
                                    <figcaption>{item.label}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                ) : null}

                {project.nextSteps?.length ? (
                    <section className="case-study__section">
                        <div className="case-study__section-title">
                            <h3>Next Steps</h3>
                        </div>
                        <ul className="case-study__list">
                            {project.nextSteps.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                <div className="case-study__footer">
                    <Link className="case-study__back" to="/">Back to Home</Link>
                </div>
            </div>
        </section>
    );
}
