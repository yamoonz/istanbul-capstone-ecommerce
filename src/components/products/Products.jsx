import React from "react";
import ProductCard from "../layout/productCard/ProductCard";
import { Container, Row } from "react-bootstrap";
import SingleProductPage from "../singleProductPage/SingleProductPage";

export default function Products() {
  // This is a temporary until we add real products in the database

  const data = [
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
    {
      title: "Airmax",
      images: [
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
        "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
      ],
      brand: "Nike",
      price: "199.99",
    },
  ];

  return (
    <Container>
      <Row>
        {data.map((info, index) => (
          <ProductCard info={info} index={index} key={index} />
        ))}
      </Row>
      <SingleProductPage props={data[0]} />
    </Container>
  );
}
