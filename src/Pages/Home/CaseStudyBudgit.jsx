import { useRef } from "react";
import CaseStudyHeader from "./CaseStudyHeader";
import "./CaseStudyBudgit.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const getPersonaRoleLine = (persona = {}) => {
    const personaRole = persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = (roleParts[0]?.trim() || personaRole).replace(/^University student$/i, "Uni Student");
    const roleDetail = (roleParts[1]?.replace(")", "").trim() || "").replace(/^Info management$/i, "Information Management");

    return [roleMain, roleDetail].filter(Boolean).map((item) => `[${item}]`).join(" ");
};

function ProjectImage({ image, alt, caption, className = "case-study__structure-image" }) {
    if (!image?.src) return null;

    return (
        <figure className={className}>
            <a className="budgit-content__image-link" href={image.src} target="_blank" rel="noreferrer">
                <img src={image.src} alt={image.alt || alt} loading="lazy" />
                <span className="budgit-content__image-hint">View full-size image (opens in a new tab)</span>
            </a>
            {(image.caption || caption) && (
                <figcaption className="case-study__note">{image.caption || caption}</figcaption>
            )}
        </figure>
    );
}

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
        <section className="case-study case-study--centered case-study--budgit budgit-content" ref={caseStudyRef}>
            <div className="case-study__wrap">
                <CaseStudyHeader project={project} metadata={overviewMeta} />

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>01. Overview</h2>
                    </div>
                    <div className="case-study__overview-layout">
                        <p className="case-study__overview-text scroll-reveal" data-case-reveal>
                            {project.overview || "Short overview of the challenge and the product context."}
                        </p>
                    </div>
                </section>

                <section className="case-study__section case-study__section--problem">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>02. Problem</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        {project.problem || "What was broken or missing, and who it affected."}
                    </p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>03. Research &amp; Insights</h2>
                    </div>
                    {(project.researchInsight || project.researchInsightPoints?.length || project.persona) ? (
                        <div className="case-study__insight">
                            <div className="case-study__insight-text scroll-reveal scroll-reveal--left" data-case-reveal>
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
                                                <h3 className="case-study__persona-title">Persona: {project.persona.name}</h3>
                                                <p className="case-study__persona-name">
                                                    {[project.persona.name, project.persona.age].filter(Boolean).join(", ")}
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
                                                            {project.persona.needs.map((item, index) => (
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : null}
                                                {project.persona.frustrations?.length ? (
                                                    <div className="case-study__persona-section">
                                                        <p className="case-study__persona-section-title">Pain Points</p>
                                                        <ul className="case-study__list case-study__list--compact case-study__list--tight">
                                                            {project.persona.frustrations.map((item, index) => (
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
                    <p className="budgit-content__copy">
                        These needs guided the design process: a clear overview, simple feature groups,
                        and financial information that students could understand quickly.
                    </p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h2>04. Design Process</h2>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Information Architecture</h3>
                        <p className="budgit-content__copy">{project.structureInteraction}</p>
                        <ProjectImage
                            image={project.structureInteractionImage}
                            className="case-study__structure-image budgit-content__architecture-image"
                            alt="budgIT information architecture: financial matters, student loans, and student discounts, with related budgeting, savings, repayment, and discount tools."
                            caption="Information architecture: organizing the overview and feature groups."
                        />
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Wireframing &amp; Visual Design</h3>
                        <p className="budgit-content__copy">{project.structureToVisualText}</p>
                        <ProjectImage
                            image={project.structureToVisualImage}
                            alt="Low-fidelity budgIT wireframes exploring screen hierarchy and financial information grouping, with Finnish labels."
                            caption="Low-fidelity wireframes translated the information architecture into screen layouts."
                        />
                        <p className="budgit-content__copy">{project.uxDecision}</p>
                        <p className="budgit-content__copy">
                            I was mainly responsible for building and visually refining the interactive prototype,
                            while contributing throughout the group's design process. The final mockup below
                            shows the progression from wireframes to high-fidelity design.
                        </p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>05. Final Solution &amp; Reflection</h2>
                    </div>
                    <ProjectImage
                        image={project.outcomeImage}
                        alt="Final budgIT budgeting interface mockup, with Finnish labels."
                        className="case-study__outcome-media"
                        caption="Final budgIT mockup"
                    />
                    <p className="budgit-content__copy">
                        We designed budgIT as a lightweight financial hub for students. The concept combines
                        budgeting, expense tracking, savings goals, student loans, and discounts in one experience.
                    </p>
                    <ul className="case-study__research-list budgit-content__copy">
                        <li><strong>Financial overview:</strong> monthly budgets, expenses, and remaining funds make the financial situation easier to understand at a glance.</li>
                        <li><strong>Planning tools:</strong> budgeting and savings goals support planning around irregular income and expenses.</li>
                        <li><strong>Student-focused support:</strong> basic financial learning, student loans, and discounts address needs beyond basic bank transaction tracking.</li>
                    </ul>
                    <div className="budgit-content__subsection">
                        <h3>Peer Feedback</h3>
                        <p className="budgit-content__copy">
                            The final result was an interactive prototype that adapts to different screen sizes
                            and usage situations. Peer feedback highlighted its clarity, usability, and visual structure.
                        </p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Reflection</h3>
                        {project.impactLearnings?.length ? (
                            <ul className="case-study__list budgit-content__copy">
                                {project.impactLearnings.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        ) : null}
                        <p className="budgit-content__copy">{project.reflection}</p>
                    </div>
                </section>
            </div>
        </section>
    );
}
