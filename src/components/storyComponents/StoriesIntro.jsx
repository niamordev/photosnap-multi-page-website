import React from "react";

export default function StoriesIntro({ dataStories }) {
  return (
    <section className="stories__intro">
      {dataStories.map((story) => {
        if (story.id === 1)
          return (
            <div className="stories-container">
              <img
                className="stories__intro__img hero-mobile"
                src={story.illustrationMobile}
                alt=""
              />
              <img
                className="stories__intro__img hero-tablet"
                src={story.illustrationTablet}
                alt=""
              />
              <img
                className="stories__intro__img hero-desktop"
                src={story.illustrationDesktop}
                alt=""
              />

              <div className="stories__intro__box-content-text">
                <span className="subtitle">Last Month's Featured Story</span>
                <h1>Hazy Full Moon of Appalacia</h1>
                <span className="date-author">  <span className="date">March 2nd 2020</span>
                  <span className="author"> by John Appleseed</span>
                </span>
                <p>
                  The dissected plateau area, while not actually made up of
                  geological mountains, is popularly called "mountains,"
                  especially in eastern Kentucky and West Virginia, and while
                  the ridges are not high, the terrain is extremely rugged.
                </p>
                <a href="" className="btn__arrow">
                  <span className="text-gray">READ STORY</span>
                  <img
                    src="../../assets/images/shared/desktop/arrow-white.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          );
      })}
    </section>
  );
}
