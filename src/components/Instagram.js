import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

// const Instagram = () => {
//   const data = useStaticQuery(graphql`
//     query Instagram {
//       allInstagramContent(limit: 8) {
//         nodes {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 placeholder: TRACED_SVG
//                 height: 1000
//                 width: 1000
//                 formats: WEBP
//                 webpOptions: { quality: 50 }
//               )
//               id
//             }
//           }
//           media_url
//         }
//       }
//     }
//   `);

//   const heading = "Follow us on instagram @TwoFireTable";
//   const instagramLink = "https://www.instagram.com/twofiretable/";

//   const { nodes } = data.allInstagramContent;

//   return (
//     <>
//       <motion.div
//         className="link-container"
//         whileHover={{
//           scale: 1.01,
//           transition: { ease: "easeOut", duration: 0.2 },
//         }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <a className="insta-link" href={instagramLink}>
//           {heading}
//         </a>
//       </motion.div>
//       <div className="instagram-container">
//         {nodes.map((image) => {
//           const { gatsbyImageData, id } = image.localFile.childImageSharp;

//           return (
//             <div className="image-container" key={id}>
//               <a className="image-link" href={image.media_url} key={id}>
//                 <GatsbyImage image={gatsbyImageData} key={id} alt={id} />
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Instagram;
