import React, { useState } from "react";
import "./form.css";
import { ContactBanner } from "../";
import { send } from "emailjs-com";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [toSend, setToSend] = useState({
    fname: "",
    lname: "",
    dob: "",
    pickup_address: "",
    pickip_city: "",
    pickup_state: "",
    pickup_zip: "",
    pickup_apt: "",
    dest_address: "",
    dest_city: "",
    dest_state: "",
    dest_zip: "",
    dest_apt: "",
    contact_email: "",
    contact_fname: "",
    contact_lname: "",
    contact_phone: "",
    pickup_date: "",
    pickup_time: "",
    appt_time: "",
    service_type: "",
    oxygen: "",
    escort: "",
    payment: "",
    additional_details: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "The form has been submitted successfully! We will reach out to you soon."
        );

        navigate("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert(
          "An error has occurred submitting the form. Please contact us via phone or email."
        );
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ContactBanner />
      <div className="et__form-wrapper gradient__bg-subpage">
        <div className="et__form-container">
          <form
            className="et__form"
            action=""
            id="transportForm"
            onSubmit={onSubmit}
          >
            <div className="et__form-title">
              <h2>Request Transportation</h2>
              <p>
                Enter your information to request our transportation service.
                All requests will be confirmed by a staff member via phone or
                email. We look forward to speaking with you!
              </p>
              <br />
              <p>* - Required</p>
            </div>

            <h3>Client Information</h3>
            <div className="et__form-names double">
              <label>
                First Name:*
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  defaultValue={toSend.fname}
                  onChange={handleChange}
                  required
                  className={toSend.fname.length ? "" : "error"}
                />
              </label>
              <label>
                Last Name:*
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  defaultValue={toSend.lname}
                  onChange={handleChange}
                  required
                  className={toSend.lname.length ? "" : "error"}
                />
              </label>
            </div>
            <label>
              Date of Birth:*
              <input
                type="date"
                name="dob"
                id="dob"
                defaultValue={toSend.dob}
                onChange={handleChange}
                required
                className={toSend.dob.length ? "" : "error"}
              />
            </label>

            <h3>Pickup Details</h3>
            <div className="et__form-address pickup">
              <label>
                Address:*
                <input
                  type="text"
                  name="pickup_address"
                  id="pickup"
                  defaultValue={toSend.pickup_address}
                  onChange={handleChange}
                  required
                  className={toSend.pickup_address.length ? "" : "error"}
                />
              </label>
              <div className="et__form-city-state double">
                <label>
                  City:*
                  <input
                    type="text"
                    name="pickip_city"
                    id="pickupcity"
                    defaultValue={toSend.pickip_city}
                    onChange={handleChange}
                    required
                    className={toSend.pickip_city.length ? "" : "error"}
                  />
                </label>
                <label>
                  State:*
                  <input
                    type="text"
                    name="pickup_state"
                    id="pickupstate"
                    defaultValue={toSend.pickup_state}
                    onChange={handleChange}
                    required
                    className={toSend.pickup_state.length ? "" : "error"}
                  />
                </label>
              </div>
              <div className="et__form-zip-apt double">
                <label>
                  ZIP / Postal Code:*
                  <input
                    type="text"
                    name="pickup_zip"
                    id="pickupzip"
                    defaultValue={toSend.pickup_zip}
                    onChange={handleChange}
                    required
                    className={toSend.pickup_zip.length ? "" : "error"}
                  />
                </label>
                <label>
                  APT #:
                  <input
                    type="text"
                    name="pickup_apt"
                    id="pickupapt"
                    defaultValue={toSend.pickup_apt}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <h3>Destination Details</h3>
            <div className="et__form-address destination">
              <label htmlFor="">
                Address:*
                <input
                  type="text"
                  name="dest_address"
                  id="destination"
                  defaultValue={toSend.dest_address}
                  onChange={handleChange}
                  required
                  className={toSend.dest_address.length ? "" : "error"}
                />
              </label>
              <div className="et__form-city-state double">
                <label>
                  City:*
                  <input
                    type="text"
                    name="dest_city"
                    id="destinationcity"
                    defaultValue={toSend.dest_city}
                    onChange={handleChange}
                    required
                    className={toSend.dest_city.length ? "" : "error"}
                  />
                </label>
                <label>
                  State:*
                  <input
                    type="text"
                    name="dest_state"
                    id="destinationstate"
                    defaultValue={toSend.dest_state}
                    onChange={handleChange}
                    required
                    className={toSend.dest_state.length ? "" : "error"}
                  />
                </label>
              </div>
              <div className="et__form-zip-apt double">
                <label>
                  ZIP / Postal Code:*
                  <input
                    type="text"
                    name="dest_zip"
                    id="destinationzip"
                    defaultValue={toSend.dest_zip}
                    onChange={handleChange}
                    required
                    className={toSend.dest_zip.length ? "" : "error"}
                  />
                </label>
                <label>
                  APT #:
                  <input
                    type="text"
                    name="dest_apt"
                    id="destinationapt"
                    defaultValue={toSend.dest_apt}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <h3>Contact Information</h3>
            <div className="et__form-contact ">
              <label>
                Email:*
                <input
                  type="email"
                  name="contact_email"
                  id="email"
                  defaultValue={toSend.contact_email}
                  onChange={handleChange}
                  required
                  className={toSend.contact_email.length ? "" : "error"}
                />
              </label>
              <div className="et__form-names double">
                <label>
                  First Name:*
                  <input
                    type="text"
                    name="contact_fname"
                    id="fname"
                    defaultValue={toSend.contact_fname}
                    onChange={handleChange}
                    required
                    className={toSend.contact_fname.length ? "" : "error"}
                  />
                </label>
                <label>
                  Last Name:*
                  <input
                    type="text"
                    name="contact_lname"
                    id="name"
                    defaultValue={toSend.contact_lname}
                    onChange={handleChange}
                    required
                    className={toSend.contact_lname.length ? "" : "error"}
                  />
                </label>
              </div>
              <label htmlFor="">
                Phone Number:*
                <input
                  type="tel"
                  name="contact_phone"
                  id="phone"
                  defaultValue={toSend.contact_phone}
                  onChange={handleChange}
                  required
                  className={toSend.contact_phone.length ? "" : "error"}
                />
              </label>
            </div>
            <h3>Transportation Details</h3>

            <div className="et__form-service pickup">
              <label htmlFor="">
                Date of Pickup:*
                <input
                  type="date"
                  name="pickup_date"
                  id="date"
                  defaultValue={toSend.pickup_date}
                  onChange={handleChange}
                  required
                  className={toSend.pickup_date.length ? "" : "error"}
                />
              </label>
              <div className="et__form-times double">
                <label htmlFor="">
                  Time of Pickup:*
                  <input
                    type="time"
                    name="pickup_time"
                    id="pickuptime"
                    defaultValue={toSend.pickup_time}
                    onChange={handleChange}
                    required
                    className={toSend.pickup_time.length ? "" : "error"}
                  />
                </label>
                <label htmlFor="">
                  Time of Appointment:*
                  <input
                    type="time"
                    name="appt_time"
                    id="appointmenttime"
                    defaultValue={toSend.appt_time}
                    onChange={handleChange}
                    required
                    className={toSend.appt_time.length ? "" : "error"}
                  />
                </label>
              </div>
              <label htmlFor="">
                Type of Service:*
                <div className="et__form-radio" onChange={handleChange}>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="service_type"
                      id="ambulatory"
                      value="ambulatory"
                      className={toSend.service_type.length ? "" : "error"}
                      required
                    />
                    <label htmlFor="">Ambulatory (Able to walk)</label>
                  </div>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="service_type"
                      id="wheelchair"
                      value="wheelchair"
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">Wheelchair</label>
                  </div>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="service_type"
                      id="stretcher"
                      value="stretcher"
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">Stretcher</label>
                  </div>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="service_type"
                      id="bariatrich"
                      value="bariatrich"
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">Bariatrich</label>
                  </div>
                </div>
              </label>
              <label htmlFor="">
                Do you require an oxygen tank?
                <div
                  className="et__form-radio question"
                  onChange={handleChange}
                >
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="oxygen"
                      id="yesOxygen"
                      value="yes"
                      required
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="oxygen"
                      id="noOxygen"
                      value="no"
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">No</label>
                  </div>
                </div>
              </label>
              <label htmlFor="">
                Will you be bringing an escort?
                <div
                  className="et__form-radio question"
                  onChange={handleChange}
                >
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="escort"
                      id="yesEscort"
                      value="yes"
                      required
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div className="et__form-radio-option">
                    <input
                      type="radio"
                      name="escort"
                      id="noEscort"
                      value="no"
                      className={toSend.service_type.length ? "" : "error"}
                    />
                    <label htmlFor="">No</label>
                  </div>
                </div>
                <label htmlFor="">
                  What form of payment will you be providing?
                  (Cash/Card/Insurance etc...)*
                  <input
                    type="text"
                    name="payment"
                    id="payment"
                    defaultValue={toSend.payment}
                    onChange={handleChange}
                    className={toSend.payment.length ? "" : "error"}
                    required
                  />
                </label>
              </label>
            </div>
            <h3>Additional Details</h3>

            <label className="et__form-info" htmlFor="">
              Include any needs, concerns, or pertinent information in the
              section below:
              <textarea
                name="additional_details"
                id="additional_details"
                rows="7"
                cols="50"
                defaultValue={toSend.additional_details}
                onChange={handleChange}
              />
            </label>

            <div className="et__form-button-container">
              <button
                className="submitButton"
                type="submit"
                form="transportForm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
