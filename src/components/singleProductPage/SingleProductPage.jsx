import React from "react";
// import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import SliderSection from "./SliderSection";
import { MOCK_DATABASE } from "../common/MockDatabase";
import { Container, Row } from "react-bootstrap";
import "./singleProductDetails.scss";

const SingleProductPage = () => {
  // productId Will be used later
  // let { productId } = useParams();

  return (
    <Container className="productSliderRow">
      <Row className="productDetailsRow">
        <SingleProduct productData={MOCK_DATABASE[0]} />
      </Row>
      <Row>
        <SliderSection />
      </Row>
    </Container>
  );
};

export default SingleProductPage;
