import "./App.css";
import ShoppingCartTable from "./ShoppingCartTable";
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
