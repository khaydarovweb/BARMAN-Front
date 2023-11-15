import React, { Component } from 'react';
import './main.css';
import { Sidebar } from './sideBar/category';
import { default as Header } from '../header/header';

export default class Main extends Component {
	render() {
		return (
			<section className="ProductPage">
				<Header />
				<main>
					<Sidebar />
					<div className="Main">
						<h2>Hello World</h2>
					</div>
				</main>
			</section>
		);
	}
}
