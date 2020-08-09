import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import "./Search.scss";
import { MOCK_DATABASE } from "../../../common/MockDatabase";

const ONLY_FIRST_IMAGE_OF_PRODUCTS = 0;
const AMOUNT_OF_PRODUCT_IN_SEARCH_PREVIEW = 3;

const Search = () => {
  // It is left empty because we want search to start as empty.
  const [searchQueryContainer, setSearchQueryContainer] = useState("");
  const [showEmptySearchWarning, setShowEmptySearchWarning] = useState(false);

  // TODO(emrerdem1): Link this to database.
  // This will be sending input value to database with fetching if input is not empty when "Search" button is clicked.
  const sendSearchQuery = () => {
    handleSearchInputStatus();
  };

  // Set input values by onChange and show preview card only if there is something typed.
  const handleSearchChanges = (e) => {
    setSearchQueryContainer(e.target.value);
    handleSearchInputStatus();
  };

  const handleSearchInputStatus = () =>
    !searchQueryContainer
      ? setShowEmptySearchWarning(true)
      : setShowEmptySearchWarning(false);

  const previewItemsContainer = MOCK_DATABASE.filter((product) =>
    product.tags.includes(searchQueryContainer)
  )
    .slice(0, AMOUNT_OF_PRODUCT_IN_SEARCH_PREVIEW)
    .map((product, idx) => (
      <Col xl={3} lg={3} md={3} className="previewCard" key={idx}>
        <img src={product.images[ONLY_FIRST_IMAGE_OF_PRODUCTS]} alt="product" />
        <div className="previewTitle">{product.title}</div>
        <div className="previewBrand">{product.brand}</div>
        <div className="previewPrice">
          {product.currency}
          {product.price}
        </div>
      </Col>
    ));

  // TODO(emrerdem1): Make it more precise to show if it's still loading or failed as searching when we implement Fetching.
  const searchSpinnerContainer = (
    <Spinner animation="border" role="status" variant="info">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

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
        {searchQueryContainer ? (
          <Col xl={6} lg={7} md={8} className="searchPreview">
            {previewItemsContainer.length === 0
              ? searchSpinnerContainer
              : previewItemsContainer}
          </Col>
        ) : (
          showEmptySearchWarning && <span>Please type a search term.</span>
        )}
      </Col>
    </>
  );
};

export default Search;
