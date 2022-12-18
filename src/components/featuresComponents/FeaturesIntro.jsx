import React from "react";

export default function FeaturesIntro() {
  return (
    <section className="features__intro">
      <img
        className="features__intro__img features-hero-mobile"
        src="../../photosnap-multi-page-website/assets/images/features/mobile/hero.jpg"
        alt=""
      />
      <img
        className="features__intro__img features-hero-tablet"
        src="../../photosnap-multi-page-website/assets/images/features/tablet/hero.jpg"
        alt=""
      />
      <img
        className="features__intro__img features-hero-desktop"
        src="../../photosnap-multi-page-website/assets/images/features/desktop/hero.jpg"
        alt=""
      />
      <div className="features__intro__box-text-content">
        <h1>Features</h1>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
    </section>
  );
}
