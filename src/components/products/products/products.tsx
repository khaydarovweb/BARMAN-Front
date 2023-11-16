import React, { Component } from 'react';
import './products.css';
import { default as Card } from './singleProduct/Card';

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

interface ProductsProp {
	products: Category[];
}

export default class Products extends Component<ProductsProp> {
	render() {
		return (
			<div className="Products">
				{this.props.products.map((product) =>
					product.drinks.map((drink) => (
						<Card id={drink.id} name={drink.name} image={drink.image} stock={drink.stock} />
					))
				)}
			</div>
		);
	}
}
