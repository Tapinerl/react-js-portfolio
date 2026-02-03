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
                <p className="navbar--name--logo">
                    <span className="navbar--name--bold">Elias Nikkinen</span>
                    <span className="navbar--name--regular"> / Portfolio</span>
                </p>
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
                            to="/"
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
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact"
                            onClick={closeMenu}
                            className="navbar--content"
                        >
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;