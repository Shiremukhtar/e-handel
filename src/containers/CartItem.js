import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart, delCartProduct } from "../redux/actions/cartActions";
const CartItem = () => {
    //  const cart = useSelector((state) => state.cartItem.cartItems);
    const carti = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

     const addToCart = (product) => {
       dispatch(addCart(product));
     };
    const removeFromCart = (product) => {
      // const product = carti.find(p => p.id === productId);
      console.log(product)
      dispatch(delCartProduct(product));
    };

    const removeCartItem = (product) => {
      dispatch(delCart(product))
    }
    
     const renderList = carti.map((cartItem) => {
       const { id, name, imageURL, totalPrice, price, qty} = cartItem;
       return (
         <div className="col-md-3 mb-4" key={id}>
           <div className="card h-100 text-center p-4">
             <img
               className="card-img-top"
               height="250px"
               src={imageURL}
               alt={name}
             />
             <div className="card-body">
               <h5 className="card-title mb-3">{name.substring(0, 12)}</h5>
               <span className='card-text fw-bold me-2'>
                 Quantity: {qty} x ${price}
               </span>
               <span className="card-text fw-bold">
                 ${price * qty}
               </span>
               <div className="d-flex align-items-center justify-context-between mt-3">
                 <button
                   className="btn btn-small ms-3"
                   onClick={() => {
                     removeCartItem(cartItem);
                  }}
                  >
                   -
                 </button>
                 <span className='mx-4'>{qty}</span>
                 <button
                   className="btn btn-small ms-10"
                   onClick={() => {
                     addToCart(cartItem);
                     
                   }}
                 >
                   +
                 </button>
                 <button className="btn btn-danger ms-5" onClick={() => {removeFromCart(cartItem)}}>Remove</button>
               </div>
             </div>
           </div>
         </div>
       );
     });
  return (
    <>{renderList}</>
  )
}

export default CartItem;