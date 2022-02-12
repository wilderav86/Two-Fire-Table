import React from "react";
import headerlogo from "../images/headerlogo.jpg";
import NewsLetterForm from "./NewsLetterForm";
import footerBadge from "../images/footerBadge.jpg";
import { motion } from "framer-motion";

const handleScrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={headerlogo} alt="logo" />
      <NewsLetterForm />
      <motion.img
        className="footer-badge"
        src={footerBadge}
        alt="badge"
        onClick={handleScrollToTop}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};

export default Footer;
