import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Button } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

const LandingPageCard = () => {
  const data = useStaticQuery(graphql`
    query LandingPageCardData {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "landingpage" } } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          frontmatter {
            button
            image {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            slug
            title
            section
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
    <>
      {nodes.map((card, id) => {
        return (
          <>
            <FadeInWhenVisible>
              <Container
                className="landing-page-card"
                id={"card" + id}
                key={card.id}
              >
                <div className="mobile-title">
                  <h2 className="landing-page-card-title">
                    {card.frontmatter.title}
                  </h2>
                </div>

                <GatsbyImage
                  className="landing-page-card-image"
                  image={card.frontmatter.image.childImageSharp.gatsbyImageData}
                  alt={card.frontmatter.title}
                  key={card.id}
                />

                <div className="landing-page-card-text">
                  <div className="desktop-title">
                    <h2 className="landing-page-card-title">
                      {card.frontmatter.title}
                    </h2>
                  </div>
                  <div
                    className="landing-page-card-body"
                    dangerouslySetInnerHTML={{ __html: card.html }}
                  />

                  <div className="landing-page-card-button">
                    <Link to={card.frontmatter.slug}>
                      <Button
                        as={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        size="lg"
                        variant="custom"
                      >
                        {card.frontmatter.button}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
              <div className="divider div-transparent" key={id}></div>
            </FadeInWhenVisible>
          </>
        );
      })}
    </>
  );
};

export default LandingPageCard;
