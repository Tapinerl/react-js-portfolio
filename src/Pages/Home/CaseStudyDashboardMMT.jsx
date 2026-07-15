import { useRef } from "react";
import "./CaseStudyDashboardMMT.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";
import { getTagToneClass } from "./caseStudyUtils";

export default function CaseStudyDashboardMMT({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section className="case-study case-study--centered case-study--dashboard-mmt" ref={caseStudyRef}>
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
                            <span className="case-study__meta-value">Not started</span>
                        </div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Type</span>
                            <span className="case-study__meta-value">Course project</span>
                        </div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Focus</span>
                            <span className="case-study__meta-value">Dashboard and metrics UX</span>
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
                        <h2>Planned Direction</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>{project.description}</p>
                    <p className="scroll-reveal" data-case-reveal>Will be added later.</p>
                </section>
            </div>
        </section>
    );
}
