import React from "react";
import { NavLink } from "react-router-dom";


export default function HomeStoriesRedirects() {
  return (
    <div className="stories-pages-redirects-section">
      <div className="stories-page-redirects">
        <img
          className="img-stories-redirects mobile"
          src="../../photosnap-multi-page-website/assets/images/home/mobile/beautiful-stories.jpg"
          alt=""
        />
        <img
          className="img-stories-redirects desktop"
          src="../../photosnap-multi-page-website/assets/images/home/desktop/beautiful-stories.jpg"
          alt=""
        />
        <div className="text-box">
          <h1>Beautiful stories every time</h1>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <NavLink to="/photosnap-multi-page-website/stories">
          <a href="" className="btn__arrow">
            <span className="text-black">View the Stories</span>
            <img src="../../photosnap-multi-page-website/assets/images/shared/desktop/arrow.svg" alt="" />
          </a>
          </NavLink>
        </div>
      </div>

      <div className="stories-page-redirects stories-container2">
        <img
          className="img-stories-redirects mobile"
          src="../../photosnap-multi-page-website/assets/images/home/mobile/designed-for-everyone.jpg"
          alt=""
        />
        <img
          className="img-stories-redirects desktop"
          src="../../photosnap-multi-page-website/assets/images/home/desktop/designed-for-everyone.jpg"
          alt=""
        />
        <div className="text-box">
          <h1>Designed for everyone</h1>
          <p>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <NavLink to="/photosnap-multi-page-website/stories">
          <a href="" className="btn__arrow">
            <span className="text-black">View the Stories</span>
            <img src="../../photosnap-multi-page-website/assets/images/shared/desktop/arrow.svg" alt="" />
          </a>
        </NavLink>
        </div>
      </div>
    </div>
  );
}
