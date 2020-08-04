import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categories.scss";
import sportImg from "../../assets/img/dumbbell.jpg";
import glassesImg from "../../assets/img/glasses.jpg";
import setUpImg from "../../assets/img/setup.jpg";
import shoesImg from "../../assets/img/shoes.jpg";
import sterhoscopeImg from "../../assets/img/sterhoscope.jpg";
import NutritionImg from "../../assets/img/supplements.jpg";
import selfCareimg from "../../assets/img/selfCare.jpg";

const SLIDER_SETTINGS = {
  centerMode: true,
  centerPadding: "40px",
  autoplay: false,
  autoplaySpeed: 10000,
  speed: 1000,
  arrows: true,
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

const CATEGORIES_INFO = [
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

export default function Categories() {
  const Category = (props) => {
    return (
      <div className="card">
        <img alt="ctegory" src={`${props.category.img}`} />
        <p className="cardTitle">{props.category.name.toLocaleUpperCase()}</p>
      </div>
    );
  };

  return (
    <div className="categoriesContainer">
      <h1 className="categoryTitle">Categories</h1>

      <Slider {...SLIDER_SETTINGS}>
        {CATEGORIES_INFO.map((cat) => (
          <Category category={cat} key={cat.name} className="row" />
        ))}
      </Slider>
    </div>
  );
}
