import React from "react";
import "./showthings.css";

const Showthings = () => {

  return (

    <div className="location-popup">

      <h2>
        Search Locality
      </h2>

      <p className="subtitle">
        Find restaurants that deliver to you
      </p>

      <input
        type="text"
        placeholder="Enter your delivery location"
        className="location-input"
      />

      <button className="detect-btn">
        Detect My Location
      </button>

    </div>
  );
};

export default Showthings;