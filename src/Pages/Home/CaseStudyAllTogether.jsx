import CaseStudyEvolution from "./CaseStudyEvolution";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyImage from "./CaseStudyImage";
import "./CaseStudyBudgit.css";
import "./CaseStudyAllTogether.css";

const homeScreenIterations = [
    {
        "title": "Early Wireframe",
        "src": "/img/alltogether-home-early-wireframe.png",
        "description": "Exploring the initial layout and information hierarchy."
    },
    {
        "title": "First Mockup",
        "src": "/img/alltogether-home-first-mockup.png",
        "description": "Translating the structure into an early visual interface."
    },
    {
        "title": "Second Mockup",
        "src": "/img/alltogether-home-second-mockup.png",
        "description": "Continuing to develop the dashboard's layout and content."
    },
    {
        "title": "Refined Mockup",
        "src": "/img/alltogether-home-more-defined-mockup.png",
        "description": "Improving spacing, visual hierarchy and the organization of information."
    },
    {
        "title": "Developed Version",
        "src": "/img/alltogether-home-production-mockup.png",
        "description": "Building a more consistent and complete interface."
    },
    {
        "title": "Final Design",
        "src": "/img/alltogether-final-home-screen.png",
        "description": "Bringing the layout and visual direction together."
    }
];

const mobileGroups = [
    { title: "Onboarding", screens: [
        { file: "mobile-login", title: "Login" },
        { file: "mobile-signup", title: "Signup" },
        { file: "loading-screen", title: "Loading" },
    ] },
    { title: "Overview", screens: [{ file: "home-screen", title: "Home dashboard" }] },
    { title: "Workouts & Nutrition", screens: [
        { file: "workout-page", title: "Workouts" },
        { file: "nutrition-page", title: "Nutrition" },
    ] },
    { title: "Social & Profile", screens: [
        { file: "socials-page", title: "Social" },
        { file: "profile", title: "Profile" },
    ] },
];

