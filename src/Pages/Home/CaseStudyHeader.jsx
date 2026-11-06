export default function CaseStudyHeader({ project, metadata }) {
    return (
        <header className="case-study__hero">
            <div className="case-study__header">
                <h1 className="case-study__title">{project.title}</h1>
                <ul className="case-study__overview-meta">
                    {metadata.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <div className="case-study__hero-media">
                <div className="case-study__hero-frame">
                    <img
                        src={project.caseStudySrc || project.src}
                        alt={`${project.title} preview`}
                    />
                </div>
                {project.visuals ? (
                    <p className="case-study__note case-study__note--hero">{project.visuals}</p>
                ) : null}
            </div>
        </header>
    );
}
