import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Carousel, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import PageFadeIn from "../animations/PageFadeIn";

const Gallery = ({ data }) => {
  const { nodes } = data.allInstagramContent;

  return (
    <Layout>
      <PageFadeIn>
        <div className="gallery-page-container">
          <Container className="gallery-container">
            <Carousel className="carousel" touch={true}>
              {nodes.map((image) => {
                const { gatsbyImageData, id } = image.localFile.childImageSharp;

                return (
                  <Carousel.Item align="center" key={id}>
                    {
                      <GatsbyImage
                        image={gatsbyImageData}
                        alt="carousel image"
                      />
                    }
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Container>
        </div>
      </PageFadeIn>
    </Layout>
  );
};

export default Gallery;

export const query = graphql`
  query InstagramGalleryData {
    allInstagramContent(limit: 20) {
      nodes {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              height: 1200
              width: 1200
              formats: WEBP
              webpOptions: { quality: 50 }
            )
            id
          }
        }
        media_url
      }
    }
  }
`;
