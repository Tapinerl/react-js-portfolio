import { useRef } from "react";
import useCaseStudyScrollReveal from "../../hooks/useCaseStudyScrollReveal";
import Footer from "./Footer";
import ResponsiveImage from "../../components/ResponsiveImage";

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
            Hi, I'm Elias! I'm a <strong>Human–Technology Interaction (HTI) Master's student at Tampere University</strong>, with a Bachelor's degree in Information Technology where I majored in software engineering.
          </p>
          <p>
            I'm curious about how people and technology work together, and especially interested in where <strong>UX, software development, data and AI</strong> meet. I enjoy understanding not just how something should look and feel, but also how it works behind the scenes and how it can be improved through research and data-driven decisions.
          </p>
          <p>
            I love learning new technologies, experimenting with ideas and working with people from different backgrounds. Whether I'm designing an interface, writing code or exploring a new tool, I enjoy the process of figuring things out and turning ideas into something useful.
          </p>
          <p>
            Outside of technology, you'll probably find me cycling, at the gym, tinkering with PCs or spending time with our Corgi, Into!
          </p>
        </div>
        </div>
        <figure
          className="about-page__portrait scroll-reveal scroll-reveal--right"
          data-case-reveal
          style={{ "--reveal-delay": "0.14s" }}
        >
          <ResponsiveImage src="/img/profile-pic.png" alt="Elias taking a mirror selfie" loading="eager" sizes="(max-width: 900px) calc(100vw - 40px), 500px" />
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
