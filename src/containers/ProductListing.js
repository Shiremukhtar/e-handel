import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      // .get("https://fakestoreapi.com/products")
      .get("https://localhost:7182/api/Product")
      .catch((err) => {
        console.log("err", err);
      });
      console.log(response.data);
    dispatch(setProducts(response.data));
  };

  
  useEffect(() => {
fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductListing;
