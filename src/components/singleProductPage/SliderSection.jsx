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
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
