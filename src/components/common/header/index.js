import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="menu-wrapper">
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="cred logo"
          className="header-logo"
        />
        <div className="not-mobile flex">
          <div className="nav-item">credit score check</div>
          <div className="nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
