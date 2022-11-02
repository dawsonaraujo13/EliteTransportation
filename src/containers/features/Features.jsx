import React from "react";
import "./features.css";
import {
  RiBus2Fill,
  RiWheelchairFill,
  RiTimeFill,
  RiNurseFill,
} from "react-icons/ri";

const Features = () => {
  return (
    <div className="et__features-wrapper">
      <div className="et__features-content">
        <div className="et__features-tiles">
          <div className="et__features-tile t1">
            <div className="icons">
              <RiBus2Fill color="#fff" size={34} />
            </div>

            <h3>Comfort</h3>
            <p>
              We insure the upmost comfort for our patients during travel. Sit
              back and relax while we take you to your destination.
            </p>
          </div>
          <div className="et__features-tile t2">
            <div className="icons">
              <RiTimeFill color="#fff" size={34} />
            </div>

            <h3>Punctual</h3>
            <p>
              Be on time, every time, with our transportation service. We use
              efficient routing to ensure punctuality for all of our patients.
            </p>
          </div>
          <div className="et__features-tile t3">
            <div className="icons">
              <RiWheelchairFill color="#fff" size={34} />
            </div>

            <h3>Accesibility</h3>
            <p>
              Our vehicles are equipped properly to handle all of our patients
              needs, including wheelchair accesibility and stretchers.
            </p>
          </div>
          <div className="et__features-tile t4">
            <div className="icons">
              <RiNurseFill color="#fff" size={34} />
            </div>

            <h3>Door-to-door</h3>
            <p>
              Our staff ensures safe and comfortable transportation, along with
              escorting clients all the way to their appointment check-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
