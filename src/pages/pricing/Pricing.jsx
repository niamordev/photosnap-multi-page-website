import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PriceSubscriptions from "../../components/pricing/PriceSubscriptions";
import PricingIntro from "../../components/pricing/PricingIntro";
import PricingTable from "../../components/pricing/PricingTable";

export default function Pricing() {
  return (
    <>
      <Header />
      <main id="pricing">
        <PricingIntro />
        <PriceSubscriptions />
        <PricingTable />

        <section className="cta">
          <div className="container-cta">
            <img
              className="img-cta img-cta-mobile"
              src="../../assets/images/shared/mobile/bg-beta.jpg"
              alt=""
            />
            <img
              className="img-cta img-cta-tablet"
              src="../../assets/images/shared/tablet/bg-beta.jpg"
              alt=""
            />
            <img
              className="img-cta img-cta-desktop"
              src="../../assets/images/shared/desktop/bg-beta.jpg"
              alt=""
            />
            <div className="cta-text-content">
              <h1>
                We're in beta <br />
                Get your invite today
              </h1>
              <a href="" className="btn__arrow">
               <span className="text-white">Get an invite</span> 
              <img src="../../assets/images/shared/desktop/arrow-white.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
