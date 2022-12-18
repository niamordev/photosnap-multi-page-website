import React from "react";

export default function PricingTable() {
  const features = [
    { name: "Unlimited Story Posting", basic: true, pro: true, business: true },
    { name: "Unlimited Photo Upload", basic: true, pro: true, business: true },
    {
      name: "Embedding Custom Content",
      basic: false,
      pro: true,
      business: true,
    },
    { name: "Customize Metadata", basic: false, pro: true, business: true },
    { name: "Advanced Metrics", basic: false, pro: false, business: true },
    { name: "Photo Downloads", basic: false, pro: false, business: true },
    {
      name: "Search Engine Indexing",
      basic: false,
      pro: false,
      business: true,
    },
    { name: "Custom Analytics", basic: false, pro: false, business: true },
  ];

  return (
    <section className="pricing__table__container">
      <h1>COMPARE</h1>

      <div className="pricing__table">
        <div className="table__header">
          <span className="header-title">THE FEATURES</span>
          <ul className="header-list">
            <li className="average-screen">BASIC</li>
            <li className="average-screen">PRO</li>
            <li className="average-screen">BUSINESS</li>
          </ul>
        </div>

        {features.map((elem) => {
          return (
            <div className="container__element">
              <span className="name-item">{elem.name}</span>
              <ul className="list-feature">
                <li
                  className={
                    elem.basic
                      ? "checked basic small-screen"
                      : "basic small-screen"
                  }
                ></li>
                <li
                  className={
                    elem.pro ? "checked pro small-screen" : "pro small-screen"
                  }
                ></li>
                <li
                  className={
                    elem.business
                      ? "checked business small-screen"
                      : "business small-screen"
                  }
                ></li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
