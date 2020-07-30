import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import sportImg from "../../assets/img/dumbbell.jpg";
import glassesImg from "../../assets/img/glasses.jpg";
import setUpImg from "../../assets/img/setup.jpg";
import shoesImg from "../../assets/img/shoes.jpg";
import sterhoscopeImg from "../../assets/img/sterhoscope.jpg";
import NutritionImg from "../../assets/img/supplements.jpg";
import selfCareimg from "../../assets/img/selfCare.jpg";

export default function Categories() {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const categoriesInfo = [
    {
      name: "Sports",
      img: sportImg,
    },
    {
      name: "Glasses",
      img: glassesImg,
    },
    {
      name: "Set Up",
      img: setUpImg,
    },
    {
      name: "Shoes",
      img: shoesImg,
    },
    {
      name: "Health",
      img: sterhoscopeImg,
    },
    {
      name: "Nutrition",
      img: NutritionImg,
    },
    {
      name: "Personal Care",
      img: selfCareimg,
    },
  ];

  const Category = (props) => {
    return (
      <div className="card">
        <img alt="image" src={`${props.category.img}`} />
        <p className="cardTitle">{props.category.name.toLocaleUpperCase()}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Categories</h1>

      <Slider {...settings}>
        {categoriesInfo.map((cat) => (
          <Category category={cat} key={cat.name} className="row" />
        ))}
      </Slider>
    </div>
  );
}
