import React, { useEffect } from "react";
import MainScreen from "MainScreen";

const FrontPage = ({ updateHeaderTitle }) => {
  useEffect(() => {
    updateHeaderTitle("Gėlių e-parduotuvė");
  }, []);
  return (
    <>
      <div className="fixed-full-screen background-image"></div>
      <div className="fixed-full-screen background-color"></div>
      <MainScreen />
    </>
  );
};

export default FrontPage;
