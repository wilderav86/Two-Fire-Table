import React from "react";
import headerlogo from "../images/headerlogo.jpg";
import NewsLetterForm from "./NewsLetterForm";
import footerBadge from "../images/footerBadge.jpg";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={headerlogo} alt="logo" />
      <NewsLetterForm />
      <img className="footer-badge" src={footerBadge} alt="badge" />
    </div>
  );
};

export default Footer;
