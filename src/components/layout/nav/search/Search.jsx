import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Search.scss";
import useDeviceSizes from "../../useDeviceSizes";

//This will be serving as a temporary database until we build the real one completely.
export const mockDatabase = [
  {
    title: "Airmax",
    brand: "Nike",
    price: 199,
    currency: "$",
    tags: ["shoe", "shoes", "nike", "airmax", "air"],
    images: [
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
    ],
  },
  {
    title: "Airmax X101",
    brand: "Nike",
    price: 299,
    currency: "$",
    tags: ["shoe", "shoes", "nike", "airmax", "air"],
    images: [
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
    ],
  },
  {
    title: "Airmax Z500",
    brand: "Nike",
    price: 99,
    currency: "$",
    tags: ["shoe", "shoes", "nike", "airmax", "air"],
    images: [
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
    ],
  },
  {
    title: "YEEZY BOOST 350",
    brand: "Adidas",
    price: 399,
    currency: "$",
    tags: ["shoe", "shoes", "adidas", "yeezy", "boost"],
    images: [
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
    ],
  },
  {
    title: "V2 ZYON",
    brand: "Adidas",
    price: 250,
    currency: "$",
    tags: ["shoe", "shoes", "adidas", "v2", "zyon"],
    images: [
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
      "https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1",
    ],
  },
];

const Search = () => {
  // It is left empty because we want search to start as empty.
  const [searchQueryContainer, setSearchQuery] = useState("");
  const [showEmptySearchWarning, setEmptySearchWarning] = useState(false);
  const { widthOfDevice } = useDeviceSizes();

  // In order to set the number of product we wanna filter in preview according to size of device.
  const breakPointTooSmall = 590;
  const breakPointToSmallDevices = 765;
  const amountOfProductToShowInSearch =
    widthOfDevice < breakPointToSmallDevices ? 2 : 3;
  const onlyFirstImageOfProduct = 0;

  // This will be sending input value to database with fetching if input is not empty when "Search" button is clicked.
  const sendSearchQuery = () => {
    if (!searchQueryContainer) {
      setEmptySearchWarning(true);
      return;
    } else {
      setEmptySearchWarning(false);
    }
  };

  // This will setting input values onChange and will show preview card only if there is something typed.
  const handleSearchChanges = (e) => {
    setSearchQuery(e.target.value);
    if (!searchQueryContainer) {
      setEmptySearchWarning(true);
      return;
    } else {
      setEmptySearchWarning(false);
    }
  };

  const handleSearchPreview = () => {
    const previewItemsContainer = mockDatabase
      .filter((product) => product.tags.includes(searchQueryContainer))
      .slice(0, amountOfProductToShowInSearch)
      .map((product, idx) => (
        <Col xl={3} lg={3} md={3} className="card" key={idx}>
          <img src={product.images[onlyFirstImageOfProduct]} alt="product" />
          <div className="title">{product.title}</div>
          <div className="brand">{product.brand}</div>
          <div className="price">
            {product.currency}
            {product.price}
          </div>
        </Col>
      ));

    // This will be more precise to show if it's still loading or failed as searching when we implement Fetching.
    if (previewItemsContainer.lenght === 0) {
      return <span>It's still loading.</span>;
    } else {
      return previewItemsContainer;
    }
  };

  return (
    <>
      <Col className="searchBox col-12 searchTransition">
        <Col xl={6} lg={7} md={8} className="searchBar">
          <Col xl={10} lg={10} md={10} className="col-9 searchInputWrapper">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Live search..."
              className="searchInput"
              onChange={handleSearchChanges}
              value={searchQueryContainer}
            />
          </Col>
          <Col xl={2} lg={2} md={2} className="col-3 searchButtonWrapper">
            <Button onClick={sendSearchQuery}>Search</Button>
          </Col>
        </Col>
        {searchQueryContainer && widthOfDevice > breakPointTooSmall ? (
          <Col xl={6} lg={7} md={8} className="searchPreview">
            {handleSearchPreview()}
          </Col>
        ) : (
          showEmptySearchWarning && (
            <span>You should type something to search.</span>
          )
        )}
      </Col>
    </>
  );
};

export default Search;
