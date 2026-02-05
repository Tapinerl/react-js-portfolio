import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutPage from "./Pages/Home/AboutPage";
import CaseStudy from "./Pages/Home/CaseStudy";

function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositionsRef = React.useRef(new Map());
  const prevKeyRef = React.useRef(null);

  React.useEffect(() => {
    if (prevKeyRef.current) {
      scrollPositionsRef.current.set(prevKeyRef.current, window.scrollY);
    }

    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    } else if (navigationType === "POP") {
      const savedY = scrollPositionsRef.current.get(location.key);
      if (typeof savedY === "number") {
        window.scrollTo(0, savedY);
      }
    } else {
      window.scrollTo(0, 0);
    }

    prevKeyRef.current = location.key;
  }, [location, navigationType]);

  return null;
}

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <ScrollManager />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies/:id" element={<CaseStudy />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
