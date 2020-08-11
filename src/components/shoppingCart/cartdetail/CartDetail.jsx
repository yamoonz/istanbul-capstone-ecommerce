import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./CartDetail.scss";

const CartDetail = () => {
  return (
    <Container className="cartDetailWrapper">
      <Row className="cartDetailHeader">
        <Col className="cartDetailTitle">Shopping Card (X Items)</Col>
        <Col className="backToShopping">
          <Button>Back to Shopping!</Button>
        </Col>
      </Row>
      <Row className="cartDetailMain">
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="cartProductsCol">
          <Row className="productTitleRow">Products</Row>
          <Row className="productInfoRow">
            <Col className="productImage">Image</Col>
            <Col className="productTexts">
              <Row className="productBrand">Nike</Row>
              <Row className="productName">Airmax Z101</Row>
              <Row className="productDeleteSave">
                <Col className="productDelete">Delete</Col>
                <Col className="productSave">Save</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3} className="cartQuantityCol">
          <Row className="quantityTitleRow">Quantity</Row>
          <Row className="quantityInfoRow">
            <Col className="quantityInfoCol">
              <Button className="countModifier">-</Button>
              <span className="countNumber">1</span>
              <Button className="countModifier">+</Button>
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3} className="cartPriceCol">
          <Row className="priceTitleRow">Price</Row>
          <Row className="priceInfoRow">
            <Col className="priceNumber">$100</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;
