import React, { Component } from 'react';
import './section1.css';

export default class Sec1 extends Component {
	render() {
		return (
			<section className="sec1">
				<div className="textLemonade">
					<h2>Farm Fresh Lemonades</h2>
					<p>
						when life gives you <span>Lemons</span><br /> make <span>Lemonade</span>
					</p>
     <button>Buy Lemonades</button>
				</div>
				<img src="https://cdn.dribbble.com/users/524613/screenshots/4124018/dribbble.gif" alt="" />
			</section>
		);
	}
}
