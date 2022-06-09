import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const cart = useSelector((state) => state.handleCart);
  const totalCartPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);

  const renderList = cart.map((cartItem, index) => {
    const { id, title, image, totalPrice, price, qty } = cartItem;
    return (
      <tr key={index}>
        <td>{title}</td>
        <td>{price}</td>
        <td>{qty}</td>
        <td>{qty * price}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="py-3 bg-warning">
        <div className="container">
          <h6>Home / Checkout</h6>
        </div>
      </div>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label> Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label> Full Address</label>
                        <textarea rows="3" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label> City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          name="zipcode"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group d-flex justify-content-between">
                          <Link className="btn btn-outline-dark" to="/cart">
                            Back
                          </Link>
                          <Link className="btn btn-primary" to="/PaymentForm"> Next </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th width="50%">Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {renderList}
                  <tr>
                    <td colSpan="2" className="text-end fw-bold">
                      Grand Total
                    </td>
                    <td colSpan="2" className="text-end fw-bold">
                      {totalCartPrice}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
