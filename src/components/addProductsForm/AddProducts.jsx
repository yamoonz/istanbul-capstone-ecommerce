import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./style.scss";
import db from "../config/firebaseConfig";
import AccessCheck from "../common/AccessCheck";

export default function AddProducts() {
  <AccessCheck />;

  const [hasSizes, setHasSizes] = useState(false);
  const [productFormBrand, setProductFormBrand] = useState("");
  const [productFormTitle, setProductFormTitle] = useState("");
  const [productFormDescription, setProductFormDescription] = useState("");
  const [productFormCategory, setProductFormCategory] = useState("");
  const [productFormPrice, setProductFormPrice] = useState("");
  const [productFormImages, setProductFormImages] = useState({});
  const [productFormSizes, setProductFormSizes] = useState({});

  // Add products to the database
  const addNewProductToDatabase = async (e) => {
    e.preventDefault();

    // Getting all images from the inputs and then pushing them into an array to post the data to the database
    const allImages = [];
    for (let i in productFormImages) {
      const image = productFormImages[i];
      allImages.push(image);
    }

    // Getting all sizes from the select inputs and then  pushing them into an array to post the data to the database
    const allSizes = [];
    if (hasSizes) {
      for (let j in productFormSizes) {
        const size = productFormSizes[j];
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
      <option>42</option>
      <option>41</option>
    </>
  );

  const handleImageInputChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setProductFormImages({ ...productFormImages, [key]: value });
  };

  const handleSizeInputChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setProductFormSizes({ ...productFormSizes, [key]: value });
  };

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
                  name="firstSizeInput"
                  onChange={handleSizeInputChange}
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  name="secondSizeInput"
                  onChange={handleSizeInputChange}
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  name="thirdSizeInput"
                  onChange={handleSizeInputChange}
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Form.Control
                  as="select"
                  defaultValue="sizes"
                  name="fourthSizeInput"
                  onChange={handleSizeInputChange}
                >
                  {sizeOptions}
                </Form.Control>
              </Col>
            </Row>
          )}
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                name="firstImageInput"
                placeholder="Image"
                onChange={handleImageInputChange}
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                name="secondImageInput"
                placeholder="Image"
                onChange={handleImageInputChange}
              />
            </Col>
          </Row>
          <Row className="productFormRow">
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                name="thirdImageInput"
                placeholder="Image"
                onChange={handleImageInputChange}
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                name="fourthImageInput"
                placeholder="Image"
                onChange={handleImageInputChange}
              />
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
