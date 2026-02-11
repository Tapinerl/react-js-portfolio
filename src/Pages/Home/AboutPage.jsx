export default function AboutPage() {
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
    <main className="about-page">
      <section className="about-page__hero">
        <p className="about-page__eyebrow">About</p>
        <h1 className="about-page__title">Elias Nikkinen</h1>
        <p className="about-page__lead">
          I am a Computer Engineering student at Tampere University, currently
          finishing my Bachelor&apos;s degree and aiming to graduate this spring.
          I have completed my minor studies in Human-Technology Interaction
          (HTI), and in 2026 I will continue my studies with HTI as my major.
        </p>

        <div className="about-page__intro-grid">
          <article className="about-page__panel">
            <h2>Background</h2>
            <p>
              My background sits at the intersection of engineering and
              human-centered design. I started in Software Engineering, and
              through HTI studies I discovered a strong interest in UX/UI design
              and research.
            </p>
            <p>
              Understanding how people interact with technology and designing
              systems that feel clear, accessible, and intuitive is what
              motivates my work.
            </p>
          </article>

          <article className="about-page__panel">
            <h2>How I work</h2>
            <p>
              My design process is iterative by nature. I start from research
              and real user needs, explore ideas through rapid iterations, and
              refine solutions based on feedback.
            </p>
            <p>
              I enjoy working through complexity and ambiguity, improving
              designs step by step instead of aiming for perfection on the first
              attempt.
            </p>
          </article>
        </div>

        <p className="about-page__focus">
          I am especially interested in usability, accessibility, and
          interaction design. I also have experience with AI-powered concepts
          from both technical and UX perspectives.
        </p>
      </section>

      <section className="about-page__section">
        <div className="about-page__section-head">
          <h2>Studies</h2>
        </div>
        <article className="about-page__study-card">
          <h3>Bachelor of Science (Tech) - Computer Engineering</h3>
          <p>Tampere University</p>
          <ul className="about-page__list">
            <li>Major: Software Engineering</li>
            <li>Minor: Human-Technology Interaction (HTI)</li>
            <li>HTI as major starting in 2026</li>
          </ul>
        </article>
      </section>

      <section className="about-page__section">
        <div className="about-page__section-head">
          <h2>Technologies and methods</h2>
        </div>

        <div className="about-page__method-grid">
          <article className="about-page__method-card">
            <h3>Design and research</h3>
            <ul className="about-page__list">
              {designResearch.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="about-page__method-card">
            <h3>Development</h3>
            <ul className="about-page__list">
              {development.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="about-page__method-card">
            <h3>Other</h3>
            <ul className="about-page__list">
              {other.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-page__section about-page__section--closing">
        <div className="about-page__closing-card">
          <h2>What I bring</h2>
          <p>
            I combine software engineering foundations with a strong user-focused
            mindset. My goal is to build digital products that are technically
            solid and genuinely usable for real people.
          </p>
          <p>
            I am motivated by collaboration across design and development, and I
            keep learning new tools and approaches that improve both product
            quality and user experience.
          </p>
        </div>
      </section>
    </main>
  );
}

