import React from "react";
import PaymentSum from "./paymentbar/PaymentSum";
import CartDetail from "./cartdetail/CartDetail";
import "./cartdetail/CartDetail.scss";

const Cart = () => {
  return (
    <div className="shoppingCartWrapper">
      <PaymentSum />
      <CartDetail />
    </div>
  );
};

export default Cart;
