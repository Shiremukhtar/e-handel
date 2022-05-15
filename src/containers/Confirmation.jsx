import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";
const Confirmation = () => {
  const [isFinished, setIsFinished] = useState(false);
  const dispatch = useDispatch();
  const order = null;
  dispatch(clearCart());

  // useEffect(() => {
  //   window.location.reload(true);
  //   setIsFinished(true)
  // }, !isFinished)

  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h6>Home / Confirmation</h6>
        </div>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <Divider />
              <Typography variant="h4">Thank you for your purchase</Typography>
              <Divider />
              <Typography variant="h6">
                Check your email inbox for the receipt.
              </Typography>
              <div style={{ marginTop: "25px" }}>
                <p>
                  If you have any questions, please email{" "}
                  <a className="email" href="mailto:order@example.com">
                    order@example.com
                  </a>
                </p>
              </div>
              <Divider />
              <br /> <hr />
              <Button
                component={Link}
                to="/"
                variant="outlined"
                type="button"
              >
                Back to Home
              </Button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
