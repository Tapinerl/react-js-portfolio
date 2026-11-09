import CaseStudyHero from "./CaseStudyHero";
import CaseStudyImage from "./CaseStudyImage";
import "./CaseStudyBudgit.css";
import "./CaseStudyElectricity.css";

const prototypePhotos = [
    {
        src: "/img/lamp-cardboard-back.jpeg",
        alt: "Open back of the corner-shaped cardboard prototype with sketched battery and button positions.",
        caption: "A corner-shaped housing, inside and out.",
    },
    {
        src: "/img/lamp-cardboard-moderate.jpeg",
        alt: "Cardboard prototype mounted on a wall corner, with reddish paper simulating the moderate-price state.",
        caption: "Reddish paper stands in for the moderate-price light.",
    },
    {
        src: "/img/lamp-cardboard-unlit.jpeg",
        alt: "Wall-mounted cardboard prototype with dark blue panels simulating the unlit, expensive-price state.",
        caption: "The unlit state suggests waiting for a better moment.",
    },
];

const nextSteps = [
    { icon: "box", title: "3D-printed housing", text: "A refined enclosure with softly diffused lighting." },
    { icon: "cpu", title: "Electronics & software", text: "LEDs, a microcontroller and live electricity-price data." },
    { icon: "phone", title: "Companion mobile app", text: "Device setup, Wi-Fi connection and personalized price thresholds." },
    { icon: "panels", title: "iPhone widgets", text: "Quick access to electricity prices directly from the Lock Screen." },
];

function ConceptIcon({ name }) {
    // Match the lightweight, inline line icons already used in the portfolio.
    const paths = {
        screen: "M8 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3M8 21h6M11 17v4M3 3l18 18M16 3h5v5",
        light: "M9 18h6M10 21h4M8 14a6 6 0 1 1 8 0c-1 .8-1 1.4-1 2H9c0-.6 0-1.2-1-2Z",
        home: "m3 10 9-7 9 7M5 9v11h14V9M9 20v-7h6v7",
        pin: "M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
        heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
        box: "m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10M7.5 4.5l9 5",
        cpu: "M8 3v3M16 3v3M8 18v3M16 18v3M3 8h3M3 16h3M18 8h3M18 16h3M6 6h12v12H6V6Zm3 3h6v6H9V9Z",
        phone: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM10 18h4",
        panels: "M3 4h18v16H3V4Zm0 5h18M8 9v11M6 6.5h.01M9 6.5h.01",
    };
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d={paths[name]} />
        </svg>
    );
}

