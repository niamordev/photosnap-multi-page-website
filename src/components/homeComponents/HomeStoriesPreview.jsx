import React from "react";
import { NavLink } from "react-router-dom";

export default function HomeStoriesPreview({ dataStories }) {
  return (
    <section className="section-stories-preview">
      {dataStories.map((story) => {
        if (
          story.id === 1 ||
          story.id === 2 ||
          story.id === 3 ||
          story.id === 4
        )
          return (
            <div className="container-preview">
              <img
                className="img-stories-redirects"
                src={story.illustrationMobile}
                alt=""
              />
              <div className="text-preview">
                <span className="title">{story.title}</span>
                <span className="author">by {story.author}</span>
                <hr />
                <div className="link">
                  <NavLink to="/photosnap-multi-page-website/stories">
                    <a href="" className="read-story">
                      Read Story
                      <img
                        src="../../photosnap-multi-page-website/assets/images/shared/desktop/arrow-white.svg"
                        alt=""
                      />
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          );
      })}
    </section>
  );
}
