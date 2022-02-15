import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  // const products = useSelector((state) => state);
  // const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    console.log(response);
  };

  fetchProducts();
  // useEffect(() => {

  // }, []);

  return (
    <div className="ui grid container ct">
      <div></div>
    </div>
  );
};

export default ProductListing;
