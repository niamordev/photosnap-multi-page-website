import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Stories from "./pages/stories/Stories";
import "./styles/style.css";
import data from "./data/dataStories.json";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const [dataStories, setDataStories] = useState([]);

  useEffect(() => {
    setDataStories(data);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/photosnap-multi-page-website/" element={<Home dataStories={dataStories} />} />
        <Route
          path="/photosnap-multi-page-website/stories"
          element={<Stories dataStories={dataStories} />}
        />
        <Route path="/photosnap-multi-page-website/features" element={<Features />} />
        <Route path="/photosnap-multi-page-website/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
