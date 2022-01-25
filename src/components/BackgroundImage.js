import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

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
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="background-container">
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
      <Parallax className="custom-class" y={[-30, 30]}>
        <BackgroundImage
          className="background-image"
          Tag="section"
          {...backgroundImage}
          preserveStackingContext
          // style={{ transform: `translateY(${offsetY * -0.4}px)` }}
        ></BackgroundImage>
      </Parallax>
    </div>
  );
};

//

export default LandingBackground;
