import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./PaymentSum.scss";

// TODO(emrerdem1): To get these datas from Redux.
const SHIPPING_COST = 10;
const AMOUNT_TO_FREE_SHIPPING = 150;
const TEMPORARY_SUBTOTAL = 160;

const PaymentSum = () => {
  const [shippingCost] = useState(SHIPPING_COST);
  const [subTotal] = useState(TEMPORARY_SUBTOTAL);

  let totalCost;
  let isShippingFree;

  if (subTotal >= AMOUNT_TO_FREE_SHIPPING) {
    isShippingFree = true;
    totalCost = subTotal;
  } else {
    isShippingFree = false;
    totalCost = subTotal + shippingCost;
  }

  const orderSummaryRow = (
    <Row className="orderSummary">
      <h3 className="orderTitle">Order Summary</h3>
      <Col className="subTotal">
        <span>Subtotal</span>
        <span className="subtotalNumber">${subTotal}</span>
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
