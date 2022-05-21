import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./containers/Cart";
import Header from "./containers/Header";
import Home from "./containers/Home";
import ProductDetail from "./containers/ProductDetail";
import Checkout from "./containers/Checkout";
import ProductListing from "./containers/ProductListing";
import PaymentForm from "./containers/PaymentForm";
import Confirmation from "./containers/Confirmation";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<Home />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/paymentForm" element={<PaymentForm />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
