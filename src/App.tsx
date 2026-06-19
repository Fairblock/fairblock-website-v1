import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages & components
import Header from "./common/Header/Header";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import CApps from "./pages/c-apps/CApps";
import Footer from "./common/Footer/Footer";
import Articles from "./pages/articles/Articles";
import SolutionDetail from "./pages/solutions/SolutionDetail";
import CursorGlow from "./common/CursorGlow";
import ScrollProgress from "./common/ScrollProgress";
import PageTransition from "./common/PageTransition";

// css
import "./App.css";

function App() {
  return (
    <div className="font-maison-neue">
      <BrowserRouter>
        <CursorGlow />
        <ScrollProgress />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="capps" element={<CApps />} />
            <Route path="articles" element={<Articles />} />
            <Route path="solutions" element={<Navigate to="/solutions/stablecoin-payments" replace />} />
            <Route path="solutions/:solutionId" element={<SolutionDetail />} />
          </Routes>
        </PageTransition>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
