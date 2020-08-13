import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./CartDetail.scss";
import { useSelector } from "react-redux";
import {
  deleteItemFromCartAction,
  modifyProductQuantity,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

const CartDetail = (props) => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.addOrDeleteProductData);

  const deleteItemfromData = () => {
    const copyOfData = productsData.slice();
    for (let i = 0; i < copyOfData.length; i++) {
      const currentItemId = props.info.id;
      if (copyOfData[i].id === currentItemId) {
        if (i > -1) {
          copyOfData.splice(i, 1);
        }
        dispatch(deleteItemFromCartAction(copyOfData));
        break;
      }
    }
  };

  const handleQuantitySubtraction = () => {
    const copyOfData = productsData.slice();
    for (let i = 0; i < copyOfData.length; i++) {
      const currentItemId = props.info.id;
      if (copyOfData[i].id === currentItemId) {
        copyOfData[i].quantity--;
      }
    }
    dispatch(modifyProductQuantity(copyOfData));
  };

  const handleQuantityAddition = () => {
    const copyOfData = productsData.slice();
    for (let i = 0; i < copyOfData.length; i++) {
      const currentItemId = props.info.id;
      console.log();
      if (copyOfData[i].id === currentItemId) {
        copyOfData[i].quantity++;
      }
    }
    dispatch(modifyProductQuantity(copyOfData));
  };

  return (
    <Container className="cartDetailWrapper">
      <Row className="cartDetailHeader">
        <Col className="cartDetailTitle">Shopping Card (X Items)</Col>
        <Col className="backToShoppingWrapper">
          <Button className="backToShopping">Back to Shopping!</Button>
        </Col>
      </Row>
      <Row className="cartDetailMain">
        <Col xl={6} lg={6} md={6} sm={6} xs={6} className="cartProductsCol">
          <Row className="productTitleRow">Products</Row>
          <Row className="productInfoRow">
            <Col className="productImageCol">
              <img
                className="productImg"
                src={props.info.images[0]}
                alt={props.info.brand + props.info.title}
              />
            </Col>
            <Col className="productTexts">
              <Row className="productBrand">
                <span className="productBrandText">{props.info.brand}</span>
              </Row>
              <Row className="productName">
                <span className="productNameText">{props.info.title}</span>
              </Row>
              <Row className="productDeleteSave">
                <Col className="productDelete" onClick={deleteItemfromData}>
                  <button>Delete</button>
                </Col>
                <Col className="productSave">Save</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3} className="cartQuantityCol">
          <Row className="quantityTitleRow">Quantity</Row>
          <Row className="quantityInfoRow">
            <Col className="quantityInfoCol">
              <Button
                className="countModifier"
                onClick={handleQuantitySubtraction}
              >
                -
              </Button>
              <span className="countNumber">{props.info.quantity}</span>
              <Button
                className="countModifier"
                onClick={handleQuantityAddition}
              >
                +
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={3} md={3} sm={3} xs={3} className="cartPriceCol">
          <Row className="priceTitleRow">Price</Row>
          <Row className="priceInfoRow">
            <Col className="priceNumber">${props.info.price}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;
