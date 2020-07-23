import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/signup';
import CartPage from '../components/shoppingCart';
import BlogOverview from '../components/blog/BlogOverview';
import AboutPage from '../components/about';
import HomePage from '../components/home';
import ProductsPage from '../components/products';
import Profile from '../components/profile';

export const RouteBlock = () => {
	return (
		<Switch>
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/products" component={ProductsPage} />
			<Route exact path="/shoppingcart" component={CartPage} />
			<Route exact path="/blog" component={BlogOverview} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/admin" component={AboutPage} />
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/" component={HomePage} />
		</Switch>
	);
};
