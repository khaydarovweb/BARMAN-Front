import React from 'react';
import { default as HomePage } from './components/home/index';
import { default as ProductsPage } from './components/products/main';
import { LogReg } from './components/profile/LogReg/logreg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				  <Route path="/" element={<HomePage />} />
					<Route index element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/profile" element={<LogReg />} />
			</Routes>
		</Router>
	);
}

export default App;
