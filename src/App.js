import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";
import Cart from "./Cart";
import productsdata from "./productsdata.js";

function App() {
  return (
    <div>
      <Router>
      <div id="navigation">
        <ul>
        <li><Link to="/" target="_parent"> <strong style={{textDecoration:"none", color:"red", border: "3px solid black", borderRadius: "10px", padding:"5px", backgroundColor:"yellow"}}>Home</strong> </Link></li>
        <li><Link to="/products" target="_parent"> <strong style={{textDecoration:"none", color:"red", border: "3px solid black", borderRadius: "10px", padding:"5px", backgroundColor:"yellow"}}>Products</strong>  </Link></li>
        <li><Link to="/cart" target="_parent"> <strong style={{textDecoration:"none", color:"red", border: "3px solid black", borderRadius: "10px", padding:"5px", backgroundColor:"yellow"}}>Cart</strong>  </Link></li>
      </ul>
      </div>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={() => <ProductList productsdata={productsdata} />} />
        <Route path="/cart" component={Cart} />
        </Router>
    </div>
  );
}

export default App;
