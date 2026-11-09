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

export default function CaseStudyDashboardMMT({ project }) {
    return (
        <section className="case-study case-study--centered case-study--budgit case-study--dashboard-mmt budgit-content">
            <div className="case-study__wrap">
                <CaseStudyHero project={project} />

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__section-title"><h2>01. Overview</h2></div>
                    <div className="case-study__copy-stack">
                        <p>The Metrics Monitoring Tool (MMT) is a web-based tool developed as part of Pekka Mäkiaho's doctoral research project. It brings software project metrics into a shared dashboard, helping teams monitor progress, working hours, participation and upcoming events.</p>
                        <p>I worked in a seven-person Agile team as a UX/UI Designer and Junior Developer, combining interface design with hands-on implementation. My designs helped establish a shared direction for the dashboard, while my development work contributed to several of its functional components.</p>
                        <p>Technologies: PHP, CakePHP, JavaScript, HTML, CSS, MariaDB and Docker.</p>
                    </div>
                </section>

                <section className="case-study__section case-study__section--problem">
                    <div className="case-study__section-title"><h2>02. Problem</h2></div>
                    <div className="case-study__copy-stack">
                        <p>Software projects generate information across multiple areas, including working hours, tasks, meetings and team participation. When this information is spread across different views or systems, understanding the overall project status can become time-consuming.</p>
                        <p>The client needed a dashboard that would bring relevant metrics together and make project progress easier to monitor, without overwhelming users with unnecessary information.</p>
                        <p>Since MMT was already an established application, the new dashboard also had to fit within its existing visual design and technical structure. This limited how much we could change the interface and required us to balance usability improvements with consistency.</p>
                    </div>
                    <p className="case-study__insight-callout"><strong>Design challenge:</strong> How might we present complex project information in one clear dashboard while supporting different user roles and project management needs?</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>03. Research &amp; Direction</h2></div>
                    <div className="case-study__copy-stack">
                        <p>We worked with the client to understand the project's requirements and translate them into practical dashboard features. As a junior developer and UX/UI designer, I helped visualize these requirements through early interface designs, giving the team a clearer direction for development.</p>
                        <p>One challenge was that client feedback was not always immediately available. We documented open questions, explored possible solutions and refined our designs through subsequent discussions.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Key Design Priorities</h3>
                        <dl className="mmt-priorities">
                            <div>
                                <dt>
                                    <svg className="mmt-priorities__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M9 9v11M13 13h4M13 16h2" /></svg>
                                    <span>Clear overview</span>
                                </dt>
                                <dd>Present important project metrics in a way that can be understood at a glance.</dd>
                            </div>
                            <div>
                                <dt>
                                    <svg className="mmt-priorities__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></svg>
                                    <span>Different user roles</span>
                                </dt>
                                <dd>Support students, coaches and administrators with relevant functionality and permissions.</dd>
                            </div>
                            <div>
                                <dt>
                                    <svg className="mmt-priorities__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" /><circle cx="15" cy="17" r="3" /></svg>
                                    <span>Designing Within Constraints</span>
                                </dt>
                                <dd>Create usable dashboard components that follow MMT's existing visual language and work within its technical limitations.</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>04. Design Process</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Developing the Dashboard</h3>
                        <p>We began with an early dashboard wireframe to explore how project information could be organized. Since MMT was an existing application, the design needed to follow its established visual style and interface patterns.</p>
                        <p>I then developed a more detailed mockup that helped communicate the proposed structure to the client and establish the direction for the first MVP. As development progressed, I refined the dashboard layout and its widgets while balancing usability, visual consistency and technical feasibility.</p>
                        <CaseStudyEvolution stages={dashboardIterations} label="MMT dashboard design evolution" enlarge imageCaption="Design artifact: dashboard concept, not a production screenshot" />
                        <p>These iterations helped turn the client's requirements into a clearer development direction and gave the team a shared visual reference for building the dashboard.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Designing the Events Functionality</h3>
                        <p>One of my main contributions was designing and developing the calendar and events functionality. I first mapped out how different users would interact with events, including viewing upcoming and completed events, accessing feedback and managing events based on their permissions.</p>
                        <p>I then created separate interface mockups for students and users with additional permissions, such as coaches and administrators. These designs helped communicate the intended behavior and supported the creation of development tasks in our GitLab Kanban workflow.</p>
                        <p>Although the final implementation differed visually from the mockups, the client approved the proposed functionality, and its core behavior was retained.</p>
                        <p className="mmt-step"><strong>Step 1 &mdash; Event Workflows</strong></p>
                        <CaseStudyImage
                            image={{ src: "/img/mmt-events-architecture.png" }}
                            className="case-study__structure-image mmt-events-architecture"
                            alt="MMT event workflows: students view upcoming and completed events and read feedback; coaches and administrators can also manage events and submit feedback."
                            caption="Mapping event interactions and permissions for students, coaches and administrators."
                        />
                        <p className="mmt-step"><strong>Step 2 &mdash; Role-Based Interface Design</strong></p>
                        <div className="mmt-role-comparison">
                            <div className="mmt-role-comparison__view">
                                <h4 className="mmt-role-comparison__title">Student View</h4>
                                <p className="mmt-role-comparison__description">Students can view upcoming and completed events, access event details and read available feedback.</p>
                                <CaseStudyImage
                                    image={{ src: "/img/mmt-events-student.png" }}
                                    alt="Student event design mockup showing a calendar, upcoming event details, completed events and available feedback, without event management controls."
                                    caption="Design artifact: student events mockup"
                                    className="mmt-role-comparison__image"
                                    sizes="(max-width: 700px) calc(100vw - 80px), (max-width: 1200px) calc((100vw - 144px) / 2), 496px"
                                />
                            </div>
                            <div className="mmt-role-comparison__view">
                                <h4 className="mmt-role-comparison__title">Coach / Admin View</h4>
                                <p className="mmt-role-comparison__description">Coaches and administrators have additional options for managing events and providing feedback.</p>
                                <CaseStudyImage
                                    image={{ src: "/img/mmt-events-admin.png" }}
                                    alt="Coach and administrator event design mockups showing upcoming and completed events, feedback options and an add-event form; edit and remove views are marked as planned."
                                    caption="Design artifact: coach and admin events mockup"
                                    className="mmt-role-comparison__image"
                                    sizes="(max-width: 700px) calc(100vw - 80px), (max-width: 1200px) calc((100vw - 144px) / 2), 496px"
                                />
                            </div>
                        </div>
                        <p className="mmt-step"><strong>Step 3 &mdash; From Design to Implementation</strong></p>
                        <p>The event designs also supported development planning. I collaborated with the project manager to translate interface requirements into GitLab Kanban tasks, helping connect the proposed interactions with the team's implementation work.</p>
                        <p>Alongside this design work, I implemented the calendar, event-related functionality and contributed to other dashboard widgets, including working-hours and participation visualizations.</p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>05. Final Solution &amp; Reflection</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Delivered Functionality</h3>
                        <p>The project resulted in a functional metrics monitoring dashboard that brings together different aspects of software project management.</p>
                        <p>My development contributions included the calendar, event-related functionality, working-hours visualization and participation-related widgets. Alongside implementation, my interface designs helped the team align on the dashboard structure and translate requirements into development tasks.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Project Outcomes</h3>
                        <p>Although we did not have time to conduct formal usability testing, the project received encouraging feedback both during development and after delivery.</p>
                        <dl className="mmt-outcomes">
                            <div>
                                <dt>Shared Second Place</dt>
                                <dd>Our team achieved a shared second-place ranking in the audience vote at the final university project gala.</dd>
                            </div>
                            <div>
                                <dt>Positive Client Feedback</dt>
                                <dd>
                                    <figure className="mmt-client-feedback">
                                        <blockquote><p>“The MMT has been used successfully this autumn, for example, the dashboard works nicely!”</p></blockquote>
                                        <figcaption>Client feedback received after project delivery</figcaption>
                                    </figure>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Reflection</h3>
                        <p>Working on MMT taught me how UX design and software development support each other in a real client project. Creating early mockups helped clarify requirements and gave the team a common understanding of what we were building.</p>
                        <p>One of the biggest challenges was designing within an existing application. I had to follow established visual patterns while finding ways to make the dashboard clear and useful. Balancing these constraints with technical requirements, changing priorities and client feedback strengthened my ability to make practical design decisions.</p>
                        <p>The project also highlighted the importance of communication and clear task definitions in Agile development. If I were to continue the project, I would prioritize usability testing with actual users to evaluate how easily they interpret the dashboard metrics and navigate its features.</p>
                    </div>
                    <a className="case-study__external-link" href="https://metricsmonitoring.rd.tuni.fi/projects/about" target="_blank" rel="noopener noreferrer">Visit the MMT project page <span className="mmt-link-context">(project website, opens in a new tab)</span></a>
                </section>
            </div>
        </section>
    );
}
