import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query Instagram {
      allInstagramContent(limit: 8) {
        nodes {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                aspectRatio: 1
                height: 500
                width: 500
                transformOptions: { cropFocus: CENTER, fit: COVER }
                backgroundColor: "grey"
              )
              id
            }
          }
          media_url
        }
      }
    }
  `);

  const { nodes } = data.allInstagramContent;

  console.log(data);
  console.log("fart");
  // const { id, gatsbyImageData } =
  //   data.allInstagramContent.nodes.localFile.childImageSharp;
  // console.log(id, gatsbyImageData);
  return (
    <Container
      className="instagram-container"
      style={{
        marginBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {nodes.map((image) => {
        const { gatsbyImageData, id } = image.localFile.childImageSharp;

        return (
          // <a href={image.media_url}>
          <GatsbyImage image={gatsbyImageData} key={id} alt={id} />
          // </a>
        );
      })}
    </Container>
  );
};

export default Instagram;
