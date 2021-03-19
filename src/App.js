import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartTable from "./ShoppingCartPage/ShoppingCartTable";
import FrontPage from "./FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={FrontPage} />
        <Route exact path="/cart" component={ShoppingCartTable} />
      </div>
    </Router>
  );
}

export default App;
