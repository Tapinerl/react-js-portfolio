import { useRef } from "react";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import useHomeScrollAnimations from "../../../hooks/useHomeScrollAnimations";
export default function Home () {
    const homeRef = useRef(null);
    const activeSection = useHomeScrollAnimations(homeRef);

    return( 
        <main ref={homeRef} data-active-section={activeSection || ""}>
            <HeroSection />
            <MyPortfolio />
            <ContactMe />
            <Footer />
        </main>
    )
    
}
