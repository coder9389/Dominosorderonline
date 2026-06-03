import React, { useState } from "react";
import "./language.css";

const ChangeLanguage = ({ setOpen }) => {

  const [language, setLanguage] = useState("");

  const handlesave = () => {

    console.log(language);

    setOpen(false);
  };

  return (

    <div className="overlay">

      <div className="language-modal">

        <div className="top-section">

          <h2>Choose a language</h2>

          <button
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            X
          </button>

        </div>

        {/* English */}

        <div className="language-option">

          <label>

            <input
              type="radio"
              name="language"
              value="english"

              checked={language === "english"}

              onChange={(e) =>
                setLanguage(e.target.value)
              }
            />

            English

          </label>

        </div>

        {/* Arabic */}

        <div className="language-option">

          <label>

            <input
              type="radio"
              name="language"
              value="arabic"

              checked={language === "arabic"}

              onChange={(e) =>
                setLanguage(e.target.value)
              }
            />

            Arabic

          </label>

        </div>

        <button
          className="save-btn"
          onClick={handlesave}
        >
          SAVE
        </button>

      </div>

    </div>
  );
};

export default ChangeLanguage;