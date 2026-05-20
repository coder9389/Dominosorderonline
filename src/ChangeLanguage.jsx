import React from "react";
import "./language.css";

const ChangeLanguage = ({ setOpen }) => {

  return (

    <div className="overlay">

      <div className="language-modal">

        <div className="top-section">

          <h2>Choose a language</h2>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

        </div>

        <div className="language-option">

          <label>

            <input
              type="radio"
              name="language"
              value="english"
            />

            English

          </label>

        </div>

        <div className="language-option">

          <label>

            <input
              type="radio"
              name="language"
              value="arabic"
            />

            Arabic

          </label>

        </div>

        <button className="save-btn">
          SAVE
        </button>

      </div>

    </div>
  );
};

export default ChangeLanguage;