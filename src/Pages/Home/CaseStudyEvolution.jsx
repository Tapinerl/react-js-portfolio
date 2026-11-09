import { useState } from "react";
import CaseStudyImage from "./CaseStudyImage";
import "./CaseStudyEvolution.css";

export default function CaseStudyEvolution({ stages, label, enlarge = false, imageCaption, imageSizes }) {
    const [stageIndex, setStageIndex] = useState(0);
    const stage = stages[stageIndex];
    const stageNumber = String(stageIndex + 1).padStart(2, "0");

    return (
        <div className="case-study-evolution" role="group" aria-label={label}>
            <div className="case-study-evolution__status" aria-live="polite" aria-atomic="true">
                <p className="case-study-evolution__title"><strong>{stageNumber} / {String(stages.length).padStart(2, "0")} &mdash; {stage.title}</strong></p>
                <p>{stage.description}</p>
            </div>
            <CaseStudyImage enlarge={enlarge}
                image={{ src: stage.src }}
                alt={stage.alt || `${label}: ${stage.title.toLowerCase()}`}
                caption={imageCaption}
                sizes={imageSizes}
                className="case-study-evolution__image"
            />
            <div className="case-study-evolution__controls">
                <button type="button" disabled={stageIndex === 0} onClick={() => setStageIndex(stageIndex - 1)} aria-label="Previous design stage">Previous</button>
                <button type="button" disabled={stageIndex === stages.length - 1} onClick={() => setStageIndex(stageIndex + 1)} aria-label="Next design stage">Next</button>
            </div>
            <ol className="case-study-evolution__stages" aria-label="Choose a design stage">
                {stages.map((item, index) => (
                    <li key={item.src}>
                        <button
                            type="button"
                            aria-label={`Stage ${index + 1}: ${item.title}`}
                            aria-current={stageIndex === index ? "step" : undefined}
                            onClick={() => setStageIndex(index)}
                        >{String(index + 1).padStart(2, "0")}</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

