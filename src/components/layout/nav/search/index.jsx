import React, { useRef, useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./index.scss";
import useDeviceSizes from "../../useDeviceSizes";

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

const SearchBox = () => {
  const [searchQueryContainer, setSearchQuery] = useState("");
  const [warningOfEmptySearch, setWarningOfEmptySearch] = useState(false);
  const [isSearchLoading, setSearchLoading] = useState(false);
  const [isErrorOccured, setError] = useState(false);
  const [isSearchCanceled, setSearchCanceled] = useState(false);
  const [previewList, setPreviewList] = useState(false);
  const { widthOfDevice, heightOfDevice } = useDeviceSizes();

  const breakPointTooSmall = 590;
  const breakPointToSmallDevices = 765;
  const amountOfProductToShowInSearch =
    widthOfDevice < breakPointToSmallDevices ? 2 : 3;
  const URL_OF_SEARCH = ``;

  const sendSearchQuery = () => {
    if (!searchQueryContainer) {
      setWarningOfEmptySearch(true);
      return;
    } else {
      setWarningOfEmptySearch(false);
      console.log(`${searchQueryContainer} will be sent with button click`);
    }
  };

  const handleSearchChanges = (e) => {
    setSearchQuery(e.target.value);
    if (!searchQueryContainer) {
      setWarningOfEmptySearch(true);
      return;
    } else {
      setWarningOfEmptySearch(false);
    }
  };

  const handleSearchPreview = () => {
    const previewItemsContainer = mockDatabase
      .filter((product) => product.tags.includes(searchQueryContainer))
      .slice(0, amountOfProductToShowInSearch)
      .map((product, idx) => (
        <Col xl={3} lg={3} md={3} className="search-preview__card" key={idx}>
          <img src={product.images[0]} alt="product" />
          <div className="search-preview__card--title">{product.title}</div>
          <div className="search-preview__card--brand">{product.brand}</div>
          <div className="search-preview__card--price">{product.price}</div>
        </Col>
      ));
    if (previewItemsContainer.lenght === 0) {
      return <span>it's still loading</span>;
    } else {
      return previewItemsContainer;
    }
  };

  return (
    <>
      <Col className="search-box col-12 search-transition">
        <Col xl={6} lg={7} md={8} className="search-bar">
          <Col xl={10} lg={10} md={10} className="col-9">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Live search..."
              className="search-input"
              onChange={handleSearchChanges}
              value={searchQueryContainer}
            />
          </Col>
          <Col xl={2} lg={2} md={2} className="col-3">
            <Button onClick={sendSearchQuery}>Search</Button>
          </Col>
        </Col>
        {isErrorOccured ? (
          <span>Something went wrong, please try again later.</span>
        ) : isSearchLoading ? (
          <span>spinner</span>
        ) : searchQueryContainer && widthOfDevice > breakPointTooSmall ? (
          <Col xl={6} lg={7} md={8} className="search-preview">
            {handleSearchPreview()}
          </Col>
        ) : (
          warningOfEmptySearch && (
            <span>You should type something to search.</span>
          )
        )}
      </Col>
    </>
  );
};

export default SearchBox;

/*fetching will be done with this

  useEffect(() => {
    setSearchCanceled(false);
    const getSearchPreviews = async () => {
       setError(true);
       setSearchLoading(true);
     try {
        const response = await fetch(mock);
        if (!isSearchCanceled) {
          let { array } = await response.json();
          console.log(array);
        }
      } catch (error) {
        console.log(error);
         (!isSearchCanceled) {
          setError(true);
        }
      }
      setSearchLoading(false);

      return () => {
        setSearchCanceled(true);
      };
          };

    getSearchPreviews();
  }, [searchQueryContainer]);*/
