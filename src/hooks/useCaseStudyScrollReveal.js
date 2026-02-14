import { useEffect } from "react";

export default function useCaseStudyScrollReveal(rootRef) {
    useEffect(() => {
        const rootEl = rootRef.current;
        if (!rootEl) return;

        const revealTargets = Array.from(rootEl.querySelectorAll("[data-case-reveal]"));
        if (!revealTargets.length) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const hasObserver = "IntersectionObserver" in window;

        if (prefersReducedMotion || !hasObserver) {
            revealTargets.forEach((target) => target.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        target.classList.add("is-visible");
                        return;
                    }

                    if (entry.intersectionRatio <= 0.01) {
                        target.classList.remove("is-visible");
                    }
                });
            },
            {
                threshold: [0.01, 0.16],
                rootMargin: "0px 0px -10% 0px",
            }
        );

        revealTargets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, [rootRef]);
}
