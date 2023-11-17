import React, { useState } from 'react';
import './category.css';

interface Drink {
	id: number;
	name: string;
	size?: string; // for drinks that have a size property
	health?: {
			isShe: boolean;
			age: number;
			isPregnant: boolean;
	}; // for drinks that have a health property
	image: string;
	ingredients?: string[]; // for drinks that have an ingredients property
	glassType?: string; // for drinks that have a glassType property
	garnish?: string; // for drinks that have a garnish property
	stock: number;
	brand?: string; // for drinks that have a brand property
	type?: string; // for drinks that have a type property
	color?: string[]; // for drinks that have a color property
	price?: string; // for drinks that have a price property
	vitamins?: string[]; // for drinks that have a vitamins property
	age?: number; // for drinks that have an age property
}

interface Category {
	id: number;
	name: string;
	drinks: Drink[];
}

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
					<li>All</li>
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
					<p>All</p>
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
			<button type="button" className="btn btn-danger clearFilter" children="Clear Filter" />
		</div>
	);
};

export const ProductApi = async ({ params }: any) => {
	const { id } = params;

	const res = await fetch('http://localhost:4000/api/drinks');

	if (!res.ok) {
		throw Error(`Error fetching categories!`);
	}

	return res.json();
};