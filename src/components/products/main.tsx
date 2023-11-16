import React, { Component } from 'react';
import './main.css';
import { Sidebar } from './sideBar/category';
import { default as Products } from './products/products';
import { default as Header } from '../header/header';

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


interface MainProp {
	products: Category[];
}

export default class Main extends Component<MainProp> {
	render() {
		return (
			<section className="ProductPage">
				<Header />
				<main>
					<Sidebar />
					<Products products={this.props.products} />
					{/* <div className="Main">
						<h2>Hello World</h2>
					</div> */}
				</main>
			</section>
		);
	}
}
