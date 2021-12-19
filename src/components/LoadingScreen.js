import React from "react";
import BadgeLogo from "../images/BadgeLogo.jpg";

const LoadingScreen = () => {
  return (
    <div className="loading-screen-container">
      <img
        className="loading-screen-img"
        src={BadgeLogo}
        alt="loading screen"
      />
    </div>
  );
};

export default LoadingScreen;
