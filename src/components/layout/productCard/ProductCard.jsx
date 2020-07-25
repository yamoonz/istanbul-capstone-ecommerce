import React from 'react';
import Slider from 'react-slick';
import heart from '../../../assets/svgs/heart.svg';
import { Col } from 'react-bootstrap';
import './style.scss';
import heartBroken from '../../../assets/svgs/heart-broken.svg';

export default function ProductCard(props) {
	const [isLiked, setIsLiked] = React.useState(false);

	const settings = {
		className: 'silderImages',
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	const likeBtnHandler = () => {
		if (!isLiked) {
			return (
				<img
					onClick={() => setIsLiked(!isLiked)}
					src={heartBroken}
					className="likeIcon"
					alt="heart broken"
				/>
			);
		} else {
			return (
				<img
					onClick={() => setIsLiked(!isLiked)}
					src={heart}
					className="likeIcon"
					alt="heart"
				/>
			);
		}
	};

	const sliderHandler = () => {
		return (
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
	};

	return (
		<React.Fragment>
			<Col xs={8} md={5} lg={3} className="productCard">
				{/*doc-id = {props.productId[index]}*/}
				{likeBtnHandler()}
				{sliderHandler()}

				<div className="title">{props.info.title}</div>
				<div className="price">${props.info.price}</div>
				<div className="brand">{props.info.brand}</div>
			</Col>
		</React.Fragment>
	);
}
