import React, { Component, useState } from 'react';
import './category.css';

export const Sidebar = () => {
	const [rangeValue, setRangeValue] = useState(0);
	const handleRangeChange = (event: any) => {
		setRangeValue(event.target.value);
	};

	return (
		<div className="Sidebar">
			<input type="search" id="searchInput" placeholder="Search..." />
			<div className="Category">
				<h2>Category</h2>
				<ul>
					<li>Energy Drink</li>
					<li>Healthy Drink</li>
					<li>Water</li>
					<li>Hot Drink</li>
					<li>Cold Drink</li>
				</ul>
			</div>
			<div className="FilterColors">
				<h2>Colors</h2>
				<ul className="colorsLi">
					<li className="ColorWhite" />
					<li className="ColorYellow" />
					<li className="ColorGreen" />
					<li className="ColorBlue" />
					<li className="ColorRed" />
					<li className="ColorBlack" />
				</ul>
			</div>
			<div className="FilterPrice">
				<h2>Price</h2>
				<p>Price: {rangeValue}</p>
				<input type="range" min="0" max="100" value={rangeValue} onChange={handleRangeChange} />
			</div>
			<div className="FilterSize">
				<h2>Size</h2>
				<span>
					<button type="button" className="btn btn-danger">
						Small
					</button>
					<button type="button" className="btn btn-warning">
						Medium
					</button>
					<button type="button" className="btn btn-success">
						Large
					</button>
				</span>
			</div>
			<button type="button" className="btn btn-danger" children="Clear Filter" />
		</div>
	);
};
