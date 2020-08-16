import React from "react";
import Slider from "react-slick";
import "./singleProductDetails.scss";

export default function SingleProduct({ productData }) {
  const { title, images, brand, price } = productData;
  // These variables (description,hasSize,sizes) need to be replaced by the real data from firebase
  const description = "Health, soft and fast running shoes";
  const hasSize = true;
  const sizes = [41, 42, 43, 44];
  const productImgsSliderSetting = {
    customPaging: function(i) {
      return <img src={`${images[i]}`} alt="product" className="smallImgs" />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div class="row" className="productInfoContainer">
      <div class="col-lg-6 col-md-12" className="productImgs">
        <Slider {...productImgsSliderSetting}>
          {images.map((img, i) => (
            <div>
              <img src={images[i]} alt="product" className="mainImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div class="col-lg-6 col-md-12" className="productInfo">
        <span className="productBrand">{brand}</span>
        <span className="productPrice">{price}$</span>
        <p className="productTitle">{title}</p>
        <p className="productDescription">{description}</p>
        <input type="number" className="productQuantity" name="quantity" />
        <div className="quantityIncAndDecBtns">
          <button>+</button>
          <button>-</button>
        </div>
        <span className="quantity">Quantity</span>
        {hasSize && (
          <select name="productSizes" className="productSizes">
            <option selected="selected" disabled>
              Size
            </option>
            {sizes.map(size => (
              <option value={size}>{size}</option>
            ))}
          </select>
        )}

        <button className="addToCartBtn">Add to cart</button>
        <button className="buyNowBtn">Buy now</button>
        <button className="favoriteBtn">
          <i class="fas fa-heart" />
        </button>
        <button className="commentBtn">
          <i class="fas fa-comment-alt" />
        </button>
      </div>
    </div>
  );
}
