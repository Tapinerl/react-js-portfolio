import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const [homeSection, setHomeSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setHomeSection("");
      return;
    }

    const updateSection = () => {
      setHomeSection(document.body?.dataset?.homeSection || "");
    };

    updateSection();

    const observer = new MutationObserver(updateSection);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-home-section"],
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const isWorkActive = location.pathname === "/" && homeSection === "MyPortfolio";
  const isAboutActive = location.pathname === "/about";
  const isContactActive =
    location.pathname === "/" &&
    (homeSection === "Contact" || homeSection === "Footer");

  return (
    <footer className="footer" id="Footer" data-home-section>
      <div className="footer__inner">
        <nav className="footer__nav" aria-label="Secondary navigation">
          <ul className="footer__nav-list">
            <li>
              {isWorkActive ? (
                <span className="footer__nav-link is-active" aria-current="page">
                  Work
                </span>
              ) : (
                <Link to="/#MyPortfolio" className="footer__nav-link">
                  Work
                </Link>
              )}
            </li>
            <li>
              {isAboutActive ? (
                <span className="footer__nav-link is-active" aria-current="page">
                  About
                </span>
              ) : (
                <Link to="/about" className="footer__nav-link">
                  About
                </Link>
              )}
            </li>
            <li>
              {isContactActive ? (
                <span className="footer__nav-link is-active" aria-current="page">
                  Contact
                </span>
              ) : (
                <Link to="/#Contact" className="footer__nav-link">
                  Contact
                </Link>
              )}
            </li>
            <li>
              <a
                className="footer__nav-link"
                href="/Elias-CV-2026.pdf"
                download="Elias-CV-2026.pdf"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__social" aria-label="Social links">
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/in/elias-nikkinen"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer__social-link"
            href="https://github.com/Tapinerl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>

    </footer>
  );
}
