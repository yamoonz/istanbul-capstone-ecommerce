import React from "react";
import Slider from "react-slick";
import "./singleProductPage.scss";

export default function SingleProductPage(props) {
  // These varaibles need to be replaced by the real data
  const title = props.props.title;
  const imgs = props.props.images;
  const brand = props.props.brand;
  const price = props.props.price;
  const description = "Health, soft and fast running shoes";
  const hasSize = true;
  const sizes = [41, 42, 43, 44];

  const PRODUCT_IMGS_SLIDER_SETTING = {
    customPaging: function (i) {
      return <img src={`${imgs[i]}`} alt="product" className="smallImgs" />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div class="row" className="productInfoContainer">
      <div class="col-lg-6 col-md-12" className="productImgs">
        <Slider {...PRODUCT_IMGS_SLIDER_SETTING}>
          {imgs.map((img, i) => (
            <div>
              <img src={imgs[i]} alt="product" className="mainImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div class="col-lg-6 col-md-12" className="productInfo">
        <span className="productBrand">{brand}</span>
        <span className="productPrice">{price}$</span>
        <p className="productTitle">{title}</p>
        <p className="productDescription">{description}</p>
        <input
          type="number"
          className="productQuantity"
          name="quantity"
          min="1"
          max="10"
        />
        <span className="quantity">Quantity</span>
        {hasSize ? (
          <select name="productSizes" className="productSizes">
            <option selected="selected" disabled>
              Size
            </option>
            {sizes.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        ) : (
          ""
        )}

        <button className="AddToCartBtn">Add to cart</button>
        <button className="BuyNowBtn">Buy now</button>
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
