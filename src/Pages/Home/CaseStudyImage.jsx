export default function CaseStudyImage({ image, alt, caption, className = "case-study__structure-image", enlarge = true }) {
    if (!image?.src) return null;

    return (
        <figure className={className}>
            {enlarge ? (
            <a className="budgit-content__image-link" href={image.src} target="_blank" rel="noreferrer">
                <img src={image.src} alt={image.alt || alt} loading="lazy" />
                <span className="budgit-content__image-hint">View full-size image (opens in a new tab)</span>
            </a>
            ) : (
                <img src={image.src} alt={image.alt || alt} loading="lazy" />
            )}
            {(image.caption || caption) && (
                <figcaption className="case-study__note">{image.caption || caption}</figcaption>
            )}
        </figure>
    );
}

