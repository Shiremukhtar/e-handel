import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart, addCart} from "../redux/actions/cartActions";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions.js";
const ProductDetails = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  let product = useSelector((state) => state.product);
  const { imageURL, name, price, categoryName, description } = product;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.handleCart.cart)
 console.log(cart)

  
  // const addToCart = async () => {
  //   const response = await axios
  //     .post(`https://localhost:7182/api/ShoppingCart`, {cartId: 1, productId: productId, qty: 1})
  //     console.log(response.data)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //      dispatch(setCart(response.data));
  // }

  
  useEffect(() => {
    setLoading(true)
    if (productId && productId !== "")  dispatch(fetchProduct(productId));
    setLoading(true);
    setLoading(false);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={150} width={100} style={{marginLeft:6}} />
        </div>
      </>
    );
  }

      const addToCart = (product) => {
        dispatch(addCart(product));
      };

  const ShowProduct = () => {
    return(
      <>
      <div className="col-md-6">
        <img src={imageURL} alt={name} height="400px" width="400px"/>
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
          {categoryName}
        </h4>
        <h1 className="display-5">
          {name}
        </h1>
        <h3 className="display-6 fw-bold my-4">
          $ {price}
        </h3>
        <p className="lead">
          {description}
        </p>
        <button className="btn btn-outline-dark px-4 py-2" 
         onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <Link to="/cart" className="btn btn-dark ms-2 py-2 px-3">Go to Cart</Link>
      </div>
      
      </>
    )

  
  }
  return (
    <div className="container py-5">
      {Object.keys(product).length === 0 ? (
        <div className="row"><Loading /></div>
      ) : (
        <div className="row py-4">
         { loading ? <Loading /> : <ShowProduct/>}
        </div>
      //   <div className="ui placeholder segment">
      //     <div className="ui two column stackable center aligned grid">
      //       <div className="ui vertical divider">AND</div>
      //       <div className="middle aligned row">
      //         <div className="column lp">
      //           <img className="ui fluid image" src={imageURL} alt="title" />
      //         </div>
      //         <div className="column rp">
      //           <h1>{name}</h1>
      //           <h2>
      //             <a className="ui teal tag label">${price}</a>
      //           </h2>
      //           <h3 className="ui brown block header">{categoryName}</h3>
      //           <p>{description}</p>
      //           <div className="ui vertical animated button" tabIndex="0">
      //             <div className="hidden content">
      //               <i className="shop icon"></i>
      //             </div>
      //             <div onClick={()=> addToCart(product)} className="visible content">Add to Cart</div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
       )}
    </div>
  );
};

export default ProductDetails;
