import { useEffect, useRef } from "react";

export default function HeroSection() {
    const hasAutoScrolled = useRef(false);
    const heroRef = useRef(null);
    const wheelProgress = useRef(0);
    const WHEEL_TRIGGER = 240;
    const hasAnimatedRef = useRef(false);
    const scrollToPortfolio = (behavior = "smooth") => {
        const target = document.getElementById("MyPortfolio");
        if (target) {
            target.scrollIntoView({ behavior, block: "start" });
        }
    };

    const triggerPortfolioReveal = () => {
        if (hasAutoScrolled.current) return;
        const target = document.getElementById("MyPortfolio");
        if (!target) return;

        hasAutoScrolled.current = true;
        hasAnimatedRef.current = true;
        window.sessionStorage.setItem("portfolioAnimated", "true");
        document.body.classList.add("page--lock");
        target.classList.add("portfolio--reveal");

        const handleRevealEnd = () => {
            target.classList.remove("portfolio--reveal");
            document.body.classList.remove("page--lock");
            document.body.classList.remove("portfolio--locked");
            wheelProgress.current = 0;
            scrollToPortfolio("auto");
            window.dispatchEvent(new Event("portfolio:unlock"));
        };

        target.addEventListener("animationend", handleRevealEnd, { once: true });
    };

    const scrollToContact = () => {
        const target = document.getElementById("Contact");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const hasAnimated = window.sessionStorage.getItem("portfolioAnimated") === "true";
        hasAnimatedRef.current = hasAnimated;
        if (!hasAnimated && window.scrollY <= 5) {
            document.body.classList.add("portfolio--locked");
        } else {
            hasAutoScrolled.current = true;
            document.body.classList.remove("portfolio--locked");
        }
        const handleWheel = (event) => {
            const heroEl = heroRef.current;
            if (!heroEl) return;
            const rect = heroEl.getBoundingClientRect();
            const heroInView = rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4;

            if (hasAnimatedRef.current) return;
            if (event.deltaY < 0) {
                wheelProgress.current = Math.max(0, wheelProgress.current + event.deltaY);
                return;
            }

            if (event.deltaY > 0 && heroInView && !hasAutoScrolled.current) {
                event.preventDefault();
                wheelProgress.current += event.deltaY;
            }

            if (heroInView && !hasAutoScrolled.current && wheelProgress.current >= WHEEL_TRIGGER) {
                triggerPortfolioReveal();
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            document.body.classList.remove("portfolio--locked");
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <section id="heroSection" className="hero--section" ref={heroRef}>
            <div className="hero--orbs" aria-hidden="true">
                <span className="hero--orb hero--orb--green"></span>
                <span className="hero--orb hero--orb--blue"></span>
            </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1 className="hero--section--title">
                        Elias Nikkinen 
                    </h1>
                    <p className="hero--section--description"> 
                        Aspiring UX Design Student With
                        <br/>Understanding Of Programming
                        <br/>And Technologies
                    </p>
                </div>
                <div className="hero--actions">
                    <button
                        className="hero--btn hero--btn--primary"
                        onClick={scrollToContact}
                    >
                        Contact Me
                    </button>
                    <button className="hero--btn hero--btn--ghost">Download CV (PDF)</button>
                    <div className="hero--social">
                        <a
                            className="hero--social__link"
                            href="https://www.linkedin.com/in/elias-nikkinen"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 110 4 2 2 0 010-4zM20.5 13.5V20h-3.44v-6c0-1.5-.6-2.5-2-2.5-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1v6h-3.44s.05-9.7 0-10.5H13v1.5c.46-.7 1.3-1.7 3.2-1.7 2.3 0 4.3 1.5 4.3 4.7z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                        <a
                            className="hero--social__link"
                            href="https://github.com/Tapinerl"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.86 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.67.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.04 1-2.76-.1-.26-.44-1.32.1-2.75 0 0 .82-.27 2.7 1.03a9.1 9.1 0 012.46-.34c.83 0 1.66.12 2.46.34 1.88-1.3 2.7-1.03 2.7-1.03.54 1.43.2 2.49.1 2.75.62.72 1 1.64 1 2.76 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49 3.97-1.36 6.83-5.19 6.83-9.71C22 6.58 17.52 2 12 2z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <button
                className="hero--scroll"
                type="button"
                onClick={triggerPortfolioReveal}
                aria-label="Scroll down for projects"
            >
                <span className="hero--scroll__text">Scroll Down</span>
                <span className="hero--scroll__arrow" aria-hidden="true"></span>
            </button>
        </section>

    )
}
