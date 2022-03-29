import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, name, imageURL, price, category } = product;
    return (
      <div className="col-md-3 mb-4" key={id}>
        {/* <Link to={`/product/${id}`}> */}
          <div className="card h-100 text-center p-4" key={id}>
            <img
              src={imageURL}
              className="card-img-top"
              alt={name}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">{name.substring(0, 12)}</h5>
              <p className="card-text lead fw-bold">$ {price}</p>
              <p className="card-text">{category}</p>
              <Link to={`/product/${id}`} className="btn btn-outline-dark">
                Buy Now
              </Link>
            </div>
          </div>
        {/* </Link> */}
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
