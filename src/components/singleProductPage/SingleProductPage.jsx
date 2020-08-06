import React from "react";
import SingleProduct from "./SingleProduct";
import SliderSection from "./SliderSection";
import { MOCK_DATABASE } from "../common/MockDatabase";
import { Container, Row } from "react-bootstrap";
import "./singleProductDetails.scss";

const SingleProductPage = () => {
  return (
    <Container>
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
