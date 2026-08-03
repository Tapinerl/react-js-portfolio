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
                    <h1 className="case-study__title">{project.title}</h1>
                    {project.tags?.length ? (
                        <div className="case-study__tag-row">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <p className="case-study__subtitle">
                        Software Engineering Project · UX/UI Design &amp; Development
                    </p>
                </header>

                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img src={project.caseStudySrc || project.src} alt={`${project.title} preview`} />
                    </div>
                </div>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h3>Overview</h3>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        The Multi Metrics Monitoring Tool, or MMT, was developed for Pekka Mäkiaho’s
                        doctoral research project. The goal was to create a dashboard for presenting
                        and monitoring several project-related metrics in one clear and accessible view.
                    </p>
                    <p className="scroll-reveal" data-case-reveal>
                        I worked in a seven-person Agile development team as a junior developer and
                        UX/UI designer. My main responsibility was designing the dashboard and helping
                        translate the client’s requirements into practical interface solutions. I
                        created wireframes and worked on front-end features, including dashboard widgets
                        for used hours, events, participation, and project progress.
                    </p>
                    <p className="scroll-reveal" data-case-reveal>
                        One of the main challenges was communication. The clients were often busy, so
                        feedback and requirement clarification were not always immediately available. We
                        handled this by documenting open questions, making reasonable assumptions based
                        on the available information, and reviewing our solutions with the client
                        whenever they were available. Within the team, we used regular meetings, GitLab
                        issues, and iterative development to keep the project moving forward.
                    </p>
                    <p className="scroll-reveal" data-case-reveal>
                        The project strengthened my understanding of working with real stakeholders,
                        designing within technical constraints, and collaborating in a larger software
                        team. At the final project gala, our team received a shared second-place ranking
                        in the audience evaluation.
                    </p>
                    <a
                        className="case-study__external-link scroll-reveal"
                        data-case-reveal
                        href="https://metricsmonitoring.rd.tuni.fi/projects/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit the MMT project page →
                    </a>
                </section>
            </div>
        </section>
    );
}
