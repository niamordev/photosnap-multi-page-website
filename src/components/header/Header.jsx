import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavMobile = () => {
    setShowNavMobile(!showNavMobile);
    document.querySelector('#html').classList.toggle('overflow__hidden')
  };
  return (
    <header>
      <nav>
        <NavLink to="/photosnap-multi-page-website/">
          <img
            src="../photosnap-multi-page-website/assets/images/shared/desktop/logo.svg"
            alt=""
            className="logo"
          />
        </NavLink>
        <img
          src="../photosnap-multi-page-website/assets/images/shared/mobile/menu.svg"
          alt=""
          onClick={() => handleNavMobile()}
          className="mobile"
        />
        {showNavMobile ? <div className="overlay"></div> : null}
        {showNavMobile ? (
          <div className="navbar__mobile__menu">
            <ul>
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
            <hr />
            <button>GET AN INVITE</button>
          </div>
        ) : null}

        <ul className="nav-big-screen">
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

        <button className="btn-big-screen">GET AN INVITE</button>
      </nav>
    </header>
  );
}
