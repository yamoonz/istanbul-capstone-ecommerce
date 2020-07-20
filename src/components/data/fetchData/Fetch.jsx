import React, { useEffect } from "react";
import db from "../../config/firebaseConfig";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions";

export default function Fetch() {
  const dispatch = useDispatch();

  const getProducts = async () => {
    const allProducts = await db.collection("products").get();
    const products = [];
    allProducts.forEach((product) => {
      products.push(product.data());
    });
    dispatch(getAllProducts(products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div></div>;
}
