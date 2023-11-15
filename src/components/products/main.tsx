import React, { Component } from 'react';
import './main.css';
import { Sidebar } from './sideBar/category';
import { default as Products } from "./products/products";
import { default as Header } from '../header/header';

export default class Main extends Component {
	render() {
		return (
			<section className="ProductPage">
				<Header />
				<main>
					<Sidebar />
					<Products/>
					{/* <div className="Main">
						<h2>Hello World</h2>
					</div> */}
				</main>
			</section>
		);
	}
}
