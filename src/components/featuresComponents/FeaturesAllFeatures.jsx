import React from "react";

export default function FeaturesAllFeatures({ features }) {
  return (
    <section className="features__all-features">
      {features.map((x) => {
        return (
          <div className="box">
            <div className="container-img">
              <img src={x.illustration} alt="" />
            </div>
            <div className="text-content">
              <span className="title">{x.title}</span>
              <p>{x.text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
