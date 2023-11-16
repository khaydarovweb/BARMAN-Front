import React from 'react';
import { default as HomePage } from './components/home/index';
import { default as ProductsPage } from './components/products/main';
import { LogReg } from './components/profile/logreg';
import { default as CartPage } from "./components/cart/main";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route index element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/profile" element={<LogReg />} />
			</Routes>
		</Router>
	);
}

export default App;
