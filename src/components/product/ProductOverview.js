import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import shoe from "./shoe-image.png";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  TextField,
  Button,
  withStyles,
  ü,
} from "@material-ui/core";
import { yellow, purple } from "@material-ui/core/colors";

export default function ProductOverview() {
  const [amount, setAmount] = useState(256);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(36);

  const handleAmountChange = () => {};
  const handleQuantityChange = () => {};
  const handleSizeChange = () => {};

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "#fff",
      backgroundColor: yellow[500],
      "&:hover": {
        backgroundColor: yellow[700],
      },
    },
  }))(Button);

  return (
    <Container>
      <Row className="product-wrapper">
        <Col xs={5} className="product-image-wrapper">
          <div className="image-wrapper">
            <div>
              <img src={shoe} alt="" />
            </div>
          </div>
          <div className="circles-wrapper"></div>
          <Row className="previews-wrapper">
            <Col
              xs={3}
              className="preview"
              style={{ marginLeft: "4.1111%" }}
            ></Col>
            <Col md={{ span: 3, offset: 1 }} className="preview"></Col>
            <Col md={{ span: 3, offset: 1 }} className="preview"></Col>
          </Row>
        </Col>
        <Col xs={7} className="product-overview-wrapper">
          <Row className="stars-wrapper">
            <Col xs={6}>stars</Col>
          </Row>
          <Row>
            <Col xs={5}>
              <h2>Nike</h2>
            </Col>
          </Row>
          <h4>Airmax Z101</h4>
          <h6>Health, soft and fast running shoes</h6>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={amount}
              onChange={handleAmountChange}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="number"
              label="quantity"
              variant="outlined"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="number"
              label="size"
              variant="outlined"
              value={size}
              onChange={handleSizeChange}
            />
          </FormControl>
          <div>
            <ColorButton variant="contained">Add to Cart</ColorButton>
            <Button variant="contained">Buy Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
