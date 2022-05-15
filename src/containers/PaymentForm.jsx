import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/actions/cartActions";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = () => {
  const cart = useSelector((state) => state.handleCart);
  // const totalCartPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  let totalCartPrice;
  if (!cart.length < 1) {
    totalCartPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  } else {
    totalCartPrice = 0;
  }
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: "checkoutToken.live.line_items",
        customer: {
          firstname: "",
          lastname: "",
          email: "",
        },
        shipping: {
          name: "Primary",
          street: "",
          town_city: "",
          county_state: "",
          postal_zip_code: "",
          country: "",
        },
        fulfillment: "{ shipping_method: shippingData.shippingOption }",
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      // dispatch(clearCart());
      navigate("/confirmation");
      // window.location.reload(false);
      // onCaptureCheckout(checkoutToken.id, orderData);
      // timeout();
      // handleEmptyCart();
      // nextStep();
    }
  };

  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h6>Home / Payment</h6>
        </div>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Divider />
              <div className="card">
                <div className="card-header">
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ margin: "20px 0" }}
                  >
                    Order Summary
                  </Typography>
                  <List disablePadding>
                    {cart.map((product) => (
                      <ListItem
                        style={{ padding: "10px 0" }}
                        key={product.name}
                      >
                        <ListItemText
                          primary={product.name.substring(0, 12)}
                          secondary={`Quantity: ${product.qty}`}
                        />
                        <Typography variant="body2">
                          ${product.qty * product.price}
                        </Typography>
                      </ListItem>
                    ))}
                    <ListItem style={{ padding: "10px 0" }}>
                      <ListItemText primary="Total" />
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: 700 }}
                      >
                        ${totalCartPrice}
                      </Typography>
                    </ListItem>
                  </List>
                  <Divider />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ margin: "20px 0" }}
                  >
                    Payment method
                  </Typography>
                  <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                      {({ elements, stripe }) => (
                        <form
                          onSubmit={(e) => handleSubmit(e, elements, stripe)}
                        >
                          <CardElement />
                          <br /> <br />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Link className="btn btn-outline-dark" to="/cart">
                              Back
                            </Link>
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              disabled={!stripe}
                            >
                              Pay with Stripe ${totalCartPrice}
                            </Button>
                          </div>
                        </form>
                      )}
                    </ElementsConsumer>
                  </Elements>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
