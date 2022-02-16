import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Pruductdetails{id}</h1>
    </div>
  );
};

export default ProductDetail;
