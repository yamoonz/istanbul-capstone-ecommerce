import React from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProfileGeneralSection = () => {
	return (
		<Container fluid className="profileGeneralSection">
			<div>
				<div className="avatarContainer">
					<img
						src="https://images.unsplash.com/photo-1561882161-d9599193623c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
						alt=""
					/>
					<i className="fas fa-cogs"></i>
				</div>
				<span className="userInfo">Emre Erdem</span>
			</div>
		</Container>
	);
};

export default ProfileGeneralSection;
