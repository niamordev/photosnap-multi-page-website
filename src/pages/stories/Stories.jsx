import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import StoriesIntro from "../../components/storyComponents/StoriesIntro";
import StoryCollection from "../../components/storyComponents/StoryCollection";

export default function Stories({ dataStories }) {
  return (
    <>
      <Header />
      <main id="stories">
        <StoriesIntro dataStories={dataStories} />
        <StoryCollection dataStories={dataStories} />
      </main>
      <Footer />
    </>
  );
}
