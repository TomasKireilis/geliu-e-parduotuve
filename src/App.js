import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "Header/Header";
import ShoppingCartPage from "./ShoppingCartPage/ShoppingCartPage";
import IntegrationServicePage from "IntegrationService/IntegrationServicePage";
import { useState, useContext, useEffect } from "react";
import { GlobalProvider } from "Context/GlobalState";

import { checkCurrentUserRole } from "Service/FlowerService";
import { GlobalContext } from "Context/GlobalState.js";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Gėlių e-parduotuvė");
  const updateHeaderTitle = (title) => {
    setHeaderTitle(title);
  };
  const { loginInfo } = useContext(GlobalContext);
  const [userType, setUserType] = useState("anomymous");

  useEffect(async () => {
    setUserType(
      await checkCurrentUserRole({
        loggedIn: loginInfo.loggedIn,
        email: loginInfo.email,
        password: loginInfo.password,
      })
    );
  }, [loginInfo]);

  return (
    <GlobalProvider>
      <Router>
        <Header title={headerTitle} />
        <div className="page-container">
          <div className="page-container-effect">
            <div className="page-container-effect">
              <div className="page-container-child-holder">
                <div className="fixed-full-screen background-image"></div>
                <div className="fixed-full-screen background-color"></div>
                <Route
                  exact
                  path="/"
                  component={() => (
                    <FrontPage updateHeaderTitle={updateHeaderTitle} />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  component={() => (
                    <ShoppingCartPage updateHeaderTitle={updateHeaderTitle} />
                  )}
                />
                {userType != "anomymous" && (
                  <Route
                    exact
                    path="/IntegrationService"
                    component={() => (
                      <IntegrationServicePage
                        updateHeaderTitle={updateHeaderTitle}
                      />
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
