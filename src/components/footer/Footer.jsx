import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="brand-logo">
        <img src="../../assets/images/shared/desktop/logo-white.svg" alt="" />
      </div>
      <div className="social-networks">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <ul>
        <NavLink to="/photosnap-multi-page-website/">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/photosnap-multi-page-website/stories">
          <li>STORIES</li>
        </NavLink>
        <NavLink to="/photosnap-multi-page-website/features">
          <li>FEATURES</li>
        </NavLink>
        <NavLink to="/photosnap-multi-page-website/pricing">
          <li>PRICING</li>
        </NavLink>
      </ul>

      <a href="" className="get-an-invite btn__arrow">
        <span className="text-white">Get an invite</span>
        <img src="../../assets/images/shared/desktop/arrow-white.svg" alt="" />
      </a>

      <span className="copyrights">Copyright 2019. All Rights Reserved.</span>
    </footer>
  );
}
