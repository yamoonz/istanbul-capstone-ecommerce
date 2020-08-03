import React from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  let { productId } = useParams();

  return <div>{productId}</div>;
};

export default SingleProductPage;
