import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartTable from "./ShoppingCartPage/ShoppingCartTable";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/cart" component={ShoppingCartTable}/>
      </div>
    </Router>
  );
}

export default App;
