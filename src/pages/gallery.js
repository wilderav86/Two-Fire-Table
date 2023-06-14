import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import PageFadeIn from "../animations/PageFadeIn";

const Gallery = ({ data }) => {
  // const { nodes } = data.allInstagramContent;
  // const { galleryImage } = data.allContentfulGalleryImage.nodes.at(0);
  const { galleryImage } = data.contentfulGalleryImage;

  const renderGalleryImages = galleryImage.map((image, key) => {
    const retrievedImage = getImage(image.gatsbyImageData);

    return (
      <Carousel.Item align="center" key={key}>
        <GatsbyImage
          image={retrievedImage}
          alt="carousel image"
          className="carousel-image"
        />
      </Carousel.Item>
    );
  });

  return (
    <Layout>
      <PageFadeIn>
        <div className="gallery-page-container">
          <Container className="gallery-container">
            <Carousel className="carousel" touch={true}>
              {renderGalleryImages}
              {/* {nodes.map((image) => {
                  const { gatsbyImageData, id } = image.localFile.childImageSharp;
                  return (
                    
                  );
                })} */}
            </Carousel>
          </Container>
        </div>
      </PageFadeIn>
    </Layout>
  );
};

export default Gallery;

export const query = graphql`
  query galleryPage {
    contentfulGalleryImage {
      galleryImage {
        gatsbyImageData(height: 600)
      }
    }
  }
`;

// export const query = graphql`;
//   query InstagramGalleryData {
//     allInstagramContent(limit: 20) {
//       nodes {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(
//               placeholder: TRACED_SVG
//               height: 1200
//               width: 1200
//               formats: WEBP
//               webpOptions: { quality: 50 }
//             )
//             id
//           }
//         }
//         media_url
//       }
//     }
//   }
// `;
