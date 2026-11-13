import { useRef } from "react";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyImage from "./CaseStudyImage";
import "./CaseStudyBudgit.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const getPersonaRoleLine = (persona = {}) => {
    const personaRole = persona?.role || "";
    const roleParts = personaRole.split("(");
    const roleMain = (roleParts[0]?.trim() || personaRole).replace(/^University student$/i, "Uni Student");
    const roleDetail = (roleParts[1]?.replace(")", "").trim() || "").replace(/^Info management$/i, "Information Management");

    return [roleMain, roleDetail].filter(Boolean).map((item) => `[${item}]`).join(" ");
};

export default function CaseStudyBudgit({ project }) {
    const caseStudyRef = useRef(null);
    const personaLine = getPersonaRoleLine(project?.persona);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section className="case-study case-study--centered case-study--budgit case-study--budgit-project budgit-content" ref={caseStudyRef}>
            <div className="case-study__wrap">
                <CaseStudyHero project={project} />

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
                        <CaseStudyImage
                            image={project.structureInteractionImage}
                            className="case-study__structure-image budgit-content__architecture-image"
                            alt="budgIT information architecture: financial matters, student loans, and student discounts, with related budgeting, savings, repayment, and discount tools."
                            caption="Information architecture: organizing the overview and feature groups."
                        />
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Wireframing &amp; Visual Design</h3>
                        <p className="budgit-content__copy">{project.structureToVisualText}</p>
                        <CaseStudyImage
                            image={project.structureToVisualImage}
                            alt="Low-fidelity budgIT wireframes exploring screen hierarchy and financial information grouping, with Finnish labels."
                            className="case-study__structure-image budgit-project__wireframes"
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
                    <CaseStudyImage
                        image={project.outcomeImage}
                        alt="Final budgIT budgeting interface mockup, with Finnish labels."
                        className="case-study__outcome-media"
                        caption="Final budgIT interface concept."
                    />
                    <p className="budgit-content__copy">Our final concept brought budgeting, expense tracking, savings goals and student-focused financial tools into one place.</p>
                    <p className="budgit-content__copy">We wanted budgIT to feel approachable, especially for students who might find traditional financial apps complicated or overwhelming.</p>
                    <div className="budgit-content__subsection">
                        <h3>Feedback &amp; What I Learned</h3>
                        <p className="budgit-content__copy">The final result was an interactive prototype, and the peer feedback we received was encouraging, particularly around its clarity and visual structure.</p>
                        <p className="budgit-content__copy">One of my biggest takeaways was learning how to <strong>turn research findings into actual design decisions</strong>. I also learned how important content hierarchy is when presenting financial information. Even useful features can become overwhelming if everything competes for attention.</p>
                        <p className="budgit-content__copy">Working with my teammates also showed me how discussing different ideas and iterating together can lead to a better outcome.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>What I'd Explore Next</h3>
                        <p className="budgit-content__copy">If I continued this project, I'd want to develop a working prototype, test it with actual students and explore how real financial data could be integrated.</p>
                    </div>
                </section>
            </div>
        </section>
    );
}
