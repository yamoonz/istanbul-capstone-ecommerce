import React from "react";
import Slider from "react-slick";
import "./singleProductDetails.scss";
import { addProductToCart } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
//import { modifyProductQuantity} from '../redux/actions/'

export default function SingleProduct({ singleProductData }) {
  const dispatch = useDispatch();
  const { title, images, brand, price, quantity } = singleProductData;
  // const [productQuantity, setProductQuantity] = React.useState(0);
  const productsData = useSelector((state) => state.addOrDeleteProductData);

  // These variables (description,hasSize,sizes) need to be replaced by the real data from firebase
  const description = "Health, soft and fast running shoes";
  const hasSize = true;
  const sizes = [41, 42, 43, 44];
  const productImgsSliderSetting = {
    customPaging: function (i) {
      return <img src={`${images[i]}`} alt="product" className="smallImgs" />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const addItemToShoppingCart = () => {
    let flag = false;
    if (productsData.length !== 0) {
      for (let i = 0; i < productsData.length; i++) {
        let currentItemId = singleProductData.id;
        console.log(currentItemId + " " + productsData[i].id);
        if (productsData[i].id === currentItemId) {
          productsData[i].quantity++;
          flag = true;
          break;
        }
      }
      if (!flag) {
        dispatch(addProductToCart(singleProductData));
      }
    }
  };

  // const handleQuantitySubtraction = () => {
  //   const copyOfData = [singleProductData].slice();
  //   for (let i = 0; i < copyOfData.length; i++) {
  //     const currentItemId = singleProductData.id;
  //     if (copyOfData[i].id === currentItemId) {
  //       copyOfData[i].quantity--;
  //     }
  //   }
  //   dispatch(modifyProductQuantity(copyOfData));

  // };

  // const handleQuantityAddition = () => {
  //   const copyOfData = [singleProductData].slice();
  //   for (let i = 0; i < copyOfData.length; i++) {
  //     const currentItemId = singleProductData.id;
  //     console.log();
  //     if (copyOfData[i].id === currentItemId) {
  //       copyOfData[i].quantity++;
  //     }
  //   }
  //   console.log('+1');
  //   dispatch(modifyProductQuantity(copyOfData));
  // };

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
        <input
          type="number"
          className="productQuantity"
          name="quantity"
          value={quantity}
          min="1"
          max="10"
        />
        <span className="quantity">Quantity</span>
        {hasSize && (
          <select name="productSizes" className="productSizes">
            <option selected="selected" disabled>
              Size
            </option>
            {sizes.map((size) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        )}

        <button
          className="addToCartBtn"
          onClick={() => {
            if (productsData.length !== 0) {
              addItemToShoppingCart();
            } else {
              dispatch(addProductToCart(singleProductData));
            }
          }}
        >
          Add to cart
        </button>
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
/*  onChange={(e) => {
            setProductQuntity(+e.target.value);
            dispatch(addProductQunatity(productQuantity));
          }} */
