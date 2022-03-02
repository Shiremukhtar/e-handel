import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from '../redux/actions/cartActions';
const Cart = () => {
      const products = useSelector((state) => state);
      const dispatch = useDispatch();

        const fetchProducts = async () => {
          const response = await axios
            // .get("https://fakestoreapi.com/products")
            .get("https://localhost:7182/api/shoppingCart/1/getitems")
            .catch((err) => {
              console.log("err", err);
            });
          console.log(response.data);
          dispatch(setCart(response.data));
        };

        useEffect(() => {
          fetchProducts();
        }, []);
  return (
    <div className="ui grid container">
      <h2>Here is the cart component</h2>
      <h2>Here is the cart component</h2>
      ui grid containerui grid containerui grid containerui grid containerui
      grid containerui grid containerui grid containerui grid containerui grid
      containerui grid containerui grid containerui grid containerui grid
      containerui grid container
    </div>
  );
}

export default Cart