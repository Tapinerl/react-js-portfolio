import { useRef } from "react";
import "./CaseStudyBudgit.css";
import { getTagToneClass } from "./caseStudyUtils";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const getPersonaLine = (persona = {}) => {
    const personaRole = persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = roleParts[0]?.trim() || personaRole;
    const roleDetail = roleParts[1]?.replace(")", "").trim() || "";

    return [persona?.age, roleMain, roleDetail].filter(Boolean).join(" · ");
};

export default function CaseStudyBudgit({ project }) {
    const caseStudyRef = useRef(null);
    const personaLine = getPersonaLine(project?.persona);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section className="case-study case-study--centered case-study--budgit" ref={caseStudyRef}>
            <div className="case-study__wrap">
                <header className="case-study__header scroll-reveal" data-case-reveal>
                    <h1 className="case-study__title">{project.title}</h1>
                    {project.tags?.length ? (
                        <div className="case-study__tag-row case-study__tag-row--top">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </header>

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

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Overview</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        {project.overview || "Short overview of the challenge and the product context."}
                    </p>
                </section>

                <section className="case-study__section">
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
                    <p className="scroll-reveal" data-case-reveal>
                        {project.solution || "The approach, design decisions, and build strategy."}
                    </p>
                    {(project.researchInsight || project.keyTakeaways?.length || project.persona) ? (
                        <div className="case-study__insight">
                            <div className="case-study__insight-text scroll-reveal scroll-reveal--left" data-case-reveal>
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
                                <div className="case-study__insight-card scroll-reveal scroll-reveal--right" data-case-reveal>
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
                        <div className="case-study__structure scroll-reveal" data-case-reveal>
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
