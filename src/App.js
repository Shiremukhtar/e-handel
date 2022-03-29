import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./containers/Cart";
import Header from "./containers/Header";
import Home from "./containers/Home";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Home/>}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
