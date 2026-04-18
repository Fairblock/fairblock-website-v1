import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Header from "./common/Header/Header";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import CApps from "./pages/c-apps/CApps";
import Footer from "./common/Footer/Footer";
import Articles from "./pages/articles/Articles";
import CursorGlow from "./common/CursorGlow";
import ScrollProgress from "./common/ScrollProgress";
import PageTransition from "./common/PageTransition";
import ContactModal from "./common/ContactModal";

// css
import "./App.css";

function App() {
  return (
    <div className="font-maison-neue">
      <BrowserRouter>
        <CursorGlow />
        <ScrollProgress />
        <ContactModal />
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="capps" element={<CApps />} />
            <Route path="articles" element={<Articles />} />
          </Routes>
        </PageTransition>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
