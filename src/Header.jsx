import React, { useState } from "react";
import "./Header.css";

import logo from "./assets/logo.png";

import Showthings from "./Showthings";
import ChangeLanguage from "./ChangeLanguage";
import LoginSignup from "./LoginSignup";

function Header() {

  const [clicked, setClicked] = useState(false);

  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const [selectedLocation, setSelectedLocation] =
    useState("");

  return (

    <div className="header">

      <div className="left-section">

        <img
          src={logo}
          alt="logo"
          className="logo"
        />

        <div className="location-box">

          <button
            className="delivery-btn"
            onClick={() =>
              setClicked((prev) => !prev)
            }
          >
            Delivery
          </button>

          <span className="to-text">
            To
          </span>

          <button
            className="location-btn"
            onClick={() =>
              setClicked((prev) => !prev)
            }
          >
            {selectedLocation || "Select Location"}
          </button>

          <button
            className="change-btn"
            onClick={() =>
              setClicked((prev) => !prev)
            }
          >
            CHANGE
          </button>

        </div>

      </div>

      <div className="right-section">

        <button
          className="language-btn"
          onClick={() => setOpen(true)}
        >
          English
        </button>

        <button
          className="login-btn"
          onClick={() => setShow(true)}
        >
          LOGIN / SIGN UP
        </button>

      </div>

      {open && (
        <ChangeLanguage setOpen={setOpen} />
      )}

      {clicked && (
        <Showthings
          setClicked={setClicked}
          setSelectedLocation={
            setSelectedLocation
          }
        />
      )}

      {show && (
        <LoginSignup setShow={setShow} />
      )}

    </div>
  );
}

export default Header;