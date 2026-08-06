import { useRef } from "react";
import "./CaseStudyBudgit.css";
import "./CaseStudyDashboardMMT.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

export default function CaseStudyDashboardMMT({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section
            className="case-study case-study--centered case-study--budgit case-study--dashboard-mmt"
            ref={caseStudyRef}
        >
            <div className="case-study__wrap">
                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img src={project.caseStudySrc || project.src} alt={`${project.title} preview`} />
                    </div>
                </div>

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__overview-layout">
                        <div
                            className="case-study__section-title case-study__section-title--overview scroll-reveal"
                            data-case-reveal
                        >
                            <h1 className="case-study__title">{project.title}</h1>
                            <ul className="case-study__overview-meta">
                                <li>Software Engineering Project</li>
                                <li>UX/UI Design &amp; Development</li>
                                <li>Year: 2025</li>
                            </ul>
                        </div>
                        <p className="case-study__overview-text scroll-reveal" data-case-reveal>
                            The Multi Metrics Monitoring Tool, or MMT, was developed as part of Pekka
                            M&auml;kiaho&rsquo;s doctoral research project. The aim was to design and build a
                            dashboard that brings several project-related metrics into one clear view,
                            making it easier to follow progress, participation, events and the use of
                            project resources.
                        </p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>My contribution</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        I worked in a seven-person Agile development team as a junior developer and
                        UX/UI designer. My main responsibility was designing the dashboard and helping
                        translate the client&rsquo;s requirements into practical interface solutions. I
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
                        Visit the MMT project page -&gt;
                    </a>
                </section>
            </div>
        </section>
    );
}
