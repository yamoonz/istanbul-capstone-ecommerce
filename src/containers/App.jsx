import React from 'react';
import '../App.scss';
import { RouteBlock } from './RouteBlock';
import Navbar from '../components/layout/nav';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Route path="/" component={Navbar} />
			<RouteBlock />
		</>
	);
}

export default App;
