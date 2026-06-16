import React from "react";
import "./mainleft.css";

import { useNavigate } from "react-router-dom";

const Mainleft = () => {

  const navigate = useNavigate();

  return (

    <div className="main-left">

      <h1>
        Dominos UAE
      </h1>

      <p>
        Domino's is a purpose-inspired,
        performance-driven company powered
        by exceptional people who are
        committed to fee... read more
      </p>

      <button
        onClick={() =>
          navigate("/menu")
        }
      >
        ORDER NOW
      </button>

    </div>
  );
};

export default Mainleft;