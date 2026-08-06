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
        <div className="about-page__hero-copy">
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
            I'm Elias, a technology and design graduate from Finland,
            currently exploring where UX, product development, data,
            and software development intersect. I have a Bachelor of Science
            (Tech) in Information Technology and am
            continuing my studies in the Master’s programme in Human-Technology
            Interaction.
          </p>
          <p>
            I’m naturally curious and enjoy understanding how both people
            and technology work. I like combining user research, design,
            and development to create digital experiences that feel clear,
            accessible, and genuinely useful.
          </p>
          <p>
            Outside of design and technology, I spend my time cycling,
            going to the gym, building PCs, exploring AI, and of course
            hanging out with our Corgi, Into!
          </p>
        </div>
        </div>
        <figure
          className="about-page__portrait scroll-reveal scroll-reveal--right"
          data-case-reveal
          style={{ "--reveal-delay": "0.14s" }}
        >
          <img src="/img/profile-pic.png" alt="Elias taking a mirror selfie" />
        </figure>
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
