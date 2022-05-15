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

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            SHIRE COLLECTION
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="Contact">
                  Contact
                </Link>
              </li>
            </ul>
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
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

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
              <Link className="nav-link active" to="Contact">
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
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
