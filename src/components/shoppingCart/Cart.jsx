import React from "react";
import PaymentSum from "./paymentbar/PaymentSum";
import ShoppingList from "./shoppingList/ShoppingList";

const Cart = () => {
  return (
    <div className="shoppingCartWrapper">
      <PaymentSum />
      <ShoppingList />
    </div>
  );
};

export default Cart;
