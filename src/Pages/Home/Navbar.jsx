import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
        };

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
            <div 
                className={`nav__hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </div>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link
                            to="/#MyPortfolio"
                            onClick={closeMenu}
                            className="navbar--content"
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about"
                            onClick={closeMenu}
                            className="navbar--content"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/#Contact"
                            onClick={closeMenu}
                            className="navbar--content"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
