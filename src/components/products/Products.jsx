import React from 'react';
import ProductCard from '../layout/productCard/ProductCard';
import { Container, Row } from 'react-bootstrap';

export default function Products() {
	const data = [
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
		{
			title: 'Airmax',
			images: [
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332654173_01_a-Nike-Mens-Flex-Control-3-Training-Shoes-Black-Anthracite-AJ5911-002?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1',
				'https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332762662_10_a-Nike-Womens-Air-Precision-II-Basketball-Shoes-White-Black-AA7069-100?bgColor=0,0,0,0&fmt=png-alpha&hei=528&resMode=sharp&qlt=85,1&op_sharpen=1',
			],
			brand: 'Nike',
			price: '199.99',
		},
	];

	const renderProductsCards = () => {
		return data.map((info, index) => {
			return <ProductCard info={info} index={index} key={index} />;
		});
	};

	return (
		<Container>
			<Row>{renderProductsCards()}</Row>
		</Container>
	);
}
