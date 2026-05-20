import React, { useEffect, useState } from "react";

import "./mainright.css";

import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import banner4 from "./assets/banner4.jpg";

const Mainright = () => {

  const banners = [
    banner1,
    banner2,
    banner3,
    banner4
  ];

  const [current, setCurrent] = useState(0);

  /* AUTO SLIDE */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === banners.length - 1
          ? 0
          : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  /* NEXT BUTTON */

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === banners.length - 1
        ? 0
        : prev + 1
    );
  };

  /* PREVIOUS BUTTON */

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? banners.length - 1
        : prev - 1
    );
  };

  return (

    <div className="slider-container">

      <button
        className="arrow left-arrow"
        onClick={prevSlide}
      >
        ❮
      </button>

      <img
        src={banners[current]}
        alt="banner"
        className="banner-image"
      />

      <button
        className="arrow right-arrow"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="dots">

        {banners.map((_, index) => (

          <span
            key={index}
            className={
              current === index
                ? "dot active"
                : "dot"
            }
          ></span>

        ))}

      </div>

    </div>
  );
};

export default Mainright;