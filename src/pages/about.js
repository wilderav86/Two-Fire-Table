import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PageTransition from "../animations/PageTransition";

const About = ({ data }) => {
  const returnLineBreaks = (text) => {
    if (text.includes("<br />")) {
      // Map through each segment of text around line breaks added:
      return text.split("<br />").map((innerText, i) => {
        const lineBreakStyle = {
          display: "block",
          minHeight: "24px",
          marginTop: "24px",
          fontFamily: "montserrat",
        };
        // Return a span around each group of text:
        return (
          <span key={i} style={lineBreakStyle}>
            {innerText}
          </span>
        );
      });
    } else {
      // If there's no line breaks, just return the text as is:
      return text;
    }
  };

  const { title, name, childContentfulAboutPageBioTextNode, image } =
    data.allContentfulAboutPage.nodes[0];
  console.log(title, name, image);
  return (
    <Layout>
      <PageTransition>
        <div className="about-container">
          <Container className="about-header-container">
            <h1 className="about-header">{title}</h1>
          </Container>

          <Container className="about-card-container">
            <div className="about-card">
              <h2 className="about-title">{name}</h2>
              <GatsbyImage
                className="about-image"
                image={image.gatsbyImageData}
                alt={title}
                key="bioImage"
              />
              <div className="about-body">
                {returnLineBreaks(childContentfulAboutPageBioTextNode.bio)}
              </div>
            </div>
          </Container>

          {/* <Container className="about-card-container">
            {nodes.map((card, id) => {
              const { title } = card.frontmatter;
              return (
                <div className="about-card" key={`card${id}`}>
                  <h2 className="about-title" key={`title${id}`}>
                    {title}
                  </h2>
                  <GatsbyImage
                    className="about-image"
                    image={
                      card.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    alt={title}
                    key={`image${id}`}
                  />
                  <div
                    className="about-body"
                    dangerouslySetInnerHTML={{ __html: card.html }}
                    key={`body${id}`}
                  />
                </div>
              );
            })}
          </Container> */}
        </div>
      </PageTransition>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutPage {
    allContentfulAboutPage {
      nodes {
        title
        name
        image {
          gatsbyImageData(height: 1200)
        }
        bio {
          bio
        }
        childContentfulAboutPageBioTextNode {
          bio
        }
      }
    }
  }
`;

// export const query = graphql`
//   query AboutPageData {
//     allMarkdownRemark(
//       filter: { frontmatter: { section: { eq: "about" } } }
//       sort: { fields: frontmatter___order }
//     ) {
//       nodes {
//         frontmatter {
//           title
//           section
//           order
//           image {
//             childImageSharp {
//               gatsbyImageData(height: 700)
//             }
//           }
//         }
//         html
//       }
//     }
//   }
// `;
