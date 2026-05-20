import React from "react";

import Mainleft from "./Mainleft";
import Mainright from "./Mainright";

import "./mainarea.css";

const Mainarea = () => {

  return (

    <div className="main-area">

      <Mainleft />

      <Mainright />

    </div>
  );
};

export default Mainarea;