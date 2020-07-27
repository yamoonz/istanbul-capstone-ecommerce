import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from '../components/signup/SignUp';
import CartPage from '../components/shoppingCart/Cart';
import BlogOverview from '../components/blog/BlogOverview';
import AboutPage from '../components/about/About';
import HomePage from '../components/home/HomePage';
import ProductsPage from '../components/products/ProductsPage';
import Navbar from '../components/layout/nav/Navbar';

export const RouteBlock = () => {
	return (
		<Switch>
			<Route path="/" component={Navbar} />
			<Route path="/signup" component={SignUp} />
			<Route path="/products" component={ProductsPage} />
			<Route path="/shoppingcart" component={CartPage} />
			<Route path="/blog" component={BlogOverview} />
			<Route path="/about" component={AboutPage} />
			<Route path="/admin" component={AboutPage} />
			<Route exact path="/" component={HomePage} />
		</Switch>
	);
};
