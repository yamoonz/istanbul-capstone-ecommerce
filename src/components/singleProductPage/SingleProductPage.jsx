import React from "react";
import SingleProduct from "./SingleProduct";
import SliderSection from "./SliderSection";
import { MOCK_DATABASE } from "../common/MockDatabase";
import { Container, Row } from "react-bootstrap";
import {useParams} from 'react-router-dom'
import "./singleProductDetails.scss";


const SingleProductPage = () => {

  const {productId} = useParams();
  const currentItemId = productId-1;

  return (
    <Container>
      <Row className="productDetailsRow">
        <SingleProduct productData={MOCK_DATABASE[currentItemId]} />
      </Row>
      <Row>
        <SliderSection />
      </Row>
    </Container>
  );
};

export default SingleProductPage;
