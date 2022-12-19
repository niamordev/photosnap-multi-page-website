import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const handleNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };

  useEffect(() => {
    if (showNavMobile)
      document.querySelector("#html").classList.add("overflow__hidden");
    else document.querySelector("#html").classList.remove("overflow__hidden");
  }, [showNavMobile]);
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
        <div
          onClick={() => handleNavMobile()}
          className="btn_nav_mobile mobile"
        >
          {showNavMobile ? (
            <img
              src="../photosnap-multi-page-website/assets/images/shared/mobile/close.svg"
              alt=""
              className="mobile"
            />
          ) : (
            <img
              src="../photosnap-multi-page-website/assets/images/shared/mobile/menu.svg"
              alt=""
              className="mobile "
            />
          )}
        </div>

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
