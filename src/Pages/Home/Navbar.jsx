import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const FLOATING_TOP_RELEASE_Y = 2;
const SCROLL_DIRECTION_EPSILON = 4;
const NAV_REVEAL_DISTANCE = 36;
const TOP_HUE_SHIFT_RANGE = 260;
const TOP_HUE_SHIFT_MAX_BLEND = 0.42;

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navHidden, setNavHidden] = useState(false);
    const [navFloating, setNavFloating] = useState(false);
    const [navHiddenInstant, setNavHiddenInstant] = useState(false);
    const [navTopBlend, setNavTopBlend] = useState(0);
    const [homeSection, setHomeSection] = useState("");
    const lastScrollYRef = useRef(0);
    const navFloatingRef = useRef(false);
    const navHiddenRef = useRef(false);
    const scrollDirectionRef = useRef("down");
    const directionStartYRef = useRef(0);
    const instantHideTimerRef = useRef(null);
    const location = useLocation();

    const getNavbarHeight = () => {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const navbarHeight = parseFloat(rootStyles.getPropertyValue("--navbar-height"));

        return Number.isFinite(navbarHeight) ? navbarHeight : 72;
    };

    const getHideActivationY = () => {
        const navbarHeight = getNavbarHeight();

        if (location.pathname === "/") {
            const heroSection = document.getElementById("heroSection");
            if (heroSection) {
                return heroSection.offsetTop + heroSection.offsetHeight - navbarHeight;
            }
        }

        if (location.pathname === "/about") {
            const educationTitle = document.querySelector(".about-page__section-head--education");
            if (educationTitle) {
                return educationTitle.offsetTop + educationTitle.offsetHeight - navbarHeight;
            }
        }

        if (location.pathname.startsWith("/case-studies/")) {
            const caseStudyHero = document.querySelector(".case-study__hero");
            if (caseStudyHero) {
                return caseStudyHero.offsetTop + caseStudyHero.offsetHeight - navbarHeight;
            }
        }

        return 80;
    };

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        setNavHidden(false);
        setNavFloating(false);
        setNavHiddenInstant(false);
        setNavTopBlend(0);
        navFloatingRef.current = false;
        navHiddenRef.current = false;
        scrollDirectionRef.current = "down";
        directionStartYRef.current = window.scrollY;
        lastScrollYRef.current = window.scrollY;

        const setNavbarHidden = (isHidden) => {
            navHiddenRef.current = isHidden;
            setNavHidden(isHidden);
        };

        const hideNavbarInstantly = () => {
            setNavbarHidden(true);
            setNavHiddenInstant(true);

            if (instantHideTimerRef.current) {
                window.clearTimeout(instantHideTimerRef.current);
            }

            instantHideTimerRef.current = window.setTimeout(() => {
                instantHideTimerRef.current = null;
                setNavHiddenInstant(false);
            }, 90);
        };

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
            handleScroll();
        };

        const handleScroll = () => {
            const currentScrollY = Math.max(window.scrollY, 0);
            const scrollDelta = currentScrollY - lastScrollYRef.current;
            const hideActivationY = Math.max(getHideActivationY(), 80);
            const wasFloating = navFloatingRef.current;
            const canFloatNavbar = wasFloating
                ? currentScrollY > FLOATING_TOP_RELEASE_Y
                : currentScrollY >= hideActivationY;

            if (Math.abs(scrollDelta) > 1) {
                const nextDirection = scrollDelta > 0 ? "down" : "up";
                if (nextDirection !== scrollDirectionRef.current) {
                    scrollDirectionRef.current = nextDirection;
                    directionStartYRef.current = lastScrollYRef.current;
                }
            }

            setNavFloating(canFloatNavbar);
            setNavTopBlend(
                canFloatNavbar
                    ? Math.max(0, Math.min(TOP_HUE_SHIFT_MAX_BLEND, 1 - currentScrollY / TOP_HUE_SHIFT_RANGE))
                    : 0
            );
            navFloatingRef.current = canFloatNavbar;

            if (!canFloatNavbar || navActive) {
                setNavbarHidden(false);
                setNavHiddenInstant(false);
                directionStartYRef.current = currentScrollY;
            } else if (!wasFloating && scrollDelta >= 0) {
                hideNavbarInstantly();
                directionStartYRef.current = currentScrollY;
            } else if (scrollDelta > SCROLL_DIRECTION_EPSILON) {
                setNavbarHidden(true);
                directionStartYRef.current = currentScrollY;
            } else if (
                scrollDelta < SCROLL_DIRECTION_EPSILON * -1 &&
                navHiddenRef.current &&
                directionStartYRef.current - currentScrollY >= NAV_REVEAL_DISTANCE
            ) {
                setNavbarHidden(false);
            }

            lastScrollYRef.current = currentScrollY;

            if (location.pathname === "/") {
                const heroSection = document.getElementById("heroSection");
                if (heroSection) {
                    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                    const passedHero = currentScrollY >= Math.max(heroBottom - 120, 80);
                    setScrolled(canFloatNavbar || passedHero);
                    return;
                }
            }

            setScrolled(canFloatNavbar || currentScrollY > 50);
        };

        handleScroll();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            if (instantHideTimerRef.current) {
                window.clearTimeout(instantHideTimerRef.current);
            }
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, navActive]);

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
        <nav
            className={`navbar ${navFloating ? "is-fixed" : ""} ${scrolled ? "scrolled" : ""} ${navHidden ? "is-hidden" : ""} ${navHiddenInstant ? "is-hidden-instant" : ""}`}
            style={{ "--navbar-top-blend": navTopBlend }}
            aria-label="Primary navigation"
        >
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
        </header>
    );
}

export default Navbar;
