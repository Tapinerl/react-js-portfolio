import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/index.json";
import CaseStudyBudgit from "./CaseStudyBudgit";
import CaseStudyAllTogether from "./CaseStudyAllTogether";
import CaseStudyAirbnb from "./CaseStudyAirbnb";
import CaseStudyDashboardMMT from "./CaseStudyDashboardMMT";
import CaseStudyFreepark from "./CaseStudyFreepark";
import "./CaseStudyNotFound.css";

export default function CaseStudy() {
    const { id } = useParams();
    const project = useMemo(
        () => data?.portfolio?.find((item) => String(item.id) === String(id)),
        [id]
    );

    if (!project) {
        return (
            <section className="case-study case-study--not-found">
                <h2>Case study not found</h2>
                <Link className="case-study__back" to="/">Back to Home</Link>
            </section>
        );
    }

    const type = project?.caseStudyType || "";

    if (String(project.id) === "1" || type === "budgit") {
        return <CaseStudyBudgit project={project} />;
    }

    if (String(project.id) === "2" || type === "alltogether") {
        return <CaseStudyAllTogether project={project} />;
    }

    if (String(project.id) === "3" || type === "airbnb") {
        return <CaseStudyAirbnb project={project} />;
    }

    if (String(project.id) === "6" || type === "dashboard-mmt") {
        return <CaseStudyDashboardMMT project={project} />;
    }

    if (String(project.id) === "5" || type === "freepark") {
        return <CaseStudyFreepark project={project} />;
    }

    return <CaseStudyAirbnb project={project} />;
}
