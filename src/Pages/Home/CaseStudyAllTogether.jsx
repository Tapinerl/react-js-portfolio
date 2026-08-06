import { useRef } from "react";
import "./CaseStudyBudgit.css";
import "./CaseStudyAllTogether.css";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";

const overviewMeta = [
    "Role: UX/UI Designer",
    "Project: University group project",
    "Platform: Mobile and desktop",
    "Year: 2025",
];

const homeScreenIterations = [
    {
        src: "/img/alltogether-home-early-wireframe.png",
        alt: "Early AllTogether home screen wireframe",
    },
    {
        src: "/img/alltogether-home-first-mockup.png",
        alt: "First AllTogether home screen mockup",
    },
    {
        src: "/img/alltogether-home-second-mockup.png",
        alt: "Second AllTogether home screen mockup",
    },
    {
        src: "/img/alltogether-home-more-defined-mockup.png",
        alt: "More defined AllTogether home screen mockup",
    },
    {
        src: "/img/alltogether-home-production-mockup.png",
        alt: "First production version of the AllTogether home screen",
    },
];

const finalMobileScreens = [
    {
        src: "/img/alltogether-final-mobile-login.png",
        alt: "AllTogether mobile login screen",
    },
    {
        src: "/img/alltogether-final-mobile-signup.png",
        alt: "AllTogether mobile signup screen",
    },
    {
        src: "/img/alltogether-final-loading-screen.png",
        alt: "AllTogether mobile loading screen",
    },
    {
        src: "/img/alltogether-final-home-screen.png",
        alt: "AllTogether final mobile home screen",
    },
    {
        src: "/img/alltogether-final-workout-page.png",
        alt: "AllTogether final mobile workout page",
    },
];

const finalMobileFollowupScreens = [
    {
        src: "/img/alltogether-final-nutrition-page.png",
        alt: "AllTogether final mobile nutrition page",
    },
    {
        src: "/img/alltogether-final-socials-page.png",
        alt: "AllTogether final mobile socials page",
    },
    {
        src: "/img/alltogether-final-profile.png",
        alt: "AllTogether final mobile profile page",
    },
];

