import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [homeSection, setHomeSection] = useState("");
    const location = useLocation();

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
            handleScroll();
        };

        const handleScroll = () => {
            if (location.pathname === "/") {
                const heroSection = document.getElementById("heroSection");
                if (heroSection) {
                    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                    const passedHero = window.scrollY >= Math.max(heroBottom - 120, 80);
                    setScrolled(passedHero);
                    return;
                }
            }

            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

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
        <header className="site-header">
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Primary navigation">
            <div className="navbar__inner">
                <div>
                    <a
                        href="/"
                        onClick={(event) => {
                            event.preventDefault();
                            closeMenu();
                            window.location.assign("/");
                        }}
                        className="navbar--name--logo"
                    >
                        <span className="navbar--name--bold navbar--name--jumper">
                            {"Elias Nikkinen".split("").map((char, index) => (
                                <span
                                    key={`${char}-${index}`}
                                    className="navbar--name--letter"
                                    style={{ "--letter-delay": `${index * 40}ms` }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                        <span className="navbar--name--regular"> / Portfolio</span>
                    </a>
                </div>
                <button 
                    type="button"
                    className={`nav__hamburger ${navActive ? "active" : ""}`}
                    onClick={toggleNav}
                    aria-expanded={navActive}
                    aria-controls="navbar-menu"
                    aria-label="Toggle navigation menu"
                >
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
                </button>
                <div id="navbar-menu" className={`navbar--items ${navActive ? "active" : ""}`}>
                    <ul>
                        <li>
                            {isWorkActive ? (
                                <span className="navbar--content is-active" aria-current="page">
                                    Work
                                </span>
                            ) : (
                                <Link
                                    to="/#MyPortfolio"
                                    onClick={closeMenu}
                                    className="navbar--content"
                                >
                                    Work
                                </Link>
                            )}
                        </li>
                        <li>
                            {isAboutActive ? (
                                <span className="navbar--content is-active" aria-current="page">
                                    About
                                </span>
                            ) : (
                                <Link 
                                    to="/about"
                                    onClick={closeMenu}
                                    className="navbar--content"
                                >
                                    About
                                </Link>
                            )}
                        </li>
                        <li>
                            {isContactActive ? (
                                <span className="navbar--content is-active" aria-current="page">
                                    Contact
                                </span>
                            ) : (
                                <Link 
                                    to="/#Contact"
                                    onClick={closeMenu}
                                    className="navbar--content"
                                >
                                    Contact
                                </Link>
                            )}
                        </li>
                        <li className="navbar--socials" aria-label="Social links">
                            <a
                                className="navbar--social-link"
                                href="https://www.linkedin.com/in/elias-nikkinen"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Elias Nikkinen on LinkedIn"
                                onClick={closeMenu}
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 110 4 2 2 0 010-4zM20.5 13.5V20h-3.44v-6c0-1.5-.6-2.5-2-2.5-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1v6h-3.44s.05-9.7 0-10.5H13v1.5c.46-.7 1.3-1.7 3.2-1.7 2.3 0 4.3 1.5 4.3 4.7z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a
                                className="navbar--social-link"
                                href="https://github.com/Tapinerl"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Elias Nikkinen on GitHub"
                                onClick={closeMenu}
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.86 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.67.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.04 1-2.76-.1-.26-.44-1.32.1-2.75 0 0 .82-.27 2.7 1.03a9.1 9.1 0 012.46-.34c.83 0 1.66.12 2.46.34 1.88-1.3 2.7-1.03 2.7-1.03.54 1.43.2 2.49.1 2.75.62.72 1 1.64 1 2.76 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49 3.97-1.36 6.83-5.19 6.83-9.71C22 6.58 17.52 2 12 2z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;
