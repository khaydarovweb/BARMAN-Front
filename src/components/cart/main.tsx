import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as Header } from '../home/header';

export default class CartPage extends Component {
	render() {
		return (
			<>
				<Header />
				<h1>Cart Page</h1>
			</>
		);
	}
}
