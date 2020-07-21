import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import img0 from '../../assets/img/dumbbell.jpg';
import img1 from '../../assets/img/glasses.jpg';
import img2 from '../../assets/img/setup.jpg';
import img3 from '../../assets/img/shoes.jpg';
import img4 from '../../assets/img/sterhoscope.jpg';
import img5 from '../../assets/img/supplements.jpg';
import img6 from '../../assets/img/selfCare.jpg';

export default function Categories() {
	const settings = {
		centerMode: true,
		centerPadding: '40px',
		autoplay: false,
		autoplaySpeed: 10000,
		speed: 1000,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 3,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					arrows: false,
				},
			},
		],
	};

	const categoriesInfo = [
		{
			name: 'Sports',
			img: img0,
		},
		{
			name: 'Glasses',
			img: img1,
		},
		{
			name: 'Set Up',
			img: img2,
		},
		{
			name: 'Shoes',
			img: img3,
		},
		{
			name: 'Health',
			img: img4,
		},
		{
			name: 'Nutrition',
			img: img5,
		},
		{
			name: 'Personal Care',
			img: img6,
		},
	];

	const Category = (props) => {
		return (
			<div className="card">
				<img alt={props.category.name} src={`${props.category.img}`} />
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
