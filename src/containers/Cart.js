import React, { useEffect } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart, addCart, clearCart } from "../redux/actions/cartActions";
import { emptyCart } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
const Cart = () => {
  // const cart = useSelector((state) => state.cartItem.cartItems);

  const cart = useSelector((state) => state.handleCart);
  console.log(cart);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   //   fetchCart();
  //   // dispatch(addCart);
  // }, [cart]);

  let totalPrice;
  if (!cart.length < 1) {
    totalPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  } else {
    totalPrice = 0;
  }

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </Typography>
  );
  return (
    <>
      <div className="py-3 bg-warning">
        <div className="container">
          <h6>Home / Cart</h6>
        </div>
      </div>

      <div className="container my-5 py-5">
        <h2 className="display-3 mb-3">Your Shopping Cart</h2>
        <div className="row">{!cart.length ? <EmptyCart /> : <CartItem />}</div>
        <div className="row">
          <div className="col-md-8 display-5 fw-bold mt-15 mb-10">
            {" "}
            SubTotal ${totalPrice}
          </div>
          <div className="col-md-4">
            {cart.length ? (
              <>
                <Button
                  className={""}
                  size="medium"
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(clearCart())}
                >
                  Empty Cart
                </Button>
                <Link
                  to="/checkout"
                  className="btn btn-primary px-4 py-1.7 ms-4"
                >
                  Checkout
                </Link>
              </>
            ) : (
              <Link to="/" className="btn btn-dark ms-2 py-2 px-3">
                Back to home
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
