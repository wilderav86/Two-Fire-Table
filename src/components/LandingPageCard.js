import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Button } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";

const LandingPageCard = () => {
  const data = useStaticQuery(graphql`
    query LandingPageCardData {
      allContentfulHomePageCard(sort: { order: ASC, fields: cardOrder }) {
        nodes {
          body {
            body
          }
          image {
            gatsbyImageData(height: 500)
          }
          title
          video {
            file {
              url
            }
            url
          }
          buttonData
        }
      }
    }
  `);

  // const data = useStaticQuery(graphql`
  //   query LandingPageCardData {
  //     allMarkdownRemark(
  //       filter: { frontmatter: { section: { eq: "landingpage" } } }
  //       sort: { fields: frontmatter___order }
  //     ) {
  //       nodes {
  //         frontmatter {
  //           button
  //           image {
  //             childImageSharp {
  //               gatsbyImageData(width: 700, formats: WEBP, placeholder: BLURRED)
  //             }
  //           }
  //           slug
  //           title
  //           section
  //         }
  //         html
  //         id
  //       }
  //     }
  //   }
  // `);

  // const { nodes } = data.allMarkdownRemark;
  const { nodes } = data.allContentfulHomePageCard;

  return (
    <>
      {nodes.map((card, id) => {
        console.log("card", card);
        return (
          <FadeInWhenVisible key={`animation${card.id}`}>
            <Container
              className="landing-page-card"
              id={"card" + id}
              key={`container${card.id}`}
            >
              <div className="mobile-title" key={`title${card.id}`}>
                <h2
                  className="landing-page-card-title"
                  key={`cardTitle${card.id}`}
                >
                  {card.title}
                </h2>
              </div>

              {card.image && !card.video ? (
                <GatsbyImage
                  className="landing-page-card-image"
                  image={card.image.gatsbyImageData}
                  // image={card.frontmatter.image.childImageSharp.gatsbyImageData}
                  alt="card image"
                  key={card.id}
                />
              ) : (
                <div className="landing-page-card-video">
                  <video
                    className="landing-page-card-video"
                    width="100%"
                    height="100%"
                    controls
                  >
                    <source src={card.video.file.url} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="landing-page-card-text" key={`text${card.id}`}>
                <div className="desktop-title" key={`desktop${card.id}`}>
                  <h2
                    className="landing-page-card-title"
                    key={`cardTitle${card.id}`}
                  >
                    {card.title}
                  </h2>
                </div>
                <div className="landing-page-card-body" key={`body${card.id}`}>
                  <p>{card.body.body}</p>
                </div>

                <div
                  className="landing-page-card-button"
                  key={`button${card.id}`}
                >
                  {card.buttonData ? (
                    <Link to={card.buttonData[1]} key={`link${card.id}`}>
                      <Button
                        as={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        size="lg"
                        variant="custom"
                        key={`btn${card.id}`}
                      >
                        {card.buttonData[0]}
                      </Button>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </Container>
            <div className="divider div-transparent" key={id}></div>
          </FadeInWhenVisible>
        );
      })}
    </>
  );
};

export default LandingPageCard;
