import "./CaseStudyBudgit.css";
import { getTagToneClass } from "./caseStudyUtils";

const getPersonaLine = (persona = {}) => {
    const personaRole = persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = roleParts[0]?.trim() || personaRole;
    const roleDetail = roleParts[1]?.replace(")", "").trim() || "";

    return [persona?.age, roleMain, roleDetail].filter(Boolean).join(" · ");
};

export default function CaseStudyBudgit({ project }) {
    const personaLine = getPersonaLine(project?.persona);

    return (
        <section className="case-study case-study--centered case-study--budgit">
            <div className="case-study__wrap">
                <header className="case-study__header">
                    {project.tags?.length ? (
                        <div className="case-study__tag-row case-study__tag-row--top">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <h1 className="case-study__title">{project.title}</h1>
                    <div className="case-study-alt__meta-grid">
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Role</span>
                            <span className="case-study-alt__meta-value">{project.role || "UX/UI Designer, Frontend"}</span>
                        </div>
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Team</span>
                            <span className="case-study-alt__meta-value">{project.team || "Solo"}</span>
                        </div>
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Timeline</span>
                            <span className="case-study-alt__meta-value">{project.timeline || "4 weeks"}</span>
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
                                                    {personaLine}
                                                </p>
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
                                            <p className="case-study__persona-quote">"{project.persona.quote}"</p>
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
                            <p className="case-study__note">
                                {project.structureInteractionImage?.caption || "Information Architecture"}
                            </p>
                            <p className="case-study__structure-text">{project.structureInteraction}</p>
                            {project.structureToVisualText ? (
                                <div className="case-study__structure-followup">
                                    <h4 className="case-study__structure-followup-title">
                                        {project.structureToVisualTitle || "From Structure to Visual Design"}
                                    </h4>
                                    <p className="case-study__structure-text case-study__structure-text--followup">
                                        {project.structureToVisualText}
                                    </p>
                                    {project.structureToVisualImage?.src ? (
                                        <>
                                            <div className="case-study__structure-image">
                                                <img
                                                    src={project.structureToVisualImage.src}
                                                    alt={project.structureToVisualImage.alt || "Wireframes"}
                                                />
                                            </div>
                                            {project.structureToVisualImage?.caption ? (
                                                <p className="case-study__note">{project.structureToVisualImage.caption}</p>
                                            ) : null}
                                        </>
                                    ) : (
                                        <div className="case-study__placeholder">
                                            {project.structureToVisualPlaceholder || "Placeholder for future image"}
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Outcome</h3>
                    </div>
                    {project.outcomeImage?.src ? (
                        <figure className="case-study__outcome-media">
                            <img
                                src={project.outcomeImage.src}
                                alt={project.outcomeImage.alt || "Outcome mockup"}
                            />
                            {project.outcomeImage.caption ? (
                                <figcaption className="case-study__note">
                                    {project.outcomeImage.caption}
                                </figcaption>
                            ) : null}
                        </figure>
                    ) : null}
                    <p>{project.outcome || "Result, impact, and what you learned."}</p>
                    {project.impactLearnings?.length ? (
                        <ul className="case-study__list case-study__impact-grid">
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
