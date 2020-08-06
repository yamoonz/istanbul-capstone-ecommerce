import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./style.scss";
import db from "../config/firebaseConfig";

export default function AddProducts() {
  const [hasSizes, setHasSizes] = useState(false);
  const [productFormBrand, setProductFormBrand] = useState("");
  const [productFormTitle, setProductFormTitle] = useState("");
  const [productFormDescription, setProductFormDescription] = useState("");
  const [productFormCategory, setProductFormCategory] = useState("");
  const [productFormPrice, setProductFormPrice] = useState("");

  // Add products to the database
  const addNewProductToDatabase = async (e) => {
    e.preventDefault();
    // Getting all images and push them into an array
    const allImages = [];
    const arrayOfImages = [
      "firstImage",
      "secondImage",
      "thirdImage",
      "fourthImage",
    ];
    for (let i = 0; i < arrayOfImages.length; i++) {
      const image = e.target[arrayOfImages[i]].value;
      allImages.push(image);
    }

    const allSizes = [];
    // Getting all sizes and push them into an array
    const arrayOfSizes = ["firstSize", "secondSize", "thirdSize", "fourthSize"];
    if (hasSizes === true) {
      for (let j = 0; j < arrayOfSizes.length; j++) {
        const size = e.target[arrayOfSizes[j]].value;
        allSizes.push(size);
      }
    }

    const productInfo = {
      brand: productFormBrand,
      title: productFormTitle,
      categories: productFormCategory,
      description: productFormDescription,
      images: allImages,
      hasSize: hasSizes,
      sizes: allSizes,
      price: productFormPrice,
    };

    await db.collection("products").add(productInfo);
  };

  const sizeOptions = (
    <>
      <option>45</option>
      <option>44</option>
      <option>43</option>
      <option>41</option>
      <option>40</option>
    </>
  );

  return (
    <>
      <Form onSubmit={(e) => addNewProductToDatabase(e)}>
        <Container className="productFormContainer">
          <Row className="productFormRow">
            <Col>
              <Form.Control
                type="text"
                placeholder="Brand"
                onChange={(e) => setProductFormBrand(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setProductFormTitle(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col>
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => setProductFormDescription(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col xs={12} md={6} lg={5}>
              <Form.Group controlId="formGridState">
                <Form.Control
                  as="select"
                  defaultValue="Shoes"
                  onChange={(e) => setProductFormCategory(e.target.value)}
                >
                  <option>Shoes</option>
                  <option>Health care</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={3} className="radioBtn">
              <Form.Check
                type="radio"
                label="Size"
                name="formHorizontalRadios"
                onChange={() => setHasSizes(true)}
              />
              <Form.Check
                type="radio"
                label="No size"
                name="formHorizontalRadios"
                onChange={() => setHasSizes(false)}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setProductFormPrice(parseInt(e.target.value))}
              />
            </Col>
          </Row>
          {hasSizes && (
            <Row className="productFormRow">
              <Col xs={12} md={6} lg={3}>
                <Form.Control as="select" defaultValue="sizes" id="firstSize">
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control as="select" defaultValue="sizes" id="secondSize">
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control as="select" defaultValue="sizes" id="thirdSize">
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control as="select" defaultValue="sizes" id="fourthSize">
                  {sizeOptions}
                </Form.Control>
              </Col>
            </Row>
          )}
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" id="firstImage" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" id="secondImage" />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" id="thirdImage" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" id="fourthImage" />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col>
              <Button type="submit">Submit form</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
