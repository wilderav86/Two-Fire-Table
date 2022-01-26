import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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

  console.log(nodes);

  return (
    <div className="menu-card-container">
      {nodes.map((menu, id) => {
        const { title } = menu.frontmatter;
        console.log(menu);
        return (
          <div className="menu-card">
            <div className="menu-card-title">{title}</div>
            <div
              className="menu-card-text"
              dangerouslySetInnerHTML={{ __html: menu.html }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
