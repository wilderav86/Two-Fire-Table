import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import { Container } from "react-bootstrap";
import SEO from "../components/SEO";
import LandingPageCard from "../components/LandingPageCard";
import LandingBackground from "../components/BackgroundImage";
import Instagram from "../components/Instagram";
import ScrollToTop from "../components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query Banner {
  //     allContentfulBanner {
  //       nodes {
  //         text
  //       }
  //     }
  //     contentfulHomePageHeroImage {
  //       heroImage {
  //         gatsbyImageData(
  //           formats: WEBP
  //           layout: CONSTRAINED
  //           quality: 50
  //           placeholder: BLURRED
  //         )
  //       }
  //   }
  // `);

  const { text } = data.allContentfulBanner.nodes.at(0);
  const { heroImage } = data.contentfulHomePageHeroImage;

  return (
    <ParallaxProvider>
      <Layout>
        <div className="app-container">
          <Helmet></Helmet>
          {/* <SEO title="Two Fire Table" siteUrl="www.twofiretable.com" /> */}
          <LandingBackground heroImage={heroImage} />
          <h1 className="mission-statement">{text}</h1>
          <div className="divider div-transparent"></div>
          <Container className="content">
            <LandingPageCard />
          </Container>
          {/* <Instagram /> */}
          <ScrollToTop />
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export const query = graphql`
  query Banner {
    allContentfulBanner {
      nodes {
        text
      }
    }
    contentfulHomePageHeroImage {
      heroImage {
        gatsbyImageData(
          formats: WEBP
          layout: CONSTRAINED
          quality: 50
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default IndexPage;
