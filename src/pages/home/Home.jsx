import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeIntro from "../../components/homeComponents/HomeIntro";
import HomeOutro from "../../components/homeComponents/HomeOutro";
import HomeStoriesPreview from "../../components/homeComponents/HomeStoriesPreview";
import HomeStoriesRedirects from "../../components/homeComponents/HomeStoriesRedirects";
import dataStories from "../../data/dataStories.json";

export default function Home({dataStories}) {

  return (
    <>
      <Header />
      <main id="home">
        <HomeIntro />
        <HomeStoriesRedirects />
        <HomeStoriesPreview dataStories={dataStories} />
        <HomeOutro />
      </main>

      <Footer />
    </>
  );
}
