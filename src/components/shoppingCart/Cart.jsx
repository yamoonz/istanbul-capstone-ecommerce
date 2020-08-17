import React from "react";
import PaymentSum from "./paymentbar/PaymentSum";
import ShoppingList from "./shoppingList/ShoppingList";
import "./cartdetail/CartDetail.scss";
import AccessCheck from "../common/AccessCheck";

const Cart = () => {
  return (
    <div className="shoppingCartWrapper">
      <AccessCheck />
      <PaymentSum />
      <ShoppingList />
    </div>
  );
};

export default Cart;
