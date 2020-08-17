import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./CartDetail.scss";
import {
  deleteItemFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  sumTotalPrice,
  addPriceOfOneItem,
  subtractPriceOfOneItem,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CartDetail = (props) => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.productsData);
  // Getting all the total prices from individual items and add them together
  const itemsTotalPricesArray = useSelector((state) => state.totalPrice);
  const allItemsTotalPrice = itemsTotalPricesArray.reduce((cur, acc) => {
    return cur + acc;
  }, 0);

  // Get total price from one item
  React.useEffect(() => {
    dispatch(sumTotalPrice(props.info.price, props.info.quantity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This function deletes the whole product from the shopping cart and subtract the corresponding price from the total price
  const deleteItemfromCartData = () => {
    const copyOfData = productsData.slice();
    for (let i = 0; i < copyOfData.length; i++) {
      const currentItemId = props.info.id;
      if (copyOfData[i].id === currentItemId) {
        if (i > -1) {
          copyOfData.splice(i, 1);
        }
        dispatch(
          subtractPriceOfOneItem(
            allItemsTotalPrice,
            props.info.price * props.info.quantity
          )
        );
        dispatch(deleteItemFromCart(copyOfData));
        props.info.quantity = 1;
        break;
      }
    }
  };

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
          <img
            className="productImg"
            src={props.info.images[0]}
            alt={props.info.brand + props.info.title}
          />
        </Col>
        <Col className="productTextCol">
          <Row className="productBrand">
            <span className="productTextSpan">{props.info.brand}</span>
          </Row>
          <Row className="productName">
            <span className="productTextSpan productTextTitle">
              {props.info.title}
            </span>
          </Row>
          <Row className="productDeleteSave">
            <Col className="productDelete">
              <i
                className="fas fa-trash trashIcon"
                onClick={deleteItemfromCartData}
              ></i>
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
        <Button
          className="countModifier"
          onClick={() => {
            dispatch(decreaseProductQuantity(productsData));
            dispatch(
              subtractPriceOfOneItem(allItemsTotalPrice, props.info.price)
            );
          }}
        >
          -
        </Button>
        <span className="countNumber">{props.info.quantity}</span>
        <Button
          className="countModifier"
          onClick={() => {
            dispatch(increaseProductQuantity(productsData));
            dispatch(addPriceOfOneItem(allItemsTotalPrice, props.info.price));
          }}
        >
          +
        </Button>
      </Col>
      <Col className="productPriceCol productColItem">${props.info.price}</Col>
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
