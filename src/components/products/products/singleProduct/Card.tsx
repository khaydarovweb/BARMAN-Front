import React, { useState, useEffect } from 'react';
import './Card.css';
import { default as CartIcon } from './svgCartIcon/cartIcon';
import { useLoaderData, useParams } from 'react-router-dom';

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


export default function Card(props: Drink) {
	return (
		<div className="card">
			<div className="card-img">
				<img src={props.image} alt="" />
			</div>
			<div className="card-info">
				<p className="text-title">{props.name}</p>
				<p className="text-body">{props.brand}</p>
			</div>
			<div className="card-footer">
				<span className="text-title">{props.price}</span>
				<div className="card-button">
					<CartIcon />
				</div>
			</div>
		</div>
	);
}

export const ProductApi = async ({ params }: any) => {
	const { id } = params;

	const res = await fetch('http://localhost:4000/api/drinks');

	if (!res.ok) {
		throw Error(`Error fetching products!`);
	}

	return res.json();
};
