import Beams from "../../components/ui/Beams";

export default function HeroSection() {
    const scrollToContact = () => {
        const target = document.getElementById("Contact");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="heroSection" className="hero--section" data-home-section>
            <div className="hero--beams" aria-hidden="true">
                <Beams
                    beamWidth={1.32}
                    beamHeight={21}
                    beamNumber={20}
                    beamSpacing={0.28}
                    beamColor="#0b1f4d"
                    lightColor="#89a4b6"
                    speed={2.6}
                    noiseIntensity={4.85}
                    scale={0.2}
                    rotation={131}
                    cameraZ={26}
                    cameraFov={42}
                />
            </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h1
                        className="hero--section--title scroll-reveal scroll-reveal--up"
                        data-animate-on-scroll
                    >
                        <span>Elias</span>
                        <span>Nikkinen</span>
                    </h1>
                    <div className="hero--lower">
                        <p
                            className="hero--section--description scroll-reveal"
                            data-animate-on-scroll
                            style={{ "--reveal-delay": "0.12s" }}
                        >
                            <span>UX-focused IT graduate combining human-centred design with</span>
                            <span>programming and technical problem-solving.</span>
                        </p>
                        <div
                            className="hero--actions scroll-reveal"
                            data-animate-on-scroll
                            style={{ "--reveal-delay": "0.22s" }}
                        >
                            <button
                                className="hero--btn hero--btn--shine btn-shine"
                                onClick={scrollToContact}
                            >
                                <span>Contact Me</span>
                            </button>
                            <a
                                className="hero--btn hero--btn--download"
                                href="/Elias-CV-2026.pdf"
                                download="Elias-CV-2026.pdf"
                            >
                                <span className="hero--btn--download__content">Download CV (PDF)</span>
                            </a>
                            <div className="hero--socials" role="group" aria-label="Social links">
                                <a
                                    className="hero--social-link"
                                    href="https://www.linkedin.com/in/elias-nikkinen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Elias Nikkinen on LinkedIn"
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M6.94 8.5V20H3.5V8.5h3.44zM5.22 3.5a2 2 0 110 4 2 2 0 010-4zM20.5 13.5V20h-3.44v-6c0-1.5-.6-2.5-2-2.5-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1v6h-3.44s.05-9.7 0-10.5H13v1.5c.46-.7 1.3-1.7 3.2-1.7 2.3 0 4.3 1.5 4.3 4.7z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="hero--social-link"
                                    href="https://github.com/Tapinerl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Elias Nikkinen on GitHub"
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
                </div>
            </div>
        </section>

    )
}
