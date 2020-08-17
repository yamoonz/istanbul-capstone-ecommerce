import React from "react";
import PaymentSum from "./paymentbar/PaymentSum";
import "./cartdetail/CartDetail.scss";
import AccessCheck from "../common/AccessCheck";
import ShoppingList from "./shoppingList/ShoppingList";

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
