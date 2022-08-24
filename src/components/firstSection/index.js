import React from "react";
import Button from "../common/buttons";
import "./firstSection.css";
const FirstSection = () => {
  return (
    <div className="first-section-wrapper">
      <div className="flex make-center flex-col max-width first-section">
        <div className="first-heading">
          rewards for paying credit card bills.
        </div>
        <div className="first-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default FirstSection;
