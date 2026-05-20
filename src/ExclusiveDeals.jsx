import React, { useEffect, useState } from "react";

import "./exclusivedeals.css";

import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";

import sidebanner from "./assets/banner3.jpg";

const ExclusiveDeals = () => {

  const banners = [
    banner1,
    banner2,
    banner3
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

  /* NEXT */

  const nextSlide = () => {

    setCurrent((prev) =>
      prev === banners.length - 1
        ? 0
        : prev + 1
    );
  };

  /* PREVIOUS */

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? banners.length - 1
        : prev - 1
    );
  };

  return (

    <div className="exclusive-section">

      <h2>
        Exclusive Deals Just For You
      </h2>

      <div className="exclusive-container">

        {/* LEFT SLIDER */}

        <div className="left-banner">

          <button
            className="deal-arrow left"
            onClick={prevSlide}
          >
            ❮
          </button>

          <img
            src={banners[current]}
            alt="banner"
          />

          <button
            className="deal-arrow right"
            onClick={nextSlide}
          >
            ❯
          </button>

          <div className="deal-dots">

            {banners.map((_, index) => (

              <span
                key={index}
                className={
                  current === index
                    ? "deal-dot active"
                    : "deal-dot"
                }
              ></span>

            ))}

          </div>

        </div>

        {/* RIGHT STATIC IMAGE */}

        <div className="right-banner">

          <img
            src={sidebanner}
            alt="side-banner"
          />

        </div>

      </div>

    </div>
  );
};

export default ExclusiveDeals;