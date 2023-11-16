import React, { useEffect, useState } from 'react';
import { default as HomePage } from './components/home/index';
import { default as ProductsPage } from './components/products/main';
import { LogReg } from './components/profile/logreg';
import { default as CartPage } from './components/cart/main';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	const [drinks, setDrinks] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:4000/api/drinks');
			const data = await response.json();
			setDrinks(data);
			console.log('data:', data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []); // The empty dependency array ensures it only runs once

	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route index element={<HomePage />} />
				<Route path="/products" element={<ProductsPage products={drinks} />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/profile" element={<LogReg />} />
			</Routes>
		</Router>
	);
}

export default App;
