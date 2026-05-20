import React from "react";
import "./footer.css";

const Footer = () => {

  return (

    <div className="footer">

      {/* LEFT SIDE */}

      <div className="footer-left">

        <h2>
          Dominos UAE
        </h2>

        <p>
          Powered by LimeTray 2026
        </p>
      </div>

      {/* RIGHT SIDE */}

      <div className="footer-right">

        <h3>
          Follow us
        </h3>

        <div className="social-icons">

          <i className="fa-brands fa-instagram"></i>

          <i className="fa-brands fa-facebook-f"></i>

        </div>

      </div>

    </div>
  );
};

export default Footer;