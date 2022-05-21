import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/actions/productActions";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  
  const [filtared, setFilter] = useState([]);
  console.log(filtared);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchProducts());
    setFilter(products);
    console.log(filtared);
    // fetchCart();
  }, []);
  useEffect(() => {
    setFilter(products);
  }, []);

  const filterProducts = (cat) => {
    const updatedList = products.filter((x) => x.categoryName === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 py-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronic
          </button>
        </div>
        {filtared.length > 0
          ? filtared.map((product) => {
              return (
                <div className="col-md-3 mb-4" key={product.id}>
                  {/* <Link to={`/product/${id}`}> */}
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.imageURL}
                      className="card-img-top"
                      alt={product.name}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.name.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">
                        $ {product.price}
                      </p>
                      <p className="card-text">{product.category}</p>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              );
            })
          : products.map((product) => {
              console.log(product);
              return (
                <div className="col-md-3 mb-4" key={product.id}>
                  {/* <Link to={`/product/${id}`}> */}
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img
                      src={product.imageURL}
                      className="card-img-top"
                      alt={product.name}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.name.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">
                        $ {product.price}
                      </p>
                      <p className="card-text">{product.category}</p>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              );
            })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr></hr>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* {loading ? <Loading /> : <ShowProducts />} */}
        <ShowProducts />
      </div>
    </div>
  );
};

export default ProductListing;
