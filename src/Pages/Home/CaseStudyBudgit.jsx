import { useRef } from "react";
import "./CaseStudyBudgit.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const getPersonaRoleLine = (persona = {}) => {
    const personaRole = persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = (roleParts[0]?.trim() || personaRole).replace(/^University student$/i, "Uni Student");
    const roleDetail = (roleParts[1]?.replace(")", "").trim() || "").replace(/^Info management$/i, "Information Management");

    return [roleMain, roleDetail].filter(Boolean).map((item) => `[${item}]`).join(" ");
};

const overviewMeta = [
    "Role: UX/UI Designer",
    "Project: University group project",
    "Platform: Mobile",
    "Year: 2024",
];

export default function CaseStudyBudgit({ project }) {
    const caseStudyRef = useRef(null);
    const personaLine = getPersonaRoleLine(project?.persona);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section className="case-study case-study--centered case-study--budgit" ref={caseStudyRef}>
            <div className="case-study__wrap">
                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img
                            src={project.caseStudySrc || project.src}
                            alt={`${project.title} preview`}
                        />
                    </div>
                    {project.visuals ? (
                        <p className="case-study__note case-study__note--hero scroll-reveal" data-case-reveal>
                            {project.visuals}
                        </p>
                    ) : null}
                </div>

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__overview-layout">
                        <div className="case-study__section-title case-study__section-title--overview scroll-reveal" data-case-reveal>
                            <h1 className="case-study__title">{project.title}</h1>
                            <ul className="case-study__overview-meta">
                                {overviewMeta.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <p className="case-study__overview-text scroll-reveal" data-case-reveal>
                            {project.overview || "Short overview of the challenge and the product context."}
                        </p>
                    </div>
                </section>

                <section className="case-study__section case-study__section--problem">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>What was the problem?</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        {project.problem || "What was broken or missing, and who it affected."}
                    </p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Solution</h2>
                    </div>
                    {(project.solution || project.researchInsight || project.persona) ? (
                        <div className="case-study__insight">
                            <div className="case-study__insight-text scroll-reveal scroll-reveal--left" data-case-reveal>
                                <p className="case-study__insight-body case-study__solution-text">
                                    {project.solution || "The approach, design decisions, and build strategy."}
                                </p>
                                {project.researchInsight ? (
                                    <h3 className="case-study__insight-title">Research insights</h3>
                                ) : null}
                                {project.researchInsight ? (
                                    <p className="case-study__insight-body">{project.researchInsight}</p>
                                ) : null}
                                {project.researchInsightPoints?.length ? (
                                    <ul className="case-study__research-list">
                                        {project.researchInsightPoints.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : null}
                                {project.insightCallout ? (
                                    <p className="case-study__insight-callout">{project.insightCallout}</p>
                                ) : null}
                            </div>
                            {project.persona ? (
                                <div className="case-study__insight-card scroll-reveal scroll-reveal--right" data-case-reveal>
                                    <div className="case-study__persona-card">
                                        <div className="case-study__persona-header">
                                            <div className="case-study__persona-meta">
                                                <p className="case-study__persona-title">Persona</p>
                                                <p className="case-study__persona-name">
                                                    {[project.persona.name, project.persona.age].filter(Boolean).join(",")}
                                                </p>
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
                                        {(project.persona.needs?.length || project.persona.frustrations?.length) ? (
                                            <div className="case-study__persona-columns">
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
                                                        <p className="case-study__persona-section-title">Pain Points</p>
                                                        <ul className="case-study__list case-study__list--compact case-study__list--tight">
                                                            {project.persona.frustrations.slice(0, 2).map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : null}
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
                        <div className="case-study__structure scroll-reveal" data-case-reveal>
                            <h3 className="case-study__structure-title">Structure &amp; Interaction</h3>
                            {project.structureInteractionImage?.src ? (
                                <div className="case-study__structure-image">
                                    <img
                                        src={project.structureInteractionImage.src}
                                        alt={project.structureInteractionImage.alt || "Information architecture"}
                                    />
                                </div>
                            ) : null}
                            <p className="case-study__structure-text">{project.structureInteraction}</p>
                            {project.structureToVisualText ? (
                                <div className="case-study__structure-followup">
                                    <h3 className="case-study__structure-followup-title">
                                        {project.structureToVisualTitle || "From Structure to Visual Design"}
                                    </h3>
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
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Outcome</h2>
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
                    <p className="scroll-reveal" data-case-reveal>
                        {project.outcome || "Result, impact, and what you learned."}
                    </p>
                    {project.impactLearnings?.length ? (
                        <ul className="case-study__list case-study__impact-grid scroll-reveal" data-case-reveal>
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
