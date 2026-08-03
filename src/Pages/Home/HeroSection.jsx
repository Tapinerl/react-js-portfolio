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
                    <p
                        className="hero--section--description scroll-reveal"
                        data-animate-on-scroll
                        style={{ "--reveal-delay": "0.12s" }}
                    >
                        UX-focused IT graduate combining human-centred design with programming and technical problem-solving.
                    </p>
                </div>
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
                </div>
            </div>
        </section>

    )
}
