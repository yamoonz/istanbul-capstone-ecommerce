import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import ProductCard from "../layout/productCard/ProductCard";
import { MOCK_DATABASE } from "../common/MockDatabase";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export default function SliderSection() {
  return (
    <Container>
      <Slider {...SETTINGS}>
        {MOCK_DATABASE.map((info, index) => (
          <ProductCard info={info} index={index} key={index} />
        ))}
      </Slider>
    </Container>
  );
}
