import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const LandingBackground = ({ heroImage }) => {
  // const { bgImage } = useStaticQuery(graphql`
  //   query BackgroundImage {
  //     bgImage: file(relativePath: { eq: "fourchickens.jpg" }) {
  //       childImageSharp {
  //         gatsbyImageData(
  //           placeholder: BLURRED
  //           layout: CONSTRAINED
  //           formats: WEBP
  //           quality: 50
  //         )
  //       }
  //     }
  //   }
  // `);

  // const data = useStaticQuery(graphql`
  //   query LandingBackground {
  //     contentfulHomePageHeroImage {
  //       heroImage {
  //         gatsbyImageData(
  //           formats: WEBP
  //           layout: CONSTRAINED
  //           quality: 50
  //           placeholder: BLURRED
  //         )
  //       }
  //     }
  //   }
  // `);

  const bgimage = getImage(heroImage);
  const backgroundImage = convertToBgImage(bgimage);
  console.log(backgroundImage, "image");

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
        ></BackgroundImage>
      </Parallax>
    </div>
  );
};

//

export default LandingBackground;
