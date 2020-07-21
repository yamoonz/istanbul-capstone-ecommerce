import React from 'react';
import { auth } from '../../config/firebaseConfig';
import db from '../../config/firebaseConfig';
import AddProducts from '../../addProductsForm/AddProducts';
import GoogleAndFacebookLogIn from './GoogleAndFacebookLogIn';

const LogInForm = () => {
	const [isAdmin, setIsAdmin] = React.useState(false);

	const userLogout = () => {
		auth.signOut().then(() => {
			console.log('user logged out');
			setIsAdmin(false);
		});
	};
	const userLogin = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		const userLogin = await auth.signInWithEmailAndPassword(email, password);
		console.log(userLogin.user.uid);
		const loggedInUserName = await db
			.collection('users')
			.doc(userLogin.user.uid)
			.get();
		console.log(loggedInUserName.data());
		setIsAdmin(loggedInUserName.data().isAdmin);
	};

	return (
		<>
			<AddProducts />
			<h5>sign in</h5>
			<form onSubmit={(e) => userLogin(e)}>
				<input type="email" id="emailField" placeholder="Email" />
				<input type="password" id="passwordField" placeholder="Password" />
				<button type="submit">Log in</button>
			</form>

			<button onClick={userLogout}>Logout</button>
			<GoogleAndFacebookLogIn />
		</>
	);
};

export default LogInForm;
