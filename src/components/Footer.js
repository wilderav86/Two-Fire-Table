import React from "react";

import headerlogo from "../images/headerlogo.jpg";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={headerlogo} alt="logo" />
      <NewsLetterForm />
    </div>
  );
};

export default Footer;
