import React from "react";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  // console.log(data);

  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <h1 className="about-header">ABOUT US</h1>
      <Container className="about-container">
        {nodes.map((card, id) => {
          const { title } = card.frontmatter;
          return (
            <div className="about-card">
              <h2 className="about-title">{title}</h2>
              <GatsbyImage
                className="about-image"
                image={card.frontmatter.image.childImageSharp.gatsbyImageData}
                alt={title}
              />
              <div
                className="about-body"
                dangerouslySetInnerHTML={{ __html: card.html }}
              />
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query AboutPageData {
    allMarkdownRemark(filter: { frontmatter: { section: { eq: "about" } } }) {
      nodes {
        frontmatter {
          title
          section
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
