import React, { useEffect, useState, useRef } from "react";
import "./secondSection.css";

const SecondSection = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const obs = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        obs.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        obs.unobserve(ref.current);
      }
    };
  });

  return (
    <div className="complete-section">
      {
        <div
          className={`scimage-group ${showAnimation ? "scale-in-bottom" : ""} `}
          ref={ref}
        >
          {showAnimation && (
            <div className="testnig">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
                alt="image1"
                className="scimage image-1"
              />
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
                alt="image2"
                className="scimage image-2"
              />
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
                alt="image3"
                className="scimage image-3"
              />
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
                alt="image4"
                className="scimage image-4"
              />
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
                alt="image5"
                className="scimage image-5"
              />
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default SecondSection;
