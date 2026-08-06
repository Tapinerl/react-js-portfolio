import { useRef } from "react";
import "./CaseStudyBudgit.css";
import "./CaseStudyFreepark.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const overviewMeta = [
    "Role: UX/UI Designer and Developer",
    "Project: Personal project",
    "Platform: Mobile",
    "Year: 2026",
];

export default function CaseStudyFreepark({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section
            className="case-study case-study--centered case-study--budgit case-study--freepark"
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
                                {overviewMeta.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="case-study__copy-stack scroll-reveal" data-case-reveal>
                            <p className="case-study__overview-text">
                                FreePark Helsinki is a personal mobile app concept designed to help drivers find free parking spots around Helsinki more easily. The idea is to combine an interactive map, location-based search and community-added parking information into one simple experience.
                            </p>
                            <p className="case-study__overview-text">
                                The app is planned to be developed with React Native and Expo, using Firebase Authentication and Firestore for user accounts and saved parking spots, React Query for data handling, and the City of Helsinki&rsquo;s open parking data REST API.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Concept Snapshot</h2>
                    </div>
                    <p className="scroll-reveal" data-case-reveal>
                        FreePark Helsinki is a work in progress personal project.
                    </p>
                    <p className="scroll-reveal" data-case-reveal>
                        This page will expand once the design and development phases are documented.
                    </p>
                    <figure className="case-study__freepark-snapshot scroll-reveal" data-case-reveal>
                        <img src="/img/freepark-wip.jpg" alt="FreePark Helsinki work in progress screens" />
                    </figure>
                    <figure className="case-study__freepark-snapshot scroll-reveal" data-case-reveal>
                        <img src="/img/freepark-wip-dark.jpg" alt="FreePark Helsinki dark mode work in progress screens" />
                    </figure>
                </section>
            </div>
        </section>
    );
}
