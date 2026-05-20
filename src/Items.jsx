import React from "react";

const Items = ({ Name, image }) => {

  return (

    <div className="card">

      <img src={image} alt={Name} />

      <h2>{Name}</h2>

    </div>
  );
};

export default Items;