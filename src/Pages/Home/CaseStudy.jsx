import { lazy, Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/index.json";
import Footer from "./Footer";
import "./CaseStudyNotFound.css";

const CaseStudyBudgit = lazy(() => import("./CaseStudyBudgit"));
const CaseStudyAllTogether = lazy(() => import("./CaseStudyAllTogether"));
const CaseStudyDashboardMMT = lazy(() => import("./CaseStudyDashboardMMT"));
const CaseStudyElectricity = lazy(() => import("./CaseStudyElectricity"));
const CaseStudyFreepark = lazy(() => import("./CaseStudyFreepark"));

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
    } else if (String(project.id) === "7" || type === "electricity-price-indicator") {
        content = <CaseStudyElectricity project={project} />;
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
            <Suspense fallback={<main className="route-loading" aria-busy="true"><p role="status">Loading case study…</p></main>}>
                {content}
            </Suspense>
            <Footer />
        </>
    );
}
