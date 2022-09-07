import React from "react";
import Button from "../common/buttons";
import "./thirdSection.css";

const ThirdSection = () => {
  return (
    <div className="third-section image-section">
      <div className="max-width">
        <div className="image-section-child">
          <div className="image-section-top">
            <div className="image-section-heading">
              feel special more often.
            </div>
            <div className="image-section-subheading">
              exclusive rewards for paying your bills
            </div>
            <div className="image-section-bottom">
              <div className="image-section-description">
                every time you pay your credit card bills on CRED, you receive
                CRED coins. you can use these to win exclusive rewards or get
                special access to curated products and experiences. on CRED,
                good begets good.
              </div>
              <div>
                <Button buttonText="Explore rewards" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
