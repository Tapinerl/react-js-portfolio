import { useRef } from "react";
import "./CaseStudyFreepark.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";
import { getTagToneClass } from "./caseStudyUtils";

export default function CaseStudyFreepark({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section className="case-study case-study--centered case-study--freepark" ref={caseStudyRef}>
            <div className="case-study__wrap">
                <header className="case-study__header scroll-reveal" data-case-reveal>
                    {project.tags?.length ? (
                        <div className="case-study__tag-row">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <h1 className="case-study__title">{project.title}</h1>
                </header>

                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img src={project.caseStudySrc || project.src} alt={`${project.title} preview`} />
                    </div>
                </div>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Concept Snapshot</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>{project.description}</p>
                    <p className="scroll-reveal" data-case-reveal>This page will expand once the design and development phases are documented.</p>
                </section>
            </div>
        </section>
    );
}
