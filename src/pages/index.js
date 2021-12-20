import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import { Container } from "react-bootstrap";

//import LoadingScreen from "../components/LoadingScreen";

//import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import LandingPageCard from "../components/LandingPageCard";
import LandingBackground from "../components/BackgroundImage";

const IndexPage = () => {
  return (
    <div className="app-container">
      <Layout>
        <LandingBackground />

        <Container className="content">
          <LandingPageCard />
        </Container>
      </Layout>
    </div>
  );
};

export default IndexPage;
