import React from "react";
import PaymentSum from "./paymentbar/PaymentSum";
import CartDetail from "./cartdetail/CartDetail";
import "./cartdetail/CartDetail.scss";
import AccessCheck from "../common/AccessCheck";

const Cart = () => {
  return (
    <div className="shoppingCartWrapper">
      <AccessCheck />
      <PaymentSum />
      <CartDetail />
    </div>
  );
};

export default Cart;
