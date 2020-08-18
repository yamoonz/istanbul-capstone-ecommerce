import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./PaymentSum.scss";
import { useSelector } from "react-redux";

// TODO(emrerdem1): To get these datas from Redux.
const SHIPPING_COST = 10;
const AMOUNT_TO_FREE_SHIPPING = 150;

const PaymentSum = () => {
  const allPrices = useSelector((state) => state.totalPrice);
  const total = allPrices.reduce((cur, acc) => {
    return cur + acc;
  }, 0);

  const [shippingCost] = useState(SHIPPING_COST);

  let totalCost;
  let isShippingFree;

  if (total >= AMOUNT_TO_FREE_SHIPPING || total === 0) {
    isShippingFree = true;
    totalCost = total;
  } else {
    isShippingFree = false;
    totalCost = Math.round(total + shippingCost);
  }

  const orderSummaryRow = (
    <Row className="orderSummary">
      <h3 className="orderTitle">Order Summary</h3>
      <Col className="subTotal">
        <span>Subtotal</span>
        <span className="subtotalNumber">${total}</span>
      </Col>
      <Col className="shipping">
        <span>Shipping</span>
        <span className={`${isShippingFree && "shippingFree"}`}>
          ${shippingCost}
        </span>
      </Col>
    </Row>
  );

  const totalCostRow = (
    <Row className="totalCost">
      <h3 className="totalTitle">Total Cost</h3>
      <Col>
        <span className="totalNumber">${totalCost}</span>
      </Col>
      <Button className="purchaseButton">Purchase</Button>
    </Row>
  );

  return (
    <Container className="paymentInfoBar">
      {orderSummaryRow}
      {totalCostRow}
    </Container>
  );
};

export default PaymentSum;
