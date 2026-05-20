import React, { useState } from "react";
import "./Header.css";

import logo from "./assets/logo.png";

import Showthings from "./Showthings";
import ChangeLanguage from "./ChangeLanguage";

function Header() {

  const [clicked, setClicked] = useState(false);

  const [open, setOpen] = useState(false);

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
            onClick={() => setClicked(!clicked)}
          >
            Delivery
          </button>

          <span className="to-text">
            To
          </span>

          <button
            className="location-btn"
            onClick={() => setClicked(!clicked)}
          >
            Select Location
          </button>

          <button className="change-btn">
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

        <button className="login-btn">
          LOGIN / SIGN UP
        </button>

      </div>

      {open && <ChangeLanguage setOpen={setOpen} />}

      {clicked && <Showthings />}

    </div>
  );
}

export default Header;