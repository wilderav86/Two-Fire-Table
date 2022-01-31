import * as React from "react";
import Layout from "../components/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import { Container } from "react-bootstrap";
import SEO from "../components/SEO";
import LandingPageCard from "../components/LandingPageCard";
import LandingBackground from "../components/BackgroundImage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Instagram from "../components/Instagram";

const IndexPage = () => {
  const missionStatement =
    "Located in Scottsville, Virginia, Two Fire Table encapsulates cumulatuve experiences by emphasizing the fusion of seasonal Virginia ingredients with rich cultures to bring a memorable experience shared by the fire.";

  console.log("hello");
  return (
    <ParallaxProvider>
      <Layout>
        <div className="app-container">
          <SEO />
          <LandingBackground />

          <h1 className="mission-statement">{missionStatement}</h1>
          <div className="divider div-transparent"></div>
          <Container className="content">
            <LandingPageCard />
          </Container>
          <Instagram />
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
