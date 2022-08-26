import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [onMenu, setOnMenu] = useState(false);

  const toggleMenu = () => {
    setOnMenu(!onMenu);
  };

  return (
    <div className="menu-wrapper">
      <div className="not-mobile flex make-center harsh">
        In Progress... Made by{" "}
        <a href="https://github.com/HarshJa1n" className="gitlink">
          {" "}
          Harsh
        </a>
      </div>
      <div className={`mobile-menu only-mobile ${onMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="cred logo"
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button">
          <button
            class={`hamburger hamburger--spin ${onMenu ? "is-active" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="not-mobile flex">
          <div className="nav-item">credit score check</div>
          <div className="nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
