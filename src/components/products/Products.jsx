import React from "react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import { MOCK_DATABASE } from "../common/MockDatabase";
import { NavLink } from "react-router-dom";

export default function Products() {
  // We don't want to use a dynamic path finder like useRouteMatch because we are having this component in HomePage as well.
  // In that case, it would render the `path` and `url` as `/` which will not work in our favour.

  return (
    <Container>
      <Row>
        {MOCK_DATABASE.map((info, index) => (
          <NavLink to={`/products/${info.id}`} key={index}>
            <ProductCard info={info} index={index} />
          </NavLink>
        ))}
      </Row>
    </Container>
  );
}
