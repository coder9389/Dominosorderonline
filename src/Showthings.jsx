import React, { useState } from "react";
import "./showthings.css";

const Showthings = ({
  setClicked,
  setSelectedLocation,
}) => {

  const [location, setLocation] =
    useState("");

  const [suggestions, setSuggestions] =
    useState([]);

  const handleSearch = async (e) => {

    const value = e.target.value;

    setLocation(value);

    if (value.length < 2) {

      setSuggestions([]);

      return;
    }

    try {

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${value}&format=jsonv2&limit=5`
      );

      const data =
        await response.json();

      setSuggestions(data);

    } catch (error) {

      console.log(error);
    }
  };

  const selectLocation = (place) => {

    setLocation(
      place.display_name
    );

    setSelectedLocation(
      place.display_name
    );

    setSuggestions([]);

    setClicked(false);
  };

  const detectLocation = () => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        try {

          const response =
            await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
            );

          const data =
            await response.json();

          setLocation(
            data.display_name
          );

          setSelectedLocation(
            data.display_name
          );

          setClicked(false);

        } catch (error) {

          console.log(error);
        }
      },

      (error) => {

        console.log(error);
      }
    );
  };

  return (

    <div className="location-popup">

      <div className="popup-top">

        <h2>
          Search Locality
        </h2>

        <button
          className="popup-close-btn"
          onClick={() =>
            setClicked(false)
          }
        >
          ×
        </button>

      </div>

      <p className="subtitle">
        Find restaurants that deliver to you
      </p>

      <input
        type="text"
        placeholder="Enter your delivery location"
        className="location-input"
        value={location}
        onChange={handleSearch}
      />

      {suggestions.length > 0 && (

        <ul className="suggestion-list">

          {suggestions.map(
            (place) => (

              <li
                key={
                  place.place_id
                }
                className="suggestion-item"
                onClick={() =>
                  selectLocation(
                    place
                  )
                }
              >
                {place.display_name}
              </li>

            )
          )}

        </ul>

      )}

      <button
        className="detect-btn"
        onClick={detectLocation}
      >
        Detect My Location
      </button>

    </div>
  );
};

export default Showthings;