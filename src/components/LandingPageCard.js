import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LandingPageCard = () => {
  const data = useStaticQuery(graphql`
    query LandingPageCardData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
            title
          }
          html
          id
        }
      }
    }
  `);

  const { nodes } = data.allMarkdownRemark;

  console.log(nodes);
  return (
    <div>
      {nodes.map((card) => {
        console.log(card);
        return (
          <Container className="landing-page-card" key={card.id}>
            <Container>
              <h2>{card.frontmatter.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: card.html }} />
            </Container>

            <GatsbyImage
              image={card.frontmatter.image.childImageSharp.gatsbyImageData}
              alt={card.frontmatter.title}
            />
          </Container>
        );
      })}
    </div>
  );
};

export default LandingPageCard;
