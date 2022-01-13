import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import { motion } from "framer-motion";

const LandingBackground = () => {
  const { bgImage } = useStaticQuery(graphql`
    query BackgroundImage {
      bgImage: file(relativePath: { eq: "fourchickens.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const image = getImage(bgImage);
  const backgroundImage = convertToBgImage(image);

  //background parallax effect.
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundImage
      className="background-image"
      Tag="section"
      {...backgroundImage}
      // preserveStackingContext
      style={{ transform: `translateY(${offsetY * -0.4}px)` }}
    >
      <motion.div
        className="background-banner"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeIn" }}
        animate={{ opacity: 1 }}
      >
        <StaticImage
          src="../images/background/tftlogowhite.png"
          alt="logo"
          placeholder="blurred"
        />
      </motion.div>
    </BackgroundImage>
  );
};

export default LandingBackground;
