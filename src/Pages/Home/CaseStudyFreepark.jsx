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
                    <div className="case-study__meta-box">
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Status</span>
                            <span className="case-study__meta-value">Work in progress</span>
                        </div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Type</span>
                            <span className="case-study__meta-value">Personal project</span>
                        </div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Location</span>
                            <span className="case-study__meta-value">Helsinki</span>
                        </div>
                    </div>
                </header>

                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img src={project.caseStudySrc || project.src} alt={`${project.title} preview`} />
                    </div>
                </div>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h3>Concept Snapshot</h3>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>{project.description}</p>
                    <p className="scroll-reveal" data-case-reveal>This page will expand once the design and development phases are documented.</p>
                </section>
            </div>
        </section>
    );
}
