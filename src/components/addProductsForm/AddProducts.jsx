import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddProducts() {
	return (
		<>
			<Form>
				<Form.Group>
					<Form.Control type="text" placeholder="brand" />
				</Form.Group>
				<Form.Group>
					<Form.Control type="text" placeholder="brand" />
				</Form.Group>
				<Form.Group>
					<Form.Control type="text" placeholder="brand" />
				</Form.Group>
				<Form.Group>
					<Form.Control type="text" placeholder="brand" />
				</Form.Group>
				<Form.Group>
					<Form.Control type="text" placeholder="brand" />
				</Form.Group>

				<Button variant="primary" type="submit">
          Submit
				</Button>
			</Form>
		</>
	);
}
