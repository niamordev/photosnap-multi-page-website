import React, { useState } from "react";


export default function PriceSubscriptions() {
  const [monthlyOrYearly, setMontlhyOrYearly] = useState(false);

  const handleSwitchMonthlyYearly = (e) => {
    setMontlhyOrYearly(e.target.checked);
  };

  return (
    <section className="pricing__subscriptions__price">
      <label class="switch">
        <input
          onChange={handleSwitchMonthlyYearly}
          type="checkbox"
          id="selector-annually-monthly"
        />
        <span class="slider round"></span>
      </label>

      <div className="subscriptions-choice">
        <div className="card-price standard-offer">
          <h2 className="name-offer">Basic</h2>
          <p className="description-offer">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <span className="price-and-time">
            <span className="price">
              ${monthlyOrYearly ? "190.00" : "19.00"}
            </span>
            <span className="time">
              per {monthlyOrYearly ? "year" : "month"}{" "}
            </span>
          </span>
          <button>PICK PLAN</button>
        </div>

        <div className="card-price best-offer">
          <h2 className="name-offer">Pro</h2>
          <p className="description-offer">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <span className="price-and-time">
            <span className="price">
              ${monthlyOrYearly ? "390.00" : "39.00"}
            </span>
            <span className="time">
              per {monthlyOrYearly ? "year" : "month"}
            </span>
          </span>
          <button>PICK PLAN</button>
        </div>

        <div className="card-price standard-offer">
          <h2 className="name-offer">Business</h2>
          <p className="description-offer">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <span className="price-and-time">
            <span className="price">
              ${monthlyOrYearly ? "990.00" : "90.00"}
            </span>
            <span className="time">
              per {monthlyOrYearly ? "year" : "month"}
            </span>
          </span>
          <button>PICK PLAN</button>
        </div>
      </div>
    </section>
  );
}
