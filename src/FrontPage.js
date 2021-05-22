import React, { useEffect } from "react";
import MainScreen from "MainScreen";

const FrontPage = ({ updateHeaderTitle }) => {
  useEffect(() => {
    updateHeaderTitle("Gėlių e-parduotuvė");
  }, []);

  return (
    <>
      <MainScreen />
    </>
  );
};

export default FrontPage;
