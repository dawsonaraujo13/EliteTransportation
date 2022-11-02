import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/vector_logo2.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>
        <a href="/">Home</a>
      </p>
      <p>
        <a href="/transportation">Transportation</a>
      </p>
      {/* <p>
        <a href="/about">About</a>
      </p>
      <p>
        <a href="/contact">Contact Us</a>
      </p> */}
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="et__navbar">
      <div className="et__navbar-links">
        <div className="et__navbar-links_logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="et__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="et__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="et__navbar-menu_container scale-up-center gradient__bg-menu">
            <div className="et__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
