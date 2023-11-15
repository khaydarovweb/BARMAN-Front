import React from 'react';
import { default as HomePage } from './components/home/index';
// import {
// 	Route,
// 	RouterProvider,
// 	createBrowserRouter,
// 	createRoutesFromElements,
// } from 'react-router-dom';

// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<HomePage />}>
// 			<Route index element={<HomePage />} />
// 			<Route path="about" element={<Sec2 />} />
// 			<Route path="products" element={<Sec3 />}></Route>
// 		</Route>
// 	)
// );
function App() {
	return (
		<HomePage/>
	)
}

export default App;
