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

    // Getting all images from the inputs and then pushing them into an array to post the data to the database
    const allImages = [];
    const imageInputs = document.getElementsByTagName("input");
    for (let i = 0; i < imageInputs.length; i++) {
      if (imageInputs[i].placeholder === "Image") {
        const image = imageInputs[i].value;
        allImages.push(image);
      }
    }

    // Getting all sizes from the select inputs and then  pushing them into an array to post the data to the database
    const allSizes = [];
    const optionInputs = document.getElementsByClassName("sizeOptions");
    if (hasSizes) {
      for (let j = 0; j < optionInputs.length; j++) {
        const size = optionInputs[j].value;
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
                  placeholder="category"
                >
                  <option value="Shoes">Shoes</option>
                  <option value="Health care">Health care</option>
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
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  className="sizeOptions"
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  className="sizeOptions"
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  className="sizeOptions"
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  className="sizeOptions"
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
            </Row>
          )}
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control type="text" placeholder="Image" />
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
