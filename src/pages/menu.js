import React from "react";
import { graphql } from "gatsby";
import { Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import MenuCard from "../components/MenuCard";
import Layout from "../components/Layout";

const Menu = ({ data }) => {
  const { edges } = data.allFile;

  // console.log(data);

  return (
    <Layout>
      <div className="menu-page-container">
        <Container>
          <h1>Sample Menus</h1>
        </Container>
        <MenuCard />

        <Container className="menus-container">
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
