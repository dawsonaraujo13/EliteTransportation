import React from "react";
import { CTA } from "../../components";
import "./header.css";
const Header = () => {
  return (
    <div className="et__header-wrapper ">
      <div className="et__header-content shadow">
        <div className="et__header-cta-zone">
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Header;
