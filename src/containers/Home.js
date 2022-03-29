import React from 'react'
import ProductListing from './ProductListing';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-secondary text-white border-0">
        <img
          src=""
          className="card-img"
          alt=""
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
             CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <ProductListing />
    </div>
  );
}

export default Home