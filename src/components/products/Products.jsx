import React from "react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import { MOCK_DATABASE } from "../common/MockDatabase";
import "./style.scss";

export default function Products() {
  // We don't want to use a dynamic path finder like useRouteMatch because we are having this component in HomePage as well.
  // In that case, it would render the `path` and `url` as `/` which will not work in our favour.

  return (
    <Container className="productsSectionContainer">
      <h1 className="productsTitle">Products</h1>
      <Row>
        {MOCK_DATABASE.map((info, index) => (
          <ProductCard info={info} index={index} />
        ))}
      </Row>
    </Container>
  );
}
