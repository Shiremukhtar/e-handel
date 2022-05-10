import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
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
const Confirmation = () => {
    const [isFinished, setIsFinished] = useState(false);
    const order = null;
    
   
       
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
              <Typography variant="h5">Thank you for your purchase</Typography>
              <Divider className={""} />
              <br />
              <Button component={Link} to="/" variant="outlined" type="button">
                Back to Home
              </Button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation