import { useRef } from "react";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";
import Footer from "./Footer";

export default function AboutPage() {
  const aboutPageRef = useRef(null);
  useCaseStudyScrollReveal(aboutPageRef);

  const designResearch = [
    "Figma (wireframing, prototyping, interaction design)",
    "User interviews and usability testing",
    "Expert reviews and heuristic evaluations",
    "Personas, scenarios and user journeys",
    "Iterative design process",
    "Accessibility-aware design (WCAG principles)",
  ];

  const development = [
    "HTML, CSS, JavaScript",
    "React",
    "PHP (CakePHP)",
    "Git and GitLab",
    "REST APIs",
  ];

  const other = [
    "AI-assisted tools and concepts in UX",
    "Data-informed design decisions",
    "Design-development collaboration",
  ];

  return (
    <main className="about-page" ref={aboutPageRef}>
      <section className="about-page__hero">
        <h1
          className="about-page__title scroll-reveal scroll-reveal--up"
          data-case-reveal
        >
          About Me
        </h1>
        <div
          className="about-page__lead scroll-reveal"
          data-case-reveal
          style={{ "--reveal-delay": "0.08s" }}
        >
          <p>
            Hey there, I'm Elias - a UX/UI Designer and Software
            Engineering student based in Finland. I'm passionate about
            creating thoughtful, human-centered digital experiences that not
            only look good, but genuinely make sense to the people using them.
          </p>
          <p>
            I'm graduating with a Bachelor of Science (Tech) in Information Technology 
            from Tampere University in Spring 2026, majoring in
            Software Engineering with a minor in Human-Technology Interaction
            (HTI). After that, I'll continue straight into the Master's
            program in HTI to deepen my focus on user-centered design and
            research.
          </p>
          <p>
            I've worked across the full design process; from research and
            personas to wireframes, prototypes, and front-end implementation.
            My approach is iterative and practical: test early, refine often,
            and design solutions that are both intuitive and technically
            realistic.
          </p>
          <p>
            In my free time, I enjoy building PCs, cycling, going to the gym, and exploring new technologies -
            especially the possibilities of AI. Most evenings, you'll
            also find our Corgi Into nearby, making sure I don't work alone.
          </p>
          <p>
            My goal is to grow into a UX specialist who designs experiences
            that feel effortless, accessible, and genuinely valuable.
          </p>
        </div>
      </section>

      <section className="about-page__section">
        <div
          className="about-page__section-head about-page__section-head--education scroll-reveal"
          data-case-reveal
        >
          <h2>Education</h2>
        </div>
        <article
          className="about-page__study-card scroll-reveal"
          data-case-reveal
          style={{ "--reveal-delay": "0.08s" }}
        >
          <h3>Tampere University</h3>
          <h4>Bachelor's of science in computing and electrical engineering </h4>
          <ul className="about-page__list">
            <li>Major: Software Engineering</li>
            <li>Minor: Human-Technology Interaction (HTI)</li>
            <li>HTI as major in Master's studies starting in 2026</li>
          </ul>
        </article>
      </section>

      <section className="about-page__section">
        <div
          className="about-page__section-head about-page__section-head--technologies scroll-reveal"
          data-case-reveal
        >
          <h2>Technologies and methods</h2>
        </div>

        <div className="about-page__method-grid">
          <article
            className="about-page__method-card scroll-reveal"
            data-case-reveal
            style={{ "--reveal-delay": "0.06s" }}
          >
            <h3>Design and research</h3>
            <ul className="about-page__list">
              {designResearch.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article
            className="about-page__method-card scroll-reveal"
            data-case-reveal
            style={{ "--reveal-delay": "0.14s" }}
          >
            <h3>Development</h3>
            <ul className="about-page__list">
              {development.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article
            className="about-page__method-card scroll-reveal"
            data-case-reveal
            style={{ "--reveal-delay": "0.22s" }}
          >
            <h3>Other</h3>
            <ul className="about-page__list">
              {other.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
