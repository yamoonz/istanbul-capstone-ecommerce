import React from "react";
import "./style.scss";
import Slider from "react-slick";
import heart from "../../../assets/svgs/heart.svg";
import { Col } from "react-bootstrap";
import heartBroken from "../../../assets/svgs/heart-broken.svg";

export default function ProductCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);

  const settings = {
    className: "silderImages",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleLikeBtn = () => {
    if (!isLiked) {
      return (
        <img
          onClick={() => setIsLiked(!isLiked)}
          src={heartBroken}
          className="likeIcon"
        />
      );
    } else {
      return (
        <img
          onClick={() => setIsLiked(!isLiked)}
          src={heart}
          className="likeIcon"
        />
      );
    }
  };

  return (
    <>
      <Col xs={8} md={5}  lg={3} className="productCard">
        {/*doc-id = {props.productId[index]}*/}
        {handleLikeBtn()}
        <Slider {...settings}>
          <div>
            <img src={props.info.images[0]} />
          </div>
          <div>
            <img src={props.info.images[1]} />
          </div>
          <div>
            <img src={props.info.images[2]} />
          </div>
        </Slider>
        <div className="title">{props.info.title}</div>
        <div className="price">${props.info.price}</div>
        <div className="brand">{props.info.brand}</div>
      </Col>
    </>
  );
}