export default function CaseStudyElectricity({ project }) {
    return (
        <article className="case-study case-study--centered case-study--budgit case-study--electricity electricity-teaser">
            <div className="case-study__wrap">
                <CaseStudyHero project={project} />

                <section className="electricity-section electricity-idea" aria-labelledby="electricity-idea-title">
                    <div className="electricity-section__intro">
                        <h2 id="electricity-idea-title">The idea</h2>
                        <p>Electricity prices constantly change, but checking graphs and apps throughout the day isn't particularly convenient. I wanted to explore whether a simple physical object could communicate this information more naturally.</p>
                        <p>Originally developed during a Psychology in Human&ndash;Technology Interaction course at Tampere University, the concept applies cognitive psychology principles such as perception, attention and familiar visual signals.</p>
                    </div>
                    <ul className="electricity-highlights">
                        <li><ConceptIcon name="screen" /><div><strong>Less screen time</strong><p>Notice useful information without opening an app.</p></div></li>
                        <li><ConceptIcon name="light" /><div><strong>Intuitive signals</strong><p>Understand electricity prices through ambient light.</p></div></li>
                        <li><ConceptIcon name="home" /><div><strong>Everyday design</strong><p>A functional object that also belongs in the home.</p></div></li>
                    </ul>
                </section>

                <section className="electricity-section" aria-labelledby="electricity-states-title">
                    <div className="electricity-section__intro">
                        <h2 id="electricity-states-title">A glance, three possibilities.</h2>
                        <p>The concept uses the average electricity price over the next two hours to suggest when to start an appliance or wait. The light states are based on a traffic-light system, using subtle colors designed not to be distracting at home.</p>
                    </div>
                    <dl className="electricity-states">
                        <div className="electricity-states__item electricity-states__item--good">
                            <dt>Warm Yellow <small>Good price</small></dt>
                            <dd className="electricity-states__price">Below 5 c/kWh</dd>
                        </div>
                        <div className="electricity-states__item electricity-states__item--moderate">
                            <dt>Warm Reddish <small>Moderate price</small></dt>
                            <dd className="electricity-states__price">5 to below 10 c/kWh</dd>
                        </div>
                        <div className="electricity-states__item electricity-states__item--unlit">
                            <dt>Unlit <small>Expensive</small></dt>
                            <dd className="electricity-states__price">10 c/kWh or above</dd>
                        </div>
                    </dl>
                </section>

                <section className="electricity-section" aria-labelledby="electricity-prototype-title">
                    <div className="electricity-section__intro">
                        <h2 id="electricity-prototype-title">From concept to cardboard.</h2>
                        <p>I started with sketches and built a cardboard prototype to explore the lamp's shape, lighting concept and possible placement in a home.</p>
                        <p>Inspired by illuminated Japanese shop signs and corner-mounted lightboxes. For now, colored paper stands in for light.</p>
                    </div>
                </section>

                <div className="electricity-photo-band">
                    <div className="electricity-prototype-gallery">
                        {prototypePhotos.map((photo) => (
                            <CaseStudyImage key={photo.src} image={photo} caption={photo.caption} enlarge={false} className="electricity-photo" sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) calc((100vw - 100px) / 3), 350px" />
                        ))}
                    </div>

                <section className="electricity-section electricity-test" aria-labelledby="electricity-test-title">
                    <CaseStudyImage
                        image={{ src: "/img/lamp-user-testing.jpeg" }}
                        alt="Participant trying the cardboard prototype against a corner wall in their home, with their face obscured."
                        caption="Finding its place in a real home."
                        enlarge={false}
                        className="electricity-photo electricity-test__photo"
                        sizes="(max-width: 700px) calc(100vw - 40px), 450px"
                    />
                    <div className="electricity-test__copy">
                        <h2 id="electricity-test-title">A first test in a real home.</h2>
                        <p>I tested the cardboard prototype with one participant to explore how its light states could support everyday decisions and where the device might fit naturally in a home.</p>
                        <ul className="electricity-highlights electricity-highlights--testing">
                            <li><ConceptIcon name="pin" /><div><strong>Visible placement matters</strong><p>Kitchens, entrances and other frequently used spaces.</p></div></li>
                            <li><ConceptIcon name="eye" /><div><strong>Simple visual cues</strong><p>The participant could use the signals after learning their meanings.</p></div></li>
                            <li><ConceptIcon name="heart" /><div><strong>More than a gadget</strong><p>The decorative aspect made the concept appealing.</p></div></li>
                        </ul>
                    </div>
                </section>
                </div>

                <section className="electricity-section electricity-next" aria-labelledby="electricity-next-title">
                    <div className="electricity-section__intro">
                        <h2 id="electricity-next-title">What's next?</h2>
                        <p>The cardboard prototype was just the beginning. I'm now exploring how to turn the concept into a real, connected product.</p>
                    </div>
                    <ul className="electricity-next__grid">
                        {nextSteps.map((step) => (
                            <li key={step.title}><ConceptIcon name={step.icon} /><h3>{step.title}</h3><p>{step.text}</p></li>
                        ))}
                    </ul>
                    <p className="electricity-note">Planned features &mdash; development in progress.</p>
                </section>

            </div>
        </article>
    );
}
