import React from "react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import { MOCK_DATABASE } from "../common/MockDatabase";

export default function Products() {
  return (
    <Container>
      <Row>
        {MOCK_DATABASE.map((info, index) => (
          <ProductCard info={info} index={index} key={index} />
        ))}
      </Row>
    </Container>
  );
}
