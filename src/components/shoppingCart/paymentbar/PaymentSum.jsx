import React, { useState, useEffect } from "react";
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
  const [shippingCost, setShippingCost] = useState(SHIPPING_COST);
  const [isShippingFree, setIsShippingFree] = useState(false);
  const [subTotal, setSubTotal] = useState(TEMPORARY_SUBTOTAL);
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    if (subTotal >= AMOUNT_TO_FREE_SHIPPING) {
      setIsShippingFree(true);
    }
    //subTotal >= AMOUNT_TO_FREE_SHIPPING && setIsShippingFree(true);
    if (isShippingFree) {
      setTotalCost(subTotal);
      return;
    } else {
      setTotalCost(shippingCost + subTotal);
    }
    console.log({ isShippingFree, subTotal, AMOUNT_TO_FREE_SHIPPING });
  }, [subTotal]);

  return (
    <Container className="paymentInfoBar">
      <Row className="orderSummary">
        <h3 className="orderTitle">Order Summary</h3>
        <Col className="subTotal">
          <span>Subtotal</span>
          <span className="subNumber">${subTotal}</span>
        </Col>
        <Col className="shipping">
          <span>Shipping</span>
          <span className={`${isShippingFree && "shippingFree"}`}>
            ${shippingCost}
          </span>
        </Col>
      </Row>
      <Row className="totalCost">
        <h3 className="totalTitle">Total Cost</h3>
        <Col>
          <span className="totalNumber">${totalCost}</span>
        </Col>
        <Button className="purchaseButton">Purchase</Button>
      </Row>
    </Container>
  );
};

export default PaymentSum;
