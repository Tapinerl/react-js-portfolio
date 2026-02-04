import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../data/index.json";

export default function MyPortfolio() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const cards = Array.from(sectionEl.querySelectorAll(".portfolio--section--card"));
        const hasAnimated = window.sessionStorage.getItem("portfolioAnimated") === "true";
        if (hasAnimated) {
            cards.forEach((card) => card.classList.add("is-visible"));
            return;
        }
        const revealVisibleCards = () => {
            if (document.body.classList.contains("portfolio--locked")) return;
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
                if (inView) {
                    card.classList.add("is-visible");
                }
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (document.body.classList.contains("portfolio--locked")) return;
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
        );

        cards.forEach((card) => observer.observe(card));
        const handleUnlock = () => revealVisibleCards();
        window.addEventListener("portfolio:unlock", handleUnlock);

        revealVisibleCards();
        return () => {
            window.removeEventListener("portfolio:unlock", handleUnlock);
            observer.disconnect();
        };
    }, []);

    return (
    <section className="portfolio--section" id="MyPortfolio" ref={sectionRef}>

        <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index)=>(
                <Link
                    key={index}
                    to={`/case-studies/${item.id}`}
                    className="portfolio--card-link"
                    style={{ "--reveal-delay": `${index * 0.3}s` }}
                >
                    <div className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt={item.title}></img>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            {item.tags?.length ? (
                                <div className="portfolio--tags">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="portfolio--tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                            <p className="text-sm portfolio--link">
                                View
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="portfolio--other-work">
            <p className="portfolio--other-work__title">Other work</p>
            <p className="portfolio--other-work__text">
                Final software engineering course project, where i worked as a junior developer and designed the dashboard. Then that the dashboard got MVP from the customer and final voting it got shared number two spot of best projects.
            </p>
        </div>
        <div>
                <button className="btn btn-github" type="button"
    onClick={(e) => {e.preventDefault();
      window.location.href='https://github.com/';
      }}> Visit My GitHub

                </button>
            </div>
    </section>
    );
}
