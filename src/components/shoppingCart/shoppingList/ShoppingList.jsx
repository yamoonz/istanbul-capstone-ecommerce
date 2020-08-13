import React from "react";
import { useSelector } from "react-redux";
import CartDetail from "../cartdetail/CartDetail";
import { Row } from "react-bootstrap";

export default function ShoppingList() {
  const productsData = useSelector((state) => state.addOrDeleteProductData);

  return (
    <div className="shoppingListItemContainer">
      <Row>
        {productsData.map((info, index) => (
          <CartDetail info={info} index={index} />
        ))}
      </Row>
    </div>
  );
}
