import CaseStudyHero from "./CaseStudyHero";
import CaseStudyImage from "./CaseStudyImage";
import CaseStudyEvolution from "./CaseStudyEvolution";
import "./CaseStudyBudgit.css";
import "./CaseStudyDashboardMMT.css";

const dashboardIterations = [
    {
        "title": "Initial Wireframe",
        "src": "/img/mmt-initial-wireframe.png",
        "alt": "MMT initial dashboard wireframe exploring weekly progress and working-hours content areas.",
        "description": "An early exploration of the dashboard's content areas and layout."
    },
    {
        "title": "Client-Approved MVP Direction",
        "src": "/img/mmt-mvp-mockup.png",
        "alt": "MMT MVP design mockup with working hours, meetings, a calendar, weekly reports and a metrics table.",
        "description": "A more developed mockup that helped establish a shared direction with the client."
    },
    {
        "title": "Refined Dashboard Design",
        "src": "/img/mmt-refined-dashboard.png",
        "alt": "Refined MMT dashboard design mockup with hours, contributions, events, meeting participation, reports and metrics.",
        "description": "A more detailed layout incorporating project events, working hours, participation and other metrics."
    }
];

const learningHighlights = [
    { title: "Technical Skills", text: "Learning PHP, CakePHP, MVC, Docker and working within an existing codebase.", path: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" },
    { title: "Teamwork", text: "Collaborating in Agile sprints and learning from different perspectives.", path: "M15 20v-2a6 6 0 0 0-12 0v2M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m7-6a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" },
    { title: "Client Communication", text: "Asking questions, clarifying requirements and adapting when plans changed.", path: "M14 3H3v12h3v4l4-4h4V3Zm3 5h4v12h-3v2l-4-4h-4" },
    { title: "Design to Development", text: "Understanding how designs become actual working features.", path: "M3 3h6v6H3V3Zm12 12h6v6h-6v-6ZM9 6h6a3 3 0 0 1 3 3v6M6 9v9h9" },
];

function ProjectLearnings() {
    return (
        <div className="mmt-learnings" aria-labelledby="mmt-learnings-title">
            <h4 id="mmt-learnings-title">What This Project Taught Me</h4>
            <dl className="mmt-learnings__grid">
                {learningHighlights.map(({ title, text, path }) => (
                    <div key={title}>
                        <dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={path} /></svg>{title}</dt>
                        <dd>{text}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default function CaseStudyDashboardMMT({ project }) {
    return (
        <section className="case-study case-study--centered case-study--budgit case-study--dashboard-mmt budgit-content">
            <div className="case-study__wrap">
                <CaseStudyHero project={project} />

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__section-title"><h2>01. Overview</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>My first experience building software for a real client</h3>
                        <p>MMT (Metrics Monitoring Tool) is a web application developed as part of Pekka Mäkiaho's doctoral research project. It helps software teams track project progress, working hours, participation and upcoming events through a shared dashboard.</p>
                        <p>I joined a seven-person team as a UX/UI Designer and Junior Developer. My work included designing dashboard interfaces, planning event functionality and implementing several features.</p>
                        <p>What made this project especially interesting was getting to experience both sides of software development: <strong>designing how something should work and then figuring out how to build it.</strong></p>
                        <div className="mmt-tools">
                            <ul className="mmt-tech-stack" aria-label="Technologies and tools">
                                {[
                                    ["Figma", ["figma"]],
                                    ["PHP", ["php"]],
                                    ["CakePHP", ["cakephp"]],
                                    ["JavaScript", ["javascript"]],
                                    ["HTML/CSS", ["html5", "css"]],
                                    ["MariaDB", ["mariadb"]],
                                    ["Docker", ["docker"]],
                                    ["GitLab", ["gitlab"]],
                                    ["Cursor", ["cursor"]],
                                ].map(([name, icons]) => (
                                    <li key={name}>
                                        <span className="mmt-tech-stack__logos" aria-hidden="true">
                                            {icons.map(icon => <img key={icon} src={`/img/tech/${icon}.svg`} alt="" width="20" height="20" />)}
                                        </span>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>02. The Challenge</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Improving something that already exists</h3>
                        <p>Our client wanted a clearer way to follow project metrics without having to jump between different views.</p>
                        <p>But we weren't starting from scratch. MMT already had an established design and technical structure, so we needed to build on what was there.</p>
                        <p>This challenged me to think beyond what looked good in a mockup and consider what was realistic to implement, consistent with the application and useful for its users.</p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>03. Working Together</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Learning from people with different perspectives</h3>
                        <p>One of my biggest takeaways was how much communication matters in software development. We worked in <strong>two-week Agile sprints</strong>, using GitLab and Kanban to organize tasks and collaborate.</p>
                        <p>Our team had people with different backgrounds and experiences. I really enjoyed discussing ideas, hearing different approaches and figuring things out together.</p>
                        <p>We also worked closely with the client to understand requirements and discuss our designs. Sometimes feedback was delayed or plans needed to change, which taught me to ask questions, document uncertainties and keep communication open.</p>
                        <p>I learned that things rarely go exactly as planned, and that's just part of working on a real software project.</p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>04. The Design Process</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Designing the Dashboard</h3>
                        <p>I started with an early wireframe exploring how different project metrics could fit together in one view.</p>
                        <p>From there, I created a more detailed mockup that helped our team and the client agree on a direction for the first MVP.</p>
                        <p>I learned that mockups aren't just about how something looks. They're also a great way to communicate ideas and make sure everyone understands what we're building.</p>
                        <div className="mmt-dashboard-showcase">
                            <h4 className="mmt-step">Dashboard Design &mdash; Three Iterations</h4>
                            <CaseStudyEvolution stages={dashboardIterations} label="MMT dashboard design evolution" enlarge imageCaption="Design artifact: dashboard concept, not a production screenshot" />
                            <p className="mmt-caption"><em>From early wireframes to a more detailed dashboard concept.</em></p>
                        </div>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Designing the Events Functionality</h3>
                        <p>One of my main responsibilities was designing the calendar and events functionality.</p>
                        <p>I started by mapping how students, coaches and administrators would interact with events, then created interface mockups for their different roles and permissions.</p>
                        <h4 className="mmt-step">Understanding the User Flows</h4>
                        <CaseStudyImage image={{ src: "/img/mmt-events-architecture.png" }} className="case-study__structure-image mmt-events-architecture" alt="MMT event workflows: students view upcoming and completed events and read feedback; coaches and administrators can also manage events and submit feedback." caption="Mapping how different users view, manage and interact with events." />
                        <h4 className="mmt-step">Designing for Different Roles</h4>
                        <div className="mmt-role-comparison">
                            <div className="mmt-role-comparison__view">
                                <h5 className="mmt-role-comparison__title">Student View</h5>
                                <CaseStudyImage image={{ src: "/img/mmt-events-student.png" }} alt="Student events design mockup with a calendar, upcoming event details, completed events and available feedback." className="mmt-role-comparison__image" sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 900px) calc((100vw - 88px) / 2), 500px" />
                            </div>
                            <div className="mmt-role-comparison__view">
                                <h5 className="mmt-role-comparison__title">Coach / Admin View</h5>
                                <CaseStudyImage image={{ src: "/img/mmt-events-admin.png" }} alt="Coach and administrator events design mockups with upcoming and completed events, feedback options and an add-event form; edit and remove views are marked as planned." className="mmt-role-comparison__image" sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 900px) calc((100vw - 88px) / 2), 500px" />
                            </div>
                        </div>
                        <p className="mmt-caption"><em>The same application needed to support different roles and permissions.</em></p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>05. From Design to Code</h2></div>
                    <div className="budgit-content__subsection">
                        <p>I worked with our project manager to turn the event designs into GitLab development tasks. The final implementation looked a little different from my mockups, but the client-approved functionality remained.</p>
                        <p>On the development side, I got more comfortable with <strong>PHP, CakePHP, MVC and Docker</strong>, while also exploring <strong>Cursor IDE</strong>. I implemented calendar and event-related functionality and contributed to the working-hours and participation widgets.</p>
                        <p>One of my favorite parts was seeing my designs become working features and learning how everything connects behind the scenes.</p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>06. What We Delivered</h2></div>
                    <div className="case-study__copy-stack">
                        <p>Our team delivered a working dashboard that brings project metrics and event information together in one place.</p>
                        <p>I contributed to both the interface design and implementation, particularly the calendar, events, working-hours and participation features.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <dl className="mmt-outcomes">
                            <div><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 2v5m-4 3h8m-7 0v-3h6v3" /></svg><span>Shared 2nd Place</span></dt><dd>Our team finished joint second in the audience vote at the university project gala.</dd></div>
                            <div>
                                <dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 11a8 8 0 0 1-8 8H7l-4 3V11a9 9 0 0 1 18 0Z" /><path d="m8 11 3 3 5-5" /></svg><span>Positive Client Feedback</span></dt>
                                <dd><figure className="mmt-client-feedback"><blockquote><p>“The MMT has been used successfully this autumn, for example, the dashboard works nicely!”</p></blockquote><figcaption>Client feedback received after delivery.</figcaption></figure></dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>07. What I Took Away</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>More than just learning new technologies</h3>
                        <p>This project gave me a lot more confidence in working as part of a software development team.</p>
                        <ProjectLearnings />
                        <p>I also realized how much I enjoy being involved in both design and development. I like understanding how people use technology, but I also want to understand how it's built.</p>
                        <blockquote className="mmt-takeaway"><p>“Good software doesn't come from one person having all the answers. It comes from people sharing ideas, learning from each other and figuring things out together.”</p></blockquote>
                        <p>That's the kind of environment I'd love to keep learning in.</p>
                        <a className="case-study__external-link" href="https://metricsmonitoring.rd.tuni.fi/projects/about" target="_blank" rel="noopener noreferrer">Visit the MMT project <span className="mmt-link-context">(opens in a new tab)</span></a>
                    </div>
                </section>
            </div>
        </section>
    );
}
