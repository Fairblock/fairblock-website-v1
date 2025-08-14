import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Header from "./common/Header/Header";
import Home from "./pages/home/Home";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Ecosystem from "./pages/ecosystem/Ecosystem";
import CApps from "./pages/c-apps/CApps";
import Footer from "./common/Footer/Footer";
import Articles from "./pages/articles/Articles";

// css
import "./App.css";

function App() {
  return (
    <div className="font-marlide">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="ecosystem" element={<Ecosystem />} />
          <Route path="c-apps" element={<CApps />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
