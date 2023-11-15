import React, { Component } from 'react';
import './header.css';
import { default as CartBtn } from './cartIcon/cart';
import { default as ProfileBtn } from './perofileIcon/profile';
import { LogoNoBg } from '../../imgs/index';

class Header extends Component {
	render() {
		return (
			<header>
				<img src={LogoNoBg} alt="" className="logoImg" />
				<ul>
					<li>Home</li>
					<li>Menu</li>
					<li>Products</li>
				</ul>
				<span className='NavBarBtns'>
					<button className="">
						<CartBtn />
						Cart
					</button>
					<button className="">
						<ProfileBtn />
						Profile
					</button>
				</span>
			</header>
		);
	}
}

export default Header;
