import "./CaseStudyAirbnb.css";
import { getTagToneClass } from "./caseStudyUtils";

export default function CaseStudyAirbnb({ project }) {
    return (
        <section className="case-study case-study--centered case-study--airbnb">
            <div className="case-study__wrap">
                <header className="case-study__header">
                    {project.tags?.length ? (
                        <div className="case-study__tag-row case-study__tag-row--top">
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
                            <span className="case-study__meta-label">Role</span>
                            <span className="case-study__meta-value">{project.role || "UX Researcher"}</span>
                        </div>
                        <div className="case-study__meta-divider"></div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Team</span>
                            <span className="case-study__meta-value">{project.team || "Course team"}</span>
                        </div>
                        <div className="case-study__meta-divider"></div>
                        <div className="case-study__meta-item">
                            <span className="case-study__meta-label">Timeline</span>
                            <span className="case-study__meta-value">{project.timeline || "Course project"}</span>
                        </div>
                    </div>
                </header>

                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img
                            src={project.caseStudySrc || project.src}
                            alt={`${project.title} preview`}
                        />
                    </div>
                </div>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Overview</h3>
                    </div>
                    <p>{project.overview}</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>What was the problem?</h3>
                    </div>
                    <p>{project.problem}</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Approach</h3>
                    </div>
                    <p>{project.solution}</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title">
                        <h3>Outcome</h3>
                    </div>
                    <p>{project.outcome}</p>
                    {project.impactLearnings?.length ? (
                        <ul className="case-study__list">
                            {project.impactLearnings.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                    {project.reflection ? (
                        <p>{project.reflection}</p>
                    ) : null}
                </section>
            </div>
        </section>
    );
}
