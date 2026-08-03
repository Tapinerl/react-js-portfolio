import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/index.json";
import CaseStudyBudgit from "./CaseStudyBudgit";
import CaseStudyAllTogether from "./CaseStudyAllTogether";
import CaseStudyDashboardMMT from "./CaseStudyDashboardMMT";
import CaseStudyFreepark from "./CaseStudyFreepark";
import Footer from "./Footer";
import "./CaseStudyNotFound.css";

export default function CaseStudy() {
    const { id } = useParams();
    const project = useMemo(
        () => data?.portfolio?.find((item) => String(item.id) === String(id)),
        [id]
    );

    if (!project) {
        return (
            <>
                <section className="case-study case-study--not-found">
                    <h1>Case study not found</h1>
                    <Link className="case-study__back" to="/">Back to Home</Link>
                </section>
                <Footer />
            </>
        );
    }

    const type = project?.caseStudyType || "";

    let content = null;

    if (String(project.id) === "1" || type === "budgit") {
        content = <CaseStudyBudgit project={project} />;
    } else if (String(project.id) === "2" || type === "alltogether") {
        content = <CaseStudyAllTogether project={project} />;
    } else if (String(project.id) === "6" || type === "dashboard-mmt") {
        content = <CaseStudyDashboardMMT project={project} />;
    } else if (String(project.id) === "5" || type === "freepark") {
        content = <CaseStudyFreepark project={project} />;
    }

    if (!content) {
        return (
            <>
                <section className="case-study case-study--not-found">
                    <h2>Case study not found</h2>
                    <Link className="case-study__back" to="/">Back to Home</Link>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            {content}
            <Footer />
        </>
    );
}
