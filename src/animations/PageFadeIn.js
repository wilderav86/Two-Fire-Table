import React from "react";
import { motion } from "framer-motion";

const PageFadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.5,
      }}
      // initial={{ opacity: 0 }}
      // animation={{ opacity: 1, duration: 0.4 }}
      // transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default PageFadeIn;
