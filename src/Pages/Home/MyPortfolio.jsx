import { Link } from "react-router-dom";
import data from "../../data/index.json";
import { getTagToneClass } from "./caseStudyUtils";

export default function MyPortfolio() {
    return (
    <section className="portfolio--section" id="MyPortfolio" data-home-section>

        <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index)=>(
                <Link
                    key={index}
                    to={`/case-studies/${item.id}`}
                    className="portfolio--card-link"
                >
                    <div
                        className="portfolio--section--card scroll-reveal"
                        data-animate-on-scroll
                        data-portfolio-card
                        data-portfolio-order={index}
                    >
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
