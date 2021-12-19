import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import { Container } from "react-bootstrap";

//import LoadingScreen from "../components/LoadingScreen";

//import Header from "../components/Header";

import "../style.css";
import LandingPageCard from "../components/LandingPageCard";
import LandingBackground from "../components/BackgroundImage";

const IndexPage = ({ data }) => {
  return (
    <div className="app-container">
      <Layout>
        <LandingBackground />
        <Container>
          <h1>CONTENT</h1>
        </Container>
        <LandingPageCard />
      </Layout>
    </div>
  );
};

export default IndexPage;
