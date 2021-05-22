import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "Header/Header";
import ShoppingCartPage from "./ShoppingCartPage/ShoppingCartPage";
import { useState } from "react";
import { GlobalProvider } from "Context/GlobalState";
import RegisterAccount from "./AcountPopups/RegisterAccount";


function App() {
  const [headerTitle, setHeaderTitle] = useState("Gėlių e-parduotuvė");
  const updateHeaderTitle = (title) => {
    setHeaderTitle(title);
  };
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
              </div>
            </div>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
