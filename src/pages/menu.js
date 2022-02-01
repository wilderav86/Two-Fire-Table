import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import MenuCard from "../components/MenuCard";
import Layout from "../components/Layout";
import PageTransition from "../animations/PageTransition";

const Menu = ({ data }) => {
  const { edges } = data.allFile;

  const sampleMenuHeader =
    "We can provide a uniquely curated menu made especially for your event. Contact us for pricing and options";

  return (
    <Layout>
      <PageTransition>
        <div className="menu-page-container">
          <MenuCard />
          <Container className="menus-container">
            <h2 className="sample-menu-header">{sampleMenuHeader}</h2>
            {edges.map((images, id) => {
              const { gatsbyImageData } = images.node.childImageSharp;

              return (
                <div className="menu-image" key={id}>
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt="sample menu"
                    key={id}
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

export default Menu;

export const query = graphql`
  query MenuPageQuery {
    allFile(
      filter: { relativeDirectory: { regex: "/menus/" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: WEBP
              webpOptions: { quality: 50 }
              width: 1000

              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;
