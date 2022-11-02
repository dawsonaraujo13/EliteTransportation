import React from "react";
import "./contactbanner.css";

import { RiPhoneFill, RiMailFill } from "react-icons/ri";

const ContactBanner = () => {
  return (
    <div className="et__header-contact">
      <div className="et__header-contact-cta ">
        <p>Contact us now!</p>
      </div>
      <div className="et__header-contact-items">
        <div className="et__header-contact-item">
          <RiPhoneFill color="#fff" />
          <p>(239) 844-4000</p>
        </div>
        <div className="et__header-contact-item">
          <RiMailFill color="#fff" />
          <p>info@elitetransportcare.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
