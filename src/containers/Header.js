import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Navbar,
  Container,
  Brand,
  Toggle,
  Collapse,
  Nav,
} from "react-bootstrap";
const Header = () => {
  // const cartItems = useSelector((state) => state.cartItem.cartItems);
  const state = useSelector((state) => state.handleCart);

  let totalCount;
  if (!state.length < 1) {
    totalCount = state.reduce((a, c) => a += c.qty, 0);
  } else {
    totalCount = 0;
  }




  console.log(totalCount)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">SHIRE COLLECTION</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link active" to="/products">
                Products
              </Link>
              <Link className="nav-link disabled" to="Contact">
                Contact
              </Link>
            </Nav>
            <div className="buttons">
              <Link
                to="/login"
                className="btn btn-outline-dark disabled"
                disabled
              >
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-dark ms-2 disabled"
                disabled
              >
                <i className="fa fa-user-plus me-1"></i> Register
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({totalCount})
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
