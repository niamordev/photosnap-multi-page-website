import React from "react";

export default function PricingIntro() {
  return (
    <section className="pricing__intro">
      <img
        className="pricing__intro__img pricing-hero-mobile"
        src="../../photosnap-multi-page-website/assets/images/pricing/mobile/hero.jpg"
        alt=""
      />
      <img
        className="pricing__intro__img pricing-hero-tablet"
        src="../../photosnap-multi-page-website/assets/images/pricing/tablet/hero.jpg"
        alt=""
      />
      <img
        className="pricing__intro__img pricing-hero-desktop"
        src="../../photosnap-multi-page-website/assets/images/pricing/desktop/hero.jpg"
        alt=""
      />
      <div className="pricing__intro__box-text-content">
        <h1>pricing</h1>
        <p>
          We make sure all of our pricing are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
    </section>
  );
}
