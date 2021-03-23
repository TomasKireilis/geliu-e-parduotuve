import React, { useEffect } from "react";
import MainScreen from "MainScreen";

const FrontPage = ({ updateHeaderTitle }) => {
  useEffect(() => {
    updateHeaderTitle("Your shopping cart");
  }, []);
  return (
    <>
      <div className="fixed-full-screen bacround-image"></div>
      <div className="fixed-full-screen backround-color"></div>
      <MainScreen updateHeaderTitle={updateHeaderTitle} />
    </>
  );
};

export default FrontPage;
