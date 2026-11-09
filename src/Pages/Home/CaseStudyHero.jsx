import ResponsiveImage from "../../components/ResponsiveImage";
import "./CaseStudyHero.css";

const heroContent = {
    "1": {
        title: "budgIT",
        description: "A mobile budgeting app concept designed to make everyday money management simpler for students.",
        role: "UX/UI Designer",
        projectType: "University group project",
        platform: "Mobile",
        year: "2024",
        alt: "budgIT mobile budgeting app preview.",
    },
    "2": {
        title: "AllTogether",
        description: "A fitness app concept that brings workouts, nutrition, and social motivation into one place.",
        role: "UX/UI Designer",
        projectType: "University group project",
        platform: "Mobile & Desktop",
        year: "2025",
        alt: "AllTogether fitness app preview.",
    },
    "6": {
        title: "Dashboard \u2013 MMT",
        description: "A project monitoring dashboard designed to help teams track progress, participation, and key metrics.",
        role: "UX/UI Designer & Junior Developer",
        projectType: "University group project",
        platform: "Web application",
        year: "2025",
        alt: "MMT project monitoring dashboard preview.",
    },
    "5": {
        title: "FreePark Helsinki",
        description: "A mobile app for discovering free parking spots around Helsinki.",
        role: "UX/UI Designer & Developer",
        projectType: "Personal project",
        platform: "Mobile",
        year: "2026 \u2013 Ongoing",
        status: "Work in Progress",
        alt: "FreePark Helsinki mobile parking app preview.",
    },
    "7": {
        title: "Electricity Price Indicator",
        description: "A small ambient lamp that helps you recognize better times to use electricity at home.",
        role: "Interaction Designer & Developer",
        projectType: "University course project / Personal project",
        platform: "Physical device / IoT",
        year: "2026 \u2013 Ongoing",
        status: "Work in Progress",
        alt: "Front of the cardboard lamp prototype, with yellow paper panels and hand-drawn household symbols.",
    },
};

export default function CaseStudyHero({ project }) {
    const content = heroContent[String(project.id)];
    const metadata = [
        ["Project type", content.projectType],
        ["Platform", content.platform],
        ["Year", content.year],
    ];

    return (
        <header className="case-study-hero">
            <div className="case-study-hero__main">
                <div className="case-study-hero__copy">
                    <h1 className="case-study__title">{content.title}</h1>
                    <p className="case-study-hero__description">{content.description}</p>
                    <p className="case-study-hero__role"><span>Role</span>{content.role}</p>
                    {content.status && <span className="case-study-hero__status">{content.status}</span>}
                </div>
                <figure className="case-study-hero__media">
                    <div className="case-study-hero__frame">
                        <ResponsiveImage
                            src={project.caseStudySrc || project.src}
                            alt={content.alt}
                            loading="eager"
                            fetchPriority="high"
                            sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1216px) calc((100vw - 152px) / 2), 532px"
                        />
                    </div>
                    {content.caption && <figcaption>{content.caption}</figcaption>}
                </figure>
            </div>
            <dl className="case-study-hero__metadata">
                {metadata.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
            </dl>
        </header>
    );
}
