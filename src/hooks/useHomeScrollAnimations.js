import { useEffect, useRef, useState } from "react";

const SECTION_THRESHOLDS = [0.15, 0.35, 0.55, 0.75];
const PORTFOLIO_ENTER_RATIO = 0.12;
const PORTFOLIO_EXIT_RATIO = 0.06;
const PORTFOLIO_STAGGER_MS = 150;

export default function useHomeScrollAnimations(rootRef) {
    const [activeSection, setActiveSection] = useState(null);
    const lastScrollYRef = useRef(0);
    const scrollDirectionRef = useRef("down");

    useEffect(() => {
        const rootEl = rootRef.current;
        if (!rootEl) return;

        const animatedTargets = Array.from(rootEl.querySelectorAll("[data-animate-on-scroll]"));
        const portfolioCards = animatedTargets.filter((target) => target.hasAttribute("data-portfolio-card"));
        const generalAnimatedTargets = animatedTargets.filter((target) => !target.hasAttribute("data-portfolio-card"));
        const sectionTargets = Array.from(rootEl.querySelectorAll("[data-home-section]"));
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const hasObserver = "IntersectionObserver" in window;
        const portfolioRatios = new Map();
        const portfolioTimers = new Map();

        lastScrollYRef.current = window.scrollY;
        const handleScrollDirection = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollYRef.current + 1) {
                scrollDirectionRef.current = "down";
            } else if (currentY < lastScrollYRef.current - 1) {
                scrollDirectionRef.current = "up";
            }

            lastScrollYRef.current = currentY;
        };

        window.addEventListener("scroll", handleScrollDirection, { passive: true });

        if (sectionTargets.length && sectionTargets[0].id) {
            setActiveSection((previous) => previous || sectionTargets[0].id);
        }

        if (!hasObserver || prefersReducedMotion) {
            animatedTargets.forEach((target) => target.classList.add("is-visible"));
            return () => {
                window.removeEventListener("scroll", handleScrollDirection);
            };
        }

        const queuePortfolioReveal = () => {
            const direction = scrollDirectionRef.current;
            const cardsToReveal = portfolioCards
                .filter((card) => {
                    const ratio = portfolioRatios.get(card) || 0;
                    const isQueued = card.dataset.revealQueued === "true";
                    const isVisible = card.classList.contains("is-visible");
                    return ratio >= PORTFOLIO_ENTER_RATIO && !isQueued && !isVisible;
                })
                .sort((a, b) => {
                    const orderA = Number(a.dataset.portfolioOrder || 0);
                    const orderB = Number(b.dataset.portfolioOrder || 0);
                    return direction === "up" ? orderB - orderA : orderA - orderB;
                });

            cardsToReveal.forEach((card, index) => {
                const delay = index * PORTFOLIO_STAGGER_MS;
                card.dataset.revealQueued = "true";
                card.style.removeProperty("--reveal-delay");
                const timer = window.setTimeout(() => {
                    card.classList.add("is-visible");
                    card.dataset.revealQueued = "false";
                    portfolioTimers.delete(card);
                }, delay);
                portfolioTimers.set(card, timer);
            });
        };

        const generalRevealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.intersectionRatio >= 0.2) {
                        target.classList.add("is-visible");
                        return;
                    }

                    if (entry.intersectionRatio <= 0.02) {
                        target.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: [0, 0.02, 0.2],
                rootMargin: "0px 0px -8% 0px",
            }
        );

        generalAnimatedTargets.forEach((target) => generalRevealObserver.observe(target));

        const portfolioRevealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const card = entry.target;
                    portfolioRatios.set(card, entry.intersectionRatio);

                    if (entry.intersectionRatio <= PORTFOLIO_EXIT_RATIO) {
                        const existingTimer = portfolioTimers.get(card);
                        if (existingTimer) {
                            window.clearTimeout(existingTimer);
                            portfolioTimers.delete(card);
                        }
                        card.dataset.revealQueued = "false";
                        card.classList.remove("is-visible");
                        card.style.removeProperty("--reveal-delay");
                    }
                });

                queuePortfolioReveal();
            },
            {
                threshold: [0, PORTFOLIO_EXIT_RATIO, PORTFOLIO_ENTER_RATIO, 0.35, 0.55],
                rootMargin: "0px 0px -6% 0px",
            }
        );

        portfolioCards.forEach((card) => {
            card.dataset.revealQueued = "false";
            portfolioRatios.set(card, 0);
            portfolioRevealObserver.observe(card);
        });

        const sectionRatios = new Map();
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.target.id) return;
                    sectionRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
                });

                let nextSection = null;
                let bestRatio = 0;

                sectionTargets.forEach((section) => {
                    const ratio = sectionRatios.get(section.id) || 0;
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        nextSection = section.id;
                    }
                });

                if (!nextSection) {
                    const focusLine = window.innerHeight * 0.45;
                    const matchedSection = sectionTargets.find((section) => {
                        const rect = section.getBoundingClientRect();
                        return rect.top <= focusLine && rect.bottom >= focusLine;
                    });

                    nextSection = matchedSection?.id || sectionTargets[sectionTargets.length - 1]?.id || null;
                }

                if (nextSection) {
                    setActiveSection((previous) => (previous === nextSection ? previous : nextSection));
                }
            },
            {
                threshold: SECTION_THRESHOLDS,
                rootMargin: "-15% 0px -40% 0px",
            }
        );

        sectionTargets.forEach((section) => {
            if (!section.id) return;
            sectionRatios.set(section.id, 0);
            sectionObserver.observe(section);
        });

        return () => {
            window.removeEventListener("scroll", handleScrollDirection);
            generalRevealObserver.disconnect();
            portfolioRevealObserver.disconnect();
            portfolioTimers.forEach((timerId) => window.clearTimeout(timerId));
            portfolioCards.forEach((card) => {
                delete card.dataset.revealQueued;
            });
            sectionObserver.disconnect();
        };
    }, [rootRef]);

    useEffect(() => {
        if (!activeSection) return;
        document.body.dataset.homeSection = activeSection;
    }, [activeSection]);

    useEffect(() => {
        return () => {
            delete document.body.dataset.homeSection;
        };
    }, []);

    return activeSection;
}
