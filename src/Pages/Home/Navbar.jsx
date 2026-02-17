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
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