export default function CaseStudyAllTogether({ project }) {
    return (
        <section className="case-study case-study--centered case-study--budgit case-study--alltogether budgit-content">
            <div className="case-study__wrap">
                <CaseStudyHero project={project} />

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__section-title"><h2>01. Overview</h2></div>
                    <div className="case-study__copy-stack">
                        <p>AllTogether is a mobile-first health and fitness app concept that brings activity, sleep, recovery and nutrition data into one place. Designed as a university group project, it explores how users could understand their overall wellbeing without switching between multiple apps and services.</p>
                        <p>The project focused on designing a complete mobile experience, with an additional desktop exploration of the home dashboard.</p>
                    </div>
                </section>

                <section className="case-study__section case-study__section--problem">
                    <div className="case-study__section-title"><h2>02. Problem</h2></div>
                        <p>Fitness trackers and health apps provide valuable information, but that data is often scattered across different services. Users may see individual metrics without understanding their overall daily status, while manually tracking activities and navigating complex dashboards can become time-consuming.</p>
                    <p className="case-study__insight-callout"><strong>Design challenge:</strong> How might we bring essential health information together in a way that is quick to understand and easy to use?</p>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>03. Research &amp; Direction</h2></div>
                    <div className="case-study__copy-stack">
                        <p>We focused on health-conscious adults aged approximately 20–40 who use fitness apps or tracking devices and want a clearer overview of their daily wellbeing.</p>
                        <p>Our product vision was to create a supportive and accessible experience that connects information from multiple services while prioritizing clarity over the number of available metrics.</p>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Product Vision</h3>
                        <CaseStudyImage enlarge={false} image={{ src: "/img/alto-visiooni1.png" }} alt="AllTogether product vision board outlining the target group, needs, product and business goals." caption="AllTogether product vision board" className="alltogether-vision-image" />
                        <dl className="alltogether-priorities">
                            <div><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg><span>Clarity</span></dt><dd>Prioritize essential daily information.</dd></div>
                            <div><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="m5 12 4 4L19 6" /></svg><span>Convenience</span></dt><dd>Reduce repetitive data entry through proposed device and service integrations.</dd></div>
                            <div><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="7" r="1" /><path d="M7 10h10m-5 0v4m0 0-3 4m3-4 3 4" /></svg><span>Accessibility</span></dt><dd>Make health data easy to interpret and navigate.</dd></div>
                        </dl>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>04. Design Process</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Information Architecture</h3>
                        <p>We organized the app around five main areas: Home, Workouts, Nutrition, Social and Profile. The home dashboard was designed first, establishing the information hierarchy and card-based layout that would guide the rest of the mobile experience.</p>
                        <CaseStudyImage enlarge={false} image={{ src: "/img/alltogether-information-architecture.png" }} alt="AllTogether information architecture showing Home, Workouts, Nutrition, Social and Profile and their related views." caption="AllTogether information architecture" className="case-study__structure-image budgit-content__architecture-image" />
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Developing the Home Screen</h3>
                        <p>We developed the home dashboard through several iterations, starting with an early wireframe and gradually refining the layout, information hierarchy and visual design. As the central view of the app, the dashboard established patterns that were later applied to the other mobile screens.</p>
                        <div className="alltogether-design-showcase">
                            <CaseStudyEvolution stages={homeScreenIterations} label="AllTogether home screen design evolution" imageSizes="320px" />
                            <p>Through these iterations, we refined the dashboard into a clearer and more structured interface while establishing a visual direction for the rest of the app.</p>
                        </div>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title"><h2>05. Final Solution &amp; Reflection</h2></div>
                    <div className="budgit-content__subsection">
                        <h3>Final Mobile Experience</h3>
                        <p>The final mobile design brings activity, workouts, recovery, nutrition and social features into one consistent experience.</p>
                        <p>The home dashboard provides a quick daily overview, while dedicated sections allow users to explore workout plans, manage nutrition, participate in social activities and customize their profile.</p>
                        <div className="alltogether-mobile-gallery">
                            <div className="alltogether-mobile-gallery__scroll">
                            <div className="alltogether-mobile-gallery__row">
                            {mobileGroups.map((group) => (
                                <div className="alltogether-mobile-gallery__group" key={group.title} style={{ "--screen-count": group.screens.length }}>
                                    <p className="alltogether-mobile-gallery__label"><strong>{group.title}</strong></p>
                                    <div className="alltogether-mobile-gallery__screens">
                                        {group.screens.map((screen) => (
                                            <CaseStudyImage enlarge={false}
                                                key={screen.file}
                                                image={{ src: `/img/alltogether-final-${screen.file}.png` }}
                                                alt={`AllTogether final mobile ${screen.title.toLowerCase()} screen`}
                                                caption={screen.title}
                                                className="alltogether-mobile-gallery__image"
                                                sizes="220px"
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="alltogether-desktop-exploration">
                        <CaseStudyImage enlarge={false} image={{ src: "/img/alltogether-final-desktop.png" }} alt="AllTogether desktop home dashboard exploration, adapting the mobile daily overview to a larger screen." caption="Desktop exploration: home dashboard" className="alltogether-desktop-image" sizes="(max-width: 800px) calc(100vw - 32px), 600px" />
                        <div className="budgit-content__subsection">
                            <h3>Desktop Exploration</h3>
                            <p>The desktop design adapts the mobile home dashboard to a larger screen, allowing users to view more information simultaneously. The concept retains the core navigation while bringing activity, nutrition, workouts and other daily metrics into a unified dashboard.</p>
                        </div>
                    </div>
                    <div className="budgit-content__subsection">
                        <h3>Reflection</h3>
                        <p>The project demonstrated the importance of iteration when designing information-heavy interfaces. Developing the home screen through multiple versions helped us refine its hierarchy, layout and overall clarity.</p>
                        <p>One challenge was finalizing the visual style and color palette relatively late, which created inconsistencies between earlier designs. In future projects, I would establish a shared visual system earlier and conduct usability testing throughout the design process.</p>
                    </div>
                </section>
            </div>
        </section>
    );
}
