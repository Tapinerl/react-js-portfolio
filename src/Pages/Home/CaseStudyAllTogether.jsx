import { useRef } from "react";
import "./CaseStudyAllTogether.css";
import { getTagToneClass } from "./caseStudyUtils";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

export default function CaseStudyAllTogether({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    const getPlaceholderLabel = (slot, fallback) =>
        project?.placeholders?.find((item) => item.slot === slot)?.label || fallback;

    return (
        <section className="case-study case-study--alltogether" ref={caseStudyRef}>
            <div className="case-study-alt__wrap">
                <header className="case-study-alt__header scroll-reveal" data-case-reveal>
                    <h1 className="case-study-alt__title">{project.title}</h1>
                    {project.tags?.length ? (
                        <div className="case-study__tag-row">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <p className="case-study-alt__subtitle">{project.description}</p>
                </header>

                <div className="case-study-alt__hero">
                    <img
                        src={project.caseStudySrc || project.src}
                        alt={`${project.title} mobile concept preview`}
                    />
                </div>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>The challenge</h2>
                    <p className="scroll-reveal" data-case-reveal>{project.challenge}</p>
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>My role</h2>
                    <p className="scroll-reveal" data-case-reveal>{project.myRoleSummary}</p>
                    {project.myRolePoints?.length ? (
                        <ul className="case-study__list case-study-alt__list scroll-reveal" data-case-reveal>
                            {project.myRolePoints.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>Understanding the user</h2>
                    <p className="scroll-reveal" data-case-reveal>{project.userUnderstanding}</p>
                    <div className="case-study-alt__placeholder scroll-reveal" data-case-reveal>
                        {getPlaceholderLabel("persona", "Insert persona card here")}
                    </div>
                    {project.userDecisionAnchors?.length ? (
                        <>
                            <p className="scroll-reveal" data-case-reveal>The persona helped anchor our decisions around:</p>
                            <ul className="case-study__list case-study-alt__list scroll-reveal" data-case-reveal>
                                {project.userDecisionAnchors.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>Defining the vision</h2>
                    <div className="case-study-alt__hero">
                        <img
                            src="/img/alto-visiooni1.png"
                            alt="AllTogether product vision board"
                        />
                    </div>
                    <p className="case-study-alt__note case-study-alt__note--center scroll-reveal" data-case-reveal>Figure: AllTogether product vision board.</p>
                    <p className="scroll-reveal" data-case-reveal>{project.visionSummary}</p>
                    {project.visionPriorities?.length ? (
                        <>
                            <p className="scroll-reveal" data-case-reveal>This led us to prioritize:</p>
                            <ul className="case-study__list case-study-alt__list scroll-reveal" data-case-reveal>
                                {project.visionPriorities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>From structure to wireframes</h2>
                    <div className="case-study-alt__placeholder scroll-reveal" data-case-reveal>
                        {getPlaceholderLabel("wireframes", "Insert early wireframes here")}
                    </div>
                    <p className="scroll-reveal" data-case-reveal>{project.wireframesSummary}</p>
                    {project.wireframesInsight ? (
                        <p className="scroll-reveal" data-case-reveal>{project.wireframesInsight}</p>
                    ) : null}
                    {project.wireframesTag ? (
                        <p className="case-study-alt__note scroll-reveal" data-case-reveal>{project.wireframesTag}</p>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>Designing the final experience</h2>
                    <div className="case-study-alt__placeholder scroll-reveal" data-case-reveal>
                        {getPlaceholderLabel("finalMockups", "Insert final mobile mockups here")}
                    </div>
                    {project.finalExperiencePoints?.length ? (
                        <>
                            <p className="scroll-reveal" data-case-reveal>In the final design, we focused on:</p>
                            <ul className="case-study__list case-study-alt__list scroll-reveal" data-case-reveal>
                                {project.finalExperiencePoints.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                    {project.finalExperienceResult ? (
                        <p className="scroll-reveal" data-case-reveal>{project.finalExperienceResult}</p>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2 className="scroll-reveal" data-case-reveal>Outcome and reflection</h2>
                    <p className="scroll-reveal" data-case-reveal>{project.outcome}</p>
                    {project.reflection ? (
                        <p className="scroll-reveal" data-case-reveal>{project.reflection}</p>
                    ) : null}
                </section>
            </div>
        </section>
    );
}
