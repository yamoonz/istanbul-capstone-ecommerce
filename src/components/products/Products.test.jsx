import React from "react";
import Products from "./Products";
import { render } from "@testing-library/react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";

it("renders correctly when there are no items", async () => {
  const { findAllByAltText } = render(<Products />);
  const items = await findAllByAltText("image");

  expect(items).toMatchSnapshot();
});
