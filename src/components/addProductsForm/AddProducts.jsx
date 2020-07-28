import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './style.scss';
import db from '../config/firebaseConfig';

export default function AddProducts() {

	const [hasSizes, setHasSizes] = useState(false);
	const [getProductBrand, setGetProductBrand] = useState('');
	const [getProductTitle, setGetProductTitle] = useState('');
	const [getProductDescription, setGetProductDescription] = useState('');
	const [getProductCategory, setGetProductCategory] = useState('');
	const [getProductPrice, setGetProductPrice] = useState('');
	const [getProductSizes, setGetProductSizes] = useState([]);


	const addNewProductToDatabase = async (e) => {
		e.preventDefault();

		const allImages = [];
		const firstImage = e.target['firstImage'].value;
		allImages.push(firstImage);
		const secondImage = e.target['secondImage'].value;
		allImages.push(secondImage);
		const thridImage = e.target['thirdImage'].value;
		allImages.push(thridImage);
		const fourthImage = e.target['fourthImage'].value;
		allImages.push(fourthImage);
		const allSizes = [];
		if(hasSizes === true){
			
			const firstSize = e.target['firstSize'].value;
			allSizes.push(firstSize);
			const secondSize = e.target['secondSize'].value;
			allSizes.push(secondSize);
			const thirdSize = e.target['thirdSize'].value;
			allSizes.push(thirdSize);
			const fourthSize = e.target['fourthSize'].value;
			allSizes.push(fourthSize);
		}


		const productInfo = {
			brand: getProductBrand,
			title: getProductTitle,
			categories: getProductCategory,
			description: getProductDescription,
			images: allImages,
			hasSize: hasSizes,
			sizes:allSizes,
			price: getProductPrice,
		};

		 await db.collection('products').add(productInfo);
	};

	return (
		<>
			<Form onSubmit={(e) => addNewProductToDatabase(e)}>
				<Container>
					<Row>
						<Col>
							<Form.Control
								type="text"
								placeholder="Brand"
								onChange={(e) => setGetProductBrand(e.target.value)}
							/>
						</Col>
						<Col>
							<Form.Control
								type="text"
								placeholder="Title"
								onChange={(e) => setGetProductTitle(e.target.value)}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Control
								type="text"
								placeholder="Description"
								onChange={(e) => setGetProductDescription(e.target.value)}
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} lg={5}>
							<Form.Group controlId="formGridState">
								<Form.Control as="select" defaultValue="Shoes" onChange={(e) => setGetProductCategory(e.target.value)}>
									<option
										
									>
                   						 Shoes
									</option>
									<option
									>
                   						 Health care
									</option>
								</Form.Control>
							</Form.Group>
						</Col>
						<Col xs={12} md={6} lg={3} className="radioBtn">
							<Form.Check
								type="radio"
								label="Size"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"
								onChange={() => setHasSizes(true)}
							/>
							<Form.Check
								type="radio"
								label="No size"
								name="formHorizontalRadios"
								id="formHorizontalRadios1"
								onChange={() => setHasSizes(false)}
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<Form.Control
								type="number"
								placeholder="Price"
								onChange={(e) => setGetProductPrice(parseInt(e.target.value))}
							/>
						</Col>
					</Row>
					{hasSizes && (
						<Row>
							<Col xs={12} md={6} lg={3}>
								<Form.Control as="select" defaultValue="sizes" id= "firstSize">
									<option>45</option>
									<option>44</option>
									<option>43</option>
									<option>41</option>
									<option>40</option>
								</Form.Control>
							</Col>
							<Col xs={12} md={6} lg={3}>
								<Form.Control as="select" defaultValue="sizes" id= "secondSize">
									<option>45</option>
									<option>44</option>
									<option>43</option>
									<option>41</option>
									<option>40</option>
								</Form.Control>
							</Col>
							<Col xs={12} md={6} lg={3}>
								<Form.Control as="select" defaultValue="sizes" id= "thirdSize">
									<option>45</option>
									<option>44</option>
									<option>43</option>
									<option>41</option>
									<option>40</option>
								</Form.Control>
							</Col>
							<Col xs={12} md={6} lg={3}>
								<Form.Control as="select" defaultValue="sizes" id = "fourthSize">
									<option>45</option>
									<option>44</option>
									<option>43</option>
									<option>41</option>
									<option>40</option>
								</Form.Control>
							</Col>
						</Row>
					)}
					<Row>
						<Col xs={12} md={6}>
							<Form.Control type="text" placeholder="Image" id="firstImage" />
						</Col>
						<Col xs={12} md={6}>
							<Form.Control type="text" placeholder="Image" id="secondImage" />
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6}>
							<Form.Control type="text" placeholder="Image" id="thirdImage" />
						</Col>
						<Col xs={12} md={6}>
							<Form.Control type="text" placeholder="Image" id="fourthImage" />
						</Col>
					</Row>
					<Row>
						<Col>
							<Button type="submit">Submit form</Button>
						</Col>
					</Row>
				</Container>
			</Form>
			
		</>
	
	);
}
