import React from 'react'
import { useSelector } from "react-redux";
const CartItem = () => {
    //  const cart = useSelector((state) => state.cartItem.cartItems);
    const carti = useSelector((state) => state.handleCart);
    
     const renderList = carti.map((cartItem) => {
       const { id, name, imageURL, totalPrice, price, qty} = cartItem;
       return (
         <div className="four wide column" key={id}>
           <div className="ui link cards">
             <div className="card h-100">
               <div className="image">
                 <img src={imageURL} alt={name} />
               </div>
               <div className="content">
                 <div className="header">{name}</div>
                 <div>Quantity: {qty} x ${price}</div>
                 <div className="meta price">DelTotal {}$ {price * qty}</div>
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