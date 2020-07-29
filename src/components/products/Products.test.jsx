import React from "react";
import Products from "./Products";
import { render } from "@testing-library/react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import heart from "../../../assets/svgs/heart.svg";
import { Col } from "react-bootstrap";
import "./style.scss";
import heartBroken from "../../../assets/svgs/heart-broken.svg";

it("renders correctly when there are no items", async () => {
  const { findAllByAltText } = render(<Products />);
  const items = await findAllByAltText("image");

  expect(items).toMatchSnapshot();
});
