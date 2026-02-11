import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../../data/index.json";

const getTagToneClass = (tag = "") => {
    const normalizedTag = tag.trim().toLowerCase();

    if (normalizedTag === "ux/ui" || normalizedTag === "ui") {
        return "tag-tone--green";
    }
    if (normalizedTag === "case study") {
        return "tag-tone--blue";
    }
    if (normalizedTag === "programming") {
        return "tag-tone--gray";
    }
    if (normalizedTag === "usability") {
        return "tag-tone--yellow";
    }
    if (normalizedTag === "wip") {
        return "tag-tone--red";
    }

    return "tag-tone--default";
};

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
                                <p className="text-md portfolio--desc">{item.description}</p>
                            </div>
                            {item.tags?.length ? (
                                <div className="portfolio--tags">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`portfolio--tag ${getTagToneClass(tag)}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
    );
}
