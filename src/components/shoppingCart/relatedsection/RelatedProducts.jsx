import React from "react";
import SliderSection from "../../singleProductPage/SliderSection";
import "./RelatedProducts.scss";
import Alert from "react-bootstrap/Alert";

const RelatedProducts = () => {
  return (
    <div className="relatedSectionContainer">
      <Alert className="relatedSectionInfo" variant="info">
        You may also like these products!
      </Alert>
      <SliderSection />
    </div>
  );
};

export default RelatedProducts;
