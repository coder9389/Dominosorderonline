import React from "react";
import "./item.css";

import Items from "./Items";

import img1 from "../src/assets/ramadan1.jpg";
import img2 from "../src/assets/gatheringbox.jpg";
import img3 from "../src/assets/crunchyfold.jpg";
import img4 from "../src/assets/Mealdeals.jpg";

const Item = () => {

  return (

    <div className="item-container">

      <Items
        Name="Ramadan Deals"
        image={img1}
      />

      <Items
        Name="Gathering Box"
        image={img2}
      />

      <Items
        Name="Crunchy Folds"
        image={img3}
      />

      <Items
        Name="Meal Deals"
        image={img4}
      />

    </div>
  );
};

export default Item;