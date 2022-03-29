import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart, addCart } from '../redux/actions/cartActions';
import {Link} from 'react-router-dom'
import CartItem from './CartItem';
const Cart = () => {
      const cart = useSelector((state) => state.cartItem.cartItems);
        const carti = useSelector((state) => state.handleCart);
        console.log(carti);
       console.log(cart)
      const dispatch = useDispatch();
       
        // const fetchCart = async () => {
        //   const response = await axios
        //     // .get("https://fakestoreapi.com/products")
        //     .get("https://localhost:7182/api/shoppingCart/1/getitems")
        //     .catch((err) => {
        //       console.log("err", err);
        //     });
        //   console.log(response.data);
        //   dispatch(setCart(response.data));
        // };

        useEffect(() => {
        //   fetchCart();
        dispatch(addCart)
        }, [carti]);
        console.log(carti);

         const EmptyCart = () => (
           <Typography variant="subtitle1">
             You have no items in your shopping cart,
             <Link to="/">
               start adding some
             </Link>
             !
           </Typography>
         );
  return (
    <div className="ui grid container">
          {!carti.length ? <EmptyCart /> : <CartItem />}
    </div>
   
  );
}

export default Cart