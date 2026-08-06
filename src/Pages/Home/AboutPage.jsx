import { useRef } from "react";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";
import Footer from "./Footer";

export default function AboutPage() {
  const aboutPageRef = useRef(null);
  useCaseStudyScrollReveal(aboutPageRef);

  const education = [
    {
      school: "Tampere University",
      degree: "Master of Science in Technology - Information Technology",
      year: "2026 - present",
      details: [
        "Major in Human-Technology Interaction",
        "Minor in Information Analytics",
      ],
    },
    {
      school: "Tampere University",
      degree: "Bachelor of Science in Technology - Information Technology",
      year: "Completed 2026",
      details: [
        "Major in Software Engineering",
        "Minor in Human-Technology Interaction",
      ],
    },
    {
      school: "Helsinki Upper Secondary School of Natural Sciences",
      degree: "Finnish Matriculation Examination",
      year: "Completed 2018",
      details: [],
    },
  ];

  const skills = [
    {
      title: "Methods & Collaboration",
      items: [
        "Agile",
        "Scrum",
        "Kanban",
        "sprint planning",
        "requirement gathering",
        "stakeholder collaboration",
        "design-development handoff",
        "data-informed design",
        "code reviews",
      ],
    },
    {
      title: "Design & Research",
      items: [
        "Figma",
        "wireframing",
        "prototyping",
        "interaction design",
        "user interviews",
        "usability testing",
        "personas",
        "user journeys",
        "accessibility-aware design",
      ],
    },
    {
      title: "Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "PHP (CakePHP)",
        "Python",
        "C++",
        "Git",
        "GitLab",
        "REST APIs",
      ],
    },
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
        <div className="about-page__education-list">
          {education.map((item, index) => (
            <article
              className="about-page__study-card scroll-reveal"
              data-case-reveal
              style={{ "--reveal-delay": `${0.08 + index * 0.08}s` }}
              key={`${item.school}-${item.degree}`}
            >
              <div className="about-page__education-marker" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M3 8.2 12 4l9 4.2-9 4.2L3 8.2Z" />
                  <path d="M7 10.3v4.5c0 1.7 2.2 3.2 5 3.2s5-1.5 5-3.2v-4.5" />
                  <path d="M19 9.2v5.4" />
                </svg>
              </div>
              <div className="about-page__education-content">
                <p className="about-page__school">{item.school}</p>
                <h3>{item.degree}</h3>
                <p className="about-page__education-year">{item.year}</p>
                {item.details.length ? (
                  <ul className="about-page__education-details">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__section">
        <div
          className="about-page__section-head about-page__section-head--technologies scroll-reveal"
          data-case-reveal
        >
          <h2>Skills</h2>
        </div>

        <div className="about-page__method-grid">
          {skills.map((group, index) => (
            <article
              className="about-page__method-card scroll-reveal"
              data-case-reveal
              style={{ "--reveal-delay": `${0.06 + index * 0.08}s` }}
              key={group.title}
            >
              <h3>{group.title}</h3>
              <ul className="about-page__skill-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
