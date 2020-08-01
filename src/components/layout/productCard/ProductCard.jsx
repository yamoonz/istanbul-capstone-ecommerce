import React from "react";
import Slider from "react-slick";
import heart from "../../../assets/svgs/heart.svg";
import { Col } from "react-bootstrap";
import "./style.scss";
import heartBroken from "../../../assets/svgs/heart-broken.svg";
import { NavLink } from "react-router-dom";

export default function ProductCard(props) {
  // We will load isLiked from firebase and then set it to this state
  const [isLiked, setIsLiked] = React.useState(false);

  const settings = {
    className: "sliderImages",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const likeBtn = isLiked ? (
    <img
      onClick={() => setIsLiked(!isLiked)}
      src={heart}
      className="likeIcon"
      alt="heart"
    />
  ) : (
    <img
      onClick={() => setIsLiked(!isLiked)}
      src={heartBroken}
      className="likeIcon"
      alt="heart broken"
    />
  );

  const slider = (
    <Slider {...settings}>
      <div>
        <img src={props.info.images[0]} alt="image" />
      </div>
      <div>
        <img src={props.info.images[1]} alt="image" />
      </div>
      <div>
        <img src={props.info.images[2]} alt="image" />
      </div>
    </Slider>
  );

  return (
    <NavLink to={`/products/:${props.info.id}`}>
      <Col xs={8} md={5} lg={3} className="productCard">
        {/*When we get the real product we need to add an id to each product*/}
        {likeBtn}
        {slider}
        <div className="title">{props.info.title}</div>
        <div className="price">${props.info.price}</div>
        <div className="brand">{props.info.brand}</div>
      </Col>
    </NavLink>
  );
}
