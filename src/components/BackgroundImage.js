import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const LandingBackground = () => {
  const { bgImage } = useStaticQuery(graphql`
    query BackgroundImage {
      bgImage: file(relativePath: { eq: "fourchickens.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 50)
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
      <div className="background-banner">test</div>
    </BackgroundImage>
  );
};

export default LandingBackground;
