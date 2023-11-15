import React from 'react';
import { default as HomePage } from './components/home/index';
import { default as ProductsPage } from './components/products/main';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomePage />}>
//       <Route index element={<ProductsPage />} />
//       <Route path="/products" element={<ProductsPage />} />
//     </Route>
//   )
// );

function App() {
	return (
		<Router>
			<Routes>
				  <Route path="/" element={<HomePage />} />
					<Route index element={<HomePage />} />
					<Route path="/products" element={<ProductsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
