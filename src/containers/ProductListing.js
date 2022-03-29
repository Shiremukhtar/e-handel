import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../redux/actions/productActions";
import Skeleton from "react-loading-skeleton";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [loading, setLoading] = useState(false);
  const [filtared, setFilter] = useState([]);
  const cartItems = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  // const fetchCart = async () => {
  //   const response = await axios
  //     // .get("https://fakestoreapi.com/products")
  //     .get("https://localhost:7182/api/shoppingCart/1/getitems")
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  //   console.log(response.data);
  //   // dispatch(setCart(response.data));
  // };

  // useEffect(() => {
  //   fetchCart();
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
    // fetchCart();
  }, []);
  

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProducts = (cat) => {
    const updatedList = products.filter((x) => x.categoryName === cat);
    setFilter(updatedList);
    alert(updatedList)
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
        <Product />
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
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default ProductListing;
