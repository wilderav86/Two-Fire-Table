import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

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

  return (
    <BackgroundImage
      className="background-image"
      Tag="section"
      {...backgroundImage}
      preserveStackingContext
    >
      <FadeInWhenVisible>
        <div className="background-banner">
          <StaticImage
            src="../images/background/tftlogowhite.png"
            alt="logo"
            placeholder="blurred"
          />
        </div>
      </FadeInWhenVisible>
    </BackgroundImage>
  );
};

export default LandingBackground;
