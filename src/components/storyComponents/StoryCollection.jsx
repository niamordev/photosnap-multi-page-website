import React from "react";

export default function StoryCollection({ dataStories }) {
  return (
    <section className="stories__collection">
      {dataStories.map((story) => {
        if (story.id !== 1)
          return (
            <div key={story.id} className="container-preview">
              <img
                className="img-stories-redirects mobile"
                src={story.illustrationMobile}
                alt=""
              />
              <img
                className="img-stories-redirects desktop"
                src={story.illustrationDesktop}
                alt=""
              />
              <div className="text-preview">
                <span className="date small-text">{story.date}</span>
                <span className="title">{story.title}</span>
                <span className="author small-text">by {story.author}</span>
                <hr />
                <div className="link">
                  <div className=" read-story">
                    Read Story
                    <img
                      src="../../photosnap-multi-page-website/assets/images/shared/desktop/arrow-white.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </section>
  );
}
