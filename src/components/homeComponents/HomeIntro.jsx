import React from "react";

export default function HomeIntro() {
  return (
    <div className="home__intro hero">
      <img
        className="home-mobile-hero hero"
        src="../../photosnap-multi-page-website/assets/images/home/mobile/create-and-share.jpg"
        alt=""
      />
      <img
        className="home-tablet-hero hero"
        src="../../photosnap-multi-page-website/assets/images/home/tablet/create-and-share.jpg"
        alt=""
      />
      <img
        className="home-desktop-hero hero"
        src="../../photosnap-multi-page-website/assets/images/home/desktop/create-and-share.jpg"
        alt=""
      />
      <div className="box">
        <h1>Create and share your photo Stories</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <a href="" className="btn__arrow">
          <span className="text-white">Get an invite</span>
          <img
            src="../../photosnap-multi-page-website/assets/images/shared/desktop/arrow-white.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
