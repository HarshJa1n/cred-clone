import React from "react";
import "./blueSection.css";
import Button from "../common/buttons";

const BlueSection = () => {
  return (
    <div className="blue-section image-section">
      <div className="max-width">
        <div className="image-section-child">
          <div className="image-section-top">
            <div className="image-section-heading blue-heading">
              we take your money matters seriously.
            </div>
            <div className="image-section-subheading">
              so that you don’t have to.
            </div>
            <div className="image-section-bottom">
              <div className="image-section-description blue-description">
                never miss a due date with reminders to help you pay your bills
                on time, instant settlements mean you never wait for your
                payments to go through and statement analysis lets you know
                where your money goes, always.
              </div>
              <div>
                <Button buttonText="Experience the upgrade" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueSection;
