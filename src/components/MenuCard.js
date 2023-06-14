import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";

const MenuCard = () => {
  const [season, setSeason] = useState("");

  const data = useStaticQuery(graphql`
    query menuPage {
      allContentfulMenuItem(sort: { fields: group, order: DESC }) {
        group(field: group) {
          nodes {
            dishTitle
            childContentfulMenuItemDishDescriptionTextNode {
              dishDescription
            }
            order
          }
          fieldValue
        }
      }
    }
  `);
  // const data = useStaticQuery(graphql`
  //   query MenuCardQuery {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { section: { eq: "Menu" } } }
  //       sort: { order: ASC, fields: frontmatter___order }
  //     ) {
  //       nodes {
  //         frontmatter {
  //           title
  //           order
  //         }
  //         html
  //       }
  //     }
  //   }
  // `);

  const { group } = data.allContentfulMenuItem;

  console.log(group);

  const renderMenuItems = group.map((menuItem, id) => {
    return (
      <>
        <div className="menu-card-title">{}</div>
        <div className="menu-card-text"></div>
      </>
    );
  });

  const renderMenuCards = group.map((cardData, id) => {
    console.log(cardData);

    return (
      <div className="menu-card" key={id} group={cardData.group}>
        {cardData.fieldValue + " menu"}
        {cardData.nodes.map((menuItem, id) => {
          console.log("menu item", menuItem);
          return (
            <>
              <div className="menu-item-container">
                <div className="menu-card-title">{menuItem.dishTitle}</div>
                <div className="menu-card-text">
                  {
                    menuItem.childContentfulMenuItemDishDescriptionTextNode
                      .dishDescription
                  }
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  });

  return (
    <Container as="div" className="menu-card-container">
      {renderMenuCards}
      {/* {renderMenuItems} */}
      {/* {nodes.map((menu, id) => {
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
      })} */}
    </Container>
  );
};

export default MenuCard;
