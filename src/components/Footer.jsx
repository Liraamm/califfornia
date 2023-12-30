import React from "react";

import FooterPng from "../assets/FooterPng.svg";

const Footer = () => {
  return (
    <div className="footerMain">
      <img
        src={FooterPng}
        alt="Footer"
        style={{ width: "100%" }}
        className="Footer"
      />
    </div>
  );
};

export default Footer;
