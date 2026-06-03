import React from "react";
import "./footer.css";

import visa from "./assets/visa.jpg";
import mastercard from "./assets/mastercard.png";
import unionpay from "./assets/unionpay.svg";

const Footer = () => {

  return (

    <div className="footer">

      {/* LEFT SIDE */}

      <div className="footer-left">

        <h2>
          Dominos UAE
        </h2>

        <p>
          Powered by 
          <b> Coder - 9389</b> 2026
        </p>

        <div className="payment-methods">

          <img
            src={visa}
            alt="Visa"
          />

          <img
            src={mastercard}
            alt="Mastercard"
          />

          <img
            src={unionpay}
            alt="UnionPay"
          />

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="footer-right">

        <h3>
          Follow us
        </h3>

        <div className="social-icons">

          <a
            href="https://www.instagram.com/dominos_uae/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/DominosUAE/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>

        </div>

      </div>

    </div>

  );
};

export default Footer;