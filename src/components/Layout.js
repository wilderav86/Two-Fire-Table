import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        className="motion-wrapper"
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
