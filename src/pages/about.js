import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PageTransition from "../animations/PageTransition";

const About = ({ data }) => {
  // console.log(data);

  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <PageTransition>
        <div className="about-container">
          <Container className="about-header-container">
            <h1 className="about-header">A LITTLE ABOUT US</h1>
          </Container>
          <Container className="about-card-container">
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
          </Container>
        </div>
      </PageTransition>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutPageData {
    allMarkdownRemark(
      filter: { frontmatter: { section: { eq: "about" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          title
          section
          order
          image {
            childImageSharp {
              gatsbyImageData(height: 700)
            }
          }
        }
        html
      }
    }
  }
`;
