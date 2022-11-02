import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="et__cta-wrapper">
      <div className="et__cta-content">
        <div className="et__cta-header">
          <h2>Welcome to Elite Transport Care!</h2>
          <h3>Fort Myers' Premier Transportation</h3>
        </div>
        <a className="et__cta-button" href="/transportation">
          Schedule Transportation
        </a>
      </div>
    </div>
  );
};

export default CTA;
