import "./CaseStudyAllTogether.css";
import { getTagToneClass } from "./caseStudyUtils";

export default function CaseStudyAllTogether({ project }) {
    const getPlaceholderLabel = (slot, fallback) =>
        project?.placeholders?.find((item) => item.slot === slot)?.label || fallback;

    return (
        <section className="case-study case-study--alltogether">
            <div className="case-study-alt__wrap">
                <header className="case-study-alt__header">
                    {project.tags?.length ? (
                        <div className="case-study__tag-row">
                            {project.tags.map((tag, index) => (
                                <span key={index} className={`case-study__tag ${getTagToneClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <h1 className="case-study-alt__title">{project.title}</h1>
                    <p className="case-study-alt__subtitle">{project.description}</p>
                    <div className="case-study-alt__meta-grid">
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Role</span>
                            <span className="case-study-alt__meta-value">{project.role || "UX/UI Designer"}</span>
                        </div>
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Team</span>
                            <span className="case-study-alt__meta-value">{project.team || "Small team"}</span>
                        </div>
                        <div className="case-study-alt__meta-card">
                            <span className="case-study-alt__meta-label">Timeline</span>
                            <span className="case-study-alt__meta-value">{project.timeline || "Concept phase"}</span>
                        </div>
                    </div>
                </header>

                <div className="case-study-alt__hero">
                    <img
                        src={project.caseStudySrc || project.src}
                        alt={`${project.title} mobile concept preview`}
                    />
                </div>

                <section className="case-study-alt__section">
                    <h2>The challenge</h2>
                    <p>{project.challenge}</p>
                </section>

                <section className="case-study-alt__section">
                    <h2>My role</h2>
                    <p>{project.myRoleSummary}</p>
                    {project.myRolePoints?.length ? (
                        <ul className="case-study__list case-study-alt__list">
                            {project.myRolePoints.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2>Understanding the user</h2>
                    <p>{project.userUnderstanding}</p>
                    <div className="case-study-alt__placeholder">
                        {getPlaceholderLabel("persona", "Insert persona card here")}
                    </div>
                    {project.userDecisionAnchors?.length ? (
                        <>
                            <p>The persona helped anchor our decisions around:</p>
                            <ul className="case-study__list case-study-alt__list">
                                {project.userDecisionAnchors.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2>Defining the vision</h2>
                    <div className="case-study-alt__hero">
                        <img
                            src="/img/alto-visiooni1.png"
                            alt="AllTogether product vision board"
                        />
                    </div>
                    <p className="case-study-alt__note case-study-alt__note--center">Figure: AllTogether product vision board.</p>
                    <p>{project.visionSummary}</p>
                    {project.visionPriorities?.length ? (
                        <>
                            <p>This led us to prioritize:</p>
                            <ul className="case-study__list case-study-alt__list">
                                {project.visionPriorities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2>From structure to wireframes</h2>
                    <div className="case-study-alt__placeholder">
                        {getPlaceholderLabel("wireframes", "Insert early wireframes here")}
                    </div>
                    <p>{project.wireframesSummary}</p>
                    {project.wireframesInsight ? (
                        <p>{project.wireframesInsight}</p>
                    ) : null}
                    {project.wireframesTag ? (
                        <p className="case-study-alt__note">{project.wireframesTag}</p>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2>Designing the final experience</h2>
                    <div className="case-study-alt__placeholder">
                        {getPlaceholderLabel("finalMockups", "Insert final mobile mockups here")}
                    </div>
                    {project.finalExperiencePoints?.length ? (
                        <>
                            <p>In the final design, we focused on:</p>
                            <ul className="case-study__list case-study-alt__list">
                                {project.finalExperiencePoints.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                    {project.finalExperienceResult ? (
                        <p>{project.finalExperienceResult}</p>
                    ) : null}
                </section>

                <section className="case-study-alt__section">
                    <h2>Outcome and reflection</h2>
                    <p>{project.outcome}</p>
                    {project.reflection ? (
                        <p>{project.reflection}</p>
                    ) : null}
                </section>
            </div>
        </section>
    );
}
