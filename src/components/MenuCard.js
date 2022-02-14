import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";

const MenuCard = () => {
  const data = useStaticQuery(graphql`
    query MenuCardQuery {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "Menu" } } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            title
            order
          }
          html
        }
      }
    }
  `);

  const { nodes } = data.allMarkdownRemark;

  return (
    <Container as="div" className="menu-card-container">
      {nodes.map((menu, id) => {
        const { title } = menu.frontmatter;

        return (
          <div className="menu-card" key={id}>
            <div className="menu-card-title">{title}</div>
            <div
              className="menu-card-text"
              dangerouslySetInnerHTML={{ __html: menu.html }}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default MenuCard;
