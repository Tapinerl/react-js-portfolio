import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/index.json";

export default function CaseStudy() {
    const { id } = useParams();
    const project = useMemo(
        () => data?.portfolio?.find((item) => String(item.id) === String(id)),
        [id]
    );
    const personaRole = project?.persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = roleParts[0]?.trim() || personaRole;
    const roleDetail = roleParts[1]?.replace(")", "").trim() || "";
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
                        <img
                            src={project.caseStudySrc || project.src}
                            alt={`${project.title} preview`}
                        />
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
                    {(project.researchInsight || project.keyTakeaways?.length || project.persona) ? (
                        <div className="case-study__insight">
                            <div className="case-study__insight-text">
                                <p className="case-study__insight-title">Research & Insight</p>
                                {project.researchInsight ? (
                                    <p className="case-study__insight-body">{project.researchInsight}</p>
                                ) : null}
                                {project.keyTakeaways?.length ? (
                                    <div className="case-study__insight-block">
                                        <p className="case-study__insight-subtitle">Key Takeaways</p>
                                        <ul className="case-study__list case-study__list--compact case-study__list--tight">
                                            {project.keyTakeaways.map((item, index) => (
                                                <li key={index}>
                                                    <strong>{item.strong}</strong> {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                                {project.insightCallout ? (
                                    <p className="case-study__insight-callout">{project.insightCallout}</p>
                                ) : null}
                            </div>
                            {project.persona ? (
                                <div className="case-study__insight-card">
                                    <div className="case-study__persona-card">
                                        <div className="case-study__persona-header">
                                            <div className="case-study__persona-avatar" aria-hidden="true"></div>
                                            <div className="case-study__persona-meta">
                                                <p className="case-study__persona-title">Persona</p>
                                                <p className="case-study__persona-line">
                                                    {project.persona.age} · {roleMain}
                                                </p>
                                                {roleDetail ? (
                                                    <p className="case-study__persona-subline">{roleDetail}</p>
                                                ) : null}
                                            </div>
                                        </div>
                                        {project.persona.goal ? (
                                            <div className="case-study__persona-section">
                                                <p className="case-study__persona-section-title">Goal</p>
                                                <p className="case-study__persona-text">{project.persona.goal}</p>
                                            </div>
                                        ) : null}
                                        {project.persona.needs?.length ? (
                                            <div className="case-study__persona-section">
                                                <p className="case-study__persona-section-title">Needs</p>
                                                <ul className="case-study__list case-study__list--compact case-study__list--tight">
                                                    {project.persona.needs.slice(0, 3).map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                        {project.persona.frustrations?.length ? (
                                            <div className="case-study__persona-section">
                                                <p className="case-study__persona-section-title">Frustrations</p>
                                                <ul className="case-study__list case-study__list--compact case-study__list--tight">
                                                    {project.persona.frustrations.slice(0, 2).map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                        {project.persona.quote ? (
                                            <p className="case-study__persona-quote">“{project.persona.quote}”</p>
                                        ) : null}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                    {project.structureInteraction ? (
                        <div className="case-study__structure">
                            <p className="case-study__structure-title">Structure &amp; Interaction</p>
                            {project.structureInteractionImage?.src ? (
                                <div className="case-study__structure-image">
                                    <img
                                        src={project.structureInteractionImage.src}
                                        alt={project.structureInteractionImage.alt || "Information architecture"}
                                    />
                                </div>
                            ) : null}
                            <p className="case-study__structure-label">Information Architecture</p>
                            <p className="case-study__structure-text">{project.structureInteraction}</p>
                        </div>
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
            </div>
        </section>
    );
}
