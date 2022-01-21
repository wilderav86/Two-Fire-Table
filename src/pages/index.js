import * as React from "react";
import Layout from "../components/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import { Container } from "react-bootstrap";
import SEO from "../components/SEO";
import LandingPageCard from "../components/LandingPageCard";
import LandingBackground from "../components/BackgroundImage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <Layout>
        <div className="app-container">
          <SEO />
          <LandingBackground />
          <Container className="content">
            <LandingPageCard />
          </Container>
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export default IndexPage;
