import React, { useEffect, useState } from "react";
import dataFeatures from "../../data/dataFeatures.json";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FeaturesAllFeatures from "../../components/featuresComponents/FeaturesAllFeatures";
import FeaturesIntro from "../../components/featuresComponents/FeaturesIntro";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    setFeatures(dataFeatures);
  }, []);
  return (
    <>
      <Header />
      <main id="features">
        <FeaturesIntro />
        <FeaturesAllFeatures features={features} />
      </main>
      <Footer />
    </>
  );
}