export default function CaseStudyAllTogether({ project }) {
    const caseStudyRef = useRef(null);
    useCaseStudyScrollReveal(caseStudyRef);

    return (
        <section
            className="case-study case-study--centered case-study--budgit case-study--alltogether"
            ref={caseStudyRef}
        >
            <div className="case-study__wrap">
                <div className="case-study__hero">
                    <div className="case-study__hero-frame">
                        <img
                            src={project.caseStudySrc || project.src}
                            alt={`${project.title} mobile and dark mode mockups`}
                        />
                    </div>
                </div>

                <section className="case-study__section case-study__section--overview">
                    <div className="case-study__overview-layout">
                        <div
                            className="case-study__section-title case-study__section-title--overview scroll-reveal"
                            data-case-reveal
                        >
                            <h1 className="case-study__title">AllTogether</h1>
                            <ul className="case-study__overview-meta">
                                {overviewMeta.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="case-study__copy-stack scroll-reveal" data-case-reveal>
                            <p className="case-study__overview-text">
                                People often use several apps and devices to track workouts, sleep, recovery, and nutrition. Because this information is spread across different services, it can be difficult to understand how the different parts of their health connect or what their overall daily status looks like.
                            </p>
                            <p className="case-study__overview-text">
                                AllTogether was designed to bring this information into one clear, mobile-first experience. The main focus was the mobile app, while the desktop exploration was limited to adapting the home dashboard for a larger screen.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="case-study__section case-study__section--problem">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>The problem</h2>
                    </div>
                    <div className="case-study__copy-stack scroll-reveal" data-case-reveal>
                        <p>
                            Health-conscious users may collect a lot of data from fitness trackers and health apps, but the information is often fragmented. They can see individual numbers, but not always the bigger picture. Manually adding data can also feel repetitive, while detailed dashboards may become overwhelming. The challenge was to create an all-in-one experience that feels useful, simple and quick to check.
                        </p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>The solution</h2>
                    </div>
                    <div className="case-study__insight case-study__insight--vision">
                        <div
                            className="case-study__insight-text scroll-reveal scroll-reveal--left"
                            data-case-reveal
                        >
                            <p className="case-study__insight-body">
                                We designed a mobile-first health app that combines data from fitness devices and services such as Oura, Whoop, Garmin, Apple Watch and Strava. The concept was later expanded to include a desktop interface as well.
                            </p>
                            <p className="case-study__insight-body">
                                The home dashboard highlights activity, sleep and recovery, while other areas support workouts, nutrition, social features and adding personal content.
                            </p>
                            <p className="case-study__insight-body">
                                Instead of showing every available metric, the design focuses on the most useful information and presents it through clear, modular cards.
                            </p>
                        </div>
                        <figure
                            className="case-study__insight-card case-study__visual-card case-study__visual-card--vision scroll-reveal scroll-reveal--right"
                            data-case-reveal
                        >
                            <p className="case-study__vision-board-text">
                                The product vision helped us keep the experience supportive and easy to understand. We also considered automatic data syncing, customization, accessibility and future integration with new devices.
                            </p>
                            <img
                                src="/img/alto-visiooni1.png"
                                alt="AllTogether product vision board"
                            />
                        </figure>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>The process</h2>
                    </div>
                    <div className="case-study__ia-section scroll-reveal" data-case-reveal>
                        <figure
                            className="case-study__ia-media"
                        >
                            <img
                                src="/img/alltogether-information-architecture.png"
                                alt="AllTogether information architecture"
                            />
                            <figcaption className="case-study__note">
                                Information architecture
                            </figcaption>
                        </figure>
                        <div className="case-study__ia-text">
                            <p>
                                We began by defining the target users: people aged roughly 20-40 who are interested in fitness, wellbeing and health tracking.
                            </p>
                            <p>
                                The persona helped us focus on users who want a clear overview of their health without having to interpret complex data.
                            </p>
                            <p>
                                Instead of designing every view at once, we started with the mobile home screen. We explored what information users would need most often and how workouts, sleep, recovery and nutrition could fit into one clear overview.
                            </p>
                            <p>
                                The home screen became the foundation for the rest of the app. Its content structure, card layout and navigation patterns guided the later workout, nutrition, social and profile views.
                            </p>
                        </div>
                    </div>

                    <div className="case-study__structure scroll-reveal" data-case-reveal>
                        <h3 className="case-study__structure-title">Developing the home screen</h3>
                        <div className="case-study__home-screen-gallery">
                            {homeScreenIterations.map((item) => (
                                <figure className="case-study__home-screen-item" key={item.src}>
                                    <img src={item.src} alt={item.alt} />
                                </figure>
                            ))}
                        </div>
                        <p className="case-study__structure-text">
                            We created several versions of the home screen, moving from rough wireframes toward a more defined visual direction. The home screen became the foundation for the rest of the app. Its hierarchy, card structure and navigation patterns were later reused across other views.
                        </p>
                        <p className="case-study__structure-text">
                            The home screen evolved through several iterations. We gradually added the necessary content, improved spacing and refined the layout based on usability considerations. This helped turn the initial wireframe into a clearer and more structured dashboard.
                        </p>
                    </div>
                </section>

                <section className="case-study__section">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Final design</h2>
                    </div>
                    <figure className="case-study__outcome-media scroll-reveal" data-case-reveal>
                        <img
                            src="/img/alltogether-final-flow.jpg"
                            alt="Final AllTogether mobile screen flow"
                        />
                        <figcaption className="case-study__note">
                            Final mobile flow
                        </figcaption>
                    </figure>
                    <div className="case-study__final-screen-gallery scroll-reveal" data-case-reveal>
                        {finalMobileScreens.map((item) => (
                            <figure className="case-study__final-screen-item" key={item.src}>
                                <img src={item.src} alt={item.alt} />
                            </figure>
                        ))}
                    </div>
                    <div className="case-study__final-followup scroll-reveal" data-case-reveal>
                        <div className="case-study__final-screen-gallery case-study__final-screen-gallery--followup">
                            {finalMobileFollowupScreens.map((item) => (
                                <figure className="case-study__final-screen-item" key={item.src}>
                                    <img src={item.src} alt={item.alt} />
                                </figure>
                            ))}
                        </div>
                        <div className="case-study__final-followup-text">
                            <p>
                                The final design combines activity, workouts, recovery, nutrition and social features within one consistent mobile experience.
                            </p>
                            <p>
                                The home screen gives users a quick daily overview of their health, including activity, calories, protein, upcoming workouts and meal suggestions. Dedicated workout and nutrition views allow users to follow plans, track progress and find relevant content without overcrowding the dashboard.
                            </p>
                            <p>
                                The social section supports motivation through shared challenges, friend activity and invitations, while the profile view brings together personal information, connected devices, privacy and app preferences.
                            </p>
                        </div>
                    </div>
                    <div className="case-study__desktop-final scroll-reveal" data-case-reveal>
                        <div className="case-study__desktop-final-text">
                            <p>
                                The desktop version uses the larger canvas to present the main health information in a single dashboard. Activity, workout progress, nutrition, weight tracking, social updates, water intake and meal suggestions are visible at once, while the side navigation keeps the same core sections as the mobile app.
                            </p>
                        </div>
                        <figure className="case-study__desktop-final-media">
                            <img
                                src="/img/alltogether-final-desktop.png"
                                alt="AllTogether final desktop dashboard"
                            />
                        </figure>
                    </div>
                </section>

                <section className="case-study__section case-study__section--reflection">
                    <div className="case-study__section-title scroll-reveal" data-case-reveal>
                        <h2>Reflection</h2>
                    </div>
                    <div className="case-study__copy-stack scroll-reveal" data-case-reveal>
                        <p>
                            The project showed how important iteration is when designing a data-heavy product.
                        </p>
                        <p>
                            Our early designs changed several times, but the main goal remained the same: create one clear place for fitness, nutrition, sleep and social motivation.
                        </p>
                        <p>
                            One challenge was that the visual style and color palette were finalized quite late, which caused some inconsistency between early screens. In a future project, I would define the visual system earlier and validate the interface with users throughout the process.
                        </p>
                        <p>
                            The next step would be usability testing, user surveys and real-world feedback to understand how people interpret the dashboard and which features they value most.
                        </p>
                        <p className="case-study__insight-callout">
                            AllTogether brings this information into one clear interface, helping users understand their daily wellbeing without switching between multiple services.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}
