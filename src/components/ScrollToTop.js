import React from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const backToTop = "Back to top";

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <motion.div
      className="scroll-to-top"
      onClick={handleScrollToTop}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {backToTop}
    </motion.div>
  );
};

export default ScrollToTop;
