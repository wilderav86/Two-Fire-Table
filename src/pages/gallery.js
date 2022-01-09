import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";

const Gallery = ({ data }) => {
  console.log(data);
  const { edges } = data.allFile;
  return (
    <Layout>
      <div className="gallery-container">
        <Carousel>
          {edges.map((image) => {
            console.log(image);
            return (
              <Carousel.Item align="center" key={image.node.childImageSharp.id}>
                {
                  <GatsbyImage
                    image={image.node.childImageSharp.gatsbyImageData}
                    alt="carousel image"
                  />
                }
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </Layout>
  );
};

export default Gallery;

export const query = graphql`
  query GalleryPageData {
    allFile(filter: { relativeDirectory: { regex: "/carousel/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 800
              height: 800
              transformOptions: { cropFocus: CENTER }
            )
            id
          }
        }
      }
    }
  }
`;
