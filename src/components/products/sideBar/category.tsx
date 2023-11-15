import React, { Component } from 'react';
import './category.css';

export class Sidebar extends Component {
	render() {
		return (
			<div className="Sidebar">
				<input
					type="search"
					id="searchInput"
					placeholder='Search...'
				/>
				<h2>Category</h2>
				<ul>
					<li>Energy Drink</li>
					<li>Healthy Drink</li>
					<li>Water</li>
					<li>Hot Drink</li>
					<li>Cold Drink</li>
				</ul>
			</div>
		);
	}
}
