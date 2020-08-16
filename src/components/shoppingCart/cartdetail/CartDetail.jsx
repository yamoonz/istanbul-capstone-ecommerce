import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { MOCK_DATABASE } from "../../common/MockDatabase";

const { title, images, brand, price } = MOCK_DATABASE[0];

const CartDetail = () => {
  const cartDetailHeaderRow = (
    <Row className="cartDetailHeader">
      <Col className="cartDetailTitle">Shopping Card (X Items)</Col>
      <Col className="backToShoppingWrapper">
        <Button className="backToShopping">Back to Shopping!</Button>
      </Col>
    </Row>
  );

  const titleHeaderRow = (
    <Row className="titleHeader">
      <Col
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={6}
        className="productsHeader titleHeaderItem"
      >
        Products
      </Col>
      <Col className="quantityHeader titleHeaderItem">Quantity</Col>
      <Col className="priceHeader titleHeaderItem">Price</Col>
    </Row>
  );

  const productDetailCols = (
    <>
      <Col
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={6}
        className="productInfoCol productColItem"
      >
        <Col className="productImageCol">
          <img className="productImg" src={images[0]} alt={brand + title} />
        </Col>
        <Col className="productTextCol">
          <Row className="productBrand">
            <span className="productTextSpan">{brand}</span>
          </Row>
          <Row className="productName">
            <span className="productTextSpan productTextTitle">{title}</span>
          </Row>
          <Row className="productDeleteSave">
            <Col className="productDelete">
              <i className="fas fa-trash trashIcon"></i>
              <span>Delete</span>
            </Col>
            <Col className="productSave">
              <i className="far fa-bookmark bookmarkIcon"></i>
              <span>Save</span>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col className="productQuantityCol productColItem">
        <Button className="countModifier">-</Button>
        <span className="countNumber">1</span>
        <Button className="countModifier">+</Button>
      </Col>
      <Col className="productPriceCol productColItem">${price}</Col>
    </>
  );

  return (
    <Container className="cartDetailWrapper">
      {cartDetailHeaderRow}
      {titleHeaderRow}
      <Row className="cartDetailMain">{productDetailCols}</Row>
    </Container>
  );
};

export default CartDetail;
