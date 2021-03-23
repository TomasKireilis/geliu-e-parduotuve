import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FrontPage from "./FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "Header/Header";
import ShoppingCartPage from "./ShoppingCartPage/ShoppingCartPage";
import { useState } from "react";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Gėlių e-parduotuvė");
  const updateHeaderTitle = (title) => {
    setHeaderTitle(title);
  };
  return (
    <Router>
      <div className="App">
        <Header title={headerTitle} />

        <Route
          exact
          path="/"
          component={FrontPage}
          component={() => (
            <FrontPage updateHeaderTitle={(value) => updateHeaderTitle} />
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
    </Router>
  );
}

export default App;
